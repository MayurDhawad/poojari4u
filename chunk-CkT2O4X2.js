import{$ as Np,$n as rE,C as Ga$1,Cr as xr,Ct as W$1,D as H,Dr as yp,Dt as YE,En as je,Gn as oE,H as Ll,Hn as nE,In as mE,It as _p,J as Mp,Jn as ov,Kn as oe,Kt as bp,Lt as aC,M as IE,Nn as lp,Nt as _l,Ot as Yh,P as Ip,Pn as lr,Pt as _n$1,Q as Nn$1,Rn as mi,Sr as xc,T as Gp,Tr as ye$1,U as M,Ut as bE,Vn as nC,Vt as an$1,W as Mc,Wt as bg,X as Nc,Xn as pl,Z as Ne,Zn as q,Zt as ch,_ as Eg,_r as wc,_t as Sp,ar as tE,b as FE,bn as iE,br as wt$1,bt as Up,c as CE,cr as uI,ct as Rn$1,d as D,et as Op,fn as fl,fr as vE,ft as S,gn as gp,gr as wE,h as Do,ht as Sl,i as B,in as dt,it as QE,j as Hp,l as Cg,ln as fI,lr as ug,lt as Rp,m as Dg,mn as ft,n as AF,nt as PI,o as Bp,on as eD,or as tI,ot as RF,p as DE,pt as Sc,rr as se,rt as Q,sn as eh,t as $o,tn as dE,tr as rf,tt as Oy,vn as hp,wt as WE,x as FF,xt as V,yr as wp,z as LD,zn as mp}from"./chunk-D_Q5-2jr.js";import{B as yo,C as fi,D as jt,E as go,I as ue,M as q$1,N as ri,P as ro,R as vr,S as fe,T as ge,_ as T,a as Di,b as Ze$1,f as Mi,g as Qt,j as pt,l as K,m as Ot$1,o as Dt$1,t as $e$1,u as Ke,v as Ui$1,w as g,x as ci,y as Wi$1,z as vt$1}from"./chunk-Tufe0V2B.js";import{A as An$1,F as zn$1,I as zt,M as Tn$1,N as on$1,P as xt$1,T as fe$1,f as Zn$1,j as Nt$1,n as $n$1,w as Gt,x as qn$1}from"./main-2JYXQX2M.js";var gt=new M(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>D(xr)});var ye=`Method not implemented`;var Y=class{locale;_localeChanges=new W$1;localeChanges=this._localeChanges;setTime(r,e,t,i){throw new Error(ye)}getHours(r){throw new Error(ye)}getMinutes(r){throw new Error(ye)}getSeconds(r){throw new Error(ye)}parseTime(r,e){throw new Error(ye)}addSeconds(r,e){throw new Error(ye)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareDate(r,e):t==i}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareTime(r,e):t==i}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}};var he=new M(`mat-date-formats`);var Ai=(()=>{class n{_animationsDisabled=go();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&Op(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var un=[`text`];var fn=[[[`mat-icon`]],`*`];var _n=[`mat-icon`,`*`];function gn(n,r){if(n&1&&mp(0,`mat-pseudo-checkbox`,1),n&2){let e=mE();gp(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function bn(n,r){if(n&1&&mp(0,`mat-pseudo-checkbox`,3),n&2)gp(`disabled`,mE().disabled)}function vn(n,r){if(n&1&&(mi(0,`span`,4),WE(1),Sc()),n&2){let e=mE();ov(),xc(`(`,e.group.label,`)`)}}var yn=new M(`MAT_OPTION_PARENT_COMPONENT`);var xn=new M(`MatOptgroup`);var bt=class{source;isUserInput;constructor(r,e=!1){this.source=r,this.isUserInput=e}};var Ni=(()=>{class n{_element=D(dt);_changeDetectorRef=D(ch);_parent=D(yn,{optional:!0});group=D(xn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=D(K).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=$o(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new je;_text;_stateChanges=new W$1;constructor(){let e=D(T);e.load(Nt$1),e.load(ue),this._signalDisableRipple=!!this._parent&&lr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ui$1(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new bt(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&Sp(un,7),t&2){let a;IE(a=CE())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&wp(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(o){return i._handleKeydown(o)}),t&2&&(Ip(`id`,i.id),hp(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),Op(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,PI]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:_n,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(vE(fn),tE(0,gn,1,2,`mat-pseudo-checkbox`,1),DE(1),mi(2,`span`,2,0),DE(4,1),Sc(),tE(5,bn,1,1,`mat-pseudo-checkbox`,3),tE(6,vn,2,1,`span`,4),mp(7,`div`,5)),t&2&&(nE(i.multiple?0:-1),ov(5),nE(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),ov(),nE(i.group&&i.group._inert?6:-1),ov(),gp(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[Ai,on$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Ei=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({imports:[q$1]})}return n})();var vt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({imports:[xt$1,Ei,Ni,q$1]})}return n})();var Cn=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var Dn=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function yt(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Sn=(()=>{class n extends Y{_matDateLocale=D(gt,{optional:!0});constructor(){super();let e=D(gt,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return yt(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return yt(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return yt(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let a=this._createDateWithOverflow(e,t,i);return a.getMonth(),a}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,H(B({},t),{timeZone:`utc`}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(Cn.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,a){let o=this.clone(e);return o.setHours(t,i,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let a=this._parseTimeString(i);if(a===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let a=new Date;return a.setFullYear(e,t,i),a.setHours(0,0,0,0),a}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(Dn);if(t){let i=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),g=t[4];if(i===12?i=g===`AM`?0:i:g===`PM`&&(i+=12),xt(i,0,23)&&xt(a,0,59)&&(o==null||xt(o,0,59)))return this.setTime(this.today(),i,a,o||0)}return null}static ɵfac=function(t){return new(t||n)};static ɵprov=Nn$1({token:n,factory:n.ɵfac,autoProvided:!1})}return n})();function xt(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var wn={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var Ii=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({providers:[Mn()]})}return n})();function Mn(n=wn){return[{provide:Y,useClass:Sn},{provide:he,useValue:n}]}var kn=[`tooltip`];var An=20;var Nn=new M(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=D(se);return()=>Qt(n,{scrollThrottle:An})}});var En=new M(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Oi=`tooltip-panel`;var In={passive:!0};var On=8;var Tn=8;var Fn=24;var Rn=200;var Ti=(()=>{class n{_elementRef=D(dt);_ngZone=D(Ne);_platform=D(g);_ariaDescriber=D(ro);_focusMonitor=D(Ot$1);_dir=D(Ze$1);_injector=D(se);_viewContainerRef=D(ft);_mediaMatcher=D(fe);_document=D(ye$1);_renderer=D(_n$1);_animationsDisabled=go();_defaultOptions=D(En,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Pn;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=yo(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=yo(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=pt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=pt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new W$1;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=On}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(bg(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new $e$1(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(bg(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof dt)return this._overlayRef;this._detach()}let t=this._injector.get(ge).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Oi}`,a=ri(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return a.positionChanges.pipe(bg(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ci(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Nn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(bg(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(bg(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(bg(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(bg(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(B(B({},i.main),a.main)),this._addOffset(B(B({},i.fallback),a.fallback))])}_addOffset(e){let t=Tn,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:a,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:a,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Oy(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,o;if(t===`center`?this._dir&&this._dir.value===`rtl`?o=i===`end`?`left`:`right`:o=i===`start`?`left`:`right`:o=t===`bottom`&&a===`top`?`above`:`below`,o!==this._currentPosition){let g=this._overlayRef;if(g){let ee=`${this._cssClassPrefix}-${Oi}-`;g.removePanelClass(ee+this._currentPosition),g.addPanelClass(ee+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,In))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Oy({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!Ui$1(e):!0;static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&Op(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var Pn=(()=>{class n{_changeDetectorRef=D(ch);_elementRef=D(dt);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=go();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new W$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Fn&&e.width>=Rn}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let o=getComputedStyle(t);(o.getPropertyValue(`animation-duration`)===`0s`||o.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,i){if(t&1&&Sp(kn,7),t&2){let a;IE(a=CE())&&(i._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,i){t&1&&wp(`mouseleave`,function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,i){t&1&&(Mc(0,`div`,1,0),bp(`animationend`,function(o){return i._handleAnimationEnd(o)}),Mc(2,`div`,2),WE(3),Nc()()),t&2&&(FE(i.tooltipClass),Op(`mdc-tooltip--multiline`,i._isMultiline),ov(3),Bp(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Dt=class{_box;_destroyed=new W$1;_resizeSubject=new W$1;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new S(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),t.unsubscribe(),this._elementObservables.delete(r)}}).pipe(an$1(e=>e.some(t=>t.target===r)),Eg({bufferSize:1,refCount:!0}),bg(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Fi=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=D(Ne);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new Dt(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Nn$1({token:n,factory:n.ɵfac})}return n})();var Vn=[`notch`];var Ln=[`*`];var Ri=[`iconPrefixContainer`];var Pi=[`textPrefixContainer`];var Vi=[`iconSuffixContainer`];var Li=[`textSuffixContainer`];var zn=[`textField`];var Bn=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Hn=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Yn(n,r){n&1&&mp(0,`span`,21)}function jn(n,r){if(n&1&&(mi(0,`label`,20),DE(1,1),tE(2,Yn,1,0,`span`,21),Sc()),n&2){let e=mE(2);gp(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),hp(`for`,e._control.disableAutomaticLabeling?null:e._control.id),ov(2),nE(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Wn(n,r){if(n&1&&tE(0,jn,3,5,`label`,20),n&2)nE(mE()._hasFloatingLabel()?0:-1)}function qn(n,r){n&1&&mp(0,`div`,7)}function Kn(n,r){}function Gn(n,r){if(n&1&&lp(0,Kn,0,0,`ng-template`,13),n&2){mE(2);gp(`ngTemplateOutlet`,bE(1))}}function Un(n,r){if(n&1&&(mi(0,`div`,9),tE(1,Gn,1,1,null,13),Sc()),n&2){let e=mE();gp(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),ov(),nE(e._forceDisplayInfixLabel()?-1:1)}}function Qn(n,r){n&1&&(mi(0,`div`,10,2),DE(2,2),Sc())}function $n(n,r){n&1&&(mi(0,`div`,11,3),DE(2,3),Sc())}function Xn(n,r){}function Zn(n,r){if(n&1&&lp(0,Xn,0,0,`ng-template`,13),n&2){mE();gp(`ngTemplateOutlet`,bE(1))}}function Jn(n,r){n&1&&(mi(0,`div`,14,4),DE(2,4),Sc())}function ea(n,r){n&1&&(mi(0,`div`,15,5),DE(2,5),Sc())}function ta(n,r){n&1&&mp(0,`div`,16)}function ia(n,r){n&1&&(mi(0,`div`,18),DE(1,6),Sc())}function na(n,r){if(n&1&&(mi(0,`mat-hint`,22),WE(1),Sc()),n&2){let e=mE(2);gp(`id`,e._hintLabelId),ov(),Bp(e.hintLabel)}}function aa(n,r){if(n&1&&(mi(0,`div`,19),tE(1,na,2,2,`mat-hint`,22),DE(2,7),mp(3,`div`,23),DE(4,8),Sc()),n&2){let e=mE();ov(),nE(e.hintLabel?1:-1)}}var St=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[`mat-label`]]})}return n})();var ra=new M(`MatError`);var wt=(()=>{class n{align=`start`;id=D(K).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,i){t&2&&(Ip(`id`,i.id),hp(`align`,null),Op(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var oa=new M(`MatPrefix`);var sa=new M(`MatSuffix`);var qi=new M(`FloatingLabelParent`);var zi=(()=>{class n{_elementRef=D(dt);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=D(Fi);_ngZone=D(Ne);_parent=D(qi);_resizeSubscription=new q;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return la(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,i){t&2&&Op(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function la(n){let r=n;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Bi=`mdc-line-ripple--active`;var Qe=`mdc-line-ripple--deactivating`;var Hi=(()=>{class n{_elementRef=D(dt);_cleanupTransitionEnd;constructor(){let e=D(Ne),t=D(_n$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Qe),e.add(Bi)}deactivate(){this._elementRef.nativeElement.classList.add(Qe)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Qe);e.propertyName===`opacity`&&i&&t.remove(Bi,Qe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Yi=(()=>{class n{_elementRef=D(dt);_ngZone=D(Ne);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,i){if(t&1&&Sp(Vn,5),t&2){let a;IE(a=CE())&&(i._notch=a.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,i){t&2&&Op(`mdc-notched-outline--notched`,i.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ln,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,i){t&1&&(vE(),yp(0,`div`,1),Mc(1,`div`,2,0),DE(3),Nc(),yp(4,`div`,3))},encapsulation:2})}return n})();var da=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n})}return n})();var ca=new M(`MatFormField`);var ma=new M(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ji=`fill`;var pa=`auto`;var Wi=`fixed`;var ha=`translateY(-50%)`;var Ki=(()=>{class n{_elementRef=D(dt);_changeDetectorRef=D(ch);_platform=D(g);_idGenerator=D(K);_ngZone=D(Ne);_defaults=D(ma,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=AF(`iconPrefixContainer`);_textPrefixContainerSignal=AF(`textPrefixContainer`);_iconSuffixContainerSignal=AF(`iconSuffixContainer`);_textSuffixContainerSignal=AF(`textSuffixContainer`);_prefixSuffixContainers=fI(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=RF(St);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yo(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||pa}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ji;this._appearanceSignal.set(t)}_appearanceSignal=$o(ji);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Wi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Wi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new W$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=go();constructor(){let e=this._defaults,t=D(Ze$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ll(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=fI(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Cg([void 0,void 0]),wt$1(()=>[t.errorState,t.userAriaDescribedBy]),Dg(),an$1(([[a,o],[g,ee]])=>a!==g||o!==ee)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(bg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ug(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){FF({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=fI(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let a=this._hintChildren?this._hintChildren.find(g=>g.align===`start`):null,o=this._hintChildren?this._hintChildren.find(g=>g.align===`end`):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!a.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,g=t?.getBoundingClientRect().width??0,ee=i?.getBoundingClientRect().width??0,nt=a?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ha} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+g}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+g+ee+nt]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-form-field`]],contentQueries:function(t,i,a){if(t&1&&(Mp(a,i._labelChild,St,5),_p(a,da,5)(a,oa,5)(a,sa,5)(a,ra,5)(a,wt,5)),t&2){wE();let o;IE(o=CE())&&(i._formFieldControl=o.first),IE(o=CE())&&(i._prefixChildren=o),IE(o=CE())&&(i._suffixChildren=o),IE(o=CE())&&(i._errorChildren=o),IE(o=CE())&&(i._hintChildren=o)}},viewQuery:function(t,i){if(t&1&&(Np(i._iconPrefixContainerSignal,Ri,5)(i._textPrefixContainerSignal,Pi,5)(i._iconSuffixContainerSignal,Vi,5)(i._textSuffixContainerSignal,Li,5),Sp(zn,5)(Ri,5)(Pi,5)(Vi,5)(Li,5)(zi,5)(Yi,5)(Hi,5)),t&2){wE(4);let a;IE(a=CE())&&(i._textField=a.first),IE(a=CE())&&(i._iconPrefixContainer=a.first),IE(a=CE())&&(i._textPrefixContainer=a.first),IE(a=CE())&&(i._iconSuffixContainer=a.first),IE(a=CE())&&(i._textSuffixContainer=a.first),IE(a=CE())&&(i._floatingLabel=a.first),IE(a=CE())&&(i._notchedOutline=a.first),IE(a=CE())&&(i._lineRipple=a.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,i){t&2&&Op(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._control.errorState)(`mat-form-field-disabled`,i._control.disabled)(`mat-form-field-autofilled`,i._control.autofilled)(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[tI([{provide:ca,useExisting:n},{provide:qi,useExisting:n}])],ngContentSelectors:Hn,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,i){if(t&1&&(vE(Bn),lp(0,Wn,1,1,`ng-template`,null,0,uI),mi(2,`div`,6,1),wp(`click`,function(o){return i._control.onContainerClick(o)}),tE(4,qn,1,0,`div`,7),mi(5,`div`,8),tE(6,Un,2,2,`div`,9),tE(7,Qn,3,0,`div`,10),tE(8,$n,3,0,`div`,11),mi(9,`div`,12),tE(10,Zn,1,1,null,13),DE(11),Sc(),tE(12,Jn,3,0,`div`,14),tE(13,ea,3,0,`div`,15),Sc(),tE(14,ta,1,0,`div`,16),Sc(),mi(15,`div`,17),tE(16,ia,2,0,`div`,18)(17,aa,5,1,`div`,19),Sc()),t&2){let a;ov(2),Op(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,i._control.disabled)(`mdc-text-field--invalid`,i._control.errorState),ov(2),nE(!i._hasOutline()&&!i._control.disabled?4:-1),ov(2),nE(i._hasOutline()?6:-1),ov(),nE(i._hasIconPrefix?7:-1),ov(),nE(i._hasTextPrefix?8:-1),ov(2),nE(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),ov(2),nE(i._hasTextSuffix?12:-1),ov(),nE(i._hasIconSuffix?13:-1),ov(),nE(i._hasOutline()?-1:14),ov(),Op(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let o=i._getSubscriptMessageType();ov(),nE((a=o)===`error`?16:a===`hint`?17:-1)}},dependencies:[zi,Yi,nC,Hi,wt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();function ua(n,r){return this._trackRow(r)}var Zi=(n,r)=>r.id;function fa(n,r){if(n&1&&(Mc(0,`tr`,0)(1,`td`,3),WE(2),Nc()()),n&2){let e=mE();ov(),Rp(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),hp(`colspan`,e.numCols),ov(),xc(` `,e.label,` `)}}function _a(n,r){if(n&1&&(Mc(0,`td`,3),WE(1),Nc()),n&2){let e=mE(2);Rp(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),hp(`colspan`,e._firstRowOffset),ov(),xc(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function ga(n,r){if(n&1){let e=dE();Mc(0,`td`,6)(1,`button`,7),bp(`click`,function(i){let a=fl(e).$implicit;return pl(mE(2)._cellClicked(a,i))})(`focus`,function(i){let a=fl(e).$implicit;return pl(mE(2)._emitActiveDateChange(a,i))}),Mc(2,`span`,8),WE(3),Nc(),yp(4,`span`,9),Nc()()}if(n&2){let e=r.$implicit,t=r.$index,i=mE().$index,a=mE();Rp(`width`,a._cellWidth)(`padding-top`,a._cellPadding)(`padding-bottom`,a._cellPadding),hp(`data-mat-row`,i)(`data-mat-col`,t),ov(),FE(e.cssClasses),Op(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,a._isActiveCell(i,t))(`mat-calendar-body-range-start`,a._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,a._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,a._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,a._isComparisonBridgeStart(e.compareValue,i,t))(`mat-calendar-body-comparison-bridge-end`,a._isComparisonBridgeEnd(e.compareValue,i,t))(`mat-calendar-body-comparison-start`,a._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,a._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,a._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,a._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,a._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,a._isInPreview(e.compareValue)),Ip(`tabIndex`,a._isActiveCell(i,t)?0:-1),hp(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,a._isSelected(e.compareValue))(`aria-current`,a.todayValue===e.compareValue?`date`:null)(`aria-describedby`,a._getDescribedby(e.compareValue)),ov(),Op(`mat-calendar-body-selected`,a._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,a._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,a.todayValue===e.compareValue),ov(),xc(` `,e.displayValue,` `)}}function ba(n,r){if(n&1&&(Mc(0,`tr`,1),tE(1,_a,2,6,`td`,4),oE(2,ga,5,49,`td`,5,Zi),Nc()),n&2){let e=r.$implicit,t=r.$index,i=mE();ov(),nE(t===0&&i._firstRowOffset?1:-1),ov(),iE(e)}}function va(n,r){if(n&1&&(mi(0,`th`,2)(1,`span`,6),WE(2),Sc(),mi(3,`span`,3),WE(4),Sc()()),n&2){let e=r.$implicit;ov(2),Bp(e.long),ov(2),Bp(e.narrow)}}var ya=[`*`];function xa(n,r){}function Ca(n,r){if(n&1){let e=dE();mi(0,`mat-month-view`,4),Gp(`activeDateChange`,function(i){fl(e);let a=mE();return YE(a.activeDate,i)||(a.activeDate=i),pl(i)}),wp(`_userSelection`,function(i){fl(e);return pl(mE()._dateSelected(i))})(`dragStarted`,function(i){fl(e);return pl(mE()._dragStarted(i))})(`dragEnded`,function(i){fl(e);return pl(mE()._dragEnded(i))}),Sc()}if(n&2){let e=mE();Up(`activeDate`,e.activeDate),gp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function Da(n,r){if(n&1){let e=dE();mi(0,`mat-year-view`,5),Gp(`activeDateChange`,function(i){fl(e);let a=mE();return YE(a.activeDate,i)||(a.activeDate=i),pl(i)}),wp(`monthSelected`,function(i){fl(e);return pl(mE()._monthSelectedInYearView(i))})(`selectedChange`,function(i){fl(e);return pl(mE()._goToDateInView(i,`month`))}),Sc()}if(n&2){let e=mE();Up(`activeDate`,e.activeDate),gp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function Sa(n,r){if(n&1){let e=dE();mi(0,`mat-multi-year-view`,6),Gp(`activeDateChange`,function(i){fl(e);let a=mE();return YE(a.activeDate,i)||(a.activeDate=i),pl(i)}),wp(`yearSelected`,function(i){fl(e);return pl(mE()._yearSelectedInMultiYearView(i))})(`selectedChange`,function(i){fl(e);return pl(mE()._goToDateInView(i,`year`))}),Sc()}if(n&2){let e=mE();Up(`activeDate`,e.activeDate),gp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function wa(n,r){}var Ma=[`button`];var ka=[[[``,`matDatepickerToggleIcon`,``]]];var Aa=[`[matDatepickerToggleIcon]`];function Na(n,r){n&1&&(_l(),mi(0,`svg`,2),mp(1,`path`,3),Sc())}var Ce=(()=>{class n{changes=new W$1;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Nn$1({token:n,factory:n.ɵfac})}return n})();var Ea=0;var Oe=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Ea++;cssClasses;constructor(r,e,t,i,a,o=r,g){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=g,this.cssClasses=a instanceof Set?Array.from(a):a}};var Ia={passive:!1,capture:!0};var $e={passive:!0,capture:!0};var Gi={passive:!0};var xe=(()=>{class n{_elementRef=D(dt);_ngZone=D(Ne);_platform=D(g);_intl=D(Ce);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new je;previewChange=new je;activeDateChange=new je;dragStarted=new je;dragEnded=new je;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=D(se);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=D(_n$1),t=D(K);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),D(T).load(Nt$1),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,a=[e.listen(i,`touchmove`,this._touchmoveHandler,Ia),e.listen(i,`mouseenter`,this._enterHandler,$e),e.listen(i,`focus`,this._enterHandler,$e),e.listen(i,`mouseleave`,this._leaveHandler,$e),e.listen(i,`blur`,this._leaveHandler,$e),e.listen(i,`mousedown`,this._mousedownHandler,Gi),e.listen(i,`touchstart`,this._mousedownHandler,Gi)];this._platform.isBrowser&&a.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?a-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Oy(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return At(e,this.startValue,this.endValue)}_isRangeEnd(e){return Nt(e,this.startValue,this.endValue)}_isInRange(e){return Et(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return At(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][i-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][i+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return Nt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Et(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return At(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Nt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Et(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ui(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),kt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=kt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ui(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=kt(e);if(t){let i=t.getAttribute(`data-mat-row`),a=t.getAttribute(`data-mat-col`);if(i&&a)return this.rows[parseInt(i)]?.[parseInt(a)]||null}return null}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Ga$1],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(t,i){t&1&&(tE(0,fa,3,6,`tr`,0),oE(1,ba,4,1,`tr`,1,ua,!0),Mc(3,`span`,2),WE(4),Nc(),Mc(5,`span`,2),WE(6),Nc(),Mc(7,`span`,2),WE(8),Nc(),Mc(9,`span`,2),WE(10),Nc()),t&2&&(nE(i._firstRowOffset<i.labelMinRequiredCells?0:-1),ov(),iE(i.rows),ov(2),Ip(`id`,i._startDateLabelId),ov(),xc(` `,i.startDateAccessibleName,`
`),ov(),Ip(`id`,i._endDateLabelId),ov(),xc(` `,i.endDateAccessibleName,`
`),ov(),Ip(`id`,i._comparisonStartDateLabelId),ov(),Hp(` `,i.comparisonDateAccessibleName,` `,i.startDateAccessibleName,`
`),ov(),Ip(`id`,i._comparisonEndDateLabelId),ov(),Hp(` `,i.comparisonDateAccessibleName,` `,i.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return n})();function Mt(n){return n?.nodeName===`TD`}function kt(n){let r;return Mt(n)?r=n:Mt(n.parentNode)?r=n.parentNode:Mt(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute(`data-mat-row`)!=null?r:null}function At(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Nt(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Et(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function Ui(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var U=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}};var Xe=(()=>{class n{selection;_adapter;_selectionChanged=new W$1;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){eD()};static ɵprov=V({token:n,factory:n.ɵfac})}return n})();var Oa=(()=>{class n extends Xe{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||n)(Q(Y))};static ɵprov=V({token:n,factory:n.ɵfac})}return n})();var Ta={provide:Xe,useFactory:()=>D(Xe,{optional:!0,skipSelf:!0})||new Oa(D(Y))};var Ji=new M(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var It=7;var Fa=0;var Qi=(()=>{class n{_changeDetectorRef=D(ch);_dateFormats=D(he,{optional:!0});_dateAdapter=D(Y,{optional:!0});_dir=D(Ze$1,{optional:!0});_rangeStrategy=D(Ji,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof U?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new je;_userSelection=new je;dragStarted=new je;dragEnded=new je;activeDateChange=new je;_matCalendarBody;_monthLabel=$o(``);_weeks=$o([]);_firstWeekOffset=$o(0);_rangeStart=$o(null);_rangeEnd=$o(null);_comparisonRangeStart=$o(null);_comparisonRangeEnd=$o(null);_previewStart=$o(null);_previewEnd=$o(null);_isRange=$o(!1);_todayDate=$o(null);_weekdays=$o([]);constructor(){D(T).load(ue),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Cg(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof U?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Ui$1(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((It+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%It),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,a=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),a=this._dateAdapter.getDayOfWeekNames(`long`).map((o,g)=>({long:o,narrow:t[g],id:Fa++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==It&&(i.push([]),o=0);let g=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),ee=this._shouldEnableDate(g),nt=this._dateAdapter.format(g,this._dateFormats.display.dateA11yLabel),at=this.dateClass?this.dateClass(g,`month`):void 0;i[i.length-1].push(new Oe(a+1,t[a],nt,ee,at,this._getCellCompareValue(g),g))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,i,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof U?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-month-view`]],viewQuery:function(t,i){if(t&1&&Sp(xe,5),t&2){let a;IE(a=CE())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Ga$1],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(t,i){t&1&&(mi(0,`table`,0)(1,`thead`,1)(2,`tr`),oE(3,va,5,2,`th`,2,Zi),Sc(),mi(5,`tr`,3),mp(6,`th`,4),Sc()(),mi(7,`tbody`,5),wp(`selectedValueChange`,function(o){return i._dateSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`previewChange`,function(o){return i._previewChanged(o)})(`dragStarted`,function(o){return i.dragStarted.emit(o)})(`dragEnded`,function(o){return i._dragEnded(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Sc()()),t&2&&(ov(3),iE(i._weekdays()),ov(4),gp(`label`,i._monthLabel())(`rows`,i._weeks())(`todayValue`,i._todayDate())(`startValue`,i._rangeStart())(`endValue`,i._rangeEnd())(`comparisonStart`,i._comparisonRangeStart())(`comparisonEnd`,i._comparisonRangeEnd())(`previewStart`,i._previewStart())(`previewEnd`,i._previewEnd())(`isRange`,i._isRange())(`labelMinRequiredCells`,3)(`activeCell`,i._dateAdapter.getDate(i.activeDate)-1)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName))},dependencies:[xe],encapsulation:2})}return n})();var W=24;var Ot=4;var $i=(()=>{class n{_changeDetectorRef=D(ch);_dateAdapter=D(Y,{optional:!0});_dir=D(Ze$1,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),en(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof U?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new je;yearSelected=new je;activeDateChange=new je;_matCalendarBody;_years=$o([]);_todayYear=$o(0);_selectedYear=$o(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Cg(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ie(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let a=0,o=[];a<W;a++)o.push(t+a),o.length==Ot&&(i.push(o.map(g=>this._createCellForYear(g))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ot);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ot);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ie(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,W-Ie(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-W*10:-W);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?W*10:W);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ie(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new Oe(e,i,i,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof U){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,i){if(t&1&&Sp(xe,5),t&2){let a;IE(a=CE())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(mi(0,`table`,0)(1,`thead`,1)(2,`tr`),mp(3,`th`,2),Sc()(),mi(4,`tbody`,3),wp(`selectedValueChange`,function(o){return i._yearSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Sc()()),t&2&&(ov(4),gp(`rows`,i._years())(`todayValue`,i._todayYear())(`startValue`,i._selectedYear())(`endValue`,i._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._getActiveCell()))},dependencies:[xe],encapsulation:2})}return n})();function en(n,r,e,t,i){let a=n.getYear(r),o=n.getYear(e),g=tn(n,t,i);return Math.floor((a-g)/W)===Math.floor((o-g)/W)}function Ie(n,r,e,t){return Ra(n.getYear(r)-tn(n,e,t),W)}function tn(n,r,e){let t=0;return e?t=n.getYear(e)-W+1:r&&(t=n.getYear(r)),t}function Ra(n,r){return(n%r+r)%r}var Xi=(()=>{class n{_changeDetectorRef=D(ch);_dateFormats=D(he,{optional:!0});_dateAdapter=D(Y,{optional:!0});_dir=D(Ze$1,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof U?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new je;monthSelected=new je;activeDateChange=new je;_matCalendarBody;_months=$o([]);_yearLabel=$o(``);_todayMonth=$o(null);_selectedMonth=$o(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Cg(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,`year`):void 0;return new Oe(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let a=i;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof U?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-year-view`]],viewQuery:function(t,i){if(t&1&&Sp(xe,5),t&2){let a;IE(a=CE())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(mi(0,`table`,0)(1,`thead`,1)(2,`tr`),mp(3,`th`,2),Sc()(),mi(4,`tbody`,3),wp(`selectedValueChange`,function(o){return i._monthSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Sc()()),t&2&&(ov(4),gp(`label`,i._yearLabel())(`rows`,i._months())(`todayValue`,i._todayMonth())(`startValue`,i._selectedMonth())(`endValue`,i._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._dateAdapter.getMonth(i.activeDate)))},dependencies:[xe],encapsulation:2})}return n})();var nn=(()=>{class n{_intl=D(Ce);calendar=D(Tt);_dateAdapter=D(Y,{optional:!0});_dateFormats=D(he,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){D(T).load(ue);let e=D(ch);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-W))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:W))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):en(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ie(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+W-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1))]}_periodButtonLabelId=D(K).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:ya,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(t,i){t&1&&(vE(),mi(0,`div`,0)(1,`div`,1)(2,`span`,2),WE(3),Sc(),mi(4,`button`,3),wp(`click`,function(){return i.currentPeriodClicked()}),mi(5,`span`,4),WE(6),Sc(),_l(),mi(7,`svg`,5),mp(8,`polygon`,6),Sc()(),Sl(),mp(9,`div`,7),DE(10),mi(11,`button`,8),wp(`click`,function(){return i.previousClicked()}),_l(),mi(12,`svg`,9),mp(13,`path`,10),Sc()(),Sl(),mi(14,`button`,11),wp(`click`,function(){return i.nextClicked()}),_l(),mi(15,`svg`,9),mp(16,`path`,12),Sc()()()()),t&2&&(ov(2),gp(`id`,i._periodButtonLabelId),ov(),Bp(i.periodButtonDescription),ov(),hp(`aria-label`,i.periodButtonLabel)(`aria-describedby`,i._periodButtonLabelId),ov(2),Bp(i.periodButtonText),ov(),Op(`mat-calendar-invert`,i.calendar.currentView!==`month`),ov(4),gp(`disabled`,!i.previousEnabled())(`matTooltip`,i.prevButtonLabel),hp(`aria-label`,i.prevButtonLabel),ov(3),gp(`disabled`,!i.nextEnabled())(`matTooltip`,i.nextButtonLabel),hp(`aria-label`,i.nextButtonLabel))},dependencies:[An$1,zt,Ti],encapsulation:2})}return n})();var Tt=(()=>{class n{_dateAdapter=D(Y,{optional:!0});_dateFormats=D(he,{optional:!0});_changeDetectorRef=D(ch);_elementRef=D(dt);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof U?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new je;yearSelected=new je;monthSelected=new je;viewChanged=new je(!0);_userSelection=new je;_userDragDrop=new je;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new W$1;constructor(){this._intlChanges=D(Ce).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new $e$1(this.headerComponent||nn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||i||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(vt$1())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof U||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-calendar`]],viewQuery:function(t,i){if(t&1&&Sp(Qi,5)(Xi,5)($i,5),t&2){let a;IE(a=CE())&&(i.monthView=a.first),IE(a=CE())&&(i.yearView=a.first),IE(a=CE())&&(i.multiYearView=a.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[tI([Ta]),Ga$1],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(t,i){if(t&1&&(lp(0,xa,0,0,`ng-template`,0),mi(1,`div`,1),tE(2,Ca,1,11,`mat-month-view`,2)(3,Da,1,6,`mat-year-view`,3)(4,Sa,1,6,`mat-multi-year-view`,3),Sc()),t&2){let a;gp(`cdkPortalOutlet`,i._calendarHeaderPortal),ov(2),nE((a=i.currentView)===`month`?2:a===`year`?3:a===`multi-year`?4:-1)}},dependencies:[vr,fi,Qi,Xi,$i],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Pa=(()=>{class n{_elementRef=D(dt);_animationsDisabled=go();_changeDetectorRef=D(ch);_globalModel=D(Xe);_dateAdapter=D(Y);_ngZone=D(Ne);_rangeSelectionStrategy=D(Ji,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new W$1;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(D(T).load(ue),this._closeButtonText=D(Ce).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=D(_n$1);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,a=t instanceof U;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(a||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-datepicker-content`]],viewQuery:function(t,i){if(t&1&&Sp(Tt,5),t&2){let a;IE(a=CE())&&(i._calendar=a.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(t,i){t&2&&(FE(i.color?`mat-`+i.color:``),Op(`mat-datepicker-content-touch`,i.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!i._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(t,i){t&1&&(mi(0,`div`,0)(1,`mat-calendar`,1),wp(`yearSelected`,function(o){return i.datepicker._selectYear(o)})(`monthSelected`,function(o){return i.datepicker._selectMonth(o)})(`viewChanged`,function(o){return i.datepicker._viewChanged(o)})(`_userSelection`,function(o){return i._handleUserSelection(o)})(`_userDragDrop`,function(o){return i._handleUserDragDrop(o)}),Sc(),lp(2,wa,0,0,`ng-template`,2),mi(3,`button`,3),wp(`focus`,function(){return i._closeButtonFocused=!0})(`blur`,function(){return i._closeButtonFocused=!1})(`click`,function(){return i.datepicker.close()}),WE(4),Sc()()),t&2&&(Op(`mat-datepicker-content-container-with-custom-header`,i.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,i._actionsPortal),hp(`aria-modal`,!0)(`aria-labelledby`,i._dialogLabelId??void 0),ov(),FE(i.datepicker.panelClass),gp(`id`,i.datepicker.id)(`startAt`,i.datepicker.startAt)(`startView`,i.datepicker.startView)(`minDate`,i.datepicker._getMinDate())(`maxDate`,i.datepicker._getMaxDate())(`dateFilter`,i.datepicker._getDateFilter())(`headerComponent`,i.datepicker.calendarHeaderComponent)(`selected`,i._getSelected())(`dateClass`,i.datepicker.dateClass)(`comparisonStart`,i.comparisonStart)(`comparisonEnd`,i.comparisonEnd)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName),ov(),gp(`cdkPortalOutlet`,i._actionsPortal),ov(),Op(`cdk-visually-hidden`,!i._closeButtonFocused),gp(`color`,i.color||`primary`),ov(),Bp(i._closeButtonText))},dependencies:[Di,Tt,vr,An$1],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})}return n})();var Va=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Rn$1({type:n,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return n})();var La=(()=>{class n{_intl=D(Ce);_changeDetectorRef=D(ch);_stateChanges=q.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=D(new eh(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Yh(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Yh(),i=this.datepicker?ug(this.datepicker.openedStream,this.datepicker.closedStream):Yh();this._stateChanges.unsubscribe(),this._stateChanges=ug(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵcmp=LD({type:n,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(t,i,a){if(t&1&&_p(a,Va,5),t&2){let o;IE(o=CE())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&Sp(Ma,5),t&2){let a;IE(a=CE())&&(i._button=a.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(t,i){t&1&&wp(`click`,function(o){return i._open(o)}),t&2&&(hp(`tabindex`,null)(`data-mat-calendar`,i.datepicker?i.datepicker.id:null),Op(`mat-datepicker-toggle-active`,i.datepicker&&i.datepicker.opened)(`mat-accent`,i.datepicker&&i.datepicker.color===`accent`)(`mat-warn`,i.datepicker&&i.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,PI],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Ga$1],ngContentSelectors:Aa,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(t,i){t&1&&(vE(ka),mi(0,`button`,1,0),tE(2,Na,2,0,`:svg:svg`,2),DE(3),Sc()),t&2&&(gp(`tabIndex`,i.disabled?-1:i.tabIndex)(`disabled`,i.disabled)(`disableRipple`,i.disableRipple),hp(`aria-haspopup`,i.datepicker?`dialog`:null)(`aria-label`,i.ariaLabel||i._intl.openCalendarLabel)(`aria-expanded`,i.datepicker?i.datepicker.opened:null),ov(2),nE(i._customIcon?-1:2))},dependencies:[zt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return n})();var an=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({providers:[Ce],imports:[Tn$1,Wi$1,Mi,jt,Pa,La,nn,q$1,Ke]})}return n})();var rn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({})}return n})();var Te=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({imports:[Dt$1,Ki,q$1]})}return n})();var on=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({imports:[Te,Te,rn,q$1]})}return n})();var sn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=wc({type:n});static ɵinj=Do({imports:[Wi$1,vt,q$1,Ke,Te,vt]})}return n})();var ln=(n,r)=>r.value;var za=(n,r)=>r.groupName;function Ba(n,r){if(n&1&&(mi(0,`option`,31),WE(1),Sc()),n&2){let e=r.$implicit;gp(`value`,e.value),ov(),xc(` `,e.label,` `)}}function Ha(n,r){if(n&1&&(mi(0,`option`,31),WE(1),Sc()),n&2){let e=r.$implicit;gp(`value`,e.value),ov(),xc(` `,e.label,` `)}}function Ya(n,r){if(n&1&&(mi(0,`option`,31),WE(1),Sc()),n&2){let e=r.$implicit;gp(`value`,e),ov(),xc(` `,e,` `)}}function ja(n,r){if(n&1&&(mi(0,`optgroup`,35),oE(1,Ya,2,2,`option`,31,rE),Sc()),n&2){let e=r.$implicit;gp(`label`,e.groupName),ov(),iE(e.locations)}}var Ze=class n{constructor(r){this.router=r}router;selectedService=``;location=``;date=null;languages=[{value:``,label:`Select Language`},{value:`telugu`,label:`Telugu`},{value:`sanskrit`,label:`Sanskrit`},{value:`hindi`,label:`Hindi`},{value:`tamil`,label:`Tamil`},{value:`malayalam`,label:` Malayalam`},{value:`kannada`,label:`Kannada`}];ceremonies=[{value:``,label:`Select Service`},{value:`ganapathi-pooja`,label:`Ganapathi Pooja`},{value:`gruhapravesham`,label:`Gruhapravesham`},{value:`homam-havan`,label:`Homam / Havan`},{value:`satyanarayana-swamy-pooja`,label:`Satyanarayana Swamy Pooja`},{value:`lakshmi-pooja`,label:`Lakshmi Pooja`},{value:`wedding-rituals`,label:`Wedding Rituals`},{value:`namakarana`,label:`Namakarana`},{value:`vratham`,label:`Vratham`},{value:`pitru-karma`,label:`Pitru Karma`},{value:`temple-pooja-services`,label:`Temple Pooja Services`},{value:`birthday-ayushya-pooja`,label:`Birthday / Ayushya Pooja`},{value:`business-opening-pooja`,label:`Business Opening Pooja`}];locationGroups=[{groupName:`Hyderabad`,locations:[`Select Location`,`Kondapur`,`Gachibowli`,`Madhapur`,`Kukatpally`,`Miyapur`,`Banjara Hills`,`Jubilee Hills`,`Secunderabad`]},{groupName:`Other Cities`,locations:[`Warangal`,`Karimnagar`,`Nizamabad`,`Khammam`]}];search(){console.log({service:this.selectedService,location:this.location,date:this.date}),this.router.navigate([`/poojaris`])}static ɵfac=function(e){return new(e||n)(oe(fe$1))};static ɵcmp=LD({type:n,selectors:[[`app-home-section`]],decls:69,vars:0,consts:[[1,`hero-section`],[`id`,`heroCarousel`,`data-bs-ride`,`carousel`,`data-bs-interval`,`5000`,1,`carousel`,`slide`,`carousel-fade`,`hero-carousel`],[1,`carousel-indicators`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`0`,`aria-current`,`true`,`aria-label`,`Slide 1`,1,`active`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`1`,`aria-label`,`Slide 2`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`2`,`aria-label`,`Slide 3`],[1,`carousel-inner`],[1,`carousel-item`,`active`],[`src`,`images/slide3.png`,`alt`,`Temple Services`,1,`d-block`,`w-100`],[1,`carousel-item`],[`src`,`images/slide1.png`,`alt`,`Puja Services`,1,`d-block`,`w-100`],[`src`,`images/slide2.png`,`alt`,`Traditional Services`,1,`d-block`,`w-100`],[`src`,`images/slide4.png`,`alt`,`Temple Services`,1,`d-block`,`w-100`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide`,`prev`,1,`carousel-control-prev`],[`aria-hidden`,`true`,1,`carousel-control-prev-icon`],[1,`visually-hidden`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide`,`next`,1,`carousel-control-next`],[`aria-hidden`,`true`,1,`carousel-control-next-icon`],[1,`hero-gradient`],[1,`hero-content-wrapper`],[1,`container-fluid`,`px-3`,`mt-4`,`px-lg-5`],[1,`hero-copy`],[1,`hero-eyebrow`],[1,`hero-search-wrapper`],[1,`container-fluid`,`px-3`,`px-lg-5`],[1,`hero-search`],[1,`search-field`],[1,`search-icon`],[1,`bi`,`bi-translate`],[1,`search-field-content`],[`id`,`service-select`,1,`form-select`],[3,`value`],[1,`bi`,`bi-fire`],[1,`bi`,`bi-geo-alt`],[`id`,`location-select`,1,`form-select`],[3,`label`],[1,`bi`,`bi-calendar3`],[`type`,`date`,`id`,`date-input`,1,`form-control`],[`type`,`button`,1,`search-button`,3,`click`]],template:function(e,t){e&1&&(mi(0,`section`,0)(1,`div`,1)(2,`div`,2),mp(3,`button`,3)(4,`button`,4)(5,`button`,5),Sc(),mi(6,`div`,6)(7,`div`,7),mp(8,`img`,8),Sc(),mi(9,`div`,9),mp(10,`img`,10),Sc(),mi(11,`div`,9),mp(12,`img`,11),Sc(),mi(13,`div`,9),mp(14,`img`,12),Sc()(),mi(15,`button`,13),mp(16,`span`,14),mi(17,`span`,15),WE(18,` Previous `),Sc()(),mi(19,`button`,16),mp(20,`span`,17),mi(21,`span`,15),WE(22,` Next `),Sc()()(),mp(23,`div`,18),mi(24,`div`,19)(25,`div`,20)(26,`div`,21)(27,`div`,22),WE(28,` TRADITIONAL SERVICES FOR YOUR SPECIAL MOMENTS `),Sc(),mi(29,`h2`),WE(30,` Book Verified Poojaris,`),mp(31,`br`),WE(32,` Bajanthri & Pooja Samagri`),mp(33,`br`),WE(34,` All in One Place `),Sc(),mi(35,`p`),WE(36,` From daily poojas to grand celebrations, Poojari4U brings tradition, trust and convenience together. `),Sc()()()(),mi(37,`div`,23)(38,`div`,24)(39,`div`,25)(40,`div`,26)(41,`div`,27),mp(42,`i`,28),Sc(),mi(43,`div`,29)(44,`select`,30),oE(45,Ba,2,2,`option`,31,ln),Sc()()(),mi(47,`div`,26)(48,`div`,27),mp(49,`i`,32),Sc(),mi(50,`div`,29)(51,`select`,30),oE(52,Ha,2,2,`option`,31,ln),Sc()()(),mi(54,`div`,26)(55,`div`,27),mp(56,`i`,33),Sc(),mi(57,`div`,29)(58,`select`,34),oE(59,ja,3,1,`optgroup`,35,za),Sc()()(),mi(61,`div`,26)(62,`div`,27),mp(63,`i`,36),Sc(),mi(64,`div`,29),mp(65,`input`,37),Sc()(),mi(66,`button`,38),wp(`click`,function(){return t.search()}),mi(67,`span`),WE(68,`Search`),Sc()()()()()()),e&2&&(ov(45),iE(t.languages),ov(7),iE(t.ceremonies),ov(7),iE(t.locationGroups))},dependencies:[Zn$1,$n$1,qn$1,Tn$1,zn$1,sn,an,on,Ii],styles:[`.hero-section[_ngcontent-%COMP%]{position:relative;width:100%;height:83vh;overflow:hidden}.hero-carousel[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;z-index:1}.hero-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{width:100%;height:100%}.hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:80px -60px}.hero-gradient[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(90deg,#fff8ecfa,#fff8eced 25%,#fff8ecb8 42%,#fff8ec40 62%,#fff8ec00 80%)}.hero-content-wrapper[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:3;display:flex;align-items:flex-start;padding-top:30px;pointer-events:none}.hero-copy[_ngcontent-%COMP%]{max-width:650px;pointer-events:auto}.hero-eyebrow[_ngcontent-%COMP%]{color:#d75f08;font-weight:700;font-size:16px;letter-spacing:.2px;margin-bottom:15px}.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:50px;line-height:1.12;max-width:620px;margin-bottom:10px;color:#3a2417;font-weight:700}.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:510px;margin-top:18px;color:#62564e;font-size:16px;line-height:1.55}.hero-search-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:55px;z-index:5}.hero-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:75%;padding:10px;background:#fffffff5;border:1px solid rgba(220,210,195,.8);border-radius:14px;box-shadow:0 8px 30px #3c281424;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.search-field[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;height:55px;min-width:0;padding:7px;background:#fff;border:1px solid #eee8df;border-radius:10px}.search-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#faecda;color:#e8750b;font-size:18px}.search-field-content[_ngcontent-%COMP%]{min-width:0;flex:1;margin:5px 10px}.search-field-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;margin-bottom:1px}.search-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .search-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border:0;outline:0;background:transparent;color:#76695e;width:100%;font-size:12px;padding:0!important}.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:14px}.search-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .search-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus{box-shadow:none}.search-button[_ngcontent-%COMP%]{flex-shrink:0;width:175px;height:55px;border-radius:10px;background:#e8750b;color:#fff;font-weight:600;font-size:14px;border:none}.hero-carousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]{z-index:4;width:6%}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]{z-index:4;bottom:50px}@media(max-width:991px){.hero-section[_ngcontent-%COMP%]{height:700px}.hero-content-wrapper[_ngcontent-%COMP%]{padding-top:70px}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:44px}.hero-search[_ngcontent-%COMP%]{flex-wrap:wrap}.search-field[_ngcontent-%COMP%]{flex:1 1 calc(50% - 10px)}.search-button[_ngcontent-%COMP%]{width:100%;flex:1 1 100%}}@media(max-width:575px){.hero-section[_ngcontent-%COMP%]{height:725px}.hero-carousel[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{height:100%}.hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover;object-position:65% center}.hero-gradient[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fff8ecfa,#fff8ecf0 38%,#fff8ec8c 62%,#fff8ec26)}.hero-content-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:auto;padding-top:50px;display:block}.hero-copy[_ngcontent-%COMP%]{padding:0 10px;max-width:100%}.hero-eyebrow[_ngcontent-%COMP%]{font-size:10px;margin-bottom:12px}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px;line-height:1.1;letter-spacing:-.5px}.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5;max-width:100%;margin-top:15px}.hero-search-wrapper[_ngcontent-%COMP%]{position:absolute;inset:430px 0 auto;z-index:6}.hero-search[_ngcontent-%COMP%]{width:100%;padding:8px;display:flex;flex-direction:column;gap:8px;border-radius:14px}.search-field[_ngcontent-%COMP%]{width:100%;flex:none;height:55px;min-height:55px}.search-button[_ngcontent-%COMP%]{width:100%;height:50px;flex:none}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:18px;z-index:10;margin:0;display:flex;justify-content:center}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:8px;height:8px;margin:0 4px;border-radius:50%;border:0}.hero-carousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]{width:12%;z-index:8}}`]})};var Wa=(n,r)=>r.id;function qa(n,r){if(n&1&&mp(0,`img`,9),n&2){let e=mE().$implicit;gp(`src`,e.imageUrl,rf)(`alt`,e.title)}}function Ka(n,r){n&1&&mp(0,`div`,10)}function Ga(n,r){if(n&1&&(mi(0,`div`,6)(1,`div`,7)(2,`div`,8),tE(3,qa,1,2,`img`,9)(4,Ka,1,0,`div`,10),Sc(),mi(5,`div`,11)(6,`div`)(7,`h6`,12),WE(8),Sc()(),mi(9,`div`,13)(10,`p`,14),WE(11),Sc(),mi(12,`a`,15),WE(13,` → `),Sc()()()()()),n&2){let e=r.$implicit;ov(3),nE(e.imageUrl?3:4),ov(5),xc(` `,e.title,` `),ov(3),xc(` `,e.description,` `),ov(),gp(`routerLink`,QE(e.linkUrl))}}var et=class n{services=$o([{id:1,title:`Poojaris`,description:`Griha Pravesh, Satyanarayana, Homam, Wedding & more`,imageUrl:`home/poojari.png`,linkUrl:`/poojaris`},{id:2,title:`Bajanthri`,description:`Nadaswaram, Thavil, Dolu, Dappu & Traditional Teams`,imageUrl:`home/bajantri1.jpeg`,linkUrl:`#`},{id:3,title:`Pooja Samagri`,description:`Pooja kits and materials for all Poojas and festivals`,imageUrl:`home/pooja-samagri.png`,linkUrl:`#`},{id:4,title:`Packages`,description:`Griha Pravesh, Wedding, Homam & Festival Packages`,imageUrl:`home/packages.png`,linkUrl:`#`}]);static ɵfac=function(e){return new(e||n)};static ɵcmp=LD({type:n,selectors:[[`app-popular-poojas`]],decls:10,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fdfbf7`],[1,`container-fluid`,`px-lg-5`,`py-3`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`mb-4`],[1,`fw-bold`,`mb-0`,2,`color`,`#2b1d16`,`font-family`,`serif`],[`href`,`#`,1,`text-decoration-none`,`fw-semibold`,2,`color`,`#e66a0a`],[1,`row`,`g-4`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`overflow-hidden`,`border-light-subtle`,`card-hover`],[1,`card-img-container`,`position-relative`,`bg-light`],[1,`card-img-top`,`object-fit-cover`,3,`src`,`alt`],[1,`empty-image-placeholder`],[1,`card-body`,`p-2`,`d-flex`,`flex-column`,`justify-content-between`],[1,`card-title`,`fw-bold`,`text-dark`,`mb-1`],[1,`d-flex`,`justify-content-between`],[1,`card-text`,`text-muted`,`small`,`mb-0`],[`aria-label`,`Explore service`,1,`btn`,`btn-arrow`,`rounded-circle`,`d-flex`,`align-items-center`,`justify-content-center`,`text-decoration-none`,3,`routerLink`]],template:function(e,t){e&1&&(mi(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`h2`,3),WE(4,` Popular Services `),Sc(),mi(5,`a`,4),WE(6,` View All → `),Sc()(),mi(7,`div`,5),oE(8,Ga,14,5,`div`,6,Wa),Sc()()()),e&2&&(ov(8),iE(t.services()))},dependencies:[Gt],styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card-hover[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1.25rem #00000014!important}.card-img-container[_ngcontent-%COMP%]{height:135px;width:100%;overflow:hidden}.card-img-top[_ngcontent-%COMP%]{height:100%;width:100%;object-position:center 33%}.card-body[_ngcontent-%COMP%]{height:75px}.card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:15px}.card-body[_ngcontent-%COMP%]   .p-2[_ngcontent-%COMP%]{padding:.75rem!important}.empty-image-placeholder[_ngcontent-%COMP%]{height:100%;background-color:#fff}.card-text[_ngcontent-%COMP%]{font-size:12px;padding:0 10px 0 0;line-height:15px}.btn-arrow[_ngcontent-%COMP%]{width:32px;height:32px;background-color:#fff3e0;color:#e66a0a;border:none;font-size:.9rem;transition:background-color .2s ease}.btn-arrow[_ngcontent-%COMP%]:hover{background-color:#ffe0b2;color:#cd5c06}`]})};var Ua=(n,r)=>r.stepNumber;function Qa(n,r){if(n&1&&(Mc(0,`div`,5)(1,`div`,12)(2,`div`,13)(3,`span`,14),WE(4),Nc(),Mc(5,`h5`,15),WE(6),Nc(),Mc(7,`p`,16),WE(8),Nc()()()()),n&2){let e=r.$implicit;ov(4),xc(` `,e.stepNumber,` `),ov(2),xc(` `,e.title,` `),ov(2),xc(` `,e.description,` `)}}var tt=class n{steps=$o([{stepNumber:1,title:`Choose Service`,description:`Sathyanarayana Pooja, Griha Pravesham, Homam, wedding and more.`},{stepNumber:2,title:`Select Location & Date`,description:`Enter your preferred City and Ceremony Date for Service availability.`},{stepNumber:3,title:`Select verified Poojari`,description:`Choose your preferred poojari for the ceremony.`},{stepNumber:4,title:`Confirm Booking`,description:`Review the request and continue to confirmation.`}]);static ɵfac=function(e){return new(e||n)};static ɵcmp=LD({type:n,selectors:[[`app-booking-process`]],decls:20,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fdfbf7`],[1,`container-fluid`,`px-lg-5`,`text-center`,`py-4`],[1,`display-6`,`fw-bold`,`mb-3`,2,`color`,`#2b1d16`,`font-family`,`serif`],[1,`text-secondary`,`mb-5`],[1,`row`,`g-4`,`justify-content-center`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`container-fluid`,`px-lg-5`,`my-5`],[1,`p-4`,`p-md-5`,`rounded-4`,`text-white`,`d-flex`,`flex-column`,`flex-md-row`,`align-items-md-center`,`justify-content-between`,`gap-3`,2,`background-color`,`#2e1c14`],[1,`fw-bold`,`mb-2`],[1,`mb-0`,`text-white-50`],[1,`flex-shrink-0`],[`href`,`#`,1,`btn`,`fw-semibold`,`px-4`,`py-2`,`text-white`,`rounded-pill`,2,`background-color`,`#e66a0a`,`border`,`none`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`p-3`,`border-light-subtle`],[1,`card-body`,`d-flex`,`flex-column`,`align-items-center`,`justify-content-center`],[1,`fs-2`,`mb-3`,`fw-medium`,`text-dark`],[1,`card-title`,`fw-bold`,`text-dark`,`mb-2`],[1,`card-text`,`text-muted`,`description`,`small`,`mb-0`]],template:function(e,t){e&1&&(Mc(0,`section`,0)(1,`div`,1)(2,`h2`,2),WE(3,` Simple Booking `),Nc(),Mc(4,`p`,3),WE(5,` Choose what you need, select a date and request your service. `),Nc(),Mc(6,`div`,4),oE(7,Qa,9,3,`div`,5,Ua),Nc()()(),Mc(9,`section`)(10,`div`,6)(11,`div`,7)(12,`div`)(13,`h3`,8),WE(14,`Are You a Poojari?`),Nc(),Mc(15,`p`,9),WE(16,`Join Poojari4U and connect with families looking for traditional services.`),Nc()(),Mc(17,`div`,10)(18,`a`,11),WE(19,` Register as a Poojari `),Nc()()()()()),e&2&&(ov(7),iE(t.steps()))},dependencies:[aC],styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1rem #00000014!important}.btn[style*="background-color: #e66a0a"][_ngcontent-%COMP%]:hover{background-color:#cd5c06!important}.description[_ngcontent-%COMP%]{height:40px}`]})};var $a=(n,r)=>r.id;function Xa(n,r){if(n&1&&(Mc(0,`div`,5)(1,`div`,6)(2,`div`,7)(3,`div`,8),WE(4),Nc(),Mc(5,`h5`,9),WE(6),Nc(),Mc(7,`p`,10),WE(8),Nc()()()()),n&2){let e=r.$implicit;ov(4),xc(` `,e.icon,` `),ov(2),xc(` `,e.title,` `),ov(2),xc(` `,e.description,` `)}}var it=class n{features=$o([{id:1,icon:`✓`,title:`Verified Poojaris`,description:`Profiles can be reviewed before booking.`},{id:2,icon:`₹`,title:`Transparent Pricing`,description:`View service and package pricing clearly.`},{id:3,icon:`ॐ`,title:`Multiple Services`,description:`Poojari, Bajanthri, Samagri and packages in one place.`},{id:4,icon:`⭐`,title:`Customer Reviews`,description:`Share your experience after a completed service.`}]);static ɵfac=function(e){return new(e||n)};static ɵcmp=LD({type:n,selectors:[[`app-why-poojari4u`]],decls:9,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fff3e5`],[1,`container-fluid`,`px-lg-5`,`text-center`,`py-4`],[1,`display-6`,`fw-bold`,`mb-3`],[1,`text-secondary`,`mb-5`,`fs-6`],[1,`row`,`g-4`,`justify-content-center`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`p-3`,`border-light-subtle`],[1,`card-body`,`d-flex`,`flex-column`,`align-items-center`,`justify-content-center`],[1,`fs-2`,`mb-2`,`text-dark`,`d-flex`,`align-items-center`,`justify-content-center`,`icon-container`],[1,`card-title`,`fw-bold`,`title`,`text-dark`,`mb-2`],[1,`card-text`,`text-muted`,`description`,`mb-0`,`px-1`]],template:function(e,t){e&1&&(Mc(0,`section`,0)(1,`div`,1)(2,`h2`,2),WE(3,` Why Poojari4U? `),Nc(),Mc(4,`p`,3),WE(5,` Making traditional ceremonies easier to arrange. `),Nc(),Mc(6,`div`,4),oE(7,Xa,9,3,`div`,5,$a),Nc()()()),e&2&&(ov(7),iE(t.features()))},styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1rem #00000014!important}.icon-container[_ngcontent-%COMP%]{height:48px;line-height:1}.display-6[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:34px;color:#2b1d16}.title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.description[_ngcontent-%COMP%]{font-size:14px}`]})};var dn=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=LD({type:n,selectors:[[`app-home`]],decls:5,vars:0,template:function(e,t){e&1&&(mi(0,`main`),mp(1,`app-home-section`)(2,`app-popular-poojas`)(3,`app-why-poojari4u`)(4,`app-booking-process`),Sc())},dependencies:[Ze,et,tt,it],encapsulation:2})};export{dn as Home};