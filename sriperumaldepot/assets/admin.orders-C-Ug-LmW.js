import{a as B,u as U,r as c,j as e,C as H,y as F,z as u,B as M,E as Y,F as Q,A as J,L as D,M as K,N as V}from"./index-BWUmnZ-V.js";import{B as r,T as i,a as l}from"./Button-r8OqXN69.js";import{I as f}from"./IconButton-Bu2o5VLM.js";import{A as X}from"./ArrowBack-DULH6Be1.js";import{S as _}from"./Search-DvFo-Vws.js";import{S as x,E as k,C as G}from"./ExpandMore-DNvrBqqI.js";import{C as Z}from"./Card-DB-KJosB.js";import{A as ee}from"./Avatar-sW9ImcgA.js";import{S as te}from"./ShoppingCart-COUjR9-6.js";import{D as oe}from"./Dialog-CT0zWmUE.js";import{D as re,a as se,b as ie,c as ae}from"./DialogTitle-CWaJQlMU.js";import{C as ne}from"./CheckCircle-Cg2NWedU.js";import{C as le,I as de,H as ce}from"./Inventory2-CmhxgiZn.js";import{L as pe}from"./LocalShipping-DiT5zxwD.js";import"./useThemeProps-FiVEh3N3.js";import"./Modal-le2pR6Rq.js";const m=J`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;function ze(){const T=B(),y=U(t=>t.user),[j,z]=c.useState([]),[$,v]=c.useState(!0),[n,I]=c.useState("All"),[h,W]=c.useState(null),[L,p]=c.useState(!1),[C,S]=c.useState(null),O=["All","Processing","Delivered","Cancelled"],g=async()=>{if(!y){v(!1);return}try{const t=F(u,"orders"),o=M(t,Y("timestamp","desc")),d=(await Q(o)).docs.map(a=>({id:a.id,...a.data()}));z(d)}catch(t){console.error("Error fetching orders:",t)}finally{v(!1)}};c.useEffect(()=>{g()},[y]);const w=j.filter(t=>n==="All"?!0:(t.status==="pending"?"Processing":t.status).toLowerCase()===n.toLowerCase()),P=t=>{switch(t.toLowerCase()){case"pending":case"processing":return{label:"Processing",icon:e.jsx(ce,{fontSize:"small"}),color:"warning.main",bgcolor:"rgba(237, 108, 2, 0.1)",borderColor:"rgba(237, 108, 2, 0.2)"};case"shipped":return{label:"Shipped",icon:e.jsx(pe,{fontSize:"small"}),color:"info.main",bgcolor:"rgba(2, 136, 209, 0.1)",borderColor:"rgba(2, 136, 209, 0.2)"};case"delivered":return{label:"Delivered",icon:e.jsx(de,{fontSize:"small"}),color:"success.main",bgcolor:"rgba(46, 125, 50, 0.1)",borderColor:"rgba(46, 125, 50, 0.2)"};case"cancelled":return{label:"Cancelled",icon:e.jsx(le,{fontSize:"small"}),color:"error.main",bgcolor:"rgba(211, 47, 47, 0.1)",borderColor:"rgba(211, 47, 47, 0.2)"};default:return{label:"Completed",icon:e.jsx(ne,{fontSize:"small"}),color:"text.secondary",bgcolor:"action.hover",borderColor:"divider"}}},b=(t,o)=>{try{const s=D(u,"orders",t);K(s,{status:o}),g()}catch(s){console.error("Error updating order status:",s),alert("Failed to update order status = "+t)}},A=async()=>{if(C)try{const t=D(u,"orders",C);await V(t),p(!1),S(null),alert("Order deleted successfully"),g()}catch(t){console.error("Error deleting order:",t),alert("Failed to delete order")}},E=t=>{S(t),p(!0)},N=t=>{if(!t)return"Just now";const o=t.toDate(),d=new Date().getTime()-o.getTime(),a=Math.floor(d/(1e3*60*60*24));return a===0?`Today, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:a===1?`Yesterday, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},R=t=>{W(h===t?null:t)},q=t=>{const o=j.find(a=>a.id===t);if(!o)return;const s=window.open("","_blank");if(!s){alert("Please allow popups to print the invoice");return}const d=`
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
                    <div class="logo">Sri Perumal Depot</div>
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
                    <p>${"Sri Perumal Depot".toUpperCase()}</p>
                </div>
                <script>
                    window.onload = function() { setTimeout(function() { window.print(); }, 500); }
                <\/script>
            </body>
            </html>
        `;s.document.write(d),s.document.close()};return e.jsxs(r,{sx:{pb:10,bgcolor:"background.default",minHeight:"100vh",color:"text.primary"},children:[e.jsx(r,{sx:{position:"sticky",top:0,zIndex:1100,bgcolor:"background.default",borderBottom:1,borderColor:"divider"},children:e.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:2,height:60},children:[e.jsx(f,{sx:{ml:-1},onClick:()=>T({to:"/shop"}),children:e.jsx(X,{})}),e.jsx(i,{variant:"h6",sx:{fontWeight:"bold"},children:"Order History"}),e.jsx(f,{sx:{mr:-1},children:e.jsx(_,{})})]})}),e.jsxs(r,{sx:{p:2},children:[e.jsx(r,{sx:{display:"flex",gap:1.5,overflowX:"auto",p:2,mb:2,"&::-webkit-scrollbar":{display:"none"},animation:`${m} 0.6s ease-out forwards`},children:O.map(t=>e.jsx(l,{variant:n===t?"contained":"outlined",onClick:()=>I(t),sx:{flexShrink:0,borderRadius:50,textTransform:"none",fontWeight:"bold",fontSize:"0.875rem",px:3,py:1,bgcolor:n===t?"primary.main":"background.paper",color:n===t?"black":"text.secondary",borderColor:n===t?"primary.main":"divider",boxShadow:n===t?"0 4px 12px rgba(242, 215, 13, 0.2)":"none","&:hover":{bgcolor:n===t?"primary.main":"action.hover",borderColor:n===t?"primary.main":"divider"}},children:t},t))}),$?e.jsx(r,{sx:{display:"flex",justifyContent:"center",py:8},children:e.jsx(H,{})}):w.length===0?e.jsx(r,{sx:{textAlign:"center",py:8,animation:`${m} 0.6s ease-out forwards`},children:e.jsx(i,{color:"text.secondary",children:"No orders found."})}):e.jsx(x,{spacing:2,sx:{animation:`${m} 0.6s ease-out forwards`,animationDelay:"0.1s"},children:w.map(t=>{const o=P(t.status);return e.jsx(Z,{sx:{p:2,borderRadius:3,border:1,borderColor:"divider",boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",transition:"all 0.2s","&:active":{transform:"scale(0.98)"}},onClick:()=>R(t.id),children:e.jsxs(r,{sx:{width:"100%"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(ee,{sx:{width:48,height:48,bgcolor:o.bgcolor,color:o.color,border:1,borderColor:o.borderColor},children:o.icon}),e.jsxs(r,{children:[e.jsxs(i,{variant:"body2",sx:{fontWeight:"bold"},children:["Order #",t.id.slice(0,5).toUpperCase()]}),e.jsx(i,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:N(t.timestamp)})]})]}),e.jsxs(r,{sx:{textAlign:"right",display:"flex",alignItems:"center",gap:1},children:[e.jsxs(r,{children:[e.jsxs(i,{variant:"body2",sx:{fontWeight:"bold"},children:["₹",t.total.toLocaleString()]}),e.jsx(r,{sx:{display:"inline-block",mt:.5,px:1.5,py:.25,borderRadius:10,bgcolor:o.bgcolor,color:o.color,fontSize:"0.625rem",fontWeight:"bold",textTransform:"uppercase",letterSpacing:.5},children:o.label})]}),e.jsx(f,{size:"small",sx:{transform:h===t.id?"rotate(180deg)":"none",transition:"transform 0.3s"},children:e.jsx(k,{})})]})]}),e.jsxs(G,{in:h===t.id,timeout:"auto",unmountOnExit:!0,children:[e.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[e.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Details"}),e.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Time stamp : ",t?.timestamp?.toDate().toLocaleString()," ",e.jsx("br",{}),"subTotal : ",t.subtotal," ",e.jsx("br",{}),"tax : ",t.tax," ",e.jsx("br",{}),"total : ",t.total," ",e.jsx("br",{})]})]}),e.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[e.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Phone Number"}),e.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:t.shippingDetails?.phoneNumber}),e.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Shipping Details"}),e.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Name: ",t.shippingDetails?.firstName,",",t.shippingDetails?.orgName]}),e.jsxs(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Address: ",t.shippingDetails?.address,", ",t.shippingDetails?.city,", ",t.shippingDetails?.zip,", ",t.shippingDetails?.orgName]})]}),e.jsxs(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[e.jsx(i,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Order Items"}),e.jsx(x,{spacing:1.5,children:t.items?.map((s,d)=>e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:32,height:32,bgcolor:"action.hover",borderRadius:1.5,display:"flex",alignItems:"center",justifyContent:"center",color:"text.secondary"},children:e.jsx(te,{sx:{fontSize:"1.25rem"}})}),e.jsxs(r,{sx:{flex:1},children:[e.jsx(i,{variant:"body2",sx:{fontWeight:"bold"},children:s.name}),e.jsxs(i,{variant:"caption",color:"text.secondary",sx:{fontWeight:600},children:[s.selectedSize?.label||"Single Variant"," ",e.jsx("br",{}),"Quantity : ",s.quantity]}),s.sku&&e.jsxs(i,{variant:"caption",color:"text.secondary",sx:{fontWeight:600,display:"block"},children:["SKU: ",s.sku]})]}),e.jsxs(i,{variant:"body2",sx:{fontWeight:600},children:["₹",(s.buyPrice*s.quantity).toLocaleString()]}),e.jsx("hr",{})]},d))}),e.jsxs(x,{direction:"row",spacing:1,sx:{mt:2},children:[e.jsx(l,{size:"small",variant:"outlined",color:"success",onClick:()=>b(t.id,"Delivered"),children:"Delivered"}),e.jsx(l,{size:"small",variant:"outlined",color:"error",onClick:()=>b(t.id,"Cancelled"),children:"Cancelled"}),e.jsx(l,{size:"small",variant:"outlined",color:"error",onClick:()=>b(t.id,"pending"),children:"Processing"})]})]}),e.jsx(r,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:e.jsxs(x,{direction:"row",spacing:1,sx:{mt:2},justifyContent:"space-between",children:[e.jsx(l,{size:"small",variant:"contained",color:"success",onClick:()=>q(t.id),children:"Print Invoice"}),e.jsx(l,{size:"small",variant:"outlined",color:"error",onClick:()=>E(t.id),children:"Delete Order"})]})})]})]})},t.id)})}),e.jsx(r,{sx:{mt:4,textAlign:"center",animation:`${m} 0.6s ease-out forwards`,animationDelay:"0.3s"},children:e.jsx(l,{size:"small",endIcon:e.jsx(k,{}),sx:{color:"primary.main",fontWeight:"bold",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:1,"&:hover":{bgcolor:"transparent",color:"primary.dark"}},children:"Load More"})})]}),e.jsxs(oe,{open:L,onClose:()=>p(!1),PaperProps:{sx:{borderRadius:3,p:1}},children:[e.jsx(re,{sx:{fontWeight:"bold"},children:"Delete Order?"}),e.jsx(se,{children:e.jsx(ie,{children:"Are you sure you want to delete this order? This action is permanent and cannot be undone."})}),e.jsxs(ae,{sx:{p:2},children:[e.jsx(l,{onClick:()=>p(!1),color:"inherit",sx:{fontWeight:"bold"},children:"Cancel"}),e.jsx(l,{onClick:A,variant:"contained",color:"error",sx:{fontWeight:"bold",borderRadius:2},children:"Delete"})]})]})]})}export{ze as component};
