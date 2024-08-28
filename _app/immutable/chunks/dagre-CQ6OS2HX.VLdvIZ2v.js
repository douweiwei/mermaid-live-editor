import{_ as w,aq as T,ar as F,as as M,at as Y,n as i,e as _,au as j,av as H,aw as q,W as z,ax as O,ay as W,az as K,aA as Q,aB as U}from"./state.Bw4wwf0I.js";import{G as k}from"./graph.CU6OQpmX.js";import{l as V}from"./layout.6fN4oH7v.js";import{w as y}from"./json.PsJeCYKs.js";var d=new Map,N=new Map,P=new Map,Z=w(()=>{N.clear(),P.clear(),d.clear()},"clear"),D=w((n,t)=>{const e=N.get(t)||[];return i.trace("In isDescendant",t," ",n," = ",e.includes(n)),e.includes(n)},"isDescendant"),$=w((n,t)=>{const e=N.get(t)||[];return i.info("Descendants of ",t," is ",e),i.info("Edge is ",n),n.v===t||n.w===t?!1:e?e.includes(n.v)||D(n.v,t)||D(n.w,t)||e.includes(n.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),B=w((n,t,e,o)=>{i.warn("Copying children of ",n,"root",o,"data",t.node(n),o);const l=t.children(n)||[];n!==o&&l.push(n),i.warn("Copying (nodes) clusterId",n,"nodes",l),l.forEach(c=>{if(t.children(c).length>0)B(c,t,e,o);else{const r=t.node(c);i.info("cp ",c," to ",o," with parent ",n),e.setNode(c,r),o!==t.parent(c)&&(i.warn("Setting parent",c,t.parent(c)),e.setParent(c,t.parent(c))),n!==o&&c!==n?(i.debug("Setting parent",c,n),e.setParent(c,n)):(i.info("In copy ",n,"root",o,"data",t.node(n),o),i.debug("Not Setting parent for node=",c,"cluster!==rootId",n!==o,"node!==clusterId",c!==n));const g=t.edges(c);i.debug("Copying Edges",g),g.forEach(a=>{i.info("Edge",a);const u=t.edge(a.v,a.w,a.name);i.info("Edge data",u,o);try{$(a,o)?(i.info("Copying as ",a.v,a.w,u,a.name),e.setEdge(a.v,a.w,u,a.name),i.info("newGraph edges ",e.edges(),e.edge(e.edges()[0]))):i.info("Skipping copy of edge ",a.v,"-->",a.w," rootId: ",o," clusterId:",n)}catch(X){i.error(X)}})}i.debug("Removing node",c),t.removeNode(c)})},"copy"),A=w((n,t)=>{const e=t.children(n);let o=[...e];for(const l of e)P.set(l,n),o=[...o,...A(l,t)];return o},"extractDescendants"),L=w((n,t,e)=>{const o=n.edges().filter(a=>a.v===t||a.w===t),l=n.edges().filter(a=>a.v===e||a.w===e),c=o.map(a=>({v:a.v===t?e:a.v,w:a.w===t?t:a.w})),r=l.map(a=>({v:a.v,w:a.w}));return c.filter(a=>r.some(u=>a.v===u.v&&a.w===u.w))},"findCommonEdges"),C=w((n,t,e)=>{const o=t.children(n);if(i.trace("Searching children of id ",n,o),o.length<1)return n;let l;for(const c of o){const r=C(c,t,e),g=L(t,e,r);if(r)if(g.length>0)l=r;else return r}return l},"findNonClusterChild"),S=w(n=>!d.has(n)||!d.get(n).externalConnections?n:d.has(n)?d.get(n).id:n,"getAnchorId"),I=w((n,t)=>{if(!n||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");n.nodes().forEach(function(e){n.children(e).length>0&&(i.warn("Cluster identified",e," Replacement id in edges: ",C(e,n,e)),N.set(e,A(e,n)),d.set(e,{id:C(e,n,e),clusterData:n.node(e)}))}),n.nodes().forEach(function(e){const o=n.children(e),l=n.edges();o.length>0?(i.debug("Cluster identified",e,N),l.forEach(c=>{const r=D(c.v,e),g=D(c.w,e);r^g&&(i.warn("Edge: ",c," leaves cluster ",e),i.warn("Descendants of XXX ",e,": ",N.get(e)),d.get(e).externalConnections=!0)})):i.debug("Not a cluster ",e,N)});for(let e of d.keys()){const o=d.get(e).id,l=n.parent(o);l!==e&&d.has(l)&&!d.get(l).externalConnections&&(d.get(e).id=l)}n.edges().forEach(function(e){const o=n.edge(e);i.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n.edge(e)));let l=e.v,c=e.w;if(i.warn("Fix XXX",d,"ids:",e.v,e.w,"Translating: ",d.get(e.v)," --- ",d.get(e.w)),d.get(e.v)&&d.get(e.w)&&d.get(e.v)===d.get(e.w)){i.warn("Fixing and trying link to self - removing XXX",e.v,e.w,e.name),i.warn("Fixing and trying - removing XXX",e.v,e.w,e.name),l=S(e.v),c=S(e.w),n.removeEdge(e.v,e.w,e.name);const r=e.w+"---"+e.v+"---1",g=e.w+"---"+e.v+"---2";n.setNode(r,{domId:r,id:r,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setNode(g,{domId:g,id:g,labelStyle:"",padding:0,shape:"labelRect",style:"",width:10,height:10});const a=structuredClone(o),u=structuredClone(o),X=structuredClone(o);a.label="",a.arrowTypeEnd="none",a.id=e.name+"-cyclic-special-1",u.arrowTypeEnd="none",u.id=e.name+"-cyclic-special-mid",X.label="",a.fromCluster=e.v,X.toCluster=e.v,X.id=e.name+"-cyclic-special-2",n.setEdge(l,r,a,e.name+"-cyclic-special-0"),n.setEdge(r,g,u,e.name+"-cyclic-special-1"),n.setEdge(g,c,X,e.name+"-cyclic-special-2")}else if(d.get(e.v)||d.get(e.w)){if(i.warn("Fixing and trying - removing XXX",e.v,e.w,e.name),l=S(e.v),c=S(e.w),n.removeEdge(e.v,e.w,e.name),l!==e.v){const r=n.parent(l);d.get(r).externalConnections=!0,o.fromCluster=e.v}if(c!==e.w){const r=n.parent(c);d.get(r).externalConnections=!0,o.toCluster=e.w}i.warn("Fix Replacing with XXX",l,c,e.name),n.setEdge(l,c,o,e.name)}}),i.warn("Adjusted Graph",y(n)),J(n,0),i.trace(d)},"adjustClustersAndEdges"),J=w((n,t)=>{var l,c;if(i.warn("extractor - ",t,y(n),n.children("D")),t>10){i.error("Bailing out");return}let e=n.nodes(),o=!1;for(const r of e){const g=n.children(r);o=o||g.length>0}if(!o){i.debug("Done, no node has children",n.nodes());return}i.debug("Nodes = ",e,t);for(const r of e)if(i.debug("Extracting node",r,d,d.has(r)&&!d.get(r).externalConnections,!n.parent(r),n.node(r),n.children("D")," Depth ",t),!d.has(r))i.debug("Not a cluster",r,t);else if(!d.get(r).externalConnections&&n.children(r)&&n.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let a=n.graph().rankdir==="TB"?"LR":"TB";(c=(l=d.get(r))==null?void 0:l.clusterData)!=null&&c.dir&&(a=d.get(r).clusterData.dir,i.warn("Fixing dir",d.get(r).clusterData.dir,a));const u=new k({multigraph:!0,compound:!0}).setGraph({rankdir:a,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",y(n)),B(r,n,u,r),n.setNode(r,{clusterNode:!0,id:r,clusterData:d.get(r).clusterData,label:d.get(r).label,graph:u}),i.warn("New graph after copy node: (",r,")",y(u)),i.debug("Old graph after copy",y(n))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!d.get(r).externalConnections," no parent: ",!n.parent(r)," children ",n.children(r)&&n.children(r).length>0,n.children("D"),t),i.debug(d);e=n.nodes(),i.warn("New list of nodes",e);for(const r of e){const g=n.node(r);i.warn(" Now next level",r,g),g.clusterNode&&J(g.graph,t+1)}},"extractor"),R=w((n,t)=>{if(t.length===0)return[];let e=Object.assign([],t);return t.forEach(o=>{const l=n.children(o),c=R(n,l);e=[...e,...c]}),e},"sorter"),ee=w(n=>R(n,n.children()),"sortNodesByHierarchy"),G=w(async(n,t,e,o,l,c)=>{i.info("Graph in recursive render: XXX",y(t),l);const r=t.graph().rankdir;i.trace("Dir in recursive render - dir:",r);const g=n.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const a=g.insert("g").attr("class","clusters"),u=g.insert("g").attr("class","edgePaths"),X=g.insert("g").attr("class","edgeLabels"),m=g.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(f){const s=t.node(f);if(l!==void 0){const v=JSON.parse(JSON.stringify(l.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,f,`
 data=`,v.height,`
Parent cluster`,l.height),t.setNode(l.id,v),t.parent(f)||(i.trace("Setting parent",f,l.id),t.setParent(f,l.id,v))}if(i.info("(Insert) Node XXX"+f+": "+JSON.stringify(t.node(f))),s!=null&&s.clusterNode){i.info("Cluster identified XBX",f,s.width,t.node(f));const{ranksep:v,nodesep:h}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:v+25,nodesep:h});const E=await G(m,s.graph,e,o,t.node(f),c),b=E.elem;j(s,b),s.diff=E.diff||0,i.info("New compound node after recursive render XAX",f,"width",s.width,"height",s.height),H(b,s)}else t.children(f).length>0?(i.info("Cluster - the non recursive path XBX",f,s.id,s,s.width,"Graph:",t),i.info(C(s.id,t)),d.set(s.id,{id:C(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",f,s.id,s),await q(m,t.node(f),r))})),await w(async()=>{const f=t.edges().map(async function(s){const v=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",d,"ids:",s.v,s.w,"Translating: ",d.get(s.v),d.get(s.w)),await U(X,v)});await Promise.all(f)},"processEdges")(),i.info("Graph before layout:",JSON.stringify(y(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),V(t),i.info("Graph after layout:",JSON.stringify(y(t)));let p=0,{subGraphTitleTotalMargin:x}=z(c);return await Promise.all(ee(t).map(async function(f){var v;const s=t.node(f);if(i.info("Position XBX => "+f+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s!=null&&s.clusterNode)s.y+=x,i.info("A tainted cluster node XBX1",f,s.id,s.width,s.height,s.x,s.y,t.parent(f)),d.get(s.id).node=s,O(s);else if(t.children(f).length>0){i.info("A pure cluster node XBX1",f,s.id,s.x,s.y,s.width,s.height,t.parent(f)),s.height+=x,t.node(s.parentId);const h=(s==null?void 0:s.padding)/2||0,E=((v=s==null?void 0:s.labelBBox)==null?void 0:v.height)||0,b=E-h||0;i.debug("OffsetY",b,"labelHeight",E,"halfPadding",h),await W(a,s),d.get(s.id).node=s}else{const h=t.node(s.parentId);s.y+=x/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",h,h==null?void 0:h.offsetY,s),O(s)}})),t.edges().forEach(function(f){const s=t.edge(f);i.info("Edge "+f.v+" -> "+f.w+": "+JSON.stringify(s),s),s.points.forEach(b=>b.y+=x/2);const v=t.node(f.v);var h=t.node(f.w);const E=K(u,s,d,e,v,h,o);Q(s,E)}),t.nodes().forEach(function(f){const s=t.node(f);i.info(f,s.type,s.diff),s.isGroup&&(p=s.diff)}),i.warn("Returning from recursive render XAX",g,p),{elem:g,diff:p}},"recursiveRender"),oe=w(async(n,t)=>{var c,r,g,a,u,X;const e=new k({multigraph:!0,compound:!0}).setGraph({rankdir:n.direction,nodesep:((c=n.config)==null?void 0:c.nodeSpacing)||((g=(r=n.config)==null?void 0:r.flowchart)==null?void 0:g.nodeSpacing)||n.nodeSpacing,ranksep:((a=n.config)==null?void 0:a.rankSpacing)||((X=(u=n.config)==null?void 0:u.flowchart)==null?void 0:X.rankSpacing)||n.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");T(o,n.markers,n.type,n.diagramId),F(),M(),Y(),Z(),n.nodes.forEach(m=>{e.setNode(m.id,{...m}),m.parentId&&e.setParent(m.id,m.parentId)}),i.debug("Edges:",n.edges),n.edges.forEach(m=>{e.setEdge(m.start,m.end,{...m},m.id)}),i.warn("Graph at first:",JSON.stringify(y(e))),I(e),i.warn("Graph after:",JSON.stringify(y(e)));const l=_();await G(o,e,n.type,n.diagramId,void 0,l)},"render");export{oe as render};
