import{p as B}from"./chunk-IUKPXING-EURaWu8A.js";import{D as U,n as V,o as Z,s as j,g as q,c as H,b as J,_ as i,l as D,t as K,d as Q,E as X,I as Y,L as tt,M as z,N as et,k as at,O as rt}from"./mermaid-vendor-BH8IW80r.js";import{p as it}from"./gitGraph-YCYPL57B-BIvjGFEi.js";import"./react-vendor-B4qHMsHt.js";import"./_baseUniq-B3N_RT9d.js";import"./_basePickBy-Bh2MYAvi.js";import"./clone-BzNs3yaa.js";var F=U.pie,C={sections:new Map,showData:!1,config:F},h=C.sections,w=C.showData,st=structuredClone(F),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{h=new Map,w=C.showData,K()},"clear"),lt=i(({label:t,value:a})=>{h.has(t)||(h.set(t,a),D.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>h,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),G={getConfig:ot,clear:nt,setDiagramTitle:V,getDiagramTitle:Z,setAccTitle:j,getAccTitle:q,setAccDescription:H,getAccDescription:J,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await it("pie",t);D.debug(a),gt(a,G)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),ht=ft,mt=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return rt().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,M,s)=>{D.debug(`rendering pie chart
`+t);const n=s.db,y=Q(),T=X(n.getConfig(),y.pie),$=40,o=18,d=4,l=450,m=l,S=Y(a),c=S.append("g");c.attr("transform","translate("+m/2+","+l/2+")");const{themeVariables:r}=y;let[A]=tt(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,l)/2-$,O=z().innerRadius(0).outerRadius(g),W=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=mt(E),I=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=et(I);c.selectAll("mySlices").data(v).enter().append("path").attr("d",O).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let b=0;E.forEach(e=>{b+=e}),c.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/b*100).toFixed(0)+"%").attr("transform",e=>"translate("+W.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const f=o+d,P=f*p.domain().length/2,R=12*o,N=u*f-P;return"translate("+R+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:f}=e.data;return n.getShowData()?`${u} [${f}]`:u});const L=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=m+$+o+d+L;S.attr("viewBox",`0 0 ${k} ${l}`),at(S,l,k,T.useMaxWidth)},"draw"),vt={draw:St},At={parser:ut,db:G,renderer:vt,styles:ht};export{At as diagram};
//# sourceMappingURL=pieDiagram-OC6WZ2SS-Bf6AAmId.js.map
