import{a as A,u as P,r as c,j as t,C as N,z as E,A as j,E as O,H as R,I as q,D as M,O as B,P as H}from"./index-Drggu8kb.js";import{a as r,T as i,b as d}from"./Button-Ckuc6VIP.js";import{I as h}from"./IconButton-Dn7Ej2Im.js";import{A as U}from"./ArrowBack-eJ8DnETp.js";import{S as Y}from"./Search-CQ1MUfkC.js";import{S as p,E as S,C as F}from"./ExpandMore-CBmZJWmM.js";import{C as G}from"./Card-BpgNUgbV.js";import{A as Q}from"./Avatar-BqSwCWai.js";import{S as J}from"./ShoppingCart-Djli__ll.js";import{C as K}from"./CheckCircle-BdEcosG9.js";import{C as V,I as X,H as _}from"./Inventory2-flqXnPMU.js";import{L as Z}from"./LocalShipping-lqd43i8G.js";import"./useThemeProps-B2JTY9_F.js";const x=M`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;function mt(){const C=A(),b=P(e=>e.user),[u,w]=c.useState([]),[D,f]=c.useState(!0),[n,k]=c.useState("All"),[m,T]=c.useState(null),z=["All","Processing","Delivered","Cancelled"],y=async()=>{if(!b){f(!1);return}try{const e=E(j,"orders"),o=O(e,R("timestamp","desc")),l=(await q(o)).docs.map(a=>({id:a.id,...a.data()}));w(l)}catch(e){console.error("Error fetching orders:",e)}finally{f(!1)}};c.useEffect(()=>{y()},[b]);const v=u.filter(e=>n==="All"?!0:(e.status==="pending"?"Processing":e.status).toLowerCase()===n.toLowerCase()),$=e=>{switch(e.toLowerCase()){case"pending":case"processing":return{label:"Processing",icon:t.jsx(_,{fontSize:"small"}),color:"warning.main",bgcolor:"rgba(237, 108, 2, 0.1)",borderColor:"rgba(237, 108, 2, 0.2)"};case"shipped":return{label:"Shipped",icon:t.jsx(Z,{fontSize:"small"}),color:"info.main",bgcolor:"rgba(2, 136, 209, 0.1)",borderColor:"rgba(2, 136, 209, 0.2)"};case"delivered":return{label:"Delivered",icon:t.jsx(X,{fontSize:"small"}),color:"success.main",bgcolor:"rgba(46, 125, 50, 0.1)",borderColor:"rgba(46, 125, 50, 0.2)"};case"cancelled":return{label:"Cancelled",icon:t.jsx(V,{fontSize:"small"}),color:"error.main",bgcolor:"rgba(211, 47, 47, 0.1)",borderColor:"rgba(211, 47, 47, 0.2)"};default:return{label:"Completed",icon:t.jsx(K,{fontSize:"small"}),color:"text.secondary",bgcolor:"action.hover",borderColor:"divider"}}},g=(e,o)=>{try{const s=B(j,"orders",e);H(s,{status:o}),y()}catch(s){console.error("Error updating order status:",s),alert("Failed to update order status = "+e)}},I=e=>{if(!e)return"Just now";const o=e.toDate(),l=new Date().getTime()-o.getTime(),a=Math.floor(l/(1e3*60*60*24));return a===0?`Today, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:a===1?`Yesterday, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},W=e=>{T(m===e?null:e)},L=e=>{const o=u.find(a=>a.id===e);if(!o)return;const s=window.open("","_blank");if(!s){alert("Please allow popups to print the invoice");return}const l=`
            <html>
            <head>
                <title>Invoice - ${o.id}</title>
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
                    <div class="logo">MadMania Gym</div>
                    <div class="invoice-title">RECEIPT</div>
                </div>

                <div class="meta">
                    <p><strong>Order:</strong> #${o.id.slice(0,8).toUpperCase()}</p>
                    <p><strong>Date:</strong> ${o.timestamp?.toDate().toLocaleDateString()} ${o.timestamp?.toDate().toLocaleTimeString()}</p>
                    <div class="divider"></div>
                    <p><strong>Customer:</strong><br>
                    ${o.shippingDetails?.firstName||""} ${o.shippingDetails?.lastName||""}<br>
                    ${o.shippingDetails?.phoneNumber||""}</p>
                    <p>${o.shippingDetails?.address||""}<br>
                    ${o.shippingDetails?.city||""}</p>
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
                        ${o.items?.map(a=>`
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
                        <span>${o.subtotal}</span>
                    </div>
                    ${o.tax?`
                    <div class="totals-row">
                        <span>Tax:</span>
                        <span>${o.tax}</span>
                    </div>
                    `:""}
                    <div class="totals-row grand">
                        <span>Total:</span>
                        <span>${o.total}</span>
                    </div>
                </div>

                <div class="footer">
                    <p>Thank you!</p>
                    <p>MADMANIA GYM</p>
                </div>
                <script>
                    window.onload = function() { setTimeout(function() { window.print(); }, 500); }
                <\/script>
            </body>
            </html>
        `;s.document.write(l),s.document.close()};return t.jsxs(r,{sx:{pb:10,bgcolor:"background.default",minHeight:"100vh",color:"text.primary"},children:[t.jsx(r,{sx:{position:"sticky",top:0,zIndex:1100,bgcolor:"background.default",borderBottom:1,borderColor:"divider"},children:t.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:2,height:60},children:[t.jsx(h,{sx:{ml:-1},onClick:()=>C({to:"/shop"}),children:t.jsx(U,{})}),t.jsx(i,{variant:"h6",sx:{fontWeight:"bold"},children:"Order History"}),t.jsx(h,{sx:{mr:-1},children:t.jsx(Y,{})})]})}),t.jsxs(r,{sx:{p:2},children:[t.jsx(r,{sx:{display:"flex",gap:1.5,overflowX:"auto",p:2,mb:2,"&::-webkit-scrollbar":{display:"none"},animation:`${x} 0.6s ease-out forwards`},children:z.map(e=>t.jsx(d,{variant:n===e?"contained":"outlined",onClick:()=>k(e),sx:{flexShrink:0,borderRadius:50,textTransform:"none",fontWeight:"bold",fontSize:"0.875rem",px:3,py:1,bgcolor:n===e?"primary.main":"background.paper",color:n===e?"black":"text.secondary",borderColor:n===e?"primary.main":"divider",boxShadow:n===e?"0 4px 12px rgba(242, 215, 13, 0.2)":"none","&:hover":{bgcolor:n===e?"primary.main":"action.hover",borderColor:n===e?"primary.main":"divider"}},children:e},e))}),D?t.jsx(r,{sx:{display:"flex",justifyContent:"center",py:8},children:t.jsx(N,{})}):v.length===0?t.jsx(r,{sx:{textAlign:"center",py:8,animation:`${x} 0.6s ease-out forwards`},children:t.jsx(i,{color:"text.secondary",children:"No orders found."})}):t.jsx(p,{spacing:2,sx:{animation:`${x} 0.6s ease-out forwards`,animationDelay:"0.1s"},children:v.map(e=>{const o=$(e.status);return t.jsx(G,{sx:{p:2,borderRadius:3,border:1,borderColor:"divider",boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",transition:"all 0.2s","&:active":{transform:"scale(0.98)"}},onClick:()=>W(e.id),children:t.jsxs(r,{sx:{width:"100%"},children:[t.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(Q,{sx:{width:48,height:48,bgcolor:o.bgcolor,color:o.color,border:1,borderColor:o.borderColor},children:o.icon}),t.jsxs(r,{children:[t.jsxs(i,{variant:"body2",sx:{fontWeight:"bold"},children:["Order #",e.id.slice(0,5).toUpperCase()]}),t.jsx(i,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:I(e.timestamp)})]})]}),t.jsxs(r,{sx:{textAlign:"right",display:"flex",alignItems:"center",gap:1},children:[t.jsxs(r,{children:[t.jsxs(i,{variant:"body2",sx:{fontWeight:"bold"},children:["₹",e.total.toLocaleString()]}),t.jsx(r,{sx:{display:"inline-block",mt:.5,px:1.5,py:.25,borderRadius:10,bgcolor:o.bgcolor,color:o.color,fontSize:"0.625rem",fontWeight:"bold",textTransform:"uppercase",letterSpacing:.5},children:o.label})]}),t.jsx(h,{size:"small",sx:{transform:m===e.id?"rotate(180deg)":"none",transition:"transform 0.3s"},children:t.jsx(S,{})})]})]}),t.jsxs(F,{in:m===e.id,timeout:"auto",unmountOnExit:!0,children:[t.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Details"}),t.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Time stamp : ",e?.timestamp?.toDate().toLocaleString()," ",t.jsx("br",{}),"subTotal : ",e.subtotal," ",t.jsx("br",{}),"tax : ",e.tax," ",t.jsx("br",{}),"total : ",e.total," ",t.jsx("br",{})]})]}),t.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Phone Number"}),t.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:e.shippingDetails?.phoneNumber}),t.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Shipping Details"}),t.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Name: ",e.shippingDetails?.firstName,",",e.shippingDetails?.orgName]}),t.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Address: ",e.shippingDetails?.address,", ",e.shippingDetails?.city,", ",e.shippingDetails?.zip,", ",e.shippingDetails?.orgName]})]}),t.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Order Items"}),t.jsx(p,{spacing:1.5,children:e.items?.map((s,l)=>t.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(r,{sx:{width:32,height:32,bgcolor:"action.hover",borderRadius:1.5,display:"flex",alignItems:"center",justifyContent:"center",color:"text.secondary"},children:t.jsx(J,{sx:{fontSize:"1.25rem"}})}),t.jsxs(r,{sx:{flex:1},children:[t.jsx(i,{variant:"body2",sx:{fontWeight:"bold"},children:s.name}),t.jsxs(i,{variant:"caption",color:"text.secondary",sx:{fontWeight:600},children:[s.selectedSize?.label||"Single Variant"," ",t.jsx("br",{}),"Quantity : ",s.quantity]}),s.sku&&t.jsxs(i,{variant:"caption",color:"text.secondary",sx:{fontWeight:600,display:"block"},children:["SKU: ",s.sku]})]}),t.jsxs(i,{variant:"body2",sx:{fontWeight:600},children:["₹",(s.buyPrice*s.quantity).toLocaleString()]}),t.jsx("hr",{})]},l))}),t.jsxs(p,{direction:"row",spacing:1,sx:{mt:2},children:[t.jsx(d,{size:"small",variant:"outlined",color:"success",onClick:()=>g(e.id,"Delivered"),children:"Delivered"}),t.jsx(d,{size:"small",variant:"outlined",color:"error",onClick:()=>g(e.id,"Cancelled"),children:"Cancelled"}),t.jsx(d,{size:"small",variant:"outlined",color:"error",onClick:()=>g(e.id,"Processing"),children:"Processing"})]})]}),t.jsx(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:t.jsx(p,{direction:"row",spacing:1,sx:{mt:2},children:t.jsx(d,{size:"small",variant:"contained",color:"success",onClick:()=>L(e.id),children:"Print Invoice"})})})]})]})},e.id)})}),t.jsx(r,{sx:{mt:4,textAlign:"center",animation:`${x} 0.6s ease-out forwards`,animationDelay:"0.3s"},children:t.jsx(d,{size:"small",endIcon:t.jsx(S,{}),sx:{color:"primary.main",fontWeight:"bold",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:1,"&:hover":{bgcolor:"transparent",color:"primary.dark"}},children:"Load More"})})]})]})}export{mt as component};
