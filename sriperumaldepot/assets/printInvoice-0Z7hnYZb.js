const o=t=>{if(!t)return;const e=window.open("","_blank");if(!e){alert("Please allow popups to print the invoice");return}const a="Sri Perumal Depot",n=`
        <html>
        <head>
            <title>Invoice - ${t.id||"N/A"}</title>
            <style>
                body { font-family: 'Courier New', Courier, monospace; padding: 10px; width: 78mm; margin: 0; line-height: 1.2; color: #000; font-size: 12px; }
                .header { text-align: center; margin-bottom: 10px; border-bottom: 1px dashed #000; padding-bottom: 10px; }
                .logo { font-size: 16px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; }
                .invoice-title { font-size: 14px; margin: 0; font-weight: normal; }
                .meta { margin-bottom: 0px; }
                .meta p { margin: 0px 0; }
                .divider { border-bottom: 1px dashed #000; margin: 5px 0; }
                .table { width: 100%; border-collapse: collapse; margin-bottom: 0px; }
                .table th { text-align: left; padding: 2px 0; font-size: 10px; border-bottom: 1px dashed #000; }
                .table td { padding: 4px 0; vertical-align: top; }
                .item-name { font-weight: bold; }
                .item-variant { font-size: 10px; }
                .totals { margin-top: 10px; border-top: 1px dashed #000; padding-top: 10px; }
                .totals-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
                .grand { font-weight: bold; font-size: 14px; margin-top: 5px; border-top: 1px dashed #000; padding-top: 5px; }
                .footer { text-align: center; margin-top: 20px; font-size: 10px; }
                @media print {
                    body { width: 78mm; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${a}</div>
                <div class="invoice-title">Estimate</div>
            </div>

            <div class="meta">
                <p><strong>Estimate:</strong> #${(t.id||"PENDING").slice(0,8).toUpperCase()}</p>
                <p><strong>Date:</strong> ${t.timestamp?.toDate?`${t.timestamp.toDate().toLocaleDateString()} ${t.timestamp.toDate().toLocaleTimeString()}`:new Date().toLocaleString()}</p>
                <div class="divider"></div>
                
                ${t.shippingDetails?.firstName||t.shippingDetails?.lastName||t.shippingDetails?.phoneNumber?`
                <p><strong>Customer:</strong><br>
                ${t.shippingDetails?.firstName||t.shippingDetails?.lastName?(t.shippingDetails?.firstName||"")+" "+(t.shippingDetails?.lastName||"")+"<br>":""}
                ${t.shippingDetails?.phoneNumber||""}</p>
                `:""}

                ${t.shippingDetails?.address||t.shippingDetails?.city?`
                <p>${t.shippingDetails?.address?t.shippingDetails.address+"<br>":""}
                ${t.shippingDetails?.city||""}</p>
                `:""}

                ${t.deliveryPersonName?`
                <div class="divider"></div>
                <p>${t.deliveryPersonName?"<strong>Driver:</strong> "+t.deliveryPersonName+"<br>":""}
                ${t.deliveryPersonPhone?t.deliveryPersonPhone+">":""}
                ${t.deliveryPersonVehicle?t.deliveryPersonVehicle:""}</p>
                `:""}
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th style="width: 50%;">Item</th>
                        <th style="width: 15%; text-align: center;">Qty</th>
                        <th style="width: 35%; text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                     ${t.items?.map(i=>{const s=i.selectedSize?.price||i.price||i.buyPrice||0,p=i.quantity-(i.returnedQuantity||0);return`
                        <tr>
                            <td>
                                <div class="item-name">${i.name}</div>
                                <div class="item-variant">${i.selectedSize?.label||""}</div>
                                <div style="font-size: 10px;">@ ${s.toLocaleString()}</div>
                                ${i.returnedQuantity?`<div style="font-size: 10px; color: red;">Returned: ${i.returnedQuantity}</div>`:""}
                            </td>
                            <td style="text-align: center;">${i.quantity}${i.returnedQuantity?`<br><span style="font-size: 10px;">(Net:${p})</span>`:""}</td>
                            <td style="text-align: right;">${(s*p).toLocaleString()}</td>
                        </tr>
                    `}).join("")}
                </tbody>
            </table>

            <div class="totals">
                <div class="totals-row">
                    <span>Subtotal:</span>
                    <span>${t.subtotal?.toFixed(2)??"0.00"}</span>
                </div>
                ${t.tax?`
                <div class="totals-row">
                    <span>Tax:</span>
                    <span>${t.tax?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.itemAddons?`
                <div class="totals-row">
                    <span>Item Add-ons:</span>
                    <span>${t.itemAddons?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.manualAddons?.map(i=>`
                <div class="totals-row">
                    <span>${i.label}:</span>
                    <span style="color: ${i.amount<0?"red":"black"}">${i.amount<0?"-":""}${Math.abs(i.amount).toFixed(2)}</span>
                </div>
                `).join("")}
                ${!t.itemAddons&&!t.manualAddons&&t.addons?`
                <div class="totals-row">
                    <span>Add-ons:</span>
                    <span>${t.addons?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.deliveryAmount?`
                <div class="totals-row">
                    <span>Delivery:</span>
                    <span>${t.deliveryAmount?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.returnedAmount?`
                <div class="totals-row" style="border-top: 1px dashed #000; margin-top: 5px; padding-top: 5px;">
                    <span>Original Total:</span>
                    <span>${((t.total||0)+(t.returnedAmount||0)).toFixed(2)}</span>
                </div>
                <div class="totals-row" style="color: red; font-weight: bold;">
                    <span>Returns Amt:</span>
                    <span>-${t.returnedAmount?.toFixed(2)}</span>
                </div>
                `:""}
                <div class="totals-row grand">
                    <span>${t.returnedAmount?"Net Total":"Total"}:</span>
                    <span>${t.total?.toFixed(2)??"0.00"}</span>
                </div>
            </div>

            <div class="footer">
                <p>Thank you!</p>
                <p>${a.toUpperCase()}</p>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 500); }
            <\/script>
        </body>
        </html>
    `;e.document.write(n),e.document.close()},l=t=>{if(!t)return;const e=window.open("","_blank");if(!e){alert("Please allow popups to print");return}const a="Sri Perumal Depot",n=`
        <html>
        <head>
            <title>Delivery Challan</title>
            <style>
                body { font-family: 'Courier New', Courier, monospace; padding: 10px; width: 78mm; margin: 0; line-height: 1.2; color: #000; font-size: 12px; }
                .header { text-align: center; margin-bottom: 10px; border-bottom: 1px dashed #000; padding-bottom: 10px; }
                .logo { font-size: 16px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; }
                .invoice-title { font-size: 14px; margin: 0; font-weight: normal; }
                .meta { margin-bottom: 0px; }
                .meta p { margin: 0px 0; }
                .divider { border-bottom: 1px dashed #000; margin: 5px 0; }
                .table { width: 100%; border-collapse: collapse; margin-bottom: 0px; }
                .table th { text-align: left; padding: 2px 0; font-size: 10px; border-bottom: 1px dashed #000; }
                .table td { padding: 4px 0; vertical-align: top; }
                .item-name { font-weight: bold; }
                .item-variant { font-size: 10px; }
                .totals { margin-top: 10px; border-top: 1px dashed #000; padding-top: 10px; }
                .totals-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
                .footer { text-align: center; margin-top: 20px; font-size: 10px; }
                @media print {
                    body { width: 78mm; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${a}</div>
                <div class="invoice-title">DELIVERY CHALLAN</div>
            </div>

            <div class="meta">
                <p><strong>Estimate:</strong> #${(t.id||"PENDING").slice(0,8).toUpperCase()}</p>
                <p><strong>Date:</strong> ${t.timestamp?.toDate?`${t.timestamp.toDate().toLocaleDateString()} ${t.timestamp.toDate().toLocaleTimeString()}`:new Date().toLocaleString()}</p>
                <div class="divider"></div>
                
                ${t.shippingDetails?.firstName||t.shippingDetails?.lastName||t.shippingDetails?.phoneNumber?`
                <p><strong>Customer:</strong><br>
                ${t.shippingDetails?.firstName||t.shippingDetails?.lastName?(t.shippingDetails?.firstName||"")+" "+(t.shippingDetails?.lastName||"")+"<br>":""}
                ${t.shippingDetails?.phoneNumber||""}</p>
                `:""}

                ${t.shippingDetails?.address||t.shippingDetails?.city?`
                <p>${t.shippingDetails?.address?t.shippingDetails.address+"<br>":""}
                ${t.shippingDetails?.city||""}</p>
                `:""}

                ${t.deliveryPersonName?`
                <div class="divider"></div>
                <p>${t.deliveryPersonName?"<strong>Driver:</strong> "+t.deliveryPersonName+"<br>":""}
                ${t.deliveryPersonPhone?t.deliveryPersonPhone+"<br>":""}
                ${t.deliveryPersonVehicle?t.deliveryPersonVehicle:""}</p>
                `:""}
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th style="width: 70%;">Item</th>
                        <th style="width: 30%; text-align: right;">Qty</th>
                    </tr>
                </thead>
                <tbody>
                     ${t.items?.map(i=>{const s=i.quantity-(i.returnedQuantity||0);return`
                        <tr>
                            <td>
                                <div class="item-name">${i.name}</div>
                                <div class="item-variant">${i.selectedSize?.label||""}</div>
                                ${i.returnedQuantity?`<div style="font-size: 10px; color: red;">Returned: ${i.returnedQuantity}</div>`:""}
                            </td>
                            <td style="text-align: right;">${i.quantity}${i.returnedQuantity?`<br><span style="font-size: 10px;">(Net:${s})</span>`:""}</td>
                        </tr>
                    `}).join("")}
                </tbody>
            </table>

            <div class="totals">
                ${t.itemAddons?`
                <div class="totals-row">
                    <span>Item Add-ons:</span>
                    <span>${t.itemAddons?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.manualAddons?.map(i=>`
                <div class="totals-row">
                    <span>${i.label}:</span>
                    <span style="color: ${i.amount<0?"red":"black"}">${i.amount<0?"-":""}${Math.abs(i.amount).toFixed(2)}</span>
                </div>
                `).join("")}
                ${!t.itemAddons&&!t.manualAddons&&t.addons?`
                <div class="totals-row">
                    <span>Add-ons:</span>
                    <span>${t.addons?.toFixed(2)}</span>
                </div>
                `:""}
                ${t.deliveryAmount?`
                <div class="totals-row" style="font-weight: bold;">
                    <span>Delivery Charge:</span>
                    <span>${t.deliveryAmount?.toFixed(2)}</span>
                </div>
                `:""}
            </div>

            <div class="footer">
                <p>Thank you!</p>
                <p>${a.toUpperCase()}</p>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 500); }
            <\/script>
        </body>
        </html>
    `;e.document.write(n),e.document.close()};export{l as a,o as p};
