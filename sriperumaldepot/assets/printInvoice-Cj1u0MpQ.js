import{j as o}from"./index-DtX5KMym.js";import{c as p}from"./Button-ZxXk5NXE.js";const m=p(o.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),c=p(o.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"})),x=t=>{if(!t)return;const i=window.open("","_blank");if(!i){alert("Please allow popups to print the invoice");return}const n="Sri Perumal Depot",d=`
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
                <div class="logo">${n}</div>
                <div class="invoice-title">RECEIPT</div>
            </div>

            <div class="meta">
                <p><strong>Estimate:</strong> #${(t.id||"PENDING").slice(0,8).toUpperCase()}</p>
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
                     ${t.items?.map(a=>{const s=a.selectedSize?.price||a.price||a.buyPrice||0,e=a.quantity-(a.returnedQuantity||0);return`
                        <tr>
                            <td>
                                <div class="item-name">${a.name}</div>
                                <div class="item-variant">${a.selectedSize?.label||""}</div>
                                <div style="font-size: 10px;">@ ${s.toLocaleString()}</div>
                                ${a.returnedQuantity?`<div style="font-size: 10px; color: red;">Returned: ${a.returnedQuantity}</div>`:""}
                            </td>
                            <td style="text-align: center;">${a.quantity}${a.returnedQuantity?`<br><span style="font-size: 10px;">(Net:${e})</span>`:""}</td>
                            <td style="text-align: right;">${(s*e).toLocaleString()}</td>
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
                <p>${n.toUpperCase()}</p>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 500); }
            <\/script>
        </body>
        </html>
    `;i.document.write(d),i.document.close()};export{m as H,c as P,x as p};
