import{$ as Nl,$t as cE,B as Iy,C as EF,Ct as Ua$1,Dn as mp,Dt as Vp,F as I,Fn as pI,Hn as rE,I as IF,In as pg,Jt as bF,K as M,L as Ic,Ln as pp,Mt as Wt,N as H,Nt as Wy,Ot as W$1,Pt as XE,Qt as bp,Rn as q,S as Dr,Sn as lE,T as Ep,Un as rg,Ut as _p,V as JD,Vt as _F,W as Lp,Wt as ae,X as Mr,Xt as bc,Y as Mn,Yn as sl,_t as Tn,a as $n$1,an as dt,at as Q,bn as ke,c as B,cn as gp,dr as wp,en as cr,et as Np,f as Bo,fn as hp,g as Cc,gn as il,gr as yc,h as CE,it as Pp,k as GD,kt as WD,l as BI,ln as hg,mn as iE,mr as xp,n as $E,nt as PE,or as vg,ot as QE,p as Bp,q as Me,qn as sE,qt as bD,rr as up,s as $v,sr as vp,st as Qp,t as $,tn as dE,tr as uE,tt as OE,un as hi$1,ur as wc,ut as S,v as Ct$1,w as El,wn as mg,wt as Uh,x as Dl,xt as UD,yn as je,yr as yo,yt as Tp,z as Ip,zn as qD}from"./chunk-qHi2CXEK.js";import{C as ai,E as ht$1,M as vt$1,P as x,S as Yn,T as ft$1,a as Tn$1,b as Xe,d as At,f as Bn,g as P,h as K,i as Nt,k as qn,l as zt,m as Ie$1,o as on$1,p as D,r as An,s as xt$1,v as Re,w as d,x as Ye,y as Se}from"./main-7NB5HCKT.js";import{f as Yt,g as ut$1,h as ni,i as I$1,l as Vt,m as dt$1,n as $t,o as Jt,p as ae$1}from"./chunk-Cun-8ZA2.js";var mt=new M(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>I(Mr)});var be=`Method not implemented`;var L=class{locale;_localeChanges=new W$1;localeChanges=this._localeChanges;setTime(o,e,t,i){throw new Error(be)}getHours(o){throw new Error(be)}getMinutes(o){throw new Error(be)}getSeconds(o){throw new Error(be)}parseTime(o,e){throw new Error(be)}addSeconds(o,e){throw new Error(be)}getValidDateOrNull(o){return this.isDateInstance(o)&&this.isValid(o)?o:null}deserialize(o){return o==null||this.isDateInstance(o)&&this.isValid(o)?o:this.invalid()}setLocale(o){this.locale=o,this._localeChanges.next()}compareDate(o,e){return this.getYear(o)-this.getYear(e)||this.getMonth(o)-this.getMonth(e)||this.getDate(o)-this.getDate(e)}compareTime(o,e){return this.getHours(o)-this.getHours(e)||this.getMinutes(o)-this.getMinutes(e)||this.getSeconds(o)-this.getSeconds(e)}sameDate(o,e){if(o&&e){let t=this.isValid(o),i=this.isValid(e);return t&&i?!this.compareDate(o,e):t==i}return o==e}sameTime(o,e){if(o&&e){let t=this.isValid(o),i=this.isValid(e);return t&&i?!this.compareTime(o,e):t==i}return o==e}clampDate(o,e,t){return e&&this.compareDate(o,e)<0?e:t&&this.compareDate(o,t)>0?t:o}};var me=new M(`mat-date-formats`);var hi=(()=>{class a{_animationsDisabled=Yn();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&xp(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return a})();var Wi=[`text`];var Ki=[[[`mat-icon`]],`*`];var Gi=[`mat-icon`,`*`];function Qi(a,o){if(a&1&&gp(0,`mat-pseudo-checkbox`,1),a&2){let e=rE();hp(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function Ui(a,o){if(a&1&&gp(0,`mat-pseudo-checkbox`,3),a&2)hp(`disabled`,rE().disabled)}function $i(a,o){if(a&1&&(hi$1(0,`span`,4),OE(1),Ic()),a&2){let e=rE();Wy(),bc(`(`,e.group.label,`)`)}}var Xi=new M(`MAT_OPTION_PARENT_COMPONENT`);var Zi=new M(`MatOptgroup`);var ht=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}};var pi=(()=>{class a{_element=I(Wt);_changeDetectorRef=I(pI);_parent=I(Xi,{optional:!0});group=I(Zi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=I(K).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Bo(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new je;_text;_stateChanges=new W$1;constructor(){let e=I(D);e.load(Nt),e.load(x),this._signalDisableRipple=!!this._parent&&cr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!At(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ht(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&bp(Wi,7),t&2){let n;cE(n=uE())&&(i._text=n.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&Ep(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(vp(`id`,i.id),pp(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),xp(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,bF]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:Gi,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(iE(Ki),UD(0,Qi,1,2,`mat-pseudo-checkbox`,1),sE(1),hi$1(2,`span`,2,0),sE(4,1),Ic(),UD(5,Ui,1,1,`mat-pseudo-checkbox`,3),UD(6,$i,2,1,`span`,4),gp(7,`div`,5)),t&2&&(GD(i.multiple?0:-1),Wy(5),GD(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),Wy(),GD(i.group&&i.group._inert?6:-1),Wy(),hp(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[hi,on$1],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return a})();var ui=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({imports:[ai]})}return a})();var pt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({imports:[xt$1,ui,pi,ai]})}return a})();var Ji=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var ea=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ut(a,o){let e=Array(a);for(let t=0;t<a;t++)e[t]=o(t);return e}var ta=(()=>{class a extends L{_matDateLocale=I(mt,{optional:!0});constructor(){super();let e=I(mt,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return ut(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return ut(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return ut(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let n=this._createDateWithOverflow(e,t,i);return n.getMonth(),n}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,$(H({},t),{timeZone:`utc`}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(Ji.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,n){let r=this.clone(e);return r.setHours(t,i,n,0),r}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let n=this._parseTimeString(i);if(n===null){let r=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();r.length>0&&(n=this._parseTimeString(r))}return n||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let n=new Date;return n.setFullYear(e,t,i),n.setHours(0,0,0,0),n}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(ea);if(t){let i=parseInt(t[1]),n=parseInt(t[2]),r=t[3]==null?void 0:parseInt(t[3]),h=t[4];if(i===12?i=h===`AM`?0:i:h===`PM`&&(i+=12),ft(i,0,23)&&ft(n,0,59)&&(r==null||ft(r,0,59)))return this.setTime(this.today(),i,n,r||0)}return null}static ɵfac=function(t){return new(t||a)};static ɵprov=Tn({token:a,factory:a.ɵfac,autoProvided:!1})}return a})();function ft(a,o,e){return!isNaN(a)&&a>=o&&a<=e}var ia={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var $n=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({providers:[aa()]})}return a})();function aa(a=ia){return[{provide:L,useClass:ta},{provide:me,useValue:a}]}var na=[`tooltip`];var ra=20;var oa=new M(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=I(ae);return()=>Yt(a,{scrollThrottle:ra})}});var sa=new M(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var fi=`tooltip-panel`;var la={passive:!0};var da=8;var ca=8;var ma=24;var ha=200;var _i=(()=>{class a{_elementRef=I(Wt);_ngZone=I(Me);_platform=I(d);_ariaDescriber=I(Bn);_focusMonitor=I(Se);_dir=I(vt$1);_injector=I(ae);_viewContainerRef=I(dt);_mediaMatcher=I(P);_document=I(ke);_renderer=I(Dr);_animationsDisabled=Yn();_defaultOptions=I(sa,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=pa;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=qn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=qn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ye(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ye(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new W$1;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=da}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(vg(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new ut$1(this._tooltipComponent,this._viewContainerRef);let n=this._tooltipInstance=i.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe(vg(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof Wt)return this._overlayRef;this._detach()}let t=this._injector.get(I$1).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${fi}`,n=$t(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return n.positionChanges.pipe(vg(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Jt(this._injector,{direction:this._dir,positionStrategy:n,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(oa)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(vg(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(vg(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(vg(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(vg(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),n=this._getOverlayPosition();t.withPositions([this._addOffset(H(H({},i.main),n.main)),this._addOffset(H(H({},i.fallback),n.fallback))])}_addOffset(e){let t=ca,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:n,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:n,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:n,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Iy(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:n}=e,r;if(t===`center`?this._dir&&this._dir.value===`rtl`?r=i===`end`?`left`:`right`:r=i===`start`?`left`:`right`:r=t===`bottom`&&n===`top`?`above`:`below`,r!==this._currentPosition){let h=this._overlayRef;if(h){let X=`${this._cssClassPrefix}-${fi}-`;h.removePanelClass(X+this._currentPosition),h.addPanelClass(X+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let n=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??n)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,la))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Iy({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!At(e):!0;static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&xp(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var pa=(()=>{class a{_changeDetectorRef=I(pI);_elementRef=I(Wt);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Yn();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new W$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ma&&e.width>=ha}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,n=this._hideAnimation;if(t.classList.remove(e?n:i),t.classList.add(e?i:n),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(t);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,i){if(t&1&&bp(na,7),t&2){let n;cE(n=uE())&&(i._tooltip=n.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,i){t&1&&Ep(`mouseleave`,function(r){return i._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,i){t&1&&(Cc(0,`div`,1,0),Ip(`animationend`,function(r){return i._handleAnimationEnd(r)}),Cc(2,`div`,2),OE(3),wc()()),t&2&&(CE(i.tooltipClass),xp(`mdc-tooltip--multiline`,i._isMultiline),Wy(3),Lp(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return a})();var gt=class{_box;_destroyed=new W$1;_resizeSubject=new W$1;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new S(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe($n$1(e=>e.some(t=>t.target===o)),hg({bufferSize:1,refCount:!0}),vg(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var gi=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=I(Me);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new gt(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||a)};static ɵprov=Tn({token:a,factory:a.ɵfac})}return a})();var ua=[`notch`];var fa=[`*`];var bi=[`iconPrefixContainer`];var vi=[`textPrefixContainer`];var yi=[`iconSuffixContainer`];var xi=[`textSuffixContainer`];var _a=[`textField`];var ga=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ba=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function va(a,o){a&1&&gp(0,`span`,21)}function ya(a,o){if(a&1&&(hi$1(0,`label`,20),sE(1,1),UD(2,va,1,0,`span`,21),Ic()),a&2){let e=rE(2);hp(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),pp(`for`,e._control.disableAutomaticLabeling?null:e._control.id),Wy(2),GD(!e.hideRequiredMarker&&e._control.required?2:-1)}}function xa(a,o){if(a&1&&UD(0,ya,3,5,`label`,20),a&2)GD(rE()._hasFloatingLabel()?0:-1)}function Da(a,o){a&1&&gp(0,`div`,7)}function Ca(a,o){}function Sa(a,o){if(a&1&&up(0,Ca,0,0,`ng-template`,13),a&2){rE(2);hp(`ngTemplateOutlet`,dE(1))}}function wa(a,o){if(a&1&&(hi$1(0,`div`,9),UD(1,Sa,1,1,null,13),Ic()),a&2){let e=rE();hp(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),Wy(),GD(e._forceDisplayInfixLabel()?-1:1)}}function Ma(a,o){a&1&&(hi$1(0,`div`,10,2),sE(2,2),Ic())}function ka(a,o){a&1&&(hi$1(0,`div`,11,3),sE(2,3),Ic())}function Aa(a,o){}function Na(a,o){if(a&1&&up(0,Aa,0,0,`ng-template`,13),a&2){rE();hp(`ngTemplateOutlet`,dE(1))}}function Ea(a,o){a&1&&(hi$1(0,`div`,14,4),sE(2,4),Ic())}function Ia(a,o){a&1&&(hi$1(0,`div`,15,5),sE(2,5),Ic())}function Ta(a,o){a&1&&gp(0,`div`,16)}function Fa(a,o){a&1&&(hi$1(0,`div`,18),sE(1,6),Ic())}function Ra(a,o){if(a&1&&(hi$1(0,`mat-hint`,22),OE(1),Ic()),a&2){let e=rE(2);hp(`id`,e._hintLabelId),Wy(),Lp(e.hintLabel)}}function Oa(a,o){if(a&1&&(hi$1(0,`div`,19),UD(1,Ra,2,2,`mat-hint`,22),sE(2,7),gp(3,`div`,23),sE(4,8),Ic()),a&2){let e=rE();Wy(),GD(e.hintLabel?1:-1)}}var bt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[`mat-label`]]})}return a})();var Va=new M(`MatError`);var vt=(()=>{class a{align=`start`;id=I(K).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,i){t&2&&(vp(`id`,i.id),pp(`align`,null),xp(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return a})();var Pa=new M(`MatPrefix`);var La=new M(`MatSuffix`);var Ai=new M(`FloatingLabelParent`);var Di=(()=>{class a{_elementRef=I(Wt);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=I(gi);_ngZone=I(Me);_parent=I(Ai);_resizeSubscription=new q;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ba(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,i){t&2&&xp(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return a})();function Ba(a){let o=a;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ci=`mdc-line-ripple--active`;var Qe=`mdc-line-ripple--deactivating`;var Si=(()=>{class a{_elementRef=I(Wt);_cleanupTransitionEnd;constructor(){let e=I(Me),t=I(Dr);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Qe),e.add(Ci)}deactivate(){this._elementRef.nativeElement.classList.add(Qe)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Qe);e.propertyName===`opacity`&&i&&t.remove(Ci,Qe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return a})();var wi=(()=>{class a{_elementRef=I(Wt);_ngZone=I(Me);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,i){if(t&1&&bp(ua,5),t&2){let n;cE(n=uE())&&(i._notch=n.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,i){t&2&&xp(`mdc-notched-outline--notched`,i.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:fa,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,i){t&1&&(iE(),mp(0,`div`,1),Cc(1,`div`,2,0),sE(3),wc(),mp(4,`div`,3))},encapsulation:2})}return a})();var za=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a})}return a})();var Ha=new M(`MatFormField`);var Ya=new M(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Mi=`fill`;var ja=`auto`;var ki=`fixed`;var qa=`translateY(-50%)`;var Ni=(()=>{class a{_elementRef=I(Wt);_changeDetectorRef=I(pI);_platform=I(d);_idGenerator=I(K);_ngZone=I(Me);_defaults=I(Ya,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=EF(`iconPrefixContainer`);_textPrefixContainerSignal=EF(`textPrefixContainer`);_iconSuffixContainerSignal=EF(`iconSuffixContainer`);_textSuffixContainerSignal=EF(`textSuffixContainer`);_prefixSuffixContainers=XE(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=IF(bt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=qn(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ja}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Mi;this._appearanceSignal.set(t)}_appearanceSignal=Bo(Mi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ki}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ki}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new W$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Yn();constructor(){let e=this._defaults,t=I(vt$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Nl(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=XE(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(mg([void 0,void 0]),Ct$1(()=>[t.errorState,t.userAriaDescribedBy]),pg(),$n$1(([[n,r],[h,X]])=>n!==h||r!==X)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(vg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),rg(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){_F({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=XE(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let n=this._hintChildren?this._hintChildren.find(h=>h.align===`start`):null,r=this._hintChildren?this._hintChildren.find(h=>h.align===`end`):null;n?e.push(n.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(n=>n.id));let t=this._control.describedByIds,i;if(t){let n=this._describedByIds||e;i=e.concat(t.filter(r=>r&&!n.includes(r)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,n=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,X=i?.getBoundingClientRect().width??0,Xe=n?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${qa} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${r+h}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,r+h+X+Xe]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-form-field`]],contentQueries:function(t,i,n){if(t&1&&(Tp(n,i._labelChild,bt,5),wp(n,za,5)(n,Pa,5)(n,La,5)(n,Va,5)(n,vt,5)),t&2){lE();let r;cE(r=uE())&&(i._formFieldControl=r.first),cE(r=uE())&&(i._prefixChildren=r),cE(r=uE())&&(i._suffixChildren=r),cE(r=uE())&&(i._errorChildren=r),cE(r=uE())&&(i._hintChildren=r)}},viewQuery:function(t,i){if(t&1&&(_p(i._iconPrefixContainerSignal,bi,5)(i._textPrefixContainerSignal,vi,5)(i._iconSuffixContainerSignal,yi,5)(i._textSuffixContainerSignal,xi,5),bp(_a,5)(bi,5)(vi,5)(yi,5)(xi,5)(Di,5)(wi,5)(Si,5)),t&2){lE(4);let n;cE(n=uE())&&(i._textField=n.first),cE(n=uE())&&(i._iconPrefixContainer=n.first),cE(n=uE())&&(i._textPrefixContainer=n.first),cE(n=uE())&&(i._iconSuffixContainer=n.first),cE(n=uE())&&(i._textSuffixContainer=n.first),cE(n=uE())&&(i._floatingLabel=n.first),cE(n=uE())&&(i._notchedOutline=n.first),cE(n=uE())&&(i._lineRipple=n.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,i){t&2&&xp(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._control.errorState)(`mat-form-field-disabled`,i._control.disabled)(`mat-form-field-autofilled`,i._control.autofilled)(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[$E([{provide:Ha,useExisting:a},{provide:Ai,useExisting:a}])],ngContentSelectors:ba,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,i){if(t&1&&(iE(ga),up(0,xa,1,1,`ng-template`,null,0,QE),hi$1(2,`div`,6,1),Ep(`click`,function(r){return i._control.onContainerClick(r)}),UD(4,Da,1,0,`div`,7),hi$1(5,`div`,8),UD(6,wa,2,2,`div`,9),UD(7,Ma,3,0,`div`,10),UD(8,ka,3,0,`div`,11),hi$1(9,`div`,12),UD(10,Na,1,1,null,13),sE(11),Ic(),UD(12,Ea,3,0,`div`,14),UD(13,Ia,3,0,`div`,15),Ic(),UD(14,Ta,1,0,`div`,16),Ic(),hi$1(15,`div`,17),UD(16,Fa,2,0,`div`,18)(17,Oa,5,1,`div`,19),Ic()),t&2){let n;Wy(2),xp(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,i._control.disabled)(`mdc-text-field--invalid`,i._control.errorState),Wy(2),GD(!i._hasOutline()&&!i._control.disabled?4:-1),Wy(2),GD(i._hasOutline()?6:-1),Wy(),GD(i._hasIconPrefix?7:-1),Wy(),GD(i._hasTextPrefix?8:-1),Wy(2),GD(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),Wy(2),GD(i._hasTextSuffix?12:-1),Wy(),GD(i._hasIconSuffix?13:-1),Wy(),GD(i._hasOutline()?-1:14),Wy(),xp(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let r=i._getSubscriptMessageType();Wy(),GD((n=r)===`error`?16:n===`hint`?17:-1)}},dependencies:[Di,wi,BI,Si,vt],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return a})();function Wa(a,o){return this._trackRow(o)}var Oi=(a,o)=>o.id;function Ka(a,o){if(a&1&&(Cc(0,`tr`,0)(1,`td`,3),OE(2),wc()()),a&2){let e=rE();Wy(),Np(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),pp(`colspan`,e.numCols),Wy(),bc(` `,e.label,` `)}}function Ga(a,o){if(a&1&&(Cc(0,`td`,3),OE(1),wc()),a&2){let e=rE(2);Np(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),pp(`colspan`,e._firstRowOffset),Wy(),bc(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function Qa(a,o){if(a&1){let e=JD();Cc(0,`td`,6)(1,`button`,7),Ip(`click`,function(i){let n=il(e).$implicit;return sl(rE(2)._cellClicked(n,i))})(`focus`,function(i){let n=il(e).$implicit;return sl(rE(2)._emitActiveDateChange(n,i))}),Cc(2,`span`,8),OE(3),wc(),mp(4,`span`,9),wc()()}if(a&2){let e=o.$implicit,t=o.$index,i=rE().$index,n=rE();Np(`width`,n._cellWidth)(`padding-top`,n._cellPadding)(`padding-bottom`,n._cellPadding),pp(`data-mat-row`,i)(`data-mat-col`,t),Wy(),CE(e.cssClasses),xp(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,n._isActiveCell(i,t))(`mat-calendar-body-range-start`,n._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,n._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,n._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,n._isComparisonBridgeStart(e.compareValue,i,t))(`mat-calendar-body-comparison-bridge-end`,n._isComparisonBridgeEnd(e.compareValue,i,t))(`mat-calendar-body-comparison-start`,n._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,n._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,n._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,n._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,n._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,n._isInPreview(e.compareValue)),vp(`tabIndex`,n._isActiveCell(i,t)?0:-1),pp(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,n._isSelected(e.compareValue))(`aria-current`,n.todayValue===e.compareValue?`date`:null)(`aria-describedby`,n._getDescribedby(e.compareValue)),Wy(),xp(`mat-calendar-body-selected`,n._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,n._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,n.todayValue===e.compareValue),Wy(),bc(` `,e.displayValue,` `)}}function Ua(a,o){if(a&1&&(Cc(0,`tr`,1),UD(1,Ga,2,6,`td`,4),WD(2,Qa,5,49,`td`,5,Oi),wc()),a&2){let e=o.$implicit,t=o.$index,i=rE();Wy(),GD(t===0&&i._firstRowOffset?1:-1),Wy(),qD(e)}}function $a(a,o){if(a&1&&(hi$1(0,`th`,2)(1,`span`,6),OE(2),Ic(),hi$1(3,`span`,3),OE(4),Ic()()),a&2){let e=o.$implicit;Wy(2),Lp(e.long),Wy(2),Lp(e.narrow)}}var Xa=[`*`];function Za(a,o){}function Ja(a,o){if(a&1){let e=JD();hi$1(0,`mat-month-view`,4),Bp(`activeDateChange`,function(i){il(e);let n=rE();return PE(n.activeDate,i)||(n.activeDate=i),sl(i)}),Ep(`_userSelection`,function(i){il(e);return sl(rE()._dateSelected(i))})(`dragStarted`,function(i){il(e);return sl(rE()._dragStarted(i))})(`dragEnded`,function(i){il(e);return sl(rE()._dragEnded(i))}),Ic()}if(a&2){let e=rE();Vp(`activeDate`,e.activeDate),hp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function en(a,o){if(a&1){let e=JD();hi$1(0,`mat-year-view`,5),Bp(`activeDateChange`,function(i){il(e);let n=rE();return PE(n.activeDate,i)||(n.activeDate=i),sl(i)}),Ep(`monthSelected`,function(i){il(e);return sl(rE()._monthSelectedInYearView(i))})(`selectedChange`,function(i){il(e);return sl(rE()._goToDateInView(i,`month`))}),Ic()}if(a&2){let e=rE();Vp(`activeDate`,e.activeDate),hp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function tn(a,o){if(a&1){let e=JD();hi$1(0,`mat-multi-year-view`,6),Bp(`activeDateChange`,function(i){il(e);let n=rE();return PE(n.activeDate,i)||(n.activeDate=i),sl(i)}),Ep(`yearSelected`,function(i){il(e);return sl(rE()._yearSelectedInMultiYearView(i))})(`selectedChange`,function(i){il(e);return sl(rE()._goToDateInView(i,`year`))}),Ic()}if(a&2){let e=rE();Vp(`activeDate`,e.activeDate),hp(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function an(a,o){}var nn=[`button`];var rn=[[[``,`matDatepickerToggleIcon`,``]]];var on=[`[matDatepickerToggleIcon]`];function sn(a,o){a&1&&(Dl(),hi$1(0,`svg`,2),gp(1,`path`,3),Ic())}var ye=(()=>{class a{changes=new W$1;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||a)};static ɵprov=Tn({token:a,factory:a.ɵfac})}return a})();var ln=0;var Ee=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ln++;cssClasses;constructor(o,e,t,i,n,r=o,h){this.value=o,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=r,this.rawValue=h,this.cssClasses=n instanceof Set?Array.from(n):n}};var dn={passive:!1,capture:!0};var Ue={passive:!0,capture:!0};var Ei={passive:!0};var ve=(()=>{class a{_elementRef=I(Wt);_ngZone=I(Me);_platform=I(d);_intl=I(ye);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new je;previewChange=new je;activeDateChange=new je;dragStarted=new je;dragEnded=new je;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=I(ae);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=I(Dr),t=I(K);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),I(D).load(Nt),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,n=[e.listen(i,`touchmove`,this._touchmoveHandler,dn),e.listen(i,`mouseenter`,this._enterHandler,Ue),e.listen(i,`focus`,this._enterHandler,Ue),e.listen(i,`mouseleave`,this._leaveHandler,Ue),e.listen(i,`blur`,this._leaveHandler,Ue),e.listen(i,`mousedown`,this._mousedownHandler,Ei),e.listen(i,`touchstart`,this._mousedownHandler,Ei)];this._platform.isBrowser&&n.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?n-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Iy(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Dt(e,this.startValue,this.endValue)}_isRangeEnd(e){return Ct(e,this.startValue,this.endValue)}_isInRange(e){return St(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Dt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][i-1];if(!n){let r=this.rows[t-1];n=r&&r[r.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][i+1];if(!n){let r=this.rows[t+1];n=r&&r[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return Ct(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return St(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Dt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Ct(e,this.previewStart,this.previewEnd)}_isInPreview(e){return St(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ii(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),xt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=xt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ii(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=xt(e);if(t){let i=t.getAttribute(`data-mat-row`),n=t.getAttribute(`data-mat-col`);if(i&&n)return this.rows[parseInt(i)]?.[parseInt(n)]||null}return null}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Ua$1],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(t,i){t&1&&(UD(0,Ka,3,6,`tr`,0),WD(1,Ua,4,1,`tr`,1,Wa,!0),Cc(3,`span`,2),OE(4),wc(),Cc(5,`span`,2),OE(6),wc(),Cc(7,`span`,2),OE(8),wc(),Cc(9,`span`,2),OE(10),wc()),t&2&&(GD(i._firstRowOffset<i.labelMinRequiredCells?0:-1),Wy(),qD(i.rows),Wy(2),vp(`id`,i._startDateLabelId),Wy(),bc(` `,i.startDateAccessibleName,`
`),Wy(),vp(`id`,i._endDateLabelId),Wy(),bc(` `,i.endDateAccessibleName,`
`),Wy(),vp(`id`,i._comparisonStartDateLabelId),Wy(),Pp(` `,i.comparisonDateAccessibleName,` `,i.startDateAccessibleName,`
`),Wy(),vp(`id`,i._comparisonEndDateLabelId),Wy(),Pp(` `,i.comparisonDateAccessibleName,` `,i.endDateAccessibleName,`
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
`],encapsulation:2})}return a})();function yt(a){return a?.nodeName===`TD`}function xt(a){let o;return yt(a)?o=a:yt(a.parentNode)?o=a.parentNode:yt(a.parentNode?.parentNode)&&(o=a.parentNode.parentNode),o?.getAttribute(`data-mat-row`)!=null?o:null}function Dt(a,o,e){return e!==null&&o!==e&&a<e&&a===o}function Ct(a,o,e){return o!==null&&o!==e&&a>=o&&a===e}function St(a,o,e,t){return t&&o!==null&&e!==null&&o!==e&&a>=o&&a<=e}function Ii(a){let o=a.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var W=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}};var $e=(()=>{class a{selection;_adapter;_selectionChanged=new W$1;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){$v()};static ɵprov=B({token:a,factory:a.ɵfac})}return a})();var cn=(()=>{class a extends $e{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new a(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||a)(Q(L))};static ɵprov=B({token:a,factory:a.ɵfac})}return a})();var mn={provide:$e,useFactory:()=>I($e,{optional:!0,skipSelf:!0})||new cn(I(L))};var Vi=new M(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var wt=7;var hn=0;var Ti=(()=>{class a{_changeDetectorRef=I(pI);_dateFormats=I(me,{optional:!0});_dateAdapter=I(L,{optional:!0});_dir=I(vt$1,{optional:!0});_rangeStrategy=I(Vi,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new je;_userSelection=new je;dragStarted=new je;dragEnded=new je;activeDateChange=new je;_matCalendarBody;_monthLabel=Bo(``);_weeks=Bo([]);_firstWeekOffset=Bo(0);_rangeStart=Bo(null);_rangeEnd=Bo(null);_comparisonRangeStart=Bo(null);_comparisonRangeEnd=Bo(null);_previewStart=Bo(null);_previewEnd=Bo(null);_isRange=Bo(!1);_todayDate=Bo(null);_weekdays=Bo([]);constructor(){I(D).load(x),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(mg(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),n,r;this._selected instanceof W?(n=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):n=r=this._getDateInCurrentMonth(this._selected),(n!==t||r!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!At(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((wt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%wt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,n=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&i){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),n=this._dateAdapter.getDayOfWeekNames(`long`).map((r,h)=>({long:r,narrow:t[h],id:hn++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let n=0,r=this._firstWeekOffset();n<e;n++,r++){r==wt&&(i.push([]),r=0);let h=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),X=this._shouldEnableDate(h),Xe=this._dateAdapter.format(h,this._dateFormats.display.dateA11yLabel),Ze=this.dateClass?this.dateClass(h,`month`):void 0;i[i.length-1].push(new Ee(n+1,t[n],Xe,X,Ze,this._getCellCompareValue(h),h))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,i,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof W?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-month-view`]],viewQuery:function(t,i){if(t&1&&bp(ve,5),t&2){let n;cE(n=uE())&&(i._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Ua$1],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(t,i){t&1&&(hi$1(0,`table`,0)(1,`thead`,1)(2,`tr`),WD(3,$a,5,2,`th`,2,Oi),Ic(),hi$1(5,`tr`,3),gp(6,`th`,4),Ic()(),hi$1(7,`tbody`,5),Ep(`selectedValueChange`,function(r){return i._dateSelected(r)})(`activeDateChange`,function(r){return i._updateActiveDate(r)})(`previewChange`,function(r){return i._previewChanged(r)})(`dragStarted`,function(r){return i.dragStarted.emit(r)})(`dragEnded`,function(r){return i._dragEnded(r)})(`keyup`,function(r){return i._handleCalendarBodyKeyup(r)})(`keydown`,function(r){return i._handleCalendarBodyKeydown(r)}),Ic()()),t&2&&(Wy(3),qD(i._weekdays()),Wy(4),hp(`label`,i._monthLabel())(`rows`,i._weeks())(`todayValue`,i._todayDate())(`startValue`,i._rangeStart())(`endValue`,i._rangeEnd())(`comparisonStart`,i._comparisonRangeStart())(`comparisonEnd`,i._comparisonRangeEnd())(`previewStart`,i._previewStart())(`previewEnd`,i._previewEnd())(`isRange`,i._isRange())(`labelMinRequiredCells`,3)(`activeCell`,i._dateAdapter.getDate(i.activeDate)-1)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName))},dependencies:[ve],encapsulation:2})}return a})();var z=24;var Mt=4;var Fi=(()=>{class a{_changeDetectorRef=I(pI);_dateAdapter=I(L,{optional:!0});_dir=I(vt$1,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),Pi(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new je;yearSelected=new je;activeDateChange=new je;_matCalendarBody;_years=Bo([]);_todayYear=Bo(0);_selectedYear=Bo(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(mg(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let n=0,r=[];n<z;n++)r.push(t+n),r.length==Mt&&(i.push(r.map(h=>this._createCellForYear(h))),r=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Mt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Mt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,z-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-z*10:-z);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?z*10:z);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new Ee(e,i,i,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof W){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,i){if(t&1&&bp(ve,5),t&2){let n;cE(n=uE())&&(i._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(hi$1(0,`table`,0)(1,`thead`,1)(2,`tr`),gp(3,`th`,2),Ic()(),hi$1(4,`tbody`,3),Ep(`selectedValueChange`,function(r){return i._yearSelected(r)})(`activeDateChange`,function(r){return i._updateActiveDate(r)})(`keyup`,function(r){return i._handleCalendarBodyKeyup(r)})(`keydown`,function(r){return i._handleCalendarBodyKeydown(r)}),Ic()()),t&2&&(Wy(4),hp(`rows`,i._years())(`todayValue`,i._todayYear())(`startValue`,i._selectedYear())(`endValue`,i._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._getActiveCell()))},dependencies:[ve],encapsulation:2})}return a})();function Pi(a,o,e,t,i){let n=a.getYear(o),r=a.getYear(e),h=Li(a,t,i);return Math.floor((n-h)/z)===Math.floor((r-h)/z)}function Ne(a,o,e,t){return pn(a.getYear(o)-Li(a,e,t),z)}function Li(a,o,e){let t=0;return e?t=a.getYear(e)-z+1:o&&(t=a.getYear(o)),t}function pn(a,o){return(a%o+o)%o}var Ri=(()=>{class a{_changeDetectorRef=I(pI);_dateFormats=I(me,{optional:!0});_dateAdapter=I(L,{optional:!0});_dir=I(vt$1,{optional:!0});_rerenderSubscription=q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new je;monthSelected=new je;activeDateChange=new je;_matCalendarBody;_months=Bo([]);_yearLabel=Bo(``);_todayMonth=Bo(null);_selectedMonth=Bo(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(mg(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(i,`year`):void 0;return new Ee(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let n=i;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof W?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-year-view`]],viewQuery:function(t,i){if(t&1&&bp(ve,5),t&2){let n;cE(n=uE())&&(i._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,i){t&1&&(hi$1(0,`table`,0)(1,`thead`,1)(2,`tr`),gp(3,`th`,2),Ic()(),hi$1(4,`tbody`,3),Ep(`selectedValueChange`,function(r){return i._monthSelected(r)})(`activeDateChange`,function(r){return i._updateActiveDate(r)})(`keyup`,function(r){return i._handleCalendarBodyKeyup(r)})(`keydown`,function(r){return i._handleCalendarBodyKeydown(r)}),Ic()()),t&2&&(Wy(4),hp(`label`,i._yearLabel())(`rows`,i._months())(`todayValue`,i._todayMonth())(`startValue`,i._selectedMonth())(`endValue`,i._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._dateAdapter.getMonth(i.activeDate)))},dependencies:[ve],encapsulation:2})}return a})();var Bi=(()=>{class a{_intl=I(ye);calendar=I(kt);_dateAdapter=I(L,{optional:!0});_dateFormats=I(me,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){I(D).load(x);let e=I(pI);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-z))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:z))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Pi(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ne(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+z-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1))]}_periodButtonLabelId=I(K).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:Xa,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(t,i){t&1&&(iE(),hi$1(0,`div`,0)(1,`div`,1)(2,`span`,2),OE(3),Ic(),hi$1(4,`button`,3),Ep(`click`,function(){return i.currentPeriodClicked()}),hi$1(5,`span`,4),OE(6),Ic(),Dl(),hi$1(7,`svg`,5),gp(8,`polygon`,6),Ic()(),El(),gp(9,`div`,7),sE(10),hi$1(11,`button`,8),Ep(`click`,function(){return i.previousClicked()}),Dl(),hi$1(12,`svg`,9),gp(13,`path`,10),Ic()(),El(),hi$1(14,`button`,11),Ep(`click`,function(){return i.nextClicked()}),Dl(),hi$1(15,`svg`,9),gp(16,`path`,12),Ic()()()()),t&2&&(Wy(2),hp(`id`,i._periodButtonLabelId),Wy(),Lp(i.periodButtonDescription),Wy(),pp(`aria-label`,i.periodButtonLabel)(`aria-describedby`,i._periodButtonLabelId),Wy(2),Lp(i.periodButtonText),Wy(),xp(`mat-calendar-invert`,i.calendar.currentView!==`month`),Wy(4),hp(`disabled`,!i.previousEnabled())(`matTooltip`,i.prevButtonLabel),pp(`aria-label`,i.prevButtonLabel),Wy(3),hp(`disabled`,!i.nextEnabled())(`matTooltip`,i.nextButtonLabel),pp(`aria-label`,i.nextButtonLabel))},dependencies:[An,zt,_i],encapsulation:2})}return a})();var kt=(()=>{class a{_dateAdapter=I(L,{optional:!0});_dateFormats=I(me,{optional:!0});_changeDetectorRef=I(pI);_elementRef=I(Wt);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new je;yearSelected=new je;monthSelected=new je;viewChanged=new je(!0);_userSelection=new je;_userDragDrop=new je;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new W$1;constructor(){this._intlChanges=I(ye).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new ut$1(this.headerComponent||Bi),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||i||e.dateFilter;if(n&&!n.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(Ie$1())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof W||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-calendar`]],viewQuery:function(t,i){if(t&1&&bp(Ti,5)(Ri,5)(Fi,5),t&2){let n;cE(n=uE())&&(i.monthView=n.first),cE(n=uE())&&(i.yearView=n.first),cE(n=uE())&&(i.multiYearView=n.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[$E([mn]),Ua$1],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(t,i){if(t&1&&(up(0,Za,0,0,`ng-template`,0),hi$1(1,`div`,1),UD(2,Ja,1,11,`mat-month-view`,2)(3,en,1,6,`mat-year-view`,3)(4,tn,1,6,`mat-multi-year-view`,3),Ic()),t&2){let n;hp(`cdkPortalOutlet`,i._calendarHeaderPortal),Wy(2),GD((n=i.currentView)===`month`?2:n===`year`?3:n===`multi-year`?4:-1)}},dependencies:[ni,Xe,Ti,Ri,Fi],styles:[`.mat-calendar {
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
`],encapsulation:2})}return a})();var un=(()=>{class a{_elementRef=I(Wt);_animationsDisabled=Yn();_changeDetectorRef=I(pI);_globalModel=I($e);_dateAdapter=I(L);_ngZone=I(Me);_rangeSelectionStrategy=I(Vi,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new W$1;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(I(D).load(x),this._closeButtonText=I(ye).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=I(Dr);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,n=t instanceof W;if(n&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(r,this)}else i&&(n||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-datepicker-content`]],viewQuery:function(t,i){if(t&1&&bp(kt,5),t&2){let n;cE(n=uE())&&(i._calendar=n.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(t,i){t&2&&(CE(i.color?`mat-`+i.color:``),xp(`mat-datepicker-content-touch`,i.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!i._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(t,i){t&1&&(hi$1(0,`div`,0)(1,`mat-calendar`,1),Ep(`yearSelected`,function(r){return i.datepicker._selectYear(r)})(`monthSelected`,function(r){return i.datepicker._selectMonth(r)})(`viewChanged`,function(r){return i.datepicker._viewChanged(r)})(`_userSelection`,function(r){return i._handleUserSelection(r)})(`_userDragDrop`,function(r){return i._handleUserDragDrop(r)}),Ic(),up(2,an,0,0,`ng-template`,2),hi$1(3,`button`,3),Ep(`focus`,function(){return i._closeButtonFocused=!0})(`blur`,function(){return i._closeButtonFocused=!1})(`click`,function(){return i.datepicker.close()}),OE(4),Ic()()),t&2&&(xp(`mat-datepicker-content-container-with-custom-header`,i.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,i._actionsPortal),pp(`aria-modal`,!0)(`aria-labelledby`,i._dialogLabelId??void 0),Wy(),CE(i.datepicker.panelClass),hp(`id`,i.datepicker.id)(`startAt`,i.datepicker.startAt)(`startView`,i.datepicker.startView)(`minDate`,i.datepicker._getMinDate())(`maxDate`,i.datepicker._getMaxDate())(`dateFilter`,i.datepicker._getDateFilter())(`headerComponent`,i.datepicker.calendarHeaderComponent)(`selected`,i._getSelected())(`dateClass`,i.datepicker.dateClass)(`comparisonStart`,i.comparisonStart)(`comparisonEnd`,i.comparisonEnd)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName),Wy(),hp(`cdkPortalOutlet`,i._actionsPortal),Wy(),xp(`cdk-visually-hidden`,!i._closeButtonFocused),hp(`color`,i.color||`primary`),Wy(),Lp(i._closeButtonText))},dependencies:[ht$1,kt,ni,An],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2})}return a})();var fn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=Mn({type:a,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return a})();var _n=(()=>{class a{_intl=I(ye);_changeDetectorRef=I(pI);_stateChanges=q.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=I(new Qp(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Uh(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Uh(),i=this.datepicker?rg(this.datepicker.openedStream,this.datepicker.closedStream):Uh();this._stateChanges.unsubscribe(),this._stateChanges=rg(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||a)};static ɵcmp=bD({type:a,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(t,i,n){if(t&1&&wp(n,fn,5),t&2){let r;cE(r=uE())&&(i._customIcon=r.first)}},viewQuery:function(t,i){if(t&1&&bp(nn,5),t&2){let n;cE(n=uE())&&(i._button=n.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(t,i){t&1&&Ep(`click`,function(r){return i._open(r)}),t&2&&(pp(`tabindex`,null)(`data-mat-calendar`,i.datepicker?i.datepicker.id:null),xp(`mat-datepicker-toggle-active`,i.datepicker&&i.datepicker.opened)(`mat-accent`,i.datepicker&&i.datepicker.color===`accent`)(`mat-warn`,i.datepicker&&i.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,bF],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Ua$1],ngContentSelectors:on,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(t,i){t&1&&(iE(rn),hi$1(0,`button`,1,0),UD(2,sn,2,0,`:svg:svg`,2),sE(3),Ic()),t&2&&(hp(`tabIndex`,i.disabled?-1:i.tabIndex)(`disabled`,i.disabled)(`disableRipple`,i.disableRipple),pp(`aria-haspopup`,i.datepicker?`dialog`:null)(`aria-label`,i.ariaLabel||i._intl.openCalendarLabel)(`aria-expanded`,i.datepicker?i.datepicker.opened:null),Wy(2),GD(i._customIcon?-1:2))},dependencies:[zt],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2})}return a})();var Ao=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({providers:[ye],imports:[Tn$1,ae$1,ft$1,Vt,un,_n,Bi,ai,dt$1]})}return a})();var zi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({})}return a})();var Ie=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({imports:[Re,Ni,ai]})}return a})();var Yo=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({imports:[Ie,Ie,zi,ai]})}return a})();var Jo=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=yc({type:a});static ɵinj=yo({imports:[ae$1,pt,ai,dt$1,Ie,pt]})}return a})();export{Yo as i,Ao as n,Jo as r,$n as t};