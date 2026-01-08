const n=t=>{if(!t)return;const i=window.open("","_blank");if(!i){alert("Please allow popups to print the invoice");return}const e="Sri Perumal Depot",s=`
        <html>
        <head>
            <title>Invoice - ${t.id||"N/A"}</title>
            <style>
                body { font-family: 'Courier New', Courier, monospace; padding: 10px; width: 78mm; margin: 0; line-height: 1.2; color: #000; font-size: 12px; }
                .header { text-align: center; margin-bottom: 20px; border-bottom: 1px dashed #000; padding-bottom: 10px; }
                .logo { font-size: 16px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; }
                .invoice-title { font-size: 14px; margin: 0; font-weight: normal; }
                .meta { margin-bottom: 20px; }
                .meta p { margin: 2px 0; }
                .divider { border-bottom: 1px dashed #000; margin: 10px 0; }
                .table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
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
                <div class="logo">${e}</div>
                <div class="invoice-title">RECEIPT</div>
            </div>

            <div class="meta">
                <p><strong>Order:</strong> #${(t.id||"PENDING").slice(0,8).toUpperCase()}</p>
                <p><strong>Date:</strong> ${t.timestamp?.toDate?`${t.timestamp.toDate().toLocaleDateString()} ${t.timestamp.toDate().toLocaleTimeString()}`:new Date().toLocaleString()}</p>
                <div class="divider"></div>
                <p><strong>Customer:</strong><br>
                ${t.shippingDetails?.firstName||""} ${t.shippingDetails?.lastName||""}<br>
                ${t.shippingDetails?.phoneNumber||""}</p>
                <p>${t.shippingDetails?.address||""}<br>
                ${t.shippingDetails?.city||""}</p>
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
                    ${t.items?.map(a=>`
                        <tr>
                            <td>
                                <div class="item-name">${a.name}</div>
                                <div class="item-variant">${a.selectedSize?.label||""}</div>
                                <div style="font-size: 10px;">@ ${a.buyPrice?.toLocaleString()}</div>
                            </td>
                            <td style="text-align: center;">${a.quantity}</td>
                            <td style="text-align: right;">${(a.buyPrice*a.quantity).toLocaleString()}</td>
                        </tr>
                    `).join("")}
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
                ${t.manualAddons?.map(a=>`
                <div class="totals-row">
                    <span>${a.label}:</span>
                    <span style="color: ${a.amount<0?"red":"black"}">${a.amount<0?"-":""}${Math.abs(a.amount).toFixed(2)}</span>
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
                <div class="totals-row grand">
                    <span>Total:</span>
                    <span>${t.total?.toFixed(2)??"0.00"}</span>
                </div>
            </div>

            <div class="footer">
                <p>Thank you!</p>
                <p>${e.toUpperCase()}</p>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 500); }
            <\/script>
        </body>
        </html>
    `;i.document.write(s),i.document.close()};export{n as p};
