import{j as t,a as Y,r as h,C as J,z as L,A as w,E as M,H as A,G as N,I as E,O as K,P as _}from"./index-Dzk3T67w.js";import{c as j,a as s,T as n,b as u}from"./Button-C0qRVXfA.js";import{H as X,P as Z}from"./Header-2MKpk26H.js";import{A as I}from"./Avatar-D3PJQEhr.js";import{G as c}from"./Grid-QGmD1H3y.js";import{S as z}from"./ShoppingCart-DLmNXoAA.js";import{S as D,E as tt,C as et}from"./ExpandMore-CYar19Tp.js";import{C as k}from"./Card-BD0f1nE1.js";import{I as ot}from"./IconButton-wdf8oR8z.js";import{C as H}from"./CardContent-CNqnfL6q.js";import{C as st}from"./CheckCircle-OMCG6gmb.js";import{C as rt,I as nt,H as it}from"./Inventory2-Dm03Euex.js";import{L as at}from"./LocalShipping-DMt_V93m.js";import"./useThemeProps-BoZ8trzB.js";import"./isMuiElement-BP2sLW0-.js";const lt=j([t.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),t.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),dt=j([t.jsx("path",{d:"m12 2-5.5 9h11z"},"0"),t.jsx("circle",{cx:"17.5",cy:"17.5",r:"4.5"},"1"),t.jsx("path",{d:"M3 13.5h8v8H3z"},"2")]),ct=j(t.jsx("path",{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-5 12H9v-2h6zm5-7H4V4l16-.02z"})),pt=j(t.jsx("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}));function Tt(){const a=Y(),[d,p]=h.useState([]),[g,y]=h.useState(!0),[O,P]=h.useState(0),[q,$]=h.useState(0),[v,V]=h.useState(null),C=(e,o)=>{try{const r=K(w,"orders",e);_(r,{status:o}),(async()=>{try{const i=L(w,"orders"),m=M(i,A("timestamp","desc"),N("status","==","pending")),b=(await E(m)).docs.map(f=>({id:f.id,...f.data()}));p(b);const x=b.length,S=b.reduce((f,Q)=>f+(Number(Q.total)||0),0);$(x),P(Number(S.toFixed(2)))}catch(i){console.error("Error refreshing data:",i)}})()}catch(r){console.error("Error updating order status:",r),alert("Failed to update order status")}},U=e=>{if(!e)return"Just now";const o=e.toDate(),l=new Date().getTime()-o.getTime(),i=Math.floor(l/(1e3*60*60*24));return i===0?`Today, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:i===1?`Yesterday, ${o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},B=e=>{V(v===e?null:e)},G=e=>{const o=d.find(i=>i.id===e);if(!o)return;const r=window.open("","_blank");if(!r){alert("Please allow popups to print the invoice");return}const l=`
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
                        ${o.items?.map(i=>`
                            <tr>
                                <td>
                                    <div class="item-name">${i.name}</div>
                                    <div class="item-variant">${i.selectedSize?.label||""}</div>
                                    <div style="font-size: 10px;">@ ${i.buyPrice?.toLocaleString()}</div>
                                </td>
                                <td style="text-align: center;">${i.quantity}</td>
                                <td style="text-align: right;">${(i.buyPrice*i.quantity).toLocaleString()}</td>
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
        `;r.document.write(l),r.document.close()};h.useEffect(()=>{const e=async()=>{try{const r=L(w,"orders"),l=M(r,A("timestamp","desc"),N("status","==","pending")),m=(await E(l)).docs.map(x=>({id:x.id,...x.data()}));p(m);const W=m.length,b=m.reduce((x,S)=>x+(Number(S.total)||0),0);$(W),P(Number(b.toFixed(2)))}catch(r){console.error("Error fetching dashboard data:",r)}finally{y(!1)}};e();const o=setInterval(e,3e4);return()=>clearInterval(o)},[]);const F=e=>{switch(e?.toLowerCase()){case"pending":case"processing":return{label:"Processing",icon:t.jsx(it,{fontSize:"small"}),color:"warning.main",bgcolor:"rgba(237, 108, 2, 0.1)",borderColor:"rgba(237, 108, 2, 0.2)"};case"shipped":return{label:"Shipped",icon:t.jsx(at,{fontSize:"small"}),color:"info.main",bgcolor:"rgba(2, 136, 209, 0.1)",borderColor:"rgba(2, 136, 209, 0.2)"};case"delivered":return{label:"Delivered",icon:t.jsx(nt,{fontSize:"small"}),color:"success.main",bgcolor:"rgba(46, 125, 50, 0.1)",borderColor:"rgba(46, 125, 50, 0.2)"};case"cancelled":return{label:"Cancelled",icon:t.jsx(rt,{fontSize:"small"}),color:"error.main",bgcolor:"rgba(211, 47, 47, 0.1)",borderColor:"rgba(211, 47, 47, 0.2)"};default:return{label:e||"Unknown",icon:t.jsx(st,{fontSize:"small"}),color:"text.secondary",bgcolor:"action.hover",borderColor:"divider"}}};return t.jsxs(s,{sx:{pb:10,bgcolor:"background.default",minHeight:"100vh",color:"text.primary"},children:[t.jsxs(s,{sx:{position:"sticky",top:0,zIndex:1100,bgcolor:"background.default",borderBottom:1,borderColor:"divider"},children:[t.jsx(X,{title:"Admin Portal",icon:t.jsx(I,{sx:{bgcolor:"secondary.main"},children:t.jsx(lt,{})})}),t.jsxs(s,{sx:{px:3,pb:2},children:[t.jsx(n,{variant:"h5",sx:{fontWeight:"bold"},children:"Dashboard"}),t.jsx(n,{variant:"body2",color:"text.secondary",children:"Overview of your store performance"})]})]}),t.jsxs(Z,{children:[t.jsx(s,{sx:{px:2,py:2},children:t.jsxs(c,{container:!0,spacing:2,children:[t.jsx(c,{size:{xs:12,sm:12,md:6,lg:6},children:t.jsx(R,{icon:t.jsx(pt,{}),label:"Pending Money(Rs)",value:O,color:"success.main",bgcolor:"rgba(46, 125, 50, 0.1)"})}),t.jsx(c,{size:{xs:12,sm:12,md:6,lg:6},children:t.jsx(R,{icon:t.jsx(z,{}),label:"Pending Count",value:q,color:"primary.main",bgcolor:"rgba(25, 118, 210, 0.1)"})})]})}),t.jsxs(s,{sx:{px:2,py:2},children:[t.jsx(n,{variant:"h6",sx:{fontWeight:"bold",mb:2,textTransform:"uppercase",letterSpacing:1,fontSize:"0.9rem"},children:"Management"}),t.jsxs(c,{container:!0,spacing:2,children:[t.jsx(c,{size:4,children:t.jsx(T,{icon:t.jsx(ct,{}),label:"Products",onClick:()=>a({to:"/admin/add"}),color:"primary.main"})}),t.jsx(c,{size:4,children:t.jsx(T,{icon:t.jsx(dt,{}),label:"Category",onClick:()=>a({to:"/admin/addcat"}),color:"secondary.main"})}),t.jsx(c,{size:4,children:t.jsx(T,{icon:t.jsx(z,{}),label:"Orders",onClick:()=>a({to:"/admin/orders"}),color:"warning.main"})})]})]}),t.jsxs(s,{sx:{px:2,py:2},children:[t.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[t.jsx(n,{variant:"h6",sx:{fontWeight:"bold",textTransform:"uppercase",letterSpacing:1,fontSize:"0.9rem"},children:"Recent Orders"}),t.jsx(u,{size:"small",onClick:()=>a({to:"/admin/orders"}),children:"View All"})]}),g?t.jsx(s,{sx:{display:"flex",justifyContent:"center",py:4},children:t.jsx(J,{size:30})}):d.length===0?t.jsx(n,{color:"text.secondary",align:"center",children:"No orders found."}):t.jsx(D,{spacing:2,children:d.map(e=>{const o=F(e.status);return t.jsx(k,{sx:{p:2,borderRadius:3,border:1,borderColor:"divider",boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",transition:"all 0.2s","&:active":{transform:"scale(0.98)"}},onClick:()=>B(e.id),children:t.jsxs(s,{sx:{width:"100%"},children:[t.jsxs(s,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(I,{sx:{width:48,height:48,bgcolor:o.bgcolor||"action.selected",color:o.color,border:1,borderColor:"divider"},children:o.icon}),t.jsxs(s,{children:[t.jsxs(n,{variant:"body2",sx:{fontWeight:"bold"},children:["#",e.id.slice(0,5).toUpperCase()]}),t.jsx(n,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:U(e.timestamp)})]})]}),t.jsxs(s,{sx:{textAlign:"right",display:"flex",alignItems:"center",gap:1},children:[t.jsxs(s,{children:[t.jsxs(n,{variant:"body2",sx:{fontWeight:"bold"},children:["₹",e.total?.toLocaleString()]}),t.jsx(s,{sx:{display:"inline-block",mt:.5,px:1.5,py:.25,borderRadius:10,bgcolor:o.color+"1A",color:o.color,fontSize:"0.625rem",fontWeight:"bold",textTransform:"uppercase",letterSpacing:.5},children:o.label})]}),t.jsx(ot,{size:"small",sx:{transform:v===e.id?"rotate(180deg)":"none",transition:"transform 0.3s"},children:t.jsx(tt,{})})]})]}),t.jsxs(et,{in:v===e.id,timeout:"auto",unmountOnExit:!0,children:[t.jsxs(s,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(n,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Details"}),t.jsxs(n,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:["Time: ",e?.timestamp?.toDate().toLocaleString()," ",t.jsx("br",{}),"SubTotal: ",e.subtotal," ",t.jsx("br",{}),"Tax: ",e.tax," ",t.jsx("br",{}),"Total: ",e.total," ",t.jsx("br",{})]})]}),t.jsxs(s,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(n,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Shipping"}),t.jsxs(n,{variant:"caption",sx:{fontWeight:"bold",color:"text.primary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:[e.shippingDetails?.firstName," ",e.shippingDetails?.lastName,t.jsx("br",{}),e.shippingDetails?.phoneNumber,t.jsx("br",{}),e.shippingDetails?.address,", ",e.shippingDetails?.city]})]}),t.jsxs(s,{sx:{mt:2,pt:2,borderTop:1,borderColor:"divider"},children:[t.jsx(n,{variant:"caption",sx:{fontWeight:"bold",color:"text.secondary",mb:1.5,display:"block",textTransform:"uppercase",letterSpacing:.5},children:"Items"}),t.jsx(D,{spacing:1.5,children:e.items?.map((r,l)=>t.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(s,{sx:{width:32,height:32,bgcolor:"action.hover",borderRadius:1.5,display:"flex",alignItems:"center",justifyContent:"center",color:"text.secondary"},children:t.jsx(z,{sx:{fontSize:"1.25rem"}})}),t.jsxs(s,{sx:{flex:1},children:[t.jsx(n,{variant:"body2",sx:{fontWeight:"bold"},children:r.name}),t.jsxs(n,{variant:"caption",color:"text.secondary",sx:{fontWeight:600},children:[r.selectedSize?.label||"Single"," | Qty: ",r.quantity]}),r.sku&&t.jsxs(n,{variant:"caption",color:"text.secondary",sx:{fontWeight:600},children:["SKU: ",r.sku]})]}),t.jsxs(n,{variant:"body2",sx:{fontWeight:600},children:["₹",(r.buyPrice*r.quantity).toLocaleString()]})]},l))}),t.jsxs(D,{direction:"row",spacing:1,sx:{mt:2},children:[t.jsx(u,{size:"small",variant:"outlined",color:"success",onClick:()=>C(e.id,"Delivered"),children:"Delivered"}),t.jsx(u,{size:"small",variant:"outlined",color:"error",onClick:()=>C(e.id,"Cancelled"),children:"Cancelled"}),t.jsx(u,{size:"small",variant:"outlined",color:"warning",onClick:()=>C(e.id,"Processing"),children:"Processing"}),t.jsx(u,{size:"small",variant:"contained",color:"success",onClick:()=>G(e.id),children:"Print"})]})]})]})]})},e.id)})})]})]})]})}const T=({icon:a,label:d,onClick:p,color:g})=>t.jsx(k,{sx:{borderRadius:3,cursor:"pointer",textAlign:"center",border:1,borderColor:"divider",boxShadow:"none",transition:"all 0.2s","&:active":{transform:"scale(0.95)"},"&:hover":{bgcolor:"action.hover"}},onClick:p,children:t.jsxs(H,{sx:{p:2,"&:last-child":{pb:2}},children:[t.jsx(s,{sx:{color:g,display:"flex",justifyContent:"center",mb:1},children:a}),t.jsx(n,{variant:"caption",sx:{fontWeight:"bold"},children:d})]})}),R=({icon:a,label:d,value:p,color:g,bgcolor:y})=>t.jsx(k,{sx:{borderRadius:3,border:1,borderColor:"divider",boxShadow:"none"},children:t.jsxs(H,{sx:{p:2,display:"flex",alignItems:"center",gap:2,"&:last-child":{pb:2}},children:[t.jsx(I,{sx:{bgcolor:y,color:g,width:40,height:40},children:a}),t.jsxs(s,{children:[t.jsx(n,{variant:"caption",color:"text.secondary",sx:{fontWeight:600},children:d}),t.jsx(n,{variant:"h6",sx:{fontWeight:"bold",lineHeight:1},children:p})]})]})});export{Tt as component};
