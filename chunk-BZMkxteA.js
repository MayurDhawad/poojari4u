import{$ as SE,$n as wL,$t as gg,At as bL,Bn as se,C as Go,Dn as or$1,E as Hv,Et as _e$1,F as M,Fn as qv,G as Pt$1,H as Of,Ht as ds,I as MI,In as rc,It as cy,Jn as ur$1,K as Qn$1,Ln as rh,N as Le,Ot as aa,Pt as cI,Q as S,R as Mo,Tn as om,Tt as _I,Vn as tc,Vt as dr$1,Wt as ec,X as Rh,Y as Rg,_ as EI,_n as mg,an as he$1,at as TL,c as C,dn as ji$1,dt as Vt,er as wn$1,gn as mL,gt as Xl,h as Dh,in as gt$1,jn as ph,jt as be$1,k as Jl,kt as ae,ln as il,lt as UI,m as DL,n as $f,nt as Sh,on as hi$1,p as DI,pn as lI,pr as zr,qt as fn,r as $v,rn as gr$1,rr as xh,t as $$1,tn as gi$1,un as ir$1,ur as yg,ut as Vf,vt as Ye$1,w as Gv,wt as _,x as Fm,xn as np,xt as Z,y as Eh,zt as df}from"./chunk-CyZ-LxUP.js";var pn=null;function $(){return pn}function ct(n){pn??=n}var fe=class{};var Pe=(()=>{class n{historyGo(e){throw new Error(``)}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>C(hn),providedIn:`platform`})}return n})();var hn=(()=>{class n extends Pe{_location;_history;_doc=C(Qn$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return $().getBaseHref(this._doc)}onPopState(e){let t=$().getGlobalEventTarget(this._doc,`window`);return t.addEventListener(`popstate`,e,!1),()=>t.removeEventListener(`popstate`,e)}onHashChange(e){let t=$().getGlobalEventTarget(this._doc,`window`);return t.addEventListener(`hashchange`,e,!1),()=>t.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>new n,providedIn:`platform`})}return n})();function vn(n,i){return n?i?n.endsWith(`/`)?i.startsWith(`/`)?n+i.slice(1):n+i:i.startsWith(`/`)?n+i:`${n}/${i}`:n:i}function bn(n){let i=n.search(/#|\?|$/);return n[i-1]===`/`?n.slice(0,i-1)+n.slice(i):n}function z(n){return n&&n[0]!==`?`?`?${n}`:n}var Be=(()=>{class n{historyGo(e){throw new Error(``)}static ɵfac=function(t){return new(t||n)};static ɵprov=ae({token:n,factory:()=>C(bi),providedIn:`root`})}return n})();var hi=new S(``);var bi=(()=>{class n extends Be{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??C(Qn$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return vn(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+z(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+z(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+z(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(t){return new(t||n)(be$1(Pe),be$1(hi,8))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var yn=(()=>{class n{_subject=new Z;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=yi(bn(gn(t))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=``){return this.path()==this.normalize(e+z(t))}normalize(e){return n.stripTrailingSlash(vi(this._basePath,gn(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t=``,r=null){this._locationStrategy.pushState(r,``,e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+z(t)),r)}replaceState(e,t=``,r=null){this._locationStrategy.replaceState(r,``,e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+z(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=z;static joinWithSlash=vn;static stripTrailingSlash=bn;static ɵfac=function(t){return new(t||n)(be$1(Be))};static ɵprov=ae({token:n,factory:()=>gi(),providedIn:`root`})}return n})();function gi(){return new yn(be$1(Be))}function vi(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:i}function gn(n){return n.replace(/\/index\.html$/,``)}function yi(n){if(new RegExp(`^(https?:)?//`).test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var mt=(function(n){return n[n.Decimal=0]=`Decimal`,n[n.Percent=1]=`Percent`,n[n.Currency=2]=`Currency`,n[n.Scientific=3]=`Scientific`,n})(mt||{});var R={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ne(n,i){let e=EI(n),t=e[DI.NumberSymbols][i];if(typeof t>`u`){if(i===R.CurrencyDecimal)return e[DI.NumberSymbols][R.Decimal];if(i===R.CurrencyGroup)return e[DI.NumberSymbols][R.Group]}return t}function wn(n,i){return EI(n)[DI.NumberFormats][i]}var _i=/^(\d+)?\.((\d+)(-(\d+))?)?$/;var _n=22;var Ue=`.`;var pe=`0`;var Di=`;`;var Si=`,`;var ut=`#`;function Ei(n,i,e,t,r,o,a=!1){let c=``,l=!1;if(!isFinite(n))c=ne(e,Number.isNaN(n)?R.NaN:R.Infinity);else{let d=Ni(n);a&&(d=Ci(d));let u=i.minInt,m=i.minFrac,g=i.maxFrac;if(o){let k=o.match(_i);if(k===null)throw new _(2306,!1);let ae=k[1],tt=k[3],jt=k[5];ae!=null&&(u=dt(ae)),tt!=null&&(m=dt(tt)),jt!=null?g=dt(jt):tt!=null&&m>g&&(g=m);let nt=100;if(u>nt||m>nt||g>nt)throw new _(2306,!1)}Ai(d,m,g);let f=d.digits,A=d.integerLen,L=d.exponent,B=[];for(l=f.every(k=>!k);A<u;A++)f.unshift(0);for(;A<0;A++)f.unshift(0);A>0?B=f.splice(A,f.length):(B=f,f=[0]);let W=[];for(f.length>=i.lgSize&&W.unshift(f.splice(-i.lgSize,f.length).join(``));f.length>i.gSize;)W.unshift(f.splice(-i.gSize,f.length).join(``));f.length&&W.unshift(f.join(``)),c=W.join(ne(e,t)),B.length&&(c+=ne(e,r)+B.join(``)),L&&(c+=ne(e,R.Exponential)+`+`+L)}return n<0&&!l?c=i.negPre+c+i.negSuf:c=i.posPre+c+i.posSuf,c}function Cn(n,i,e){return Ei(n,wi(wn(i,mt.Decimal),ne(i,R.MinusSign)),i,R.Group,R.Decimal,e)}function wi(n,i=`-`){let e={minInt:1,minFrac:0,maxFrac:0,posPre:``,posSuf:``,negPre:``,negSuf:``,gSize:0,lgSize:0},t=n.split(Di),r=t[0],o=t[1],a=r.indexOf(Ue)!==-1?r.split(Ue):[r.substring(0,r.lastIndexOf(pe)+1),r.substring(r.lastIndexOf(pe)+1)],c=a[0],l=a[1]||``;e.posPre=c.substring(0,c.indexOf(ut));for(let u=0;u<l.length;u++){let m=l.charAt(u);m===pe?e.minFrac=e.maxFrac=u+1:m===ut?e.maxFrac=u+1:e.posSuf+=m}let d=c.split(Si);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let u=r.length-e.posPre.length-e.posSuf.length,m=o.indexOf(ut);e.negPre=o.substring(0,m).replace(/'/g,``),e.negSuf=o.slice(m+u).replace(/'/g,``)}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Ci(n){if(n.digits[0]===0)return n;let i=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(i===0?n.digits.push(0,0):i===1&&n.digits.push(0),n.integerLen+=2),n}function Ni(n){let i=Math.abs(n)+``,e=0,t,r,o,a,c;for((r=i.indexOf(Ue))>-1&&(i=i.replace(Ue,``)),(o=i.search(/e/i))>0?(r<0&&(r=o),r+=+i.slice(o+1),i=i.substring(0,o)):r<0&&(r=i.length),o=0;i.charAt(o)===pe;o++);if(o===(c=i.length))t=[0],r=1;else{for(c--;i.charAt(c)===pe;)c--;for(r-=o,t=[],a=0;o<=c;o++,a++)t[a]=Number(i.charAt(o))}return r>_n&&(t=t.splice(0,_n-1),e=r-1,r=1),{digits:t,exponent:e,integerLen:r}}function Ai(n,i,e){if(i>e)throw new _(2307,!1);let t=n.digits,r=t.length-n.integerLen,o=Math.min(Math.max(i,r),e),a=o+n.integerLen,c=t[a];if(a>0){t.splice(Math.max(n.integerLen,a));for(let m=a;m<t.length;m++)t[m]=0}else{r=Math.max(0,r),n.integerLen=1,t.length=Math.max(1,a=o+1),t[0]=0;for(let m=1;m<a;m++)t[m]=0}if(c>=5)if(a-1<0){for(let m=0;m>a;m--)t.unshift(0),n.integerLen++;t.unshift(1),n.integerLen++}else t[a-1]++;for(;r<Math.max(0,o);r++)t.push(0);let l=o!==0,d=i+n.integerLen,u=t.reduceRight(function(m,g,f,A){return g=g+m,A[f]=g<10?g:g-10,l&&(A[f]===0&&f>=d?A.pop():l=!1),g>=10?1:0},0);u&&(t.unshift(u),n.integerLen++)}function dt(n){let i=parseInt(n);if(isNaN(i))throw new _(2305,!1);return i}var lt=/\s+/;var Dn=[];var Fi=(()=>{class n{_ngEl;_renderer;initialClasses=Dn;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(lt):Dn}set ngClass(e){this.rawClass=typeof e==`string`?e.trim().split(lt):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(lt).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static ɵfac=function(t){return new(t||n)(gr$1(dr$1),gr$1(aa))};static ɵdir=Gv({type:n,selectors:[[``,`ngClass`,``]],inputs:{klass:[0,`class`,`klass`],ngClass:`ngClass`}})}return n})();var je=class{$implicit;ngForOf;index;count;constructor(i,e,t,r){this.$implicit=i,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}};var Nn=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,a)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new je(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)t.remove(o===null?void 0:o);else if(o!==null){let c=t.get(o);t.move(c,a),Sn(c,r)}});for(let r=0,o=t.length;r<o;r++){let c=t.get(r).context;c.index=r,c.count=o,c.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{Sn(t.get(r.currentIndex),r)})}static ngTemplateContextGuard(e,t){return!0}static ɵfac=function(t){return new(t||n)(gr$1(hi$1),gr$1(or$1),gr$1(SE))};static ɵdir=Gv({type:n,selectors:[[``,`ngFor`,``,`ngForOf`,``]],inputs:{ngForOf:`ngForOf`,ngForTrackBy:`ngForTrackBy`,ngForTemplate:`ngForTemplate`}})}return n})();function Sn(n,i){n.context.$implicit=i.item}var Mi=(()=>{class n{_viewContainer;_context=new $e;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){En(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){En(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static ɵfac=function(t){return new(t||n)(gr$1(hi$1),gr$1(or$1))};static ɵdir=Gv({type:n,selectors:[[``,`ngIf`,``]],inputs:{ngIf:`ngIf`,ngIfThen:`ngIfThen`,ngIfElse:`ngIfElse`}})}return n})();var $e=class{$implicit=null;ngIf=null};function En(n,i){if(n&&!n.createEmbeddedView)throw new _(2020,!1)}var Ii=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=C(he$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static ɵfac=function(t){return new(t||n)(gr$1(hi$1))};static ɵdir=Gv({type:n,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[Rg]})}return n})();function Ti(n,i){return new _(2100,!1)}var xi=(()=>{class n{_locale;constructor(e){this._locale=e}transform(e,t,r){if(!Ri(e))return null;r||=this._locale;try{return Cn(Oi(e),r,t)}catch(o){throw Ti(n,o.message)}}static ɵfac=function(t){return new(t||n)(gr$1(rc,16))};static ɵpipe=qv({name:`number`,type:n,pure:!0})}return n})();function Ri(n){return!(n==null||n===``||n!==n)}function Oi(n){if(typeof n==`string`&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!=`number`)throw new _(2309,!1);return n}var An=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({})}return n})();function ft(n,i){i=encodeURIComponent(i);for(let e of n.split(`;`)){let t=e.indexOf(`=`),[r,o]=t==-1?[e,``]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var pt=`browser`;function Fn(n){return n===pt}var he=class{_doc;constructor(i){this._doc=i}manager};var He=(()=>{class n extends he{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static ɵfac=function(t){return new(t||n)(be$1(Qn$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var Ge=new S(``);var vt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof He));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof He);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new _(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static ɵfac=function(t){return new(t||n)(be$1(Ge),be$1(_e$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var ht=`ng-app-id`;function Mn(n){for(let i of n)i.remove()}function In(n,i){let e=i.createElement(`style`);return e.textContent=n,e}function ki(n,i,e,t){let r=n.head?.querySelectorAll(`style[${ht}="${i}"],link[${ht}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(ht),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function gt(n,i){let e=i.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,n),e}var yt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,ki(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,In);t?.forEach(r=>this.addUsage(r,this.external,gt))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Mn(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Mn(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,In(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,gt(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute(`nonce`,this.nonce),e.appendChild(t)}static ɵfac=function(t){return new(t||n)(be$1(Qn$1),be$1(Jl),be$1(yg,8),be$1(gg))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var bt={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var _t=/%COMP%/g;var xn=`%COMP%`;var Pi=`_nghost-${xn}`;var Bi=`_ngcontent-${xn}`;var Ui=!0;var ji=new S(``,{factory:()=>Ui});var $i=new S(``);function Hi(n){return Bi.replace(_t,n)}function zi(n){return Pi.replace(_t,n)}function Rn(n,i){return i.map(e=>e.replace(_t,n))}var Dt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,a,c,l=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=l,this.tracingService=d,this.cssVarNamespace=u??``,this.defaultRenderer=new be(e,a,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Ve?r.applyToHost(e):r instanceof ge&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case Pt$1.Emulated:o=new Ve(l,d,t,this.appId,u,a,c,m,this.cssVarNamespace);break;case Pt$1.ShadowDom:return new ze(l,e,t,a,c,this.nonce,m,this.cssVarNamespace,d);case Pt$1.ExperimentalIsolatedShadowDom:return new ze(l,e,t,a,c,this.nonce,m,this.cssVarNamespace);default:o=new ge(l,d,t,u,a,c,m,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(t){return new(t||n)(be$1(vt),be$1(df),be$1(Jl),be$1(ji),be$1(Qn$1),be$1(_e$1),be$1(yg),be$1(Vt,8),be$1($i,8))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var be=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=``){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(bt[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Tn(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=Tn(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new _(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i==`string`?this.doc.querySelector(i):i;if(!t)throw new _(-5104,!1);return e||(t.textContent=``),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+`:`+e;let o=bt[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=bt[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||r&(Go.DashCase|Go.Important)?i.style.setProperty(e,t,r&Go.Important?`important`:``):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||t&Go.DashCase?i.style.removeProperty(e):i.style[e]=``}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i==`string`&&(i=$().getGlobalEventTarget(this.doc,i),!i))throw new _(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e===`__ngUnwrap__`)return i;i(e)===!1&&e.preventDefault()}}};function Tn(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var ze=class extends be{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,c,l,d){super(i,r,o,c,l),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=Rn(t.id,u).map(g=>g.replace(/%NS%/g,l));for(let g of u){let f=document.createElement(`style`);a&&f.setAttribute(`nonce`,a),f.textContent=g,this.shadowRoot.appendChild(f)}let m=t.getExternalStyles?.();if(m)for(let g of m){let f=gt(g,r);a&&f.setAttribute(`nonce`,a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var ge=class extends be{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,c,l,d){super(i,o,a,c,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,m=d?Rn(d,u):u;this.styles=m.map(g=>g.replace(/%NS%/g,l)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&fn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Ve=class extends ge{contentAttr;hostAttr;constructor(i,e,t,r,o,a,c,l,d){let u=r+`-`+t.id;super(i,e,t,o,a,c,l,d,u),this.contentAttr=Hi(u),this.hostAttr=zi(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,``)}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,``),t}};var We=class n extends fe{supportsDOMEvents=!0;static makeCurrent(){ct(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e===`window`?window:e===`document`?i:e===`body`?i.body:null}getBaseHref(i){let e=Vi();return e==null?null:Gi(e)}resetBaseElement(){ve=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return ft(document.cookie,i)}};var ve=null;function Vi(){return ve=ve||document.head.querySelector(`base`),ve?ve.getAttribute(`href`):null}function Gi(n){return new URL(n,document.baseURI).pathname}var On=[`alt`,`control`,`meta`,`shift`];var Wi={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Zi={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var Ln=(()=>{class n extends he{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split(`.`),r=t.shift();if(t.length===0||!(r===`keydown`||r===`keyup`))return null;let o=n._normalizeKey(t.pop()),a=``,c=t.indexOf(`code`);if(c>-1&&(t.splice(c,1),a=`code.`),On.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+`.`)}),a+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,t){let r=Wi[e.key]||e.key,o=``;return t.indexOf(`code.`)>-1&&(r=e.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),On.forEach(a=>{if(a!==r){let c=Zi[a];c(e)&&(o+=a+`.`)}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(t){return new(t||n)(be$1(Qn$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();async function Ki(n,i,e){return DL($$1({rootComponent:n},Yi(i,e)))}function Yi(n,i){return{platformRef:i?.platformRef,appProviders:[...er,...n?.providers??[]],platformProviders:Ji}}function Xi(){We.makeCurrent()}function qi(){return new Ye$1}function Qi(){return om(document),document}var Ji=[{provide:gg,useValue:pt},{provide:Xl,useValue:Xi,multi:!0},{provide:Qn$1,useFactory:Qi}];var er=[{provide:ds,useValue:`root`},{provide:Ye$1,useFactory:qi},{provide:Ge,useClass:He,multi:!0},{provide:Ge,useClass:Ln,multi:!0},Dt,{provide:df,useClass:yt},{provide:yt,useExisting:df},vt,{provide:ir$1,useExisting:Dt},[]];var fs=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(t){return new(t||n)(be$1(Qn$1))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function tr(n,i=0){return kn(n)?Number(n):arguments.length===2?i:0}function kn(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function V(n){return n instanceof dr$1?n.nativeElement:n}function vs(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Pn=new Map;var St=class n{_appId=C(Jl);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!==`ng`&&(i+=this._appId);let t=Pn.get(i);return t===void 0?t=0:t++,Pn.set(i,t),`${i}${e?n._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})};function ye(n){return n.buttons===0||n.detail===0}function _e(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Et;function Bn(){if(Et==null){let n=typeof document<`u`?document.head:null;Et=!!(n&&(n.createShadowRoot||n.attachShadow))}return Et}function wt(n){if(Bn()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ct(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function O(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Nt;try{Nt=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Nt=!1}var E=(()=>{class n{_platformId=C(gg);isBrowser=this._platformId?Fn(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Nt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var De;function Un(){if(De==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>De=!0}))}finally{De=De||!1}return De}function ie(n){return Un()?n:!!n.capture}var jn=new S(`cdk-input-modality-detector-options`);var $n={ignoreKeys:[18,17,224,91,16]};var Hn=650;var At={passive:!0,capture:!0};var zn=(()=>{class n{_platform=C(E);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new wn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=O(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Hn||(this._modality.next(ye(e)?`keyboard`:`mouse`),this._mostRecentTarget=O(e))};_onTouchstart=e=>{if(_e(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=O(e)};constructor(){let e=C(_e$1),t=C(Qn$1),r=C(jn,{optional:!0});if(this._options=$$1($$1({},$n),r),this.modalityDetected=this._modality.pipe(Sh(1)),this.modalityChanged=this.modalityDetected.pipe(Dh()),this._platform.isBrowser){let o=C(ir$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,`keydown`,this._onKeydown,At),o.listen(t,`mousedown`,this._onMousedown,At),o.listen(t,`touchstart`,this._onTouchstart,At)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var Se=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Se||{});var Vn=new S(`cdk-focus-monitor-default-options`);var Ze=ie({passive:!0,capture:!0});var Ke=(()=>{class n{_ngZone=C(_e$1);_platform=C(E);_inputModalityDetector=C(zn);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=C(Qn$1);_stopInputModalityDetector=new Z;constructor(){let e=C(Vn,{optional:!0});this._detectionMode=e?.detectionMode||Se.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=O(e);for(let r=t;r;r=r.parentElement)e.type===`focus`?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=V(e);if(!this._platform.isBrowser||r.nodeType!==1)return rh();let o=wt(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new Z,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=V(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=V(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,l])=>this._originChanged(c,t,l)):(this._setOrigin(t),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Se.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===Se.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Hn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=O(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Ze),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Ze)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Rh(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Ze),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Ze),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var nr=(()=>{class n{_elementRef=C(dr$1);_focusMonitor=C(Ke);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Le;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=Gv({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();var Ye=new WeakMap;var H=(()=>{class n{_appRef;_injector=C(he$1);_environmentInjector=C(se);load(e){let t=this._appRef=this._appRef||this._injector.get(gi$1),r=Ye.get(t);r||(r={loaders:new Set,refs:[]},Ye.set(t,r),t.onDestroy(()=>{Ye.get(t)?.refs.forEach(o=>o.destroy()),Ye.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(bL(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var Xe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Hv({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();function Ft(n){return Array.isArray(n)?n:[n]}var Gn=new Set;var X;var qe=(()=>{class n{_platform=C(E);_nonce=C(yg,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rr}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ir(e,this._nonce),this._matchMedia(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();function ir(n,i){if(!Gn.has(n))try{X||(X=document.createElement(`style`),i&&X.setAttribute(`nonce`,i),X.setAttribute(`type`,`text/css`),document.head.appendChild(X)),X.sheet&&(X.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Gn.add(n))}catch(e){console.error(e)}}function rr(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Mt=(()=>{class n{_mediaMatcher=C(qe);_zone=C(_e$1);_queries=new Map;_destroySubject=new Z;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Wn(Ft(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let o=ph(Wn(Ft(e)).map(a=>this._registerQuery(a).observable));return o=zr(o.pipe(ji$1(1)),o.pipe(Sh(1),Eh(0))),o.pipe(gt$1(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{c.matches=c.matches||l,c.breakpoints[d]=l}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new M(a=>{let c=l=>this._zone.run(()=>a.next(l));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(xh(t),gt$1(({matches:a})=>({query:e,matches:a})),Rh(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();function Wn(n){return n.map(i=>i.split(`,`)).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var or=(()=>{class n{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var Zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({providers:[or]})}return n})();var ar=(()=>{class n{_platform=C(E);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return cr(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=sr(br(e));if(t&&(Kn(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Kn(e);return e.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!pr(e)?!1:r===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return hr(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();function sr(n){try{return n.frameElement}catch{return null}}function cr(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function ur(n){let i=n.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function dr(n){return mr(n)&&n.type==`hidden`}function lr(n){return fr(n)&&n.hasAttribute(`href`)}function mr(n){return n.nodeName.toLowerCase()==`input`}function fr(n){return n.nodeName.toLowerCase()==`a`}function qn(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let i=n.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function Kn(n){if(!qn(n))return null;let i=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function pr(n){let i=n.nodeName.toLowerCase(),e=i===`input`&&n.type;return e===`text`||e===`password`||i===`select`||i===`textarea`}function hr(n){return dr(n)?!1:ur(n)||lr(n)||n.hasAttribute(`contenteditable`)||qn(n)}function br(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Tt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary(`start`);return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary(`end`);return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Fm(i,{injector:this._injector})}};var Qn=(()=>{class n{_checker=C(ar);_ngZone=C(_e$1);_document=C(Qn$1);_injector=C(he$1);constructor(){C(H).load(Xe)}create(e,t=!1){return new Tt(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var gr=(()=>{class n{_elementRef=C(dr$1);_focusTrapFactory=C(Qn);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){C(E).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Ct(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(t){return new(t||n)};static ɵdir=Gv({type:n,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,TL],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,TL]},exportAs:[`cdkTrapFocus`],features:[Rg]})}return n})();var G=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(G||{});var Yn=`cdk-high-contrast-black-on-white`;var Xn=`cdk-high-contrast-white-on-black`;var It=`cdk-high-contrast-active`;var Jn=(()=>{class n{_platform=C(E);_hasCheckedHighContrastMode=!1;_document=C(Qn$1);_breakpointSubscription;constructor(){this._breakpointSubscription=C(Mt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return G.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return G.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return G.BLACK_ON_WHITE}return G.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(It,Yn,Xn),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===G.BLACK_ON_WHITE?e.add(It,Yn):t===G.WHITE_ON_BLACK&&e.add(It,Xn)}}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var vr=(()=>{class n{constructor(){C(Jn)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({imports:[Zn]})}return n})();var ti=` `;function yr(n,i,e){let t=Je(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(ti)))}function _r(n,i,e){let t=Je(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(ti)):n.removeAttribute(i)}function Je(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var ni=`cdk-describedby-message`;var Qe=`cdk-describedby-host`;var Rt=0;var xc=(()=>{class n{_platform=C(E);_document=C(Qn$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Rt++}`;constructor(){C(H).load(Xe),this._id=C(Jl)+`-`+Rt++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=xt(t,r);typeof t!=`string`?(ei(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=xt(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Qe}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Qe);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement(`div`);ei(r,this._id),r.textContent=e,t&&r.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(xt(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(e),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Je(e,`aria-describedby`).filter(r=>r.indexOf(ni)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);yr(e,`aria-describedby`,r.messageElement.id),e.setAttribute(Qe,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,_r(e,`aria-describedby`,r.messageElement.id),e.removeAttribute(Qe)}_isElementDescribedByMessage(e,t){let r=Je(e,`aria-describedby`),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let r=t==null?``:`${t}`.trim(),o=e.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();function xt(n,i){return typeof n==`string`?`${i||``}/${n}`:n}function ei(n,i){n.id||(n.id=`${ni}-${i}-${Rt++}`)}var Dr=new S(`MATERIAL_ANIMATIONS`);var ii=null;function Sr(){return C(Dr,{optional:!0})?.animationsDisabled||C(mg,{optional:!0})===`NoopAnimations`?`di-disabled`:(ii??=C(qe).matchMedia(`(prefers-reduced-motion)`).matches,ii?`reduced-motion`:`enabled`)}function re(){return Sr()!==`enabled`}function zc(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Gc(n){return n!=null&&`${n}`!=`false`}var Er=new S(`cdk-dir-doc`,{providedIn:`root`,factory:()=>C(Qn$1)});var wr=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ri(n){let i=n?.toLowerCase()||``;return i===`auto`&&typeof navigator<`u`&&navigator?.language?wr.test(navigator.language)?`rtl`:`ltr`:i===`rtl`?`rtl`:`ltr`}var Cr=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Mo(`ltr`);change=new Le;constructor(){let e=C(Er,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ri(t||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var oe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({})}return n})();var q;function eu(){if(q==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return q=!1,q;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)q=!0;else{let n=Element.prototype.scrollTo;n?q=!/\{\s*\[native code\]\s*\}/.test(n.toString()):q=!1}}return q}function nu(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var I=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(I||{});var Ot=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=I.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var oi=ie({passive:!0,capture:!0});var Lt=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,oi)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,oi)))}_delegateEventHandler=i=>{let e=O(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}};var Ee={enterDuration:225,exitDuration:150};var Nr=800;var ai=ie({passive:!0,capture:!0});var si=[`mousedown`,`touchstart`];var ci=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Ar=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Hv({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var we=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Lt;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=V(t)),o&&o.get(H).load(Ar)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=$$1($$1({},Ee),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Fr(i,e,r),c=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${c-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),g=m.transitionProperty,f=m.transitionDuration,A=g===`none`||f===`0s`||f===`0s, 0s`||r.width===0&&r.height===0,L=new Ot(this,u,t,A);u.style.transform=`scale3d(1, 1, 1)`,L.state=I.FADING_IN,t.persistent||(this._mostRecentTransientRipple=L);let B=null;return!A&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let W=()=>{B&&(B.fallbackTimer=null),clearTimeout(ae),this._finishRippleTransition(L)},k=()=>this._destroyRipple(L),ae=setTimeout(k,d+100);u.addEventListener(`transitionend`,W),u.addEventListener(`transitioncancel`,k),B={onTransitionEnd:W,onTransitionCancel:k,fallbackTimer:ae}}),this._activeRipples.set(L,B),(A||!d)&&this._finishRippleTransition(L),L}fadeOutRipple(i){if(i.state===I.FADING_OUT||i.state===I.HIDDEN)return;let e=i.element,t=$$1($$1({},Ee),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,i.state=I.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=V(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,si.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ci.forEach(e=>{this._triggerElement.addEventListener(e,this,ai)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===I.FADING_IN?this._startFadeOutTransition(i):i.state===I.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=I.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=I.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ye(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Nr;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!_e(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===I.VISIBLE||i.config.terminateOnPointerUp&&i.state===I.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(si.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ci.forEach(e=>i.removeEventListener(e,this,ai)),this._pointerUpEventsRegistered=!1))}};function Fr(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var kt=new S(`mat-ripple-global-options`);var vu=(()=>{class n{_elementRef=C(dr$1);_animationsDisabled=re();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=C(_e$1),t=C(E),r=C(kt,{optional:!0}),o=C(he$1);this._globalOptions=r||{},this._rippleRenderer=new we(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:$$1($$1($$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,$$1($$1({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,$$1($$1({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||n)};static ɵdir=Gv({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,r){t&2&&np(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Mr={capture:!0};var Ir=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Pt=`mat-ripple-loader-uninitialized`;var Bt=`mat-ripple-loader-class-name`;var ui=`mat-ripple-loader-centered`;var et=`mat-ripple-loader-disabled`;var di=(()=>{class n{_document=C(Qn$1);_animationsDisabled=re();_globalRippleOptions=C(kt,{optional:!0});_platform=C(E);_ngZone=C(_e$1);_injector=C(he$1);_eventCleanups;_hosts=new Map;constructor(){let e=C(ir$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ir.map(t=>e.listen(this._document,t,this._onInteraction,Mr)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Pt,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(Bt))&&e.setAttribute(Bt,t.className||``),t.centered&&e.setAttribute(ui,``),t.disabled&&e.setAttribute(et,``)}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(et,``):e.removeAttribute(et)}_onInteraction=e=>{let t=O(e);if(t instanceof HTMLElement){let r=t.closest(`[${Pt}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(Bt)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ee.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ee.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(et),rippleConfig:{centered:e.hasAttribute(ui),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new we(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:l,hasSetUpEvents:d}),e.removeAttribute(Pt)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=ur$1({token:n,factory:n.ɵfac})}return n})();var li=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Hv({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Tr=[`*`,[[``,`progressIndicator`,``]]];var xr=[`*`,`[progressIndicator]`];function Rr(n,i){n&1&&(ec(0,`div`,1),MI(1,1),tc())}var Or=new S(`MAT_BUTTON_CONFIG`);function mi(n){return n==null?void 0:wL(n)}var Ut=(()=>{class n{_elementRef=C(dr$1);_ngZone=C(_e$1);_animationsDisabled=re();_config=C(Or,{optional:!0});_focusMonitor=C(Ke);_cleanupClick;_renderer=C(aa);_rippleLoader=C(di);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=mL(!1,{transform:TL});constructor(){C(H).load(li);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||n)};static ɵdir=Gv({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(t,r){t&2&&(Vf(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),UI(r.color?`mat-`+r.color:``),np(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,TL],disabled:[2,`disabled`,`disabled`,TL],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,TL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,TL],tabIndex:[2,`tabIndex`,`tabIndex`,mi],_tabindex:[2,`tabindex`,`_tabindex`,mi],showProgress:[1,`showProgress`]}})}return n})();var Lr=(()=>{class n extends Ut{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||n)};static ɵcmp=Hv({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Of],ngContentSelectors:xr,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,r){t&1&&(_I(Tr),$f(0,`span`,0),MI(1),cI(2,Rr,2,0,`div`,1),$f(3,`span`,2)(4,`span`,3)),t&2&&(cy(2),lI(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({imports:[oe]})}return n})();var kr=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Pr=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Br(n,i){n&1&&(ec(0,`div`,2),MI(1,3),tc())}var pi=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Vu=(()=>{class n extends Ut{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=Ur(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?pi.get(this._appearance):null,o=pi.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=Hv({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Of],ngContentSelectors:Pr,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,r){t&1&&(_I(kr),$f(0,`span`,0),MI(1),ec(2,`span`,1),MI(3,1),tc(),MI(4,2),cI(5,Br,2,0,`div`,2),$f(6,`span`,3)(7,`span`,4)),t&2&&(np(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),cy(5),lI(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function Ur(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Gu=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({imports:[fi,oe]})}return n})();var Ku=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$v({type:n});static ɵinj=il({imports:[oe]})}return n})();export{gr as A,vu as B,Vu as C,eu as D,ar as E,qe as F,xi as H,re as I,tr as L,nr as M,nu as N,fi as O,oe as P,vr as R,V as S,Zn as T,yn as U,xc as V,zc as W,Mi as _,Ct as a,Qn as b,Ft as c,H as d,Ii as f,Lr as g,Ku as h,Cr as i,li as j,fs as k,Gc as l,Ki as m,An as n,E as o,Ke as p,Be as r,Fi as s,$ as t,Gu as u,Nn as v,Xe as w,St as x,O as y,vs as z};