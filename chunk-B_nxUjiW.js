import{A as Jf,An as pi$1,At as ae,B as Mh,Bn as tc,Cn as oE,Ct as Zf,D as Hf,Dn as or$1,Dt as _h,E as Gv,Et as _e,F as Lf,Ft as cE,G as Of,Gn as uI,Gt as fI,Ht as eE,It as cI,J as RI,K as Pm,Lt as cp,Mn as qf,Mt as bL,N as Kf,Nt as be,O as Hv,On as ov,Ot as _o,P as Le,Pn as rc,Q as SI,R as M,Sn as np,Tt as _I,Un as tp,Ut as ec,Vt as dp,Wt as eu,X as S,Xn as vL,Xt as fp,_n as mh,_t as Yf,a as Ag,ar as yI,at as Td,b as EL,bn as nh,bt as Z,ct as UI,d as CI,dt as Wf,en as gg,et as Sh,f as CL,fn as lI,ft as Wl,i as AI,in as he,ir as yE,it as TL,jt as ay,kt as aa$1,l as Bf,ln as il,lr as zf,lt as Vf,mn as lr$1,mt as Xa$1,n as $f,nn as gn,nt as So,o as Ah,or as yL,ot as Tp,pn as lp,qn as ur$1,r as $v,rn as gt,rr as xl,s as Al,sn as hi$1,sr as yh,st as U,t as $,tr as xI,tt as Sn$1,u as C,ur as zn$1,ut as W,v as EE,vt as Yg,w as Gl,xn as ni$1,yn as nc,z as MI,zn as se,zt as dI}from"./chunk-BmfpqV7O.js";import{A as nr$1,B as xr$1,C as Xe$1,D as gr$1,E as gc,F as tr$1,I as vr$1,L as wt$1,M as qc,N as qe,O as jc,P as re,R as xc,S as Wn$1,T as fi$1,V as yn$1,a as At$1,b as V,d as Ii,f as Jc,h as Lr$1,i as An$1,j as oe$1,k as mu,l as Gu,m as Ku,o as Bc,p as Ke,s as E,u as H,v as O,w as di$1,x as Vu,y as Tt$1}from"./main-MMJ675GX.js";import{i as ln,r as an,s as un}from"./chunk-47idcNcC.js";var ii=new S(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>C(rc)});var He=`Method not implemented`;var ie=class{locale;_localeChanges=new Z;localeChanges=this._localeChanges;setTime(n,e,t,i){throw new Error(He)}getHours(n){throw new Error(He)}getMinutes(n){throw new Error(He)}getSeconds(n){throw new Error(He)}parseTime(n,e){throw new Error(He)}addSeconds(n,e){throw new Error(He)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let t=this.isValid(n),i=this.isValid(e);return t&&i?!this.compareDate(n,e):t==i}return n==e}sameTime(n,e){if(n&&e){let t=this.isValid(n),i=this.isValid(e);return t&&i?!this.compareTime(n,e):t==i}return n==e}clampDate(n,e,t){return e&&this.compareDate(n,e)<0?e:t&&this.compareDate(n,t)>0?t:n}};var Ae=new S(`mat-date-formats`);var bn=(()=>{class a{_animationsDisabled=re();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&np(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return a})();var fa=[`text`];var _a=[[[`mat-icon`]],`*`];var ga=[`mat-icon`,`*`];function va(a,n){if(a&1&&Bf(0,`mat-pseudo-checkbox`,1),a&2){let e=CI();Hf(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function ba(a,n){if(a&1&&Bf(0,`mat-pseudo-checkbox`,3),a&2)Hf(`disabled`,CI().disabled)}function ya(a,n){if(a&1&&(ni$1(0,`span`,4),eE(1),Xa$1()),a&2){let e=CI();ay(),nc(`(`,e.group.label,`)`)}}var xa=new S(`MAT_OPTION_PARENT_COMPONENT`);var Ca=new S(`MatOptgroup`);var ni=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var yn=(()=>{class a{_element=C(ur$1);_changeDetectorRef=C(EL);_parent=C(xa,{optional:!0});group=C(Ca,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=C(Tt$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=_o(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Le;_text;_stateChanges=new Z;constructor(){let e=C(H);e.load(di$1),e.load(Xe$1),this._signalDisableRipple=!!this._parent&&So(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!gc(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ni(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&Yf(fa,7),t&2){let r;SI(r=xI())&&(i._text=r.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&qf(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(o){return i._handleKeydown(o)}),t&2&&(Wf(`id`,i.id),Vf(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),np(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,TL]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:ga,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(_I(_a),cI(0,va,1,2,`mat-pseudo-checkbox`,1),MI(1),ni$1(2,`span`,2,0),MI(4,1),Xa$1(),cI(5,ba,1,1,`mat-pseudo-checkbox`,3),cI(6,ya,2,1,`span`,4),Bf(7,`div`,5)),t&2&&(lI(i.multiple?0:-1),ay(5),lI(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),ay(),lI(i.group&&i.group._inert?6:-1),ay(),Hf(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[bn,mu],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return a})();var xn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[oe$1]})}return a})();var ai=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[fi$1,xn,yn,oe$1]})}return a})();var Sa=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var wa=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ri(a,n){let e=Array(a);for(let t=0;t<a;t++)e[t]=n(t);return e}var Da=(()=>{class a extends ie{_matDateLocale=C(ii,{optional:!0});constructor(){super();let e=C(ii,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return ri(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return ri(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return ri(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let r=this._createDateWithOverflow(e,t,i);return r.getMonth(),r}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,U($({},t),{timeZone:`utc`}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(Sa.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,r){let o=this.clone(e);return o.setHours(t,i,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let r=this._parseTimeString(i);if(r===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();o.length>0&&(r=this._parseTimeString(o))}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let r=new Date;return r.setFullYear(e,t,i),r.setHours(0,0,0,0),r}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(wa);if(t){let i=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),d=t[4];if(i===12?i=d===`AM`?0:i:d===`PM`&&(i+=12),oi(i,0,23)&&oi(r,0,59)&&(o==null||oi(o,0,59)))return this.setTime(this.today(),i,r,o||0)}return null}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac,autoProvided:!1})}return a})();function oi(a,n,e){return!isNaN(a)&&a>=n&&a<=e}var ka={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var Cn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({providers:[Ma()]})}return a})();function Ma(a=ka){return[{provide:ie,useClass:Da},{provide:Ae,useValue:a}]}var Oa=20;var Ye=(()=>{class a{_ngZone=C(_e);_platform=C(E);_renderer=C(or$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Oa){return this._platform.isBrowser?new M(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(yh(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):nh()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Sn$1(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let i=V(t),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Aa=20;var Ne=(()=>{class a{_platform=C(E);_listeners;_viewportSize=null;_change=new Z;_document=C(zn$1);constructor(){let e=C(_e),t=C(or$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,i),t.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=Aa){return e>0?this._change.pipe(yh(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Re=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({})}return a})();var li=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[oe$1,Re,oe$1,Re]})}return a})();var Qe=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var Pe=class extends Qe{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=r||null,this.directives=o||null}};var Je=class extends Qe{templateRef;viewContainerRef;context;injector;constructor(n,e,t,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var di=class extends Qe{element;constructor(n){super(),this.element=n instanceof ur$1?n.nativeElement:n}};var wt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Pe)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Je)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof di)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Dt=class extends wt{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,i=t.get(gn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=n.injector||this._defaultInjector||he.NULL,r=i.get(se,t.injector);e=bL(n.component,{elementInjector:i,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ci=(()=>{class a extends wt{_moduleRef=C(gn,{optional:!0});_document=C(zn$1);_viewContainerRef=C(pi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Le;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(i,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(a)))(i||a)}})();static ɵdir=Gv({type:a,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Of]})}return a})();var kt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({})}return a})();var Sn=Bc();function ui(a){return new Mt(a.get(Ne),a.get(zn$1))}var Mt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=qc(-this._previousScrollPosition.left),n.style.top=qc(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,i=e.style,r=t.scrollBehavior||``,o=i.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),Sn&&(t.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Sn&&(t.scrollBehavior=r,i.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function An(a,n){return new Et(a.get(Ye),a.get(_e),a.get(Ne),n)}var Et=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Sn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var et=class{enable(){}disable(){}attach(){}};function mi(a,n){return n.some(e=>{let t=a.bottom<e.top,i=a.top>e.bottom,r=a.right<e.left,o=a.left>e.right;return t||i||r||o})}function wn(a,n){return n.some(e=>{let t=a.top<e.top,i=a.bottom>e.bottom,r=a.left<e.left,o=a.right>e.right;return t||i||r||o})}function je(a,n){return new Ot(a.get(Ye),a.get(Ne),a.get(_e),n)}var Ot=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();mi(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Rn=(()=>{class a{_injector=C(he);noop=()=>new et;close=e=>An(this._injector,e);block=()=>ui(this._injector);reposition=e=>je(this._injector,e);static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var tt=class{positionStrategy;scrollStrategy=new et;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var At=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Nn=(()=>{class a{_attachedOverlays=[];_document=C(zn$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Pn=(()=>{class a extends Nn{_ngZone=C(_e);_renderer=C(or$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let r=t[i];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Tn=(()=>{class a extends Nn{_platform=C(E);_ngZone=C(_e);_renderer=C(or$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,i),r.listen(t,`click`,this._clickListener,i),r.listen(t,`auxclick`,this._clickListener,i),r.listen(t,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=O(e)};_clickListener=e=>{let t=O(e),i=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let d=r[o],p=d._outsidePointerEvents;if(!(!d.hasAttached()||!this.canReceiveEvent(d,e,p))){if(Dn(d.overlayElement,t)||Dn(d.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();function Dn(a,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=n;for(;t;){if(t===a)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var In=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return a})();var Fn=(()=>{class a{_platform=C(E);_containerElement;_document=C(zn$1);_styleLoader=C(H);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||jc()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<i.length;r++)i[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),jc()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(In)}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var pi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,i){this._renderer=e,this._ngZone=t,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function fi(a){return a&&a.nodeType===1}var hi=new Set;var Rt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=W.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(n,e,t,i,r,o,d,p,y,_=!1,w,K){this._portalOutlet=n,this._host=e,this._pane=t,this._config=i,this._ngZone=r,this._keyboardDispatcher=o,this._document=d,this._location=p,this._outsideClickDispatcher=y,this._animationsDisabled=_,this._injector=w,this._renderer=K,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),hi.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Pm(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),hi.delete(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,hi.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=$($({},this._config),n),this._updateElementSize()}setDirection(n){this._config=U($({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=qc(this._config.width),n.height=qc(this._config.height),n.minWidth=qc(this._config.minWidth),n.minHeight=qc(this._config.minHeight),n.maxWidth=qc(this._config.maxWidth),n.maxHeight=qc(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;fi(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new pi(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let i=At$1(e||[]).filter(r=>!!r);i.length&&(t?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Pm(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var kn=`cdk-overlay-connected-position-bounding-box`;var Ra=/([A-Za-z%]+)$/;function nt(a,n){return new it(n,a.get(Ne),a.get(zn$1),a.get(E),a.get(Fn))}var it=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=W.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,i,r){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(kn),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,r=[],o;for(let d of this._preferredPositions){let p=this._getOriginPoint(n,i,d),y=this._getOverlayPoint(p,e,d),_=this._getOverlayFit(y,e,t,d);if(_.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(d,p);return}if(this._canFitWithFlexibleDimensions(_,y,t)){r.push({position:d,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,d)});continue}(!o||o.overlayFit.visibleArea<_.visibleArea)&&(o={overlayFit:_,overlayPoint:y,originPoint:p,position:d,overlayRect:e})}if(r.length){let d=null,p=-1;for(let y of r){let _=y.boundingBoxRect.width*y.boundingBoxRect.height*(y.position.weight||1);_>p&&(p=_,d=y)}this._isPushed=!1,this._applyPosition(d.position,d.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Te(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(kn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof ur$1?this._origin.nativeElement:fi(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let i;if(t.originX==`center`)i=n.left+n.width/2;else{let o=this._isRtl()?n.right:n.left,d=this._isRtl()?n.left:n.right;i=t.originX==`start`?o:d}e.left<0&&(i-=e.left);let r;return t.originY==`center`?r=n.top+n.height/2:r=t.originY==`top`?n.top:n.bottom,e.top<0&&(r-=e.top),{x:i,y:r}}_getOverlayPoint(n,e,t){let i;t.overlayX==`center`?i=-e.width/2:t.overlayX===`start`?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:n.x+i,y:n.y+r}}_getOverlayFit(n,e,t,i){let r=En(e),{x:o,y:d}=n,p=this._getOffset(i,`x`),y=this._getOffset(i,`y`);p&&(o+=p),y&&(d+=y);let _=0-o,w=o+r.width-t.width,K=0-d,Q=d+r.height-t.height,$=this._subtractOverflows(r.width,_,w),se=this._subtractOverflows(r.height,K,Q),Li=$*se;return{visibleArea:Li,isCompletelyWithinViewport:r.width*r.height===Li,fitsInViewportVertically:se===r.height,fitsInViewportHorizontally:$==r.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,r=t.right-e.x,o=Mn(this._overlayRef.getConfig().minHeight),d=Mn(this._overlayRef.getConfig().minWidth),p=n.fitsInViewportVertically||o!=null&&o<=i,y=n.fitsInViewportHorizontally||d!=null&&d<=r;return p&&y}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=En(e),r=this._viewportRect,o=Math.max(n.x+i.width-r.width,0),d=Math.max(n.y+i.height-r.height,0),p=Math.max(r.top-t.top-n.y,0),y=Math.max(r.left-t.left-n.x,0),_=0,w=0;return i.width<=r.width?_=y||-o:_=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,i.height<=r.height?w=p||-d:w=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:_,y:w},{x:n.x+_,y:n.y+w}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Na(this._lastScrollVisibility,t)){let i=new At(n,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=n.overlayY;n.overlayX===`center`?t=`center`:this._isRtl()?t=n.overlayX===`start`?`right`:`left`:t=n.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,i=this._isRtl(),r,o,d;if(e.overlayY===`top`)o=n.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)d=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-d+this._getViewportMarginTop();else{let Q=Math.min(t.bottom-n.y+t.top,n.y),$=this._lastBoundingBoxSize.height;r=Q*2,o=n.y-Q,r>$&&!this._isInitialRender&&!this._growAfterOpen&&(o=n.y-$/2)}let p=e.overlayX===`start`&&!i||e.overlayX===`end`&&i,y=e.overlayX===`end`&&!i||e.overlayX===`start`&&i,_,w,K;if(y)K=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),_=n.x-this._getViewportMarginStart();else if(p)w=n.x,_=t.right-n.x-this._getViewportMarginEnd();else{let Q=Math.min(t.right-n.x+t.left,n.x),$=this._lastBoundingBoxSize.width;_=Q*2,w=n.x-Q,_>$&&!this._isInitialRender&&!this._growAfterOpen&&(w=n.x-$/2)}return{top:o,left:w,bottom:d,right:K,width:_,height:r}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;i.width=qc(t.width),i.height=qc(t.height),i.top=qc(t.top)||`auto`,i.bottom=qc(t.bottom)||`auto`,i.left=qc(t.left)||`auto`,i.right=qc(t.right)||`auto`,e.overlayX===`center`?i.alignItems=`center`:i.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(i.maxHeight=qc(r)),o&&(i.maxWidth=qc(o))}this._lastBoundingBoxSize=t,Te(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Te(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Te(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let t={},i=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(i){let _=this._viewportRuler.getViewportScrollPosition();Te(t,this._getExactOverlayY(e,n,_)),Te(t,this._getExactOverlayX(e,n,_))}else t.position=`static`;let d=``,p=this._getOffset(e,`x`),y=this._getOffset(e,`y`);p&&(d+=`translateX(${p}px) `),y&&(d+=`translateY(${y}px)`),t.transform=d.trim(),o.maxHeight&&(i?t.maxHeight=qc(o.maxHeight):r&&(t.maxHeight=``)),o.maxWidth&&(i?t.maxWidth=qc(o.maxWidth):r&&(t.maxWidth=``)),Te(this._pane.style,t)}_getExactOverlayY(n,e,t){let i={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else i.top=qc(r.y);return i}_getExactOverlayX(n,e,t){let i={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=n.overlayX===`end`?`left`:`right`:o=n.overlayX===`end`?`right`:`left`,o===`right`)i.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else i.left=qc(r.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:wn(n,t),isOriginOutsideView:mi(n,t),isOverlayClipped:wn(e,t),isOverlayOutsideView:mi(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,i)=>t-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&At$1(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof ur$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let t=e.getBoundingClientRect();return n&&(e.style.display=``),t}};function Te(a,n){for(let e in n)n.hasOwnProperty(e)&&(a[e]=n[e]);return a}function Mn(a){if(typeof a!=`number`&&a!=null){let[n,e]=a.split(Ra);return!e||e===`px`?parseFloat(n):null}return a||null}function En(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Na(a,n){return a===n?!0:a.isOriginClipped===n.isOriginClipped&&a.isOriginOutsideView===n.isOriginOutsideView&&a.isOverlayClipped===n.isOverlayClipped&&a.isOverlayOutsideView===n.isOverlayOutsideView}var On=`cdk-global-overlay-wrapper`;function _i(a){return new Nt}var Nt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(On),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:i,height:r,maxWidth:o,maxHeight:d}=this._overlayRef.getConfig(),p=(i===`100%`||i===`100vw`)&&(!o||o===`100%`||o===`100vw`),y=(r===`100%`||r===`100vh`)&&(!d||d===`100%`||d===`100vh`),_=this._xPosition,w=this._xOffset,K=this._overlayRef.getConfig().direction===`rtl`,Q=``,$=``,se=``;p?se=`flex-start`:_===`center`?(se=`center`,K?$=w:Q=w):K?_===`left`||_===`end`?(se=`flex-end`,Q=w):(_===`right`||_===`start`)&&(se=`flex-start`,$=w):_===`left`||_===`start`?(se=`flex-start`,Q=w):(_===`right`||_===`end`)&&(se=`flex-end`,$=w),n.position=this._cssPosition,n.marginLeft=p?`0`:Q,n.marginTop=y?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=p?`0`:$,e.justifyContent=se,e.alignItems=y?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(On),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var Vn=(()=>{class a{_injector=C(he);global(){return _i()}flexibleConnectedTo(e){return nt(this._injector,e)}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var gi=new S(`OVERLAY_DEFAULT_CONFIG`);function at(a,n){a.get(H).load(In);let e=a.get(Fn),t=a.get(zn$1),i=a.get(Tt$1),r=a.get(hi$1),o=a.get(Lr$1),d=a.get(aa$1,null,{optional:!0})||a.get(or$1).createRenderer(null,null),p=new tt(n),y=a.get(gi,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||o.value,!t.body||!(`showPopover`in t.body)?p.usePopover=!1:p.usePopover=n?.usePopover??y;let _=t.createElement(`div`),w=t.createElement(`div`);_.id=i.getId(`cdk-overlay-`),_.classList.add(`cdk-overlay-pane`),w.appendChild(_),p.usePopover&&(w.setAttribute(`popover`,`manual`),w.classList.add(`cdk-overlay-popover`));let K=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return fi(K)?K.after(w):K?.type===`parent`?K.element.appendChild(w):e.getContainerElement().appendChild(w),new Rt(new Dt(_,r,a),w,_,p,a.get(_e),a.get(Pn),t,a.get(yn$1),a.get(Tn),n?.disableAnimations??a.get(gg,null,{optional:!0})===`NoopAnimations`,a.get(se),d)}var Ln=(()=>{class a{scrollStrategies=C(Rn);_positionBuilder=C(Vn);_injector=C(he);create(e){return at(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var rt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({providers:[Ln],imports:[oe$1,kt,li,li]})}return a})();var Ia=[`tooltip`];var Fa=20;var Va=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=C(he);return()=>je(a,{scrollThrottle:Fa})}});var La=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Bn=`tooltip-panel`;var Ba={passive:!0};var za=8;var Ha=8;var Ya=24;var ja=200;var zn=(()=>{class a{_elementRef=C(ur$1);_ngZone=C(_e);_platform=C(E);_ariaDescriber=C(xc);_focusMonitor=C(Ke);_dir=C(Lr$1);_injector=C(he);_viewContainerRef=C(pi$1);_mediaMatcher=C(qe);_document=C(zn$1);_renderer=C(aa$1);_animationsDisabled=re();_defaultOptions=C(La,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Wa;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Jc(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Jc(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=tr$1(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=tr$1(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=za}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ah(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Pe(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=i.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof ur$1)return this._overlayRef;this._detach()}let t=this._injector.get(Ye).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Bn}`,r=nt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return r.positionChanges.pipe(Ah(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=at(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Va)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ah(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ah(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ah(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset($($({},i.main),r.main)),this._addOffset($($({},i.fallback),r.fallback))])}_addOffset(e){let t=Ha,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:r,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:r,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Pm(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:r}=e,o;if(t===`center`?this._dir&&this._dir.value===`rtl`?o=i===`end`?`left`:`right`:o=i===`start`?`left`:`right`:o=t===`bottom`&&r===`top`?`above`:`below`,o!==this._currentPosition){let d=this._overlayRef;if(d){let p=`${this._cssClassPrefix}-${Bn}-`;d.removePanelClass(p+this._currentPosition),d.addPanelClass(p+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Ba))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Pm({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!gc(e):!0;static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&np(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var Wa=(()=>{class a{_changeDetectorRef=C(EL);_elementRef=C(ur$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=re();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ya&&e.width>=ja}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:i),t.classList.add(e?i:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let o=getComputedStyle(t);(o.getPropertyValue(`animation-duration`)===`0s`||o.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,i){if(t&1&&Yf(Ia,7),t&2){let r;SI(r=xI())&&(i._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,i){t&1&&qf(`mouseleave`,function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,i){t&1&&(ec(0,`div`,1,0),zf(`animationend`,function(o){return i._handleAnimationEnd(o)}),ec(2,`div`,2),eE(3),tc()()),t&2&&(UI(i.tooltipClass),np(`mdc-tooltip--multiline`,i._isMultiline),ay(3),cp(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return a})();var bi=class{_box;_destroyed=new Z;_resizeSubject=new Z;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new M(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Sn$1(e=>e.some(t=>t.target===n)),Mh({bufferSize:1,refCount:!0}),Ah(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Hn=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=C(_e);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new bi(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Xa=[`notch`];var Ua=[`*`];var Yn=[`iconPrefixContainer`];var jn=[`textPrefixContainer`];var Wn=[`iconSuffixContainer`];var Xn=[`textSuffixContainer`];var qa=[`textField`];var Ga=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Ka=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function $a(a,n){a&1&&Bf(0,`span`,21)}function Za(a,n){if(a&1&&(ni$1(0,`label`,20),MI(1,1),cI(2,$a,1,0,`span`,21),Xa$1()),a&2){let e=CI(2);Hf(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Vf(`for`,e._control.disableAutomaticLabeling?null:e._control.id),ay(2),lI(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Qa(a,n){if(a&1&&cI(0,Za,3,5,`label`,20),a&2)lI(CI()._hasFloatingLabel()?0:-1)}function Ja(a,n){a&1&&Bf(0,`div`,7)}function er(a,n){}function tr(a,n){if(a&1&&Lf(0,er,0,0,`ng-template`,13),a&2){CI(2);Hf(`ngTemplateOutlet`,RI(1))}}function ir(a,n){if(a&1&&(ni$1(0,`div`,9),cI(1,tr,1,1,null,13),Xa$1()),a&2){let e=CI();Hf(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),ay(),lI(e._forceDisplayInfixLabel()?-1:1)}}function nr(a,n){a&1&&(ni$1(0,`div`,10,2),MI(2,2),Xa$1())}function ar(a,n){a&1&&(ni$1(0,`div`,11,3),MI(2,3),Xa$1())}function rr(a,n){}function or(a,n){if(a&1&&Lf(0,rr,0,0,`ng-template`,13),a&2){CI();Hf(`ngTemplateOutlet`,RI(1))}}function sr(a,n){a&1&&(ni$1(0,`div`,14,4),MI(2,4),Xa$1())}function lr(a,n){a&1&&(ni$1(0,`div`,15,5),MI(2,5),Xa$1())}function dr(a,n){a&1&&Bf(0,`div`,16)}function cr(a,n){a&1&&(ni$1(0,`div`,18),MI(1,6),Xa$1())}function hr(a,n){if(a&1&&(ni$1(0,`mat-hint`,22),eE(1),Xa$1()),a&2){let e=CI(2);Hf(`id`,e._hintLabelId),ay(),cp(e.hintLabel)}}function mr(a,n){if(a&1&&(ni$1(0,`div`,19),cI(1,hr,2,2,`mat-hint`,22),MI(2,7),Bf(3,`div`,23),MI(4,8),Xa$1()),a&2){let e=CI();ay(),lI(e.hintLabel?1:-1)}}var yi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[`mat-label`]]})}return a})();var pr=new S(`MatError`);var xi=(()=>{class a{align=`start`;id=C(Tt$1).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,i){t&2&&(Wf(`id`,i.id),Vf(`align`,null),np(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return a})();var ur=new S(`MatPrefix`);var fr=new S(`MatSuffix`);var Qn=new S(`FloatingLabelParent`);var Un=(()=>{class a{_elementRef=C(ur$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=C(Hn);_ngZone=C(_e);_parent=C(Qn);_resizeSubscription=new W;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _r(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,i){t&2&&np(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return a})();function _r(a){let n=a;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var qn=`mdc-line-ripple--active`;var Pt=`mdc-line-ripple--deactivating`;var Gn=(()=>{class a{_elementRef=C(ur$1);_cleanupTransitionEnd;constructor(){let e=C(_e),t=C(aa$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Pt),e.add(qn)}deactivate(){this._elementRef.nativeElement.classList.add(Pt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Pt);e.propertyName===`opacity`&&i&&t.remove(qn,Pt)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return a})();var Kn=(()=>{class a{_elementRef=C(ur$1);_ngZone=C(_e);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,i){if(t&1&&Yf(Xa,5),t&2){let r;SI(r=xI())&&(i._notch=r.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,i){t&2&&np(`mdc-notched-outline--notched`,i.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ua,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,i){t&1&&(_I(),$f(0,`div`,1),ec(1,`div`,2,0),MI(3),tc(),$f(4,`div`,3))},encapsulation:2})}return a})();var gr=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a})}return a})();var vr=new S(`MatFormField`);var br=new S(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var $n=`fill`;var yr=`auto`;var Zn=`fixed`;var xr=`translateY(-50%)`;var Jn=(()=>{class a{_elementRef=C(ur$1);_changeDetectorRef=C(EL);_platform=C(E);_idGenerator=C(Tt$1);_ngZone=C(_e);_defaults=C(br,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=yL(`iconPrefixContainer`);_textPrefixContainerSignal=yL(`textPrefixContainer`);_iconSuffixContainerSignal=yL(`iconSuffixContainer`);_textSuffixContainerSignal=yL(`textSuffixContainer`);_prefixSuffixContainers=EE(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=vL(yi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Jc(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||yr}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||$n;this._appearanceSignal.set(t)}_appearanceSignal=_o($n);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Zn}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Zn}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=re();constructor(){let e=this._defaults,t=C(Lr$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),eu(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=EE(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Sh([void 0,void 0]),gt(()=>[t.errorState,t.userAriaDescribedBy]),_h(),Sn$1(([[r,o],[d,p]])=>r!==d||o!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ah(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),mh(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){CL({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=EE(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let r=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,o=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,i;if(t){let r=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!r.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,d=t?.getBoundingClientRect().width??0,p=i?.getBoundingClientRect().width??0,y=r?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${xr} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+d+p+y]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-form-field`]],contentQueries:function(t,i,r){if(t&1&&(Kf(r,i._labelChild,yi,5),Zf(r,gr,5)(r,ur,5)(r,fr,5)(r,pr,5)(r,xi,5)),t&2){AI();let o;SI(o=xI())&&(i._formFieldControl=o.first),SI(o=xI())&&(i._prefixChildren=o),SI(o=xI())&&(i._suffixChildren=o),SI(o=xI())&&(i._errorChildren=o),SI(o=xI())&&(i._hintChildren=o)}},viewQuery:function(t,i){if(t&1&&(Jf(i._iconPrefixContainerSignal,Yn,5)(i._textPrefixContainerSignal,jn,5)(i._iconSuffixContainerSignal,Wn,5)(i._textSuffixContainerSignal,Xn,5),Yf(qa,5)(Yn,5)(jn,5)(Wn,5)(Xn,5)(Un,5)(Kn,5)(Gn,5)),t&2){AI(4);let r;SI(r=xI())&&(i._textField=r.first),SI(r=xI())&&(i._iconPrefixContainer=r.first),SI(r=xI())&&(i._textPrefixContainer=r.first),SI(r=xI())&&(i._iconSuffixContainer=r.first),SI(r=xI())&&(i._textSuffixContainer=r.first),SI(r=xI())&&(i._floatingLabel=r.first),SI(r=xI())&&(i._notchedOutline=r.first),SI(r=xI())&&(i._lineRipple=r.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,i){t&2&&np(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._control.errorState)(`mat-form-field-disabled`,i._control.disabled)(`mat-form-field-autofilled`,i._control.autofilled)(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[cE([{provide:vr,useExisting:a},{provide:Qn,useExisting:a}])],ngContentSelectors:Ka,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,i){if(t&1&&(_I(Ga),Lf(0,Qa,1,1,`ng-template`,null,0,yE),ni$1(2,`div`,6,1),qf(`click`,function(o){return i._control.onContainerClick(o)}),cI(4,Ja,1,0,`div`,7),ni$1(5,`div`,8),cI(6,ir,2,2,`div`,9),cI(7,nr,3,0,`div`,10),cI(8,ar,3,0,`div`,11),ni$1(9,`div`,12),cI(10,or,1,1,null,13),MI(11),Xa$1(),cI(12,sr,3,0,`div`,14),cI(13,lr,3,0,`div`,15),Xa$1(),cI(14,dr,1,0,`div`,16),Xa$1(),ni$1(15,`div`,17),cI(16,cr,2,0,`div`,18)(17,mr,5,1,`div`,19),Xa$1()),t&2){let r;ay(2),np(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,i._control.disabled)(`mdc-text-field--invalid`,i._control.errorState),ay(2),lI(!i._hasOutline()&&!i._control.disabled?4:-1),ay(2),lI(i._hasOutline()?6:-1),ay(),lI(i._hasIconPrefix?7:-1),ay(),lI(i._hasTextPrefix?8:-1),ay(2),lI(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),ay(2),lI(i._hasTextSuffix?12:-1),ay(),lI(i._hasIconSuffix?13:-1),ay(),lI(i._hasOutline()?-1:14),ay(),np(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let o=i._getSubscriptMessageType();ay(),lI((r=o)===`error`?16:r===`hint`?17:-1)}},dependencies:[Un,Kn,Ii,Gn,xi],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return a})();function Cr(a,n){return this._trackRow(n)}var ra=(a,n)=>n.id;function Sr(a,n){if(a&1&&(ec(0,`tr`,0)(1,`td`,3),eE(2),tc()()),a&2){let e=CI();ay(),tp(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Vf(`colspan`,e.numCols),ay(),nc(` `,e.label,` `)}}function wr(a,n){if(a&1&&(ec(0,`td`,3),eE(1),tc()),a&2){let e=CI(2);tp(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),Vf(`colspan`,e._firstRowOffset),ay(),nc(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function Dr(a,n){if(a&1){let e=yI();ec(0,`td`,6)(1,`button`,7),zf(`click`,function(i){let r=xl(e).$implicit;return Al(CI(2)._cellClicked(r,i))})(`focus`,function(i){let r=xl(e).$implicit;return Al(CI(2)._emitActiveDateChange(r,i))}),ec(2,`span`,8),eE(3),tc(),$f(4,`span`,9),tc()()}if(a&2){let e=n.$implicit,t=n.$index,i=CI().$index,r=CI();tp(`width`,r._cellWidth)(`padding-top`,r._cellPadding)(`padding-bottom`,r._cellPadding),Vf(`data-mat-row`,i)(`data-mat-col`,t),ay(),UI(e.cssClasses),np(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,r._isActiveCell(i,t))(`mat-calendar-body-range-start`,r._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,r._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,r._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,r._isComparisonBridgeStart(e.compareValue,i,t))(`mat-calendar-body-comparison-bridge-end`,r._isComparisonBridgeEnd(e.compareValue,i,t))(`mat-calendar-body-comparison-start`,r._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,r._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,r._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,r._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,r._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,r._isInPreview(e.compareValue)),Wf(`tabIndex`,r._isActiveCell(i,t)?0:-1),Vf(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,r._isSelected(e.compareValue))(`aria-current`,r.todayValue===e.compareValue?`date`:null)(`aria-describedby`,r._getDescribedby(e.compareValue)),ay(),np(`mat-calendar-body-selected`,r._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,r._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,r.todayValue===e.compareValue),ay(),nc(` `,e.displayValue,` `)}}function kr(a,n){if(a&1&&(ec(0,`tr`,1),cI(1,wr,2,6,`td`,4),dI(2,Dr,5,49,`td`,5,ra),tc()),a&2){let e=n.$implicit,t=n.$index,i=CI();ay(),lI(t===0&&i._firstRowOffset?1:-1),ay(),fI(e)}}function Mr(a,n){if(a&1&&(ni$1(0,`th`,2)(1,`span`,6),eE(2),Xa$1(),ni$1(3,`span`,3),eE(4),Xa$1()()),a&2){let e=n.$implicit;ay(2),cp(e.long),ay(2),cp(e.narrow)}}var Er=[`*`];function Or(a,n){}function Ar(a,n){if(a&1){let e=yI();ni$1(0,`mat-month-view`,4),fp(`activeDateChange`,function(i){xl(e);let r=CI();return oE(r.activeDate,i)||(r.activeDate=i),Al(i)}),qf(`_userSelection`,function(i){xl(e);return Al(CI()._dateSelected(i))})(`dragStarted`,function(i){xl(e);return Al(CI()._dragStarted(i))})(`dragEnded`,function(i){xl(e);return Al(CI()._dragEnded(i))}),Xa$1()}if(a&2){let e=CI();dp(`activeDate`,e.activeDate),Hf(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function Rr(a,n){if(a&1){let e=yI();ni$1(0,`mat-year-view`,5),fp(`activeDateChange`,function(i){xl(e);let r=CI();return oE(r.activeDate,i)||(r.activeDate=i),Al(i)}),qf(`monthSelected`,function(i){xl(e);return Al(CI()._monthSelectedInYearView(i))})(`selectedChange`,function(i){xl(e);return Al(CI()._goToDateInView(i,`month`))}),Xa$1()}if(a&2){let e=CI();dp(`activeDate`,e.activeDate),Hf(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function Nr(a,n){if(a&1){let e=yI();ni$1(0,`mat-multi-year-view`,6),fp(`activeDateChange`,function(i){xl(e);let r=CI();return oE(r.activeDate,i)||(r.activeDate=i),Al(i)}),qf(`yearSelected`,function(i){xl(e);return Al(CI()._yearSelectedInMultiYearView(i))})(`selectedChange`,function(i){xl(e);return Al(CI()._goToDateInView(i,`year`))}),Xa$1()}if(a&2){let e=CI();dp(`activeDate`,e.activeDate),Hf(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function Pr(a,n){}var Tr=[`button`];var Ir=[[[``,`matDatepickerToggleIcon`,``]]];var Fr=[`[matDatepickerToggleIcon]`];function Vr(a,n){a&1&&(Wl(),ni$1(0,`svg`,2),Bf(1,`path`,3),Xa$1())}var Xe=(()=>{class a{changes=new Z;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||a)};static ɵprov=lr$1({token:a,factory:a.ɵfac})}return a})();var Lr=0;var st=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Lr++;cssClasses;constructor(n,e,t,i,r,o=n,d){this.value=n,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=d,this.cssClasses=r instanceof Set?Array.from(r):r}};var Br={passive:!1,capture:!0};var Tt={passive:!0,capture:!0};var ea={passive:!0};var We=(()=>{class a{_elementRef=C(ur$1);_ngZone=C(_e);_platform=C(E);_intl=C(Xe);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new Le;previewChange=new Le;activeDateChange=new Le;dragStarted=new Le;dragEnded=new Le;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=C(he);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=C(aa$1),t=C(Tt$1);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),C(H).load(di$1),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,r=[e.listen(i,`touchmove`,this._touchmoveHandler,Br),e.listen(i,`mouseenter`,this._enterHandler,Tt),e.listen(i,`focus`,this._enterHandler,Tt),e.listen(i,`mouseleave`,this._leaveHandler,Tt),e.listen(i,`blur`,this._leaveHandler,Tt),e.listen(i,`mousedown`,this._mousedownHandler,ea),e.listen(i,`touchstart`,this._mousedownHandler,ea)];this._platform.isBrowser&&r.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?r-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Pm(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return wi(e,this.startValue,this.endValue)}_isRangeEnd(e){return Di(e,this.startValue,this.endValue)}_isInRange(e){return ki(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return wi(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][i-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][i+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return Di(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return ki(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return wi(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Di(e,this.previewStart,this.previewEnd)}_isInPreview(e){return ki(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=ta(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Si(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Si(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=ta(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Si(e);if(t){let i=t.getAttribute(`data-mat-row`),r=t.getAttribute(`data-mat-col`);if(i&&r)return this.rows[parseInt(i)]?.[parseInt(r)]||null}return null}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Ag],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(t,i){t&1&&(cI(0,Sr,3,6,`tr`,0),dI(1,kr,4,1,`tr`,1,Cr,!0),ec(3,`span`,2),eE(4),tc(),ec(5,`span`,2),eE(6),tc(),ec(7,`span`,2),eE(8),tc(),ec(9,`span`,2),eE(10),tc()),t&2&&(lI(i._firstRowOffset<i.labelMinRequiredCells?0:-1),ay(),fI(i.rows),ay(2),Wf(`id`,i._startDateLabelId),ay(),nc(` `,i.startDateAccessibleName,`
`),ay(),Wf(`id`,i._endDateLabelId),ay(),nc(` `,i.endDateAccessibleName,`
`),ay(),Wf(`id`,i._comparisonStartDateLabelId),ay(),lp(` `,i.comparisonDateAccessibleName,` `,i.startDateAccessibleName,`
`),ay(),Wf(`id`,i._comparisonEndDateLabelId),ay(),lp(` `,i.comparisonDateAccessibleName,` `,i.endDateAccessibleName,`
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
`],encapsulation:2})}return a})();function Ci(a){return a?.nodeName===`TD`}function Si(a){let n;return Ci(a)?n=a:Ci(a.parentNode)?n=a.parentNode:Ci(a.parentNode?.parentNode)&&(n=a.parentNode.parentNode),n?.getAttribute(`data-mat-row`)!=null?n:null}function wi(a,n,e){return e!==null&&n!==e&&a<e&&a===n}function Di(a,n,e){return n!==null&&n!==e&&a>=n&&a===e}function ki(a,n,e,t){return t&&n!==null&&e!==null&&n!==e&&a>=n&&a<=e}function ta(a){let n=a.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var de=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}};var It=(()=>{class a{selection;_adapter;_selectionChanged=new Z;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){ov()};static ɵprov=ae({token:a,factory:a.ɵfac})}return a})();var zr=(()=>{class a extends It{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new a(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||a)(be(ie))};static ɵprov=ae({token:a,factory:a.ɵfac})}return a})();var Hr={provide:It,useFactory:()=>C(It,{optional:!0,skipSelf:!0})||new zr(C(ie))};var oa=new S(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var Mi=7;var Yr=0;var ia=(()=>{class a{_changeDetectorRef=C(EL);_dateFormats=C(Ae,{optional:!0});_dateAdapter=C(ie,{optional:!0});_dir=C(Lr$1,{optional:!0});_rangeStrategy=C(oa,{optional:!0});_rerenderSubscription=W.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new Le;_userSelection=new Le;dragStarted=new Le;dragEnded=new Le;activeDateChange=new Le;_matCalendarBody;_monthLabel=_o(``);_weeks=_o([]);_firstWeekOffset=_o(0);_rangeStart=_o(null);_rangeEnd=_o(null);_comparisonRangeStart=_o(null);_comparisonRangeEnd=_o(null);_previewStart=_o(null);_previewEnd=_o(null);_isRange=_o(!1);_todayDate=_o(null);_weekdays=_o([]);constructor(){C(H).load(Xe$1),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Sh(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof de?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!gc(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Mi+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Mi),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,r=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),r=this._dateAdapter.getDayOfWeekNames(`long`).map((o,d)=>({long:o,narrow:t[d],id:Yr++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Mi&&(i.push([]),o=0);let d=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),p=this._shouldEnableDate(d),y=this._dateAdapter.format(d,this._dateFormats.display.dateA11yLabel),_=this.dateClass?this.dateClass(d,`month`):void 0;i[i.length-1].push(new st(r+1,t[r],y,p,_,this._getCellCompareValue(d),d))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,i,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof de?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-month-view`]],viewQuery:function(t,i){if(t&1&&Yf(We,5),t&2){let r;SI(r=xI())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Ag],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(t,i){t&1&&(ni$1(0,`table`,0)(1,`thead`,1)(2,`tr`),dI(3,Mr,5,2,`th`,2,ra),Xa$1(),ni$1(5,`tr`,3),Bf(6,`th`,4),Xa$1()(),ni$1(7,`tbody`,5),qf(`selectedValueChange`,function(o){return i._dateSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`previewChange`,function(o){return i._previewChanged(o)})(`dragStarted`,function(o){return i.dragStarted.emit(o)})(`dragEnded`,function(o){return i._dragEnded(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Xa$1()()),t&2&&(ay(3),fI(i._weekdays()),ay(4),Hf(`label`,i._monthLabel())(`rows`,i._weeks())(`todayValue`,i._todayDate())(`startValue`,i._rangeStart())(`endValue`,i._rangeEnd())(`comparisonStart`,i._comparisonRangeStart())(`comparisonEnd`,i._comparisonRangeEnd())(`previewStart`,i._previewStart())(`previewEnd`,i._previewEnd())(`isRange`,i._isRange())(`labelMinRequiredCells`,3)(`activeCell`,i._dateAdapter.getDate(i.activeDate)-1)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName))},dependencies:[We],encapsulation:2})}return a})();var oe=24;var Ei=4;var na=(()=>{class a{_changeDetectorRef=C(EL);_dateAdapter=C(ie,{optional:!0});_dir=C(Lr$1,{optional:!0});_rerenderSubscription=W.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),sa(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new Le;yearSelected=new Le;activeDateChange=new Le;_matCalendarBody;_years=_o([]);_todayYear=_o(0);_selectedYear=_o(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Sh(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-ot(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let r=0,o=[];r<oe;r++)o.push(t+r),o.length==Ei&&(i.push(o.map(d=>this._createCellForYear(d))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ei);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ei);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ot(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,oe-ot(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-oe*10:-oe);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?oe*10:oe);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return ot(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new st(e,i,i,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof de){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,i){if(t&1&&Yf(We,5),t&2){let r;SI(r=xI())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(ni$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Bf(3,`th`,2),Xa$1()(),ni$1(4,`tbody`,3),qf(`selectedValueChange`,function(o){return i._yearSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Xa$1()()),t&2&&(ay(4),Hf(`rows`,i._years())(`todayValue`,i._todayYear())(`startValue`,i._selectedYear())(`endValue`,i._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._getActiveCell()))},dependencies:[We],encapsulation:2})}return a})();function sa(a,n,e,t,i){let r=a.getYear(n),o=a.getYear(e),d=la(a,t,i);return Math.floor((r-d)/oe)===Math.floor((o-d)/oe)}function ot(a,n,e,t){return jr(a.getYear(n)-la(a,e,t),oe)}function la(a,n,e){let t=0;return e?t=a.getYear(e)-oe+1:n&&(t=a.getYear(n)),t}function jr(a,n){return(a%n+n)%n}var aa=(()=>{class a{_changeDetectorRef=C(EL);_dateFormats=C(Ae,{optional:!0});_dateAdapter=C(ie,{optional:!0});_dir=C(Lr$1,{optional:!0});_rerenderSubscription=W.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new Le;monthSelected=new Le;activeDateChange=new Le;_matCalendarBody;_months=_o([]);_yearLabel=_o(``);_todayMonth=_o(null);_selectedMonth=_o(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Sh(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,`year`):void 0;return new st(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let r=i;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof de?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-year-view`]],viewQuery:function(t,i){if(t&1&&Yf(We,5),t&2){let r;SI(r=xI())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(ni$1(0,`table`,0)(1,`thead`,1)(2,`tr`),Bf(3,`th`,2),Xa$1()(),ni$1(4,`tbody`,3),qf(`selectedValueChange`,function(o){return i._monthSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),Xa$1()()),t&2&&(ay(4),Hf(`label`,i._yearLabel())(`rows`,i._months())(`todayValue`,i._todayMonth())(`startValue`,i._selectedMonth())(`endValue`,i._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._dateAdapter.getMonth(i.activeDate)))},dependencies:[We],encapsulation:2})}return a})();var da=(()=>{class a{_intl=C(Xe);calendar=C(Oi);_dateAdapter=C(ie,{optional:!0});_dateFormats=C(Ae,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){C(H).load(Xe$1);let e=C(EL);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-oe))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:oe))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):sa(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-ot(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+oe-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1))]}_periodButtonLabelId=C(Tt$1).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:Er,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(t,i){t&1&&(_I(),ni$1(0,`div`,0)(1,`div`,1)(2,`span`,2),eE(3),Xa$1(),ni$1(4,`button`,3),qf(`click`,function(){return i.currentPeriodClicked()}),ni$1(5,`span`,4),eE(6),Xa$1(),Wl(),ni$1(7,`svg`,5),Bf(8,`polygon`,6),Xa$1()(),Gl(),Bf(9,`div`,7),MI(10),ni$1(11,`button`,8),qf(`click`,function(){return i.previousClicked()}),Wl(),ni$1(12,`svg`,9),Bf(13,`path`,10),Xa$1()(),Gl(),ni$1(14,`button`,11),qf(`click`,function(){return i.nextClicked()}),Wl(),ni$1(15,`svg`,9),Bf(16,`path`,12),Xa$1()()()()),t&2&&(ay(2),Hf(`id`,i._periodButtonLabelId),ay(),cp(i.periodButtonDescription),ay(),Vf(`aria-label`,i.periodButtonLabel)(`aria-describedby`,i._periodButtonLabelId),ay(2),cp(i.periodButtonText),ay(),np(`mat-calendar-invert`,i.calendar.currentView!==`month`),ay(4),Hf(`disabled`,!i.previousEnabled())(`matTooltip`,i.prevButtonLabel),Vf(`aria-label`,i.prevButtonLabel),ay(3),Hf(`disabled`,!i.nextEnabled())(`matTooltip`,i.nextButtonLabel),Vf(`aria-label`,i.nextButtonLabel))},dependencies:[Vu,xr$1,zn],encapsulation:2})}return a})();var Oi=(()=>{class a{_dateAdapter=C(ie,{optional:!0});_dateFormats=C(Ae,{optional:!0});_changeDetectorRef=C(EL);_elementRef=C(ur$1);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new Le;yearSelected=new Le;monthSelected=new Le;viewChanged=new Le(!0);_userSelection=new Le;_userDragDrop=new Le;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new Z;constructor(){this._intlChanges=C(Xe).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Pe(this.headerComponent||da),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||i||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(wt$1())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof de||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-calendar`]],viewQuery:function(t,i){if(t&1&&Yf(ia,5)(aa,5)(na,5),t&2){let r;SI(r=xI())&&(i.monthView=r.first),SI(r=xI())&&(i.yearView=r.first),SI(r=xI())&&(i.multiYearView=r.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[cE([Hr]),Ag],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(t,i){if(t&1&&(Lf(0,Or,0,0,`ng-template`,0),ni$1(1,`div`,1),cI(2,Ar,1,11,`mat-month-view`,2)(3,Rr,1,6,`mat-year-view`,3)(4,Nr,1,6,`mat-multi-year-view`,3),Xa$1()),t&2){let r;Hf(`cdkPortalOutlet`,i._calendarHeaderPortal),ay(2),lI((r=i.currentView)===`month`?2:r===`year`?3:r===`multi-year`?4:-1)}},dependencies:[ci,nr$1,ia,aa,na],styles:[`.mat-calendar {
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
`],encapsulation:2})}return a})();var Wr=(()=>{class a{_elementRef=C(ur$1);_animationsDisabled=re();_changeDetectorRef=C(EL);_globalModel=C(It);_dateAdapter=C(ie);_ngZone=C(_e);_rangeSelectionStrategy=C(oa,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new Z;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(C(H).load(Xe$1),this._closeButtonText=C(Xe).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=C(aa$1);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,r=t instanceof de;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(r||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-datepicker-content`]],viewQuery:function(t,i){if(t&1&&Yf(Oi,5),t&2){let r;SI(r=xI())&&(i._calendar=r.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(t,i){t&2&&(UI(i.color?`mat-`+i.color:``),np(`mat-datepicker-content-touch`,i.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!i._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(t,i){t&1&&(ni$1(0,`div`,0)(1,`mat-calendar`,1),qf(`yearSelected`,function(o){return i.datepicker._selectYear(o)})(`monthSelected`,function(o){return i.datepicker._selectMonth(o)})(`viewChanged`,function(o){return i.datepicker._viewChanged(o)})(`_userSelection`,function(o){return i._handleUserSelection(o)})(`_userDragDrop`,function(o){return i._handleUserDragDrop(o)}),Xa$1(),Lf(2,Pr,0,0,`ng-template`,2),ni$1(3,`button`,3),qf(`focus`,function(){return i._closeButtonFocused=!0})(`blur`,function(){return i._closeButtonFocused=!1})(`click`,function(){return i.datepicker.close()}),eE(4),Xa$1()()),t&2&&(np(`mat-datepicker-content-container-with-custom-header`,i.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,i._actionsPortal),Vf(`aria-modal`,!0)(`aria-labelledby`,i._dialogLabelId??void 0),ay(),UI(i.datepicker.panelClass),Hf(`id`,i.datepicker.id)(`startAt`,i.datepicker.startAt)(`startView`,i.datepicker.startView)(`minDate`,i.datepicker._getMinDate())(`maxDate`,i.datepicker._getMaxDate())(`dateFilter`,i.datepicker._getDateFilter())(`headerComponent`,i.datepicker.calendarHeaderComponent)(`selected`,i._getSelected())(`dateClass`,i.datepicker.dateClass)(`comparisonStart`,i.comparisonStart)(`comparisonEnd`,i.comparisonEnd)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName),ay(),Hf(`cdkPortalOutlet`,i._actionsPortal),ay(),np(`cdk-visually-hidden`,!i._closeButtonFocused),Hf(`color`,i.color||`primary`),ay(),cp(i._closeButtonText))},dependencies:[gr$1,Oi,ci,Vu],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return a})();var Xr=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=Gv({type:a,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return a})();var Ur=(()=>{class a{_intl=C(Xe);_changeDetectorRef=C(EL);_stateChanges=W.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=C(new Tp(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:nh(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:nh(),i=this.datepicker?mh(this.datepicker.openedStream,this.datepicker.closedStream):nh();this._stateChanges.unsubscribe(),this._stateChanges=mh(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||a)};static ɵcmp=Hv({type:a,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(t,i,r){if(t&1&&Zf(r,Xr,5),t&2){let o;SI(o=xI())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&Yf(Tr,5),t&2){let r;SI(r=xI())&&(i._button=r.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(t,i){t&1&&qf(`click`,function(o){return i._open(o)}),t&2&&(Vf(`tabindex`,null)(`data-mat-calendar`,i.datepicker?i.datepicker.id:null),np(`mat-datepicker-toggle-active`,i.datepicker&&i.datepicker.opened)(`mat-accent`,i.datepicker&&i.datepicker.color===`accent`)(`mat-warn`,i.datepicker&&i.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,TL],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Ag],ngContentSelectors:Fr,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(t,i){t&1&&(_I(Ir),ni$1(0,`button`,1,0),cI(2,Vr,2,0,`:svg:svg`,2),MI(3),Xa$1()),t&2&&(Hf(`tabIndex`,i.disabled?-1:i.tabIndex)(`disabled`,i.disabled)(`disableRipple`,i.disableRipple),Vf(`aria-haspopup`,i.datepicker?`dialog`:null)(`aria-label`,i.ariaLabel||i._intl.openCalendarLabel)(`aria-expanded`,i.datepicker?i.datepicker.opened:null),ay(2),lI(i._customIcon?-1:2))},dependencies:[xr$1],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return a})();var ca=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({providers:[Xe],imports:[Gu,rt,vr$1,kt,Wr,Ur,da,oe$1,Re]})}return a})();var ha=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({})}return a})();var lt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[Wn$1,Jn,oe$1]})}return a})();var ma=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[lt,lt,ha,oe$1]})}return a})();var pa=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=$v({type:a});static ɵinj=il({imports:[rt,ai,oe$1,Re,lt,ai]})}return a})();var qr=(a,n)=>n.value;var Gr=(a,n)=>n.groupName;function Kr(a,n){if(a&1&&(ni$1(0,`option`,29),eE(1),Xa$1()),a&2){let e=n.$implicit;Hf(`value`,e.value),ay(),nc(` `,e.label,` `)}}function $r(a,n){if(a&1&&(ni$1(0,`option`,29),eE(1),Xa$1()),a&2){let e=n.$implicit;Hf(`value`,e),ay(),nc(` `,e,` `)}}function Zr(a,n){if(a&1&&(ni$1(0,`optgroup`,32),dI(1,$r,2,2,`option`,29,uI),Xa$1()),a&2){let e=n.$implicit;Hf(`label`,e.groupName),ay(),fI(e.locations)}}var Ft=class a{selectedService=``;location=``;date=null;ceremonies=[{value:``,label:`Select Service`},{value:`ganapathi-pooja`,label:`Ganapathi Pooja`},{value:`gruhapravesham`,label:`Gruhapravesham`},{value:`homam-havan`,label:`Homam / Havan`},{value:`satyanarayana-swamy-pooja`,label:`Satyanarayana Swamy Pooja`},{value:`lakshmi-pooja`,label:`Lakshmi Pooja`},{value:`wedding-rituals`,label:`Wedding Rituals`},{value:`namakarana`,label:`Namakarana`},{value:`vratham`,label:`Vratham`},{value:`pitru-karma`,label:`Pitru Karma`},{value:`temple-pooja-services`,label:`Temple Pooja Services`},{value:`birthday-ayushya-pooja`,label:`Birthday / Ayushya Pooja`},{value:`business-opening-pooja`,label:`Business Opening Pooja`}];locationGroups=[{groupName:`Hyderabad`,locations:[`Select Location`,`Kondapur`,`Gachibowli`,`Madhapur`,`Kukatpally`,`Miyapur`,`Banjara Hills`,`Jubilee Hills`,`Secunderabad`]},{groupName:`Other Cities`,locations:[`Warangal`,`Karimnagar`,`Nizamabad`,`Khammam`]}];search(){console.log({service:this.selectedService,location:this.location,date:this.date})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-home-section`]],decls:60,vars:0,consts:[[1,`hero-section`],[`id`,`heroCarousel`,`data-bs-ride`,`carousel`,`data-bs-interval`,`5000`,1,`carousel`,`slide`,`carousel-fade`,`hero-carousel`],[1,`carousel-indicators`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`0`,`aria-current`,`true`,`aria-label`,`Slide 1`,1,`active`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`1`,`aria-label`,`Slide 2`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide-to`,`2`,`aria-label`,`Slide 3`],[1,`carousel-inner`],[1,`carousel-item`,`active`],[`src`,`images/slide1.png`,`alt`,`Puja Services`,1,`d-block`,`w-100`],[1,`carousel-item`],[`src`,`images/slide5.jpeg`,`alt`,`Traditional Services`,1,`d-block`,`w-100`],[`src`,`images/slide6.jpeg`,`alt`,`Temple Services`,1,`d-block`,`w-100`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide`,`prev`,1,`carousel-control-prev`],[`aria-hidden`,`true`,1,`carousel-control-prev-icon`],[1,`visually-hidden`],[`type`,`button`,`data-bs-target`,`#heroCarousel`,`data-bs-slide`,`next`,1,`carousel-control-next`],[`aria-hidden`,`true`,1,`carousel-control-next-icon`],[1,`hero-gradient`],[1,`hero-content-wrapper`],[1,`container-fluid`,`px-3`,`px-lg-5`],[1,`hero-copy`],[1,`hero-eyebrow`],[1,`hero-search-wrapper`],[1,`hero-search`],[1,`search-field`],[1,`search-icon`],[1,`bi`,`bi-fire`],[1,`search-field-content`],[`id`,`service-select`,1,`form-select`],[3,`value`],[1,`bi`,`bi-geo-alt`],[`id`,`location-select`,1,`form-select`],[3,`label`],[1,`bi`,`bi-calendar3`],[`type`,`date`,`id`,`date-input`,1,`form-control`],[`type`,`button`,1,`search-button`]],template:function(e,t){e&1&&(ni$1(0,`section`,0)(1,`div`,1)(2,`div`,2),Bf(3,`button`,3)(4,`button`,4)(5,`button`,5),Xa$1(),ni$1(6,`div`,6)(7,`div`,7),Bf(8,`img`,8),Xa$1(),ni$1(9,`div`,9),Bf(10,`img`,10),Xa$1(),ni$1(11,`div`,9),Bf(12,`img`,11),Xa$1()(),ni$1(13,`button`,12),Bf(14,`span`,13),ni$1(15,`span`,14),eE(16,` Previous `),Xa$1()(),ni$1(17,`button`,15),Bf(18,`span`,16),ni$1(19,`span`,14),eE(20,` Next `),Xa$1()()(),Bf(21,`div`,17),ni$1(22,`div`,18)(23,`div`,19)(24,`div`,20)(25,`div`,21),eE(26,` TRADITIONAL SERVICES FOR YOUR SPECIAL MOMENTS `),Xa$1(),ni$1(27,`h2`),eE(28,` Book Verified Poojaris,`),Bf(29,`br`),eE(30,` Bajanthri & Pooja Samagri`),Bf(31,`br`),eE(32,` All in One Place `),Xa$1(),ni$1(33,`p`),eE(34,` From daily poojas to grand celebrations, Poojari4U brings tradition, trust and convenience together. `),Xa$1()()()(),ni$1(35,`div`,22)(36,`div`,19)(37,`div`,23)(38,`div`,24)(39,`div`,25),Bf(40,`i`,26),Xa$1(),ni$1(41,`div`,27)(42,`select`,28),dI(43,Kr,2,2,`option`,29,qr),Xa$1()()(),ni$1(45,`div`,24)(46,`div`,25),Bf(47,`i`,30),Xa$1(),ni$1(48,`div`,27)(49,`select`,31),dI(50,Zr,3,1,`optgroup`,32,Gr),Xa$1()()(),ni$1(52,`div`,24)(53,`div`,25),Bf(54,`i`,33),Xa$1(),ni$1(55,`div`,27),Bf(56,`input`,34),Xa$1()(),ni$1(57,`button`,35)(58,`span`),eE(59,`Search`),Xa$1()()()()()()),e&2&&(ay(43),fI(t.ceremonies),ay(7),fI(t.locationGroups))},dependencies:[un,an,ln,Gu,Ku,pa,ca,ma,Cn],styles:[`.hero-section[_ngcontent-%COMP%]{position:relative;width:100%;height:390px;overflow:hidden}.hero-carousel[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;z-index:1}.hero-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{width:100%;height:100%}.hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.hero-gradient[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(90deg,#fff8ecfa,#fff8eced 25%,#fff8ecb8 42%,#fff8ec40 62%,#fff8ec00 80%)}.hero-content-wrapper[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:3;display:flex;align-items:flex-start;padding-top:30px;pointer-events:none}.hero-copy[_ngcontent-%COMP%]{max-width:650px;pointer-events:auto}.hero-eyebrow[_ngcontent-%COMP%]{color:#d75f08;font-weight:700;font-size:16px;letter-spacing:.2px;margin-bottom:15px}.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:40px;line-height:1.12;max-width:620px;margin-bottom:10px;color:#3a2417;font-weight:700}.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:510px;margin-top:18px;color:#62564e;font-size:16px;line-height:1.55}.hero-search-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:35px;z-index:5}.hero-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:70%;padding:10px;background:#fffffff5;border:1px solid rgba(220,210,195,.8);border-radius:14px;box-shadow:0 8px 30px #3c281424;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.search-field[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;height:55px;min-width:0;padding:7px;background:#fff;border:1px solid #eee8df;border-radius:10px}.search-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#faecda;color:#e8750b;font-size:18px}.search-field-content[_ngcontent-%COMP%]{min-width:0;flex:1;margin:5px 10px}.search-field-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;margin-bottom:1px}.search-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .search-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border:0;outline:0;background:transparent;color:#76695e;width:100%;font-size:12px;padding:0!important}.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:14px}.search-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .search-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus{box-shadow:none}.search-button[_ngcontent-%COMP%]{flex-shrink:0;width:175px;height:55px;border-radius:10px;background:#e8750b;color:#fff;font-weight:600;font-size:14px;border:none}.hero-carousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]{z-index:4;width:6%}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]{z-index:4;bottom:50px}@media(max-width:991px){.hero-section[_ngcontent-%COMP%]{height:700px}.hero-content-wrapper[_ngcontent-%COMP%]{padding-top:70px}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:44px}.hero-search[_ngcontent-%COMP%]{flex-wrap:wrap}.search-field[_ngcontent-%COMP%]{flex:1 1 calc(50% - 10px)}.search-button[_ngcontent-%COMP%]{width:100%;flex:1 1 100%}}@media(max-width:575px){.hero-section[_ngcontent-%COMP%]{height:725px}.hero-carousel[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{height:100%}.hero-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover;object-position:65% center}.hero-gradient[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fff8ecfa,#fff8ecf0 38%,#fff8ec8c 62%,#fff8ec26)}.hero-content-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:auto;padding-top:50px;display:block}.hero-copy[_ngcontent-%COMP%]{padding:0 10px;max-width:100%}.hero-eyebrow[_ngcontent-%COMP%]{font-size:10px;margin-bottom:12px}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px;line-height:1.1;letter-spacing:-.5px}.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5;max-width:100%;margin-top:15px}.hero-search-wrapper[_ngcontent-%COMP%]{position:absolute;inset:430px 0 auto;z-index:6}.hero-search[_ngcontent-%COMP%]{width:100%;padding:8px;display:flex;flex-direction:column;gap:8px;border-radius:14px}.search-field[_ngcontent-%COMP%]{width:100%;flex:none;height:55px;min-height:55px}.search-button[_ngcontent-%COMP%]{width:100%;height:50px;flex:none}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:18px;z-index:10;margin:0;display:flex;justify-content:center}.hero-carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:8px;height:8px;margin:0 4px;border-radius:50%;border:0}.hero-carousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .hero-carousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]{width:12%;z-index:8}}`]})};var Qr=(a,n)=>n.id;function Jr(a,n){if(a&1&&(ec(0,`a`,2)(1,`div`,3),eE(2),tc(),ec(3,`div`,4)(4,`h3`),eE(5),tc(),ec(6,`p`),eE(7),tc()()()),a&2){let e=n.$implicit;Wf(`href`,`/`+e.id,Td),ay(2),nc(` `,e.icon,` `),ay(3),cp(e.title),ay(2),cp(e.description)}}var Vt=class a{categories=[{id:`poojaris`,title:`Poojaris`,description:`Expert & verified poojaris for all ceremonies`,icon:`🙏`},{id:`bajanthri`,title:`Bajanthri`,description:`Traditional music teams for your celebrations`,icon:`🎵`},{id:`samagri`,title:`Pooja Samagri`,description:`Complete puja kits and individual items`,icon:`🪔`},{id:`packages`,title:`Packages`,description:`Curated packages for weddings, griha pravesh & more`,icon:`🎁`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-service-categories`]],decls:4,vars:0,consts:[[1,`services-section`,`border-bottom`],[1,`services-container`],[1,`service-card`,3,`href`],[1,`service-icon`],[1,`service-content`]],template:function(e,t){e&1&&(ec(0,`section`,0)(1,`div`,1),dI(2,Jr,8,4,`a`,2,Qr),tc()()),e&2&&(ay(2),fI(t.categories))},styles:[`[_nghost-%COMP%]{display:block}.services-section[_ngcontent-%COMP%]{background:#fff8ed;padding:10px}.services-container[_ngcontent-%COMP%]{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}.service-card[_ngcontent-%COMP%]{min-height:75px;padding:10px 15px;margin:20px 10px;display:flex;align-items:center;gap:15px;text-decoration:none;color:inherit;border-right:1px solid #dfd3c5}.service-card[_ngcontent-%COMP%]:last-child{border-right:0}.service-icon[_ngcontent-%COMP%]{width:72px;height:72px;flex-shrink:0;border-radius:50%;background:#fff0d8;display:flex;align-items:center;justify-content:center;font-size:35px}.service-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 5px;color:#29221d;font-size:15px}.service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#6b625a;font-size:12px;line-height:1.4}@media(max-width:850px){.services-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.service-card[_ngcontent-%COMP%]{border-right:0;padding:15px}}@media(max-width:500px){.services-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}`]})};var eo=(a,n)=>n.id;function to(a,n){if(a&1&&$f(0,`img`,9),a&2){let e=CI().$implicit;Wf(`src`,e.imageUrl,Td)(`alt`,e.title)}}function io(a,n){a&1&&$f(0,`div`,10)}function no(a,n){if(a&1&&(ec(0,`div`,6)(1,`div`,7)(2,`div`,8),cI(3,to,1,2,`img`,9)(4,io,1,0,`div`,10),tc(),ec(5,`div`,11)(6,`div`)(7,`h6`,12),eE(8),tc()(),ec(9,`div`,13)(10,`p`,14),eE(11),tc(),ec(12,`a`,15),eE(13,` → `),tc()()()()()),a&2){let e=n.$implicit;ay(3),lI(e.imageUrl?3:4),ay(5),nc(` `,e.title,` `),ay(3),nc(` `,e.description,` `),ay(),Wf(`href`,e.linkUrl,Td)}}var Lt=class a{services=_o([{id:1,title:`Poojaris`,description:`Griha Pravesh, Satyanarayana, Homam, Wedding & more`,imageUrl:`home/poojari.png`,linkUrl:`#`},{id:2,title:`Bajanthri`,description:`Nadaswaram, Thavil, Dolu, Dappu & Traditional Teams`,imageUrl:`home/bajanthri.png`,linkUrl:`#`},{id:3,title:`Pooja Samagri`,description:`Pooja kits and materials for all Poojas and festivals`,imageUrl:`home/pooja-samagri.png`,linkUrl:`#`},{id:4,title:`Packages`,description:`Griha Pravesh, Wedding, Homam & Festival Packages`,imageUrl:`home/packages.png`,linkUrl:`#`}]);static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-popular-poojas`]],decls:10,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fdfbf7`],[1,`container-fluid`,`px-lg-5`,`py-3`],[1,`d-flex`,`justify-content-between`,`align-items-center`,`mb-4`],[1,`fw-bold`,`mb-0`,2,`color`,`#2b1d16`,`font-family`,`serif`],[`href`,`#`,1,`text-decoration-none`,`fw-semibold`,2,`color`,`#e66a0a`],[1,`row`,`g-4`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`overflow-hidden`,`border-light-subtle`,`card-hover`],[1,`card-img-container`,`position-relative`,`bg-light`],[1,`card-img-top`,`object-fit-cover`,3,`src`,`alt`],[1,`empty-image-placeholder`],[1,`card-body`,`p-2`,`d-flex`,`flex-column`,`justify-content-between`],[1,`card-title`,`fw-bold`,`text-dark`,`mb-1`],[1,`d-flex`,`justify-content-between`],[1,`card-text`,`text-muted`,`small`,`mb-0`],[`aria-label`,`Explore service`,1,`btn`,`btn-arrow`,`rounded-circle`,`d-flex`,`align-items-center`,`justify-content-center`,`text-decoration-none`,3,`href`]],template:function(e,t){e&1&&(ec(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`h2`,3),eE(4,` Popular Services `),tc(),ec(5,`a`,4),eE(6,` View All → `),tc()(),ec(7,`div`,5),dI(8,no,14,4,`div`,6,eo),tc()()()),e&2&&(ay(8),fI(t.services()))},styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card-hover[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1.25rem #00000014!important}.card-img-container[_ngcontent-%COMP%]{height:135px;width:100%;overflow:hidden}.card-img-top[_ngcontent-%COMP%]{height:100%;width:100%;object-position:center 33%}.card-body[_ngcontent-%COMP%]{height:75px}.card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:15px}.card-body[_ngcontent-%COMP%]   .p-2[_ngcontent-%COMP%]{padding:.75rem!important}.empty-image-placeholder[_ngcontent-%COMP%]{height:100%;background-color:#fff}.card-text[_ngcontent-%COMP%]{font-size:12px;padding:0 10px 0 0;line-height:15px}.btn-arrow[_ngcontent-%COMP%]{width:32px;height:32px;background-color:#fff3e0;color:#e66a0a;border:none;font-size:.9rem;transition:background-color .2s ease}.btn-arrow[_ngcontent-%COMP%]:hover{background-color:#ffe0b2;color:#cd5c06}`]})};var ao=(a,n)=>n.stepNumber;function ro(a,n){if(a&1&&(ec(0,`div`,5)(1,`div`,12)(2,`div`,13)(3,`span`,14),eE(4),tc(),ec(5,`h5`,15),eE(6),tc(),ec(7,`p`,16),eE(8),tc()()()()),a&2){let e=n.$implicit;ay(4),nc(` `,e.stepNumber,` `),ay(2),nc(` `,e.title,` `),ay(2),nc(` `,e.description,` `)}}var Bt=class a{steps=_o([{stepNumber:1,title:`Choose Service`,description:`Sathyanarayana Pooja, Griha Pravesham, Homam, wedding and more.`},{stepNumber:2,title:`Select Location & Date`,description:`Enter your preferred City and Ceremony Date for Service availability.`},{stepNumber:3,title:`Select verified Poojari`,description:`Choose your preferred poojari for the ceremony.`},{stepNumber:4,title:`Confirm Booking`,description:`Review the request and continue to confirmation.`}]);static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-booking-process`]],decls:20,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fdfbf7`],[1,`container-fluid`,`px-lg-5`,`text-center`,`py-4`],[1,`display-6`,`fw-bold`,`mb-3`,2,`color`,`#2b1d16`,`font-family`,`serif`],[1,`text-secondary`,`mb-5`],[1,`row`,`g-4`,`justify-content-center`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`container-fluid`,`px-lg-5`,`my-5`],[1,`p-4`,`p-md-5`,`rounded-4`,`text-white`,`d-flex`,`flex-column`,`flex-md-row`,`align-items-md-center`,`justify-content-between`,`gap-3`,2,`background-color`,`#2e1c14`],[1,`fw-bold`,`mb-2`],[1,`mb-0`,`text-white-50`],[1,`flex-shrink-0`],[`href`,`#`,1,`btn`,`fw-semibold`,`px-4`,`py-2`,`text-white`,`rounded-pill`,2,`background-color`,`#e66a0a`,`border`,`none`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`p-3`,`border-light-subtle`],[1,`card-body`,`d-flex`,`flex-column`,`align-items-center`,`justify-content-center`],[1,`fs-2`,`mb-3`,`fw-medium`,`text-dark`],[1,`card-title`,`fw-bold`,`text-dark`,`mb-2`],[1,`card-text`,`text-muted`,`description`,`small`,`mb-0`]],template:function(e,t){e&1&&(ec(0,`section`,0)(1,`div`,1)(2,`h2`,2),eE(3,` Simple Booking `),tc(),ec(4,`p`,3),eE(5,` Choose what you need, select a date and request your service. `),tc(),ec(6,`div`,4),dI(7,ro,9,3,`div`,5,ao),tc()()(),ec(9,`section`)(10,`div`,6)(11,`div`,7)(12,`div`)(13,`h3`,8),eE(14,`Are You a Poojari?`),tc(),ec(15,`p`,9),eE(16,`Join Poojari4U and connect with families looking for traditional services.`),tc()(),ec(17,`div`,10)(18,`a`,11),eE(19,` Register as a Poojari `),tc()()()()()),e&2&&(ay(7),fI(t.steps()))},dependencies:[An$1],styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1rem #00000014!important}.btn[style*="background-color: #e66a0a"][_ngcontent-%COMP%]:hover{background-color:#cd5c06!important}.description[_ngcontent-%COMP%]{height:40px}`]})};var oo=(a,n)=>n.id;function so(a,n){if(a&1&&(ec(0,`div`,5)(1,`div`,6)(2,`div`,7)(3,`div`,8),eE(4),tc(),ec(5,`h5`,9),eE(6),tc(),ec(7,`p`,10),eE(8),tc()()()()),a&2){let e=n.$implicit;ay(4),nc(` `,e.icon,` `),ay(2),nc(` `,e.title,` `),ay(2),nc(` `,e.description,` `)}}var zt=class a{features=_o([{id:1,icon:`✓`,title:`Verified Poojaris`,description:`Profiles can be reviewed before booking.`},{id:2,icon:`₹`,title:`Transparent Pricing`,description:`View service and package pricing clearly.`},{id:3,icon:`ॐ`,title:`Multiple Services`,description:`Poojari, Bajanthri, Samagri and packages in one place.`},{id:4,icon:`⭐`,title:`Customer Reviews`,description:`Share your experience after a completed service.`}]);static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-why-poojari4u`]],decls:9,vars:0,consts:[[1,`py-5`,2,`background-color`,`#fff3e5`],[1,`container-fluid`,`px-lg-5`,`text-center`,`py-4`],[1,`display-6`,`fw-bold`,`mb-3`],[1,`text-secondary`,`mb-5`,`fs-6`],[1,`row`,`g-4`,`justify-content-center`],[1,`col-12`,`col-sm-6`,`col-lg-3`],[1,`card`,`h-100`,`border-1`,`rounded-4`,`shadow-sm`,`p-3`,`border-light-subtle`],[1,`card-body`,`d-flex`,`flex-column`,`align-items-center`,`justify-content-center`],[1,`fs-2`,`mb-2`,`text-dark`,`d-flex`,`align-items-center`,`justify-content-center`,`icon-container`],[1,`card-title`,`fw-bold`,`title`,`text-dark`,`mb-2`],[1,`card-text`,`text-muted`,`description`,`mb-0`,`px-1`]],template:function(e,t){e&1&&(ec(0,`section`,0)(1,`div`,1)(2,`h2`,2),eE(3,` Why Poojari4U? `),tc(),ec(4,`p`,3),eE(5,` Making traditional ceremonies easier to arrange. `),tc(),ec(6,`div`,4),dI(7,so,9,3,`div`,5,oo),tc()()()),e&2&&(ay(7),fI(t.features()))},styles:[`.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 .5rem 1rem #00000014!important}.icon-container[_ngcontent-%COMP%]{height:48px;line-height:1}.display-6[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:34px;color:#2b1d16}.title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.description[_ngcontent-%COMP%]{font-size:14px}`]})};var ua=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Hv({type:a,selectors:[[`app-home`]],decls:6,vars:0,consts:[[1,`main-content`]],template:function(e,t){e&1&&(ni$1(0,`main`,0),Bf(1,`app-home-section`)(2,`app-service-categories`)(3,`app-popular-poojas`)(4,`app-why-poojari4u`)(5,`app-booking-process`),Xa$1())},dependencies:[Ft,Vt,Lt,Bt,zt],styles:[`.main-content[_ngcontent-%COMP%]{padding-top:108px}`]})};export{ua as Home};