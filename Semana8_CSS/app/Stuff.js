<<<<<<< Updated upstream
const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./CwWu6hMO.js", "./c-iJqvqp.js", "./Bn38pGyi.js", "./Cpu0iyM-.js", "./XNCJIUnA.js", "./DI7r5gpH.js", "./BPuP_hXi.js", "./DsqdWQfm.js", "./xtGvwCe_.js", "./XYblUQ4q.js", "./CtTCefNa.js", "./index.BNus6C5W.css", "./KDdXfVIT.js", "./YNmpfwq8.js", "./B7s6GHU7.js", "./DbluH_Oc.js", "./_contractId_.BOhaFhW_.css", "./s1NVb3Eb.js", "./DlAUqK2U.js", "./CMylc2fj.js", "./pDuR_pqH.js", "./DJpEn3_2.js", "./6bP3mW5m.js", "./D1Zt9Eax.js", "./CUb4ZiLZ.js", "./CHMaNiXP.js", "./ProsePre.D5orA6B_.css", "./DWzMaTp5.js", "./DUcUzu8l.js", "./BggMB-82.js", "./CXR7IpPr.js", "./C6Qy8QyI.js", "./w0UZ36yD.js", "./-SNeWsBY.js", "./BaXHbvcu.js"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ze(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const re = {}
  , bn = []
  , nt = () => {}
  , Mi = () => !1
  , tr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Go = e => e.startsWith("onUpdate:")
  , ye = Object.assign
  , Yo = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , $d = Object.prototype.hasOwnProperty
  , ce = (e, t) => $d.call(e, t)
  , z = Array.isArray
  , wn = e => Pn(e) === "[object Map]"
  , pn = e => Pn(e) === "[object Set]"
  , qs = e => Pn(e) === "[object Date]"
  , kc = e => Pn(e) === "[object RegExp]"
  , Q = e => typeof e == "function"
  , me = e => typeof e == "string"
  , dt = e => typeof e == "symbol"
  , ge = e => e !== null && typeof e == "object"
  , Jo = e => (ge(e) || Q(e)) && Q(e.then) && Q(e.catch)
  , Li = Object.prototype.toString
  , Pn = e => Li.call(e)
  , Tc = e => Pn(e).slice(8, -1)
  , nr = e => Pn(e) === "[object Object]"
  , Qo = e => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , En = Ze(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , jd = Ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo")
  , Xo = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
  , Fd = /-\w/g
  , De = Xo(e => e.replace(Fd, t => t.slice(1).toUpperCase()))
  , Bd = /\B([A-Z])/g
  , We = Xo(e => e.replace(Bd, "-$1").toLowerCase())
  , rr = Xo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Vn = Xo(e => e ? `on${rr(e)}` : "")
  , Ue = (e, t) => !Object.is(e, t)
  , kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Ii = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Cr = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Rr = e => {
    const t = me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Oa;
const Br = () => Oa || (Oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {})
  , Ud = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function Vd(e) {
    return Ud.test(e) ? `__props.${e}` : `__props[${JSON.stringify(e)}]`
}
function Wd(e, t) {
    return e + JSON.stringify(t, (n, r) => typeof r == "function" ? r.toString() : r)
}
const zd = {
    TEXT: 1,
    1: "TEXT",
    CLASS: 2,
    2: "CLASS",
    STYLE: 4,
    4: "STYLE",
    PROPS: 8,
    8: "PROPS",
    FULL_PROPS: 16,
    16: "FULL_PROPS",
    NEED_HYDRATION: 32,
    32: "NEED_HYDRATION",
    STABLE_FRAGMENT: 64,
    64: "STABLE_FRAGMENT",
    KEYED_FRAGMENT: 128,
    128: "KEYED_FRAGMENT",
    UNKEYED_FRAGMENT: 256,
    256: "UNKEYED_FRAGMENT",
    NEED_PATCH: 512,
    512: "NEED_PATCH",
    DYNAMIC_SLOTS: 1024,
    1024: "DYNAMIC_SLOTS",
    DEV_ROOT_FRAGMENT: 2048,
    2048: "DEV_ROOT_FRAGMENT",
    CACHED: -1,
    "-1": "CACHED",
    BAIL: -2,
    "-2": "BAIL"
}
  , qd = {
    1: "TEXT",
    2: "CLASS",
    4: "STYLE",
    8: "PROPS",
    16: "FULL_PROPS",
    32: "NEED_HYDRATION",
    64: "STABLE_FRAGMENT",
    128: "KEYED_FRAGMENT",
    256: "UNKEYED_FRAGMENT",
    512: "NEED_PATCH",
    1024: "DYNAMIC_SLOTS",
    2048: "DEV_ROOT_FRAGMENT",
    [-1]: "CACHED",
    [-2]: "BAIL"
}
  , Kd = {
    ELEMENT: 1,
    1: "ELEMENT",
    FUNCTIONAL_COMPONENT: 2,
    2: "FUNCTIONAL_COMPONENT",
    STATEFUL_COMPONENT: 4,
    4: "STATEFUL_COMPONENT",
    TEXT_CHILDREN: 8,
    8: "TEXT_CHILDREN",
    ARRAY_CHILDREN: 16,
    16: "ARRAY_CHILDREN",
    SLOTS_CHILDREN: 32,
    32: "SLOTS_CHILDREN",
    TELEPORT: 64,
    64: "TELEPORT",
    SUSPENSE: 128,
    128: "SUSPENSE",
    COMPONENT_SHOULD_KEEP_ALIVE: 256,
    256: "COMPONENT_SHOULD_KEEP_ALIVE",
    COMPONENT_KEPT_ALIVE: 512,
    512: "COMPONENT_KEPT_ALIVE",
    COMPONENT: 6,
    6: "COMPONENT"
}
  , Gd = {
    STABLE: 1,
    1: "STABLE",
    DYNAMIC: 2,
    2: "DYNAMIC",
    FORWARDED: 3,
    3: "FORWARDED"
}
  , Yd = {
    1: "STABLE",
    2: "DYNAMIC",
    3: "FORWARDED"
}
  , Jd = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol"
  , Ni = Ze(Jd)
  , Qd = Ni
  , Ma = 2;
function Xd(e, t=0, n=e.length) {
    if (t = Math.max(0, Math.min(t, e.length)),
    n = Math.max(0, Math.min(n, e.length)),
    t > n)
        return "";
    let r = e.split(/(\r?\n)/);
    const o = r.filter( (a, l) => l % 2 === 1);
    r = r.filter( (a, l) => l % 2 === 0);
    let s = 0;
    const i = [];
    for (let a = 0; a < r.length; a++)
        if (s += r[a].length + (o[a] && o[a].length || 0),
        s >= t) {
            for (let l = a - Ma; l <= a + Ma || n > s; l++) {
                if (l < 0 || l >= r.length)
                    continue;
                const u = l + 1;
                i.push(`${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${r[l]}`);
                const c = r[l].length
                  , f = o[l] && o[l].length || 0;
                if (l === a) {
                    const d = t - (s - (c + f))
                      , h = Math.max(1, n > s ? c - d : n - t);
                    i.push("   |  " + " ".repeat(d) + "^".repeat(h))
                } else if (l > a) {
                    if (n > s) {
                        const d = Math.max(Math.min(n - s, c), 1);
                        i.push("   |  " + "^".repeat(d))
                    }
                    s += c + f
                }
            }
            break
        }
    return i.join(`
`)
}
function On(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = me(r) ? Sc(r) : On(r);
            if (o)
                for (const s in o)
                    t[s] = o[s]
        }
        return t
    } else if (me(e) || ge(e))
        return e
}
const Zd = /;(?![^(]*\))/g
  , eh = /:([^]+)/
  , th = /\/\*[^]*?\*\//g;
function Sc(e) {
    const t = {};
    return e.replace(th, "").split(Zd).forEach(n => {
        if (n) {
            const r = n.split(eh);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function nh(e) {
    if (!e)
        return "";
    if (me(e))
        return e;
    let t = "";
    for (const n in e) {
        const r = e[n];
        if (me(r) || typeof r == "number") {
            const o = n.startsWith("--") ? n : We(n);
            t += `${o}:${r};`
        }
    }
    return t
}
function dn(e) {
    let t = "";
    if (me(e))
        t = e;
    else if (z(e))
        for (let n = 0; n < e.length; n++) {
            const r = dn(e[n]);
            r && (t += r + " ")
        }
    else if (ge(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function xc(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !me(t) && (e.class = dn(t)),
    n && (e.style = On(n)),
    e
}
const rh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , oh = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
  , sh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"
  , ih = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
  , ah = Ze(rh)
  , lh = Ze(oh)
  , ch = Ze(sh)
  , uh = Ze(ih)
  , Cc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Rc = Ze(Cc)
  , fh = Ze(Cc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Di(e) {
    return !!e || e === ""
}
const dh = /[>/="'\u0009\u000a\u000c\u0020]/
  , bs = {};
function hh(e) {
    if (bs.hasOwnProperty(e))
        return bs[e];
    const t = dh.test(e);
    return t && console.error(`unsafe attribute name: ${e}`),
    bs[e] = !t
}
const ph = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
}
  , mh = Ze("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap")
  , gh = Ze("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan")
  , yh = Ze("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
function _h(e) {
    if (e == null)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean"
}
const vh = /["'&<>]/;
function bh(e) {
    const t = "" + e
      , n = vh.exec(t);
    if (!n)
        return t;
    let r = "", o, s, i = 0;
    for (s = n.index; s < t.length; s++) {
        switch (t.charCodeAt(s)) {
        case 34:
            o = "&quot;";
            break;
        case 38:
            o = "&amp;";
            break;
        case 39:
            o = "&#39;";
            break;
        case 60:
            o = "&lt;";
            break;
        case 62:
            o = "&gt;";
            break;
        default:
            continue
        }
        i !== s && (r += t.slice(i, s)),
        i = s + 1,
        r += o
    }
    return i !== s ? r + t.slice(i, s) : r
}
const wh = /^-?>|<!--|-->|--!>|<!-$/g;
function Eh(e) {
    return e.replace(wh, "")
}
const Ac = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function kh(e, t) {
    return e.replace(Ac, n => t ? n === '"' ? '\\\\\\"' : `\\\\${n}` : `\\${n}`)
}
function Th(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = Wt(e[r], t[r]);
    return n
}
function Wt(e, t) {
    if (e === t)
        return !0;
    let n = qs(e)
      , r = qs(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = dt(e),
    r = dt(t),
    n || r)
        return e === t;
    if (n = z(e),
    r = z(t),
    n || r)
        return n && r ? Th(e, t) : !1;
    if (n = ge(e),
    r = ge(t),
    n || r) {
        if (!n || !r)
            return !1;
        const o = Object.keys(e).length
          , s = Object.keys(t).length;
        if (o !== s)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , l = t.hasOwnProperty(i);
            if (a && !l || !a && l || !Wt(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Ur(e, t) {
    return e.findIndex(n => Wt(n, t))
}
const Pc = e => !!(e && e.__v_isRef === !0)
  , Ut = e => me(e) ? e : e == null ? "" : z(e) || ge(e) && (e.toString === Li || !Q(e.toString)) ? Pc(e) ? Ut(e.value) : JSON.stringify(e, Oc, 2) : String(e)
  , Oc = (e, t) => Pc(t) ? Oc(e, t.value) : wn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,o], s) => (n[ws(r, s) + " =>"] = o,
    n), {})
} : pn(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => ws(n))
} : dt(t) ? ws(t) : ge(t) && !z(t) && !nr(t) ? String(t) : t
  , ws = (e, t="") => {
    var n;
    return dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
function Mc(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e)
}
const Jw = Object.freeze(Object.defineProperty({
    __proto__: null,
    EMPTY_ARR: bn,
    EMPTY_OBJ: re,
    NO: Mi,
    NOOP: nt,
    PatchFlagNames: qd,
    PatchFlags: zd,
    ShapeFlags: Kd,
    SlotFlags: Gd,
    camelize: De,
    capitalize: rr,
    cssVarNameEscapeSymbolsRE: Ac,
    def: Ii,
    escapeHtml: bh,
    escapeHtmlComment: Eh,
    extend: ye,
    genCacheKey: Wd,
    genPropsAccessExp: Vd,
    generateCodeFrame: Xd,
    getEscapedCssVarName: kh,
    getGlobalThis: Br,
    hasChanged: Ue,
    hasOwn: ce,
    hyphenate: We,
    includeBooleanAttr: Di,
    invokeArrayFns: kn,
    isArray: z,
    isBooleanAttr: fh,
    isBuiltInDirective: jd,
    isDate: qs,
    isFunction: Q,
    isGloballyAllowed: Ni,
    isGloballyWhitelisted: Qd,
    isHTMLTag: ah,
    isIntegerKey: Qo,
    isKnownHtmlAttr: mh,
    isKnownMathMLAttr: yh,
    isKnownSvgAttr: gh,
    isMap: wn,
    isMathMLTag: ch,
    isModelListener: Go,
    isObject: ge,
    isOn: tr,
    isPlainObject: nr,
    isPromise: Jo,
    isRegExp: kc,
    isRenderableAttrValue: _h,
    isReservedProp: En,
    isSSRSafeAttrName: hh,
    isSVGTag: lh,
    isSet: pn,
    isSpecialBooleanAttr: Rc,
    isString: me,
    isSymbol: dt,
    isVoidTag: uh,
    looseEqual: Wt,
    looseIndexOf: Ur,
    looseToNumber: Cr,
    makeMap: Ze,
    normalizeClass: dn,
    normalizeCssVarValue: Mc,
    normalizeProps: xc,
    normalizeStyle: On,
    objectToString: Li,
    parseStringStyle: Sc,
    propsToAttrMap: ph,
    remove: Yo,
    slotFlagsText: Yd,
    stringifyStyle: nh,
    toDisplayString: Ut,
    toHandlerKey: Vn,
    toNumber: Rr,
    toRawType: Tc,
    toTypeString: Pn
}, Symbol.toStringTag, {
    value: "Module"
}));
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class Hi {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = Be,
        !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Be;
            try {
                return Be = this,
                t()
            } finally {
                Be = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Be,
        Be = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Be = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Lc(e) {
    return new Hi(e)
}
function Vr() {
    return Be
}
function $i(e, t=!1) {
    Be && Be.cleanups.push(e)
}
let ve;
const Es = new WeakSet;
class Ar {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        Be && Be.active && Be.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Es.has(this) && (Es.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nc(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        La(this),
        Dc(this);
        const t = ve
          , n = wt;
        ve = this,
        wt = !0;
        try {
            return this.fn()
        } finally {
            Hc(this),
            ve = t,
            wt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Bi(t);
            this.deps = this.depsTail = void 0,
            La(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Es.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ks(this) && this.run()
    }
    get dirty() {
        return Ks(this)
    }
}
let Ic = 0, vr, br;
function Nc(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = br,
        br = e;
        return
    }
    e.next = vr,
    vr = e
}
function ji() {
    Ic++
}
function Fi() {
    if (--Ic > 0)
        return;
    if (br) {
        let t = br;
        for (br = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; vr; ) {
        let t = vr;
        for (vr = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Dc(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Hc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const o = r.prevDep;
        r.version === -1 ? (r === n && (n = o),
        Bi(r),
        Sh(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = o
    }
    e.deps = t,
    e.depsTail = n
}
function Ks(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && ($c(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function $c(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Pr) || (e.globalVersion = Pr,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ks(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = ve
      , r = wt;
    ve = e,
    wt = !0;
    try {
        Dc(e);
        const o = e.fn(e._value);
        (t.version === 0 || Ue(o, e._value)) && (e.flags |= 128,
        e._value = o,
        t.version++)
    } catch (o) {
        throw t.version++,
        o
    } finally {
        ve = n,
        wt = r,
        Hc(e),
        e.flags &= -3
    }
}
function Bi(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: o} = e;
    if (r && (r.nextSub = o,
    e.prevSub = void 0),
    o && (o.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let s = n.computed.deps; s; s = s.nextDep)
            Bi(s, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Sh(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
function xh(e, t) {
    e.effect instanceof Ar && (e = e.effect.fn);
    const n = new Ar(e);
    t && ye(n, t);
    try {
        n.run()
    } catch (o) {
        throw n.stop(),
        o
    }
    const r = n.run.bind(n);
    return r.effect = n,
    r
}
function Ch(e) {
    e.effect.stop()
}
let wt = !0;
const jc = [];
function zt() {
    jc.push(wt),
    wt = !1
}
function qt() {
    const e = jc.pop();
    wt = e === void 0 ? !0 : e
}
function La(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = ve;
        ve = void 0;
        try {
            t()
        } finally {
            ve = n
        }
    }
}
let Pr = 0;
class Rh {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Zo {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!ve || !wt || ve === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ve)
            n = this.activeLink = new Rh(ve,this),
            ve.deps ? (n.prevDep = ve.depsTail,
            ve.depsTail.nextDep = n,
            ve.depsTail = n) : ve.deps = ve.depsTail = n,
            Fc(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = ve.depsTail,
            n.nextDep = void 0,
            ve.depsTail.nextDep = n,
            ve.depsTail = n,
            ve.deps === n && (ve.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Pr++,
        this.notify(t)
    }
    notify(t) {
        ji();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Fi()
        }
    }
}
function Fc(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Fc(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const ko = new WeakMap
  , Tn = Symbol("")
  , Gs = Symbol("")
  , Or = Symbol("");
function Ve(e, t, n) {
    if (wt && ve) {
        let r = ko.get(e);
        r || ko.set(e, r = new Map);
        let o = r.get(n);
        o || (r.set(n, o = new Zo),
        o.map = r,
        o.key = n),
        o.track()
    }
}
function $t(e, t, n, r, o, s) {
    const i = ko.get(e);
    if (!i) {
        Pr++;
        return
    }
    const a = l => {
        l && l.trigger()
    }
    ;
    if (ji(),
    t === "clear")
        i.forEach(a);
    else {
        const l = z(e)
          , u = l && Qo(n);
        if (l && n === "length") {
            const c = Number(r);
            i.forEach( (f, d) => {
                (d === "length" || d === Or || !dt(d) && d >= c) && a(f)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)),
            u && a(i.get(Or)),
            t) {
            case "add":
                l ? u && a(i.get("length")) : (a(i.get(Tn)),
                wn(e) && a(i.get(Gs)));
                break;
            case "delete":
                l || (a(i.get(Tn)),
                wn(e) && a(i.get(Gs)));
                break;
            case "set":
                wn(e) && a(i.get(Tn));
                break
            }
    }
    Fi()
}
function Ah(e, t) {
    const n = ko.get(e);
    return n && n.get(t)
}
function Nn(e) {
    const t = se(e);
    return t === e ? t : (Ve(t, "iterate", Or),
    rt(e) ? t : t.map(He))
}
function es(e) {
    return Ve(e = se(e), "iterate", Or),
    e
}
const Ph = {
    __proto__: null,
    [Symbol.iterator]() {
        return ks(this, Symbol.iterator, He)
    },
    concat(...e) {
        return Nn(this).concat(...e.map(t => z(t) ? Nn(t) : t))
    },
    entries() {
        return ks(this, "entries", e => (e[1] = He(e[1]),
        e))
    },
    every(e, t) {
        return Lt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Lt(this, "filter", e, t, n => n.map(He), arguments)
    },
    find(e, t) {
        return Lt(this, "find", e, t, He, arguments)
    },
    findIndex(e, t) {
        return Lt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Lt(this, "findLast", e, t, He, arguments)
    },
    findLastIndex(e, t) {
        return Lt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Lt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ts(this, "includes", e)
    },
    indexOf(...e) {
        return Ts(this, "indexOf", e)
    },
    join(e) {
        return Nn(this).join(e)
    },
    lastIndexOf(...e) {
        return Ts(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Lt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return ur(this, "pop")
    },
    push(...e) {
        return ur(this, "push", e)
    },
    reduce(e, ...t) {
        return Ia(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Ia(this, "reduceRight", e, t)
    },
    shift() {
        return ur(this, "shift")
    },
    some(e, t) {
        return Lt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return ur(this, "splice", e)
    },
    toReversed() {
        return Nn(this).toReversed()
    },
    toSorted(e) {
        return Nn(this).toSorted(e)
    },
    toSpliced(...e) {
        return Nn(this).toSpliced(...e)
    },
    unshift(...e) {
        return ur(this, "unshift", e)
    },
    values() {
        return ks(this, "values", He)
    }
};
function ks(e, t, n) {
    const r = es(e)
      , o = r[t]();
    return r !== e && !rt(e) && (o._next = o.next,
    o.next = () => {
        const s = o._next();
        return s.value && (s.value = n(s.value)),
        s
    }
    ),
    o
}
const Oh = Array.prototype;
function Lt(e, t, n, r, o, s) {
    const i = es(e)
      , a = i !== e && !rt(e)
      , l = i[t];
    if (l !== Oh[t]) {
        const f = l.apply(e, s);
        return a ? He(f) : f
    }
    let u = n;
    i !== e && (a ? u = function(f, d) {
        return n.call(this, He(f), d, e)
    }
    : n.length > 2 && (u = function(f, d) {
        return n.call(this, f, d, e)
    }
    ));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c
}
function Ia(e, t, n, r) {
    const o = es(e);
    let s = n;
    return o !== e && (rt(e) ? n.length > 3 && (s = function(i, a, l) {
        return n.call(this, i, a, l, e)
    }
    ) : s = function(i, a, l) {
        return n.call(this, i, He(a), l, e)
    }
    ),
    o[t](s, ...r)
}
function Ts(e, t, n) {
    const r = se(e);
    Ve(r, "iterate", Or);
    const o = r[t](...n);
    return (o === -1 || o === !1) && rs(n[0]) ? (n[0] = se(n[0]),
    r[t](...n)) : o
}
function ur(e, t, n=[]) {
    zt(),
    ji();
    const r = se(e)[t].apply(e, n);
    return Fi(),
    qt(),
    r
}
const Mh = Ze("__proto__,__v_isRef,__isVue")
  , Bc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(dt));
function Lh(e) {
    dt(e) || (e = String(e));
    const t = se(this);
    return Ve(t, "has", e),
    t.hasOwnProperty(e)
}
class Uc {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const o = this._isReadonly
          , s = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return s;
        if (n === "__v_raw")
            return r === (o ? s ? Gc : Kc : s ? qc : zc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = z(t);
        if (!o) {
            let l;
            if (i && (l = Ph[n]))
                return l;
            if (n === "hasOwnProperty")
                return Lh
        }
        const a = Reflect.get(t, n, Re(t) ? t : r);
        return (dt(n) ? Bc.has(n) : Mh(n)) || (o || Ve(t, "get", n),
        s) ? a : Re(a) ? i && Qo(n) ? a : a.value : ge(a) ? o ? or(a) : ot(a) : a
    }
}
class Vc extends Uc {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let s = t[n];
        if (!this._isShallow) {
            const l = Mt(s);
            if (!rt(r) && !Mt(r) && (s = se(s),
            r = se(r)),
            !z(t) && Re(s) && !Re(r))
                return l || (s.value = r),
                !0
        }
        const i = z(t) && Qo(n) ? Number(n) < t.length : ce(t, n)
          , a = Reflect.set(t, n, r, Re(t) ? t : o);
        return t === se(o) && (i ? Ue(r, s) && $t(t, "set", n, r) : $t(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = ce(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && $t(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!dt(n) || !Bc.has(n)) && Ve(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ve(t, "iterate", z(t) ? "length" : Tn),
        Reflect.ownKeys(t)
    }
}
class Wc extends Uc {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Ih = new Vc
  , Nh = new Wc
  , Dh = new Vc(!0)
  , Hh = new Wc(!0)
  , Ys = e => e
  , Yr = e => Reflect.getPrototypeOf(e);
function $h(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , s = se(o)
          , i = wn(s)
          , a = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , u = o[e](...r)
          , c = n ? Ys : t ? To : He;
        return !t && Ve(s, "iterate", l ? Gs : Tn),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Jr(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function jh(e, t) {
    const n = {
        get(o) {
            const s = this.__v_raw
              , i = se(s)
              , a = se(o);
            e || (Ue(o, a) && Ve(i, "get", o),
            Ve(i, "get", a));
            const {has: l} = Yr(i)
              , u = t ? Ys : e ? To : He;
            if (l.call(i, o))
                return u(s.get(o));
            if (l.call(i, a))
                return u(s.get(a));
            s !== i && s.get(o)
        },
        get size() {
            const o = this.__v_raw;
            return !e && Ve(se(o), "iterate", Tn),
            o.size
        },
        has(o) {
            const s = this.__v_raw
              , i = se(s)
              , a = se(o);
            return e || (Ue(o, a) && Ve(i, "has", o),
            Ve(i, "has", a)),
            o === a ? s.has(o) : s.has(o) || s.has(a)
        },
        forEach(o, s) {
            const i = this
              , a = i.__v_raw
              , l = se(a)
              , u = t ? Ys : e ? To : He;
            return !e && Ve(l, "iterate", Tn),
            a.forEach( (c, f) => o.call(s, u(c), u(f), i))
        }
    };
    return ye(n, e ? {
        add: Jr("add"),
        set: Jr("set"),
        delete: Jr("delete"),
        clear: Jr("clear")
    } : {
        add(o) {
            !t && !rt(o) && !Mt(o) && (o = se(o));
            const s = se(this);
            return Yr(s).has.call(s, o) || (s.add(o),
            $t(s, "add", o, o)),
            this
        },
        set(o, s) {
            !t && !rt(s) && !Mt(s) && (s = se(s));
            const i = se(this)
              , {has: a, get: l} = Yr(i);
            let u = a.call(i, o);
            u || (o = se(o),
            u = a.call(i, o));
            const c = l.call(i, o);
            return i.set(o, s),
            u ? Ue(s, c) && $t(i, "set", o, s) : $t(i, "add", o, s),
            this
        },
        delete(o) {
            const s = se(this)
              , {has: i, get: a} = Yr(s);
            let l = i.call(s, o);
            l || (o = se(o),
            l = i.call(s, o)),
            a && a.call(s, o);
            const u = s.delete(o);
            return l && $t(s, "delete", o, void 0),
            u
        },
        clear() {
            const o = se(this)
              , s = o.size !== 0
              , i = o.clear();
            return s && $t(o, "clear", void 0, void 0),
            i
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        n[o] = $h(o, e, t)
    }
    ),
    n
}
function ts(e, t) {
    const n = jh(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ce(n, o) && o in r ? n : r, o, s)
}
const Fh = {
    get: ts(!1, !1)
}
  , Bh = {
    get: ts(!1, !0)
}
  , Uh = {
    get: ts(!0, !1)
}
  , Vh = {
    get: ts(!0, !0)
}
  , zc = new WeakMap
  , qc = new WeakMap
  , Kc = new WeakMap
  , Gc = new WeakMap;
function Wh(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function zh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Wh(Tc(e))
}
function ot(e) {
    return Mt(e) ? e : ns(e, !1, Ih, Fh, zc)
}
function Pt(e) {
    return ns(e, !1, Dh, Bh, qc)
}
function or(e) {
    return ns(e, !0, Nh, Uh, Kc)
}
function qh(e) {
    return ns(e, !0, Hh, Vh, Gc)
}
function ns(e, t, n, r, o) {
    if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = zh(e);
    if (s === 0)
        return e;
    const i = o.get(e);
    if (i)
        return i;
    const a = new Proxy(e,s === 2 ? r : n);
    return o.set(e, a),
    a
}
function ln(e) {
    return Mt(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Mt(e) {
    return !!(e && e.__v_isReadonly)
}
function rt(e) {
    return !!(e && e.__v_isShallow)
}
function rs(e) {
    return e ? !!e.__v_raw : !1
}
function se(e) {
    const t = e && e.__v_raw;
    return t ? se(t) : e
}
function Yc(e) {
    return !ce(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0),
    e
}
const He = e => ge(e) ? ot(e) : e
  , To = e => ge(e) ? or(e) : e;
function Re(e) {
    return e ? e.__v_isRef === !0 : !1
}
function he(e) {
    return Jc(e, !1)
}
function xe(e) {
    return Jc(e, !0)
}
function Jc(e, t) {
    return Re(e) ? e : new Kh(e,t)
}
class Kh {
    constructor(t, n) {
        this.dep = new Zo,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : se(t),
        this._value = n ? t : He(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || rt(t) || Mt(t);
        t = r ? t : se(t),
        Ue(t, n) && (this._rawValue = t,
        this._value = r ? t : He(t),
        this.dep.trigger())
    }
}
function Gh(e) {
    e.dep && e.dep.trigger()
}
function ie(e) {
    return Re(e) ? e.value : e
}
function ae(e) {
    return Q(e) ? e() : ie(e)
}
const Yh = {
    get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Re(o) && !Re(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Ui(e) {
    return ln(e) ? e : new Proxy(e,Yh)
}
class Jh {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new Zo
          , {get: r, set: o} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = o
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Vi(e) {
    return new Jh(e)
}
function Qh(e) {
    const t = z(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Qc(e, n);
    return t
}
class Xh {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Ah(se(this._object), this._key)
    }
}
class Zh {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function Wr(e, t, n) {
    return Re(e) ? e : Q(e) ? new Zh(e) : ge(e) && arguments.length > 1 ? Qc(e, t, n) : he(e)
}
function Qc(e, t, n) {
    const r = e[t];
    return Re(r) ? r : new Xh(e,t,n)
}
class ep {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Zo(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Pr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && ve !== this)
            return Nc(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return $c(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function tp(e, t, n=!1) {
    let r, o;
    return Q(e) ? r = e : (r = e.get,
    o = e.set),
    new ep(r,o,n)
}
const np = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}
  , rp = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
}
  , Qr = {}
  , So = new WeakMap;
let nn;
function op() {
    return nn
}
function Xc(e, t=!1, n=nn) {
    if (n) {
        let r = So.get(n);
        r || So.set(n, r = []),
        r.push(e)
    }
}
function sp(e, t, n=re) {
    const {immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l} = n
      , u = _ => o ? _ : rt(_) || o === !1 || o === 0 ? jt(_, 1) : jt(_);
    let c, f, d, h, g = !1, p = !1;
    if (Re(e) ? (f = () => e.value,
    g = rt(e)) : ln(e) ? (f = () => u(e),
    g = !0) : z(e) ? (p = !0,
    g = e.some(_ => ln(_) || rt(_)),
    f = () => e.map(_ => {
        if (Re(_))
            return _.value;
        if (ln(_))
            return u(_);
        if (Q(_))
            return l ? l(_, 2) : _()
    }
    )) : Q(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
        if (d) {
            zt();
            try {
                d()
            } finally {
                qt()
            }
        }
        const _ = nn;
        nn = c;
        try {
            return l ? l(e, 3, [h]) : e(h)
        } finally {
            nn = _
        }
    }
    : f = nt,
    t && o) {
        const _ = f
          , E = o === !0 ? 1 / 0 : o;
        f = () => jt(_(), E)
    }
    const v = Vr()
      , k = () => {
        c.stop(),
        v && v.active && Yo(v.effects, c)
    }
    ;
    if (s && t) {
        const _ = t;
        t = (...E) => {
            _(...E),
            k()
        }
    }
    let w = p ? new Array(e.length).fill(Qr) : Qr;
    const m = _ => {
        if (!(!(c.flags & 1) || !c.dirty && !_))
            if (t) {
                const E = c.run();
                if (o || g || (p ? E.some( (T, x) => Ue(T, w[x])) : Ue(E, w))) {
                    d && d();
                    const T = nn;
                    nn = c;
                    try {
                        const x = [E, w === Qr ? void 0 : p && w[0] === Qr ? [] : w, h];
                        w = E,
                        l ? l(t, 3, x) : t(...x)
                    } finally {
                        nn = T
                    }
                }
            } else
                c.run()
    }
    ;
    return a && a(m),
    c = new Ar(f),
    c.scheduler = i ? () => i(m, !1) : m,
    h = _ => Xc(_, !1, c),
    d = c.onStop = () => {
        const _ = So.get(c);
        if (_) {
            if (l)
                l(_, 4);
            else
                for (const E of _)
                    E();
            So.delete(c)
        }
    }
    ,
    t ? r ? m(!0) : w = c.run() : i ? i(m.bind(null, !0), !0) : c.run(),
    k.pause = c.pause.bind(c),
    k.resume = c.resume.bind(c),
    k.stop = k,
    k
}
function jt(e, t=1 / 0, n) {
    if (t <= 0 || !ge(e) || e.__v_skip || (n = n || new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    Re(e))
        jt(e.value, t, n);
    else if (z(e))
        for (let r = 0; r < e.length; r++)
            jt(e[r], t, n);
    else if (pn(e) || wn(e))
        e.forEach(r => {
            jt(r, t, n)
        }
        );
    else if (nr(e)) {
        for (const r in e)
            jt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Zc = [];
function ip(e) {
    Zc.push(e)
}
function ap() {
    Zc.pop()
}
function lp(e, t) {}
const cp = {
    SETUP_FUNCTION: 0,
    0: "SETUP_FUNCTION",
    RENDER_FUNCTION: 1,
    1: "RENDER_FUNCTION",
    NATIVE_EVENT_HANDLER: 5,
    5: "NATIVE_EVENT_HANDLER",
    COMPONENT_EVENT_HANDLER: 6,
    6: "COMPONENT_EVENT_HANDLER",
    VNODE_HOOK: 7,
    7: "VNODE_HOOK",
    DIRECTIVE_HOOK: 8,
    8: "DIRECTIVE_HOOK",
    TRANSITION_HOOK: 9,
    9: "TRANSITION_HOOK",
    APP_ERROR_HANDLER: 10,
    10: "APP_ERROR_HANDLER",
    APP_WARN_HANDLER: 11,
    11: "APP_WARN_HANDLER",
    FUNCTION_REF: 12,
    12: "FUNCTION_REF",
    ASYNC_COMPONENT_LOADER: 13,
    13: "ASYNC_COMPONENT_LOADER",
    SCHEDULER: 14,
    14: "SCHEDULER",
    COMPONENT_UPDATE: 15,
    15: "COMPONENT_UPDATE",
    APP_UNMOUNT_CLEANUP: 16,
    16: "APP_UNMOUNT_CLEANUP"
}
  , up = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    0: "setup function",
    1: "render function",
    2: "watcher getter",
    3: "watcher callback",
    4: "watcher cleanup function",
    5: "native event handler",
    6: "component event handler",
    7: "vnode hook",
    8: "directive hook",
    9: "transition hook",
    10: "app errorHandler",
    11: "app warnHandler",
    12: "ref function",
    13: "async component loader",
    14: "scheduler flush",
    15: "component update",
    16: "app unmount cleanup function"
};
function sr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        Mn(o, t, n)
    }
}
function ht(e, t, n, r) {
    if (Q(e)) {
        const o = sr(e, t, n, r);
        return o && Jo(o) && o.catch(s => {
            Mn(s, t, n)
        }
        ),
        o
    }
    if (z(e)) {
        const o = [];
        for (let s = 0; s < e.length; s++)
            o.push(ht(e[s], t, n, r));
        return o
    }
}
function Mn(e, t, n, r=!0) {
    const o = t ? t.vnode : null
      , {errorHandler: s, throwUnhandledErrorInProduction: i} = t && t.appContext.config || re;
    if (t) {
        let a = t.parent;
        const l = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, l, u) === !1)
                        return
            }
            a = a.parent
        }
        if (s) {
            zt(),
            sr(s, null, 10, [e, l, u]),
            qt();
            return
        }
    }
    fp(e, n, o, r, i)
}
function fp(e, t, n, r=!0, o=!1) {
    if (o)
        throw e;
    console.error(e)
}
const Ge = [];
let Rt = -1;
const Wn = [];
let rn = null
  , Hn = 0;
const eu = Promise.resolve();
let xo = null;
function pt(e) {
    const t = xo || eu;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function dp(e) {
    let t = Rt + 1
      , n = Ge.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = Ge[r]
          , s = Lr(o);
        s < e || s === e && o.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Wi(e) {
    if (!(e.flags & 1)) {
        const t = Lr(e)
          , n = Ge[Ge.length - 1];
        !n || !(e.flags & 2) && t >= Lr(n) ? Ge.push(e) : Ge.splice(dp(t), 0, e),
        e.flags |= 1,
        tu()
    }
}
function tu() {
    xo || (xo = eu.then(nu))
}
function Mr(e) {
    z(e) ? Wn.push(...e) : rn && e.id === -1 ? rn.splice(Hn + 1, 0, e) : e.flags & 1 || (Wn.push(e),
    e.flags |= 1),
    tu()
}
function Na(e, t, n=Rt + 1) {
    for (; n < Ge.length; n++) {
        const r = Ge[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            Ge.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function Co(e) {
    if (Wn.length) {
        const t = [...new Set(Wn)].sort( (n, r) => Lr(n) - Lr(r));
        if (Wn.length = 0,
        rn) {
            rn.push(...t);
            return
        }
        for (rn = t,
        Hn = 0; Hn < rn.length; Hn++) {
            const n = rn[Hn];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        rn = null,
        Hn = 0
    }
}
const Lr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nu(e) {
    try {
        for (Rt = 0; Rt < Ge.length; Rt++) {
            const t = Ge[Rt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            sr(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Rt < Ge.length; Rt++) {
            const t = Ge[Rt];
            t && (t.flags &= -2)
        }
        Rt = -1,
        Ge.length = 0,
        Co(),
        xo = null,
        (Ge.length || Wn.length) && nu()
    }
}
let $n, Xr = [];
function ru(e, t) {
    var n, r;
    $n = e,
    $n ? ($n.enabled = !0,
    Xr.forEach( ({event: o, args: s}) => $n.emit(o, ...s)),
    Xr = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(s => {
        ru(s, t)
    }
    ),
    setTimeout( () => {
        $n || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null,
        Xr = [])
    }
    , 3e3)) : Xr = []
}
let je = null
  , os = null;
function Ir(e) {
    const t = je;
    return je = e,
    os = e && e.type.__scopeId || null,
    t
}
function hp(e) {
    os = e
}
function pp() {
    os = null
}
const mp = e => _t;
function _t(e, t=je, n) {
    if (!t || e._n)
        return e;
    const r = (...o) => {
        r._d && Hr(-1);
        const s = Ir(t);
        let i;
        try {
            i = e(...o)
        } finally {
            Ir(s),
            r._d && Hr(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function gp(e, t) {
    if (je === null)
        return e;
    const n = Kr(je)
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[s,i,a,l=re] = t[o];
        s && (Q(s) && (s = {
            mounted: s,
            updated: s
        }),
        s.deep && jt(i),
        r.push({
            dir: s,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function At(e, t, n, r) {
    const o = e.dirs
      , s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let l = a.dir[r];
        l && (zt(),
        ht(l, n, 8, [e.el, a, e, t]),
        qt())
    }
}
const ou = Symbol("_vte")
  , su = e => e.__isTeleport
  , wr = e => e && (e.disabled || e.disabled === "")
  , Da = e => e && (e.defer || e.defer === "")
  , Ha = e => typeof SVGElement < "u" && e instanceof SVGElement
  , $a = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Js = (e, t) => {
    const n = e && e.to;
    return me(n) ? t ? t(n) : null : n
}
  , iu = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: h, querySelector: g, createText: p, createComment: v}} = u
          , k = wr(t.props);
        let {shapeFlag: w, children: m, dynamicChildren: _} = t;
        if (e == null) {
            const E = t.el = p("")
              , T = t.anchor = p("");
            h(E, n, r),
            h(T, n, r);
            const x = (R, P) => {
                w & 16 && (o && o.isCE && (o.ce._teleportTarget = R),
                c(m, R, P, o, s, i, a, l))
            }
              , N = () => {
                const R = t.target = Js(t.props, g)
                  , P = au(R, t, p, h);
                R && (i !== "svg" && Ha(R) ? i = "svg" : i !== "mathml" && $a(R) && (i = "mathml"),
                k || (x(R, P),
                po(t, !1)))
            }
            ;
            k && (x(n, T),
            po(t, !0)),
            Da(t.props) ? (t.el.__isMounted = !1,
            Oe( () => {
                N(),
                delete t.el.__isMounted
            }
            , s)) : N()
        } else {
            if (Da(t.props) && e.el.__isMounted === !1) {
                Oe( () => {
                    iu.process(e, t, n, r, o, s, i, a, l, u)
                }
                , s);
                return
            }
            t.el = e.el,
            t.targetStart = e.targetStart;
            const E = t.anchor = e.anchor
              , T = t.target = e.target
              , x = t.targetAnchor = e.targetAnchor
              , N = wr(e.props)
              , R = N ? n : T
              , P = N ? E : x;
            if (i === "svg" || Ha(T) ? i = "svg" : (i === "mathml" || $a(T)) && (i = "mathml"),
            _ ? (d(e.dynamicChildren, _, R, o, s, i, a),
            sa(e, t, !0)) : l || f(e, t, R, P, o, s, i, a, !1),
            k)
                N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Zr(t, n, E, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = Js(t.props, g);
                q && Zr(t, q, null, u, 0)
            } else
                N && Zr(t, T, x, u, 1);
            po(t, k)
        }
    },
    remove(e, t, n, {um: r, o: {remove: o}}, s) {
        const {shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d} = e;
        if (f && (o(u),
        o(c)),
        s && o(l),
        i & 16) {
            const h = s || !wr(d);
            for (let g = 0; g < a.length; g++) {
                const p = a[g];
                r(p, t, n, h, !!p.dynamicChildren)
            }
        }
    },
    move: Zr,
    hydrate: yp
};
function Zr(e, t, n, {o: {insert: r}, m: o}, s=2) {
    s === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: l, children: u, props: c} = e
      , f = s === 2;
    if (f && r(i, t, n),
    (!f || wr(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            o(u[d], t, n, 2);
    f && r(a, t, n)
}
function yp(e, t, n, r, o, s, {o: {nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c}}, f) {
    function d(p, v, k, w) {
        v.anchor = f(i(p), v, a(p), n, r, o, s),
        v.targetStart = k,
        v.targetAnchor = w
    }
    const h = t.target = Js(t.props, l)
      , g = wr(t.props);
    if (h) {
        const p = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (g)
                d(e, t, p, p && i(p));
            else {
                t.anchor = i(e);
                let v = p;
                for (; v; ) {
                    if (v && v.nodeType === 8) {
                        if (v.data === "teleport start anchor")
                            t.targetStart = v;
                        else if (v.data === "teleport anchor") {
                            t.targetAnchor = v,
                            h._lpa = t.targetAnchor && i(t.targetAnchor);
                            break
                        }
                    }
                    v = i(v)
                }
                t.targetAnchor || au(h, t, c, u),
                f(p && i(p), t, h, n, r, o, s)
            }
        po(t, g)
    } else
        g && t.shapeFlag & 16 && d(e, t, e, i(e));
    return t.anchor && i(t.anchor)
}
const _p = iu;
function po(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, o;
        for (t ? (r = e.el,
        o = e.anchor) : (r = e.targetStart,
        o = e.targetAnchor); r && r !== o; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function au(e, t, n, r) {
    const o = t.targetStart = n("")
      , s = t.targetAnchor = n("");
    return o[ou] = s,
    e && (r(o, e),
    r(s, e)),
    s
}
const Ht = Symbol("_leaveCb")
  , eo = Symbol("_enterCb");
function zi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return it( () => {
        e.isMounted = !0
    }
    ),
    Ln( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const ct = [Function, Array]
  , qi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ct,
    onEnter: ct,
    onAfterEnter: ct,
    onEnterCancelled: ct,
    onBeforeLeave: ct,
    onLeave: ct,
    onAfterLeave: ct,
    onLeaveCancelled: ct,
    onBeforeAppear: ct,
    onAppear: ct,
    onAfterAppear: ct,
    onAppearCancelled: ct
}
  , lu = e => {
    const t = e.subTree;
    return t.component ? lu(t.component) : t
}
  , vp = {
    name: "BaseTransition",
    props: qi,
    setup(e, {slots: t}) {
        const n = Ae()
          , r = zi();
        return () => {
            const o = t.default && ss(t.default(), !0);
            if (!o || !o.length)
                return;
            const s = cu(o)
              , i = se(e)
              , {mode: a} = i;
            if (r.isLeaving)
                return Ss(s);
            const l = ja(s);
            if (!l)
                return Ss(s);
            let u = Gn(l, i, r, n, f => u = f);
            l.type !== Ce && Kt(l, u);
            let c = n.subTree && ja(n.subTree);
            if (c && c.type !== Ce && !vt(c, l) && lu(n).type !== Ce) {
                let f = Gn(c, i, r, n);
                if (Kt(c, f),
                a === "out-in" && l.type !== Ce)
                    return r.isLeaving = !0,
                    f.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete f.afterLeave,
                        c = void 0
                    }
                    ,
                    Ss(s);
                a === "in-out" && l.type !== Ce ? f.delayLeave = (d, h, g) => {
                    const p = fu(r, c);
                    p[String(c.key)] = c,
                    d[Ht] = () => {
                        h(),
                        d[Ht] = void 0,
                        delete u.delayedLeave,
                        c = void 0
                    }
                    ,
                    u.delayedLeave = () => {
                        g(),
                        delete u.delayedLeave,
                        c = void 0
                    }
                }
                : c = void 0
            } else
                c && (c = void 0);
            return s
        }
    }
};
function cu(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Ce) {
                t = n;
                break
            }
    }
    return t
}
const uu = vp;
function fu(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Gn(e, t, n, r, o) {
    const {appear: s, mode: i, persisted: a=!1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: g, onLeaveCancelled: p, onBeforeAppear: v, onAppear: k, onAfterAppear: w, onAppearCancelled: m} = t
      , _ = String(e.key)
      , E = fu(n, e)
      , T = (R, P) => {
        R && ht(R, r, 9, P)
    }
      , x = (R, P) => {
        const q = P[1];
        T(R, P),
        z(R) ? R.every(O => O.length <= 1) && q() : R.length <= 1 && q()
    }
      , N = {
        mode: i,
        persisted: a,
        beforeEnter(R) {
            let P = l;
            if (!n.isMounted)
                if (s)
                    P = v || l;
                else
                    return;
            R[Ht] && R[Ht](!0);
            const q = E[_];
            q && vt(e, q) && q.el[Ht] && q.el[Ht](),
            T(P, [R])
        },
        enter(R) {
            let P = u
              , q = c
              , O = f;
            if (!n.isMounted)
                if (s)
                    P = k || u,
                    q = w || c,
                    O = m || f;
                else
                    return;
            let K = !1;
            const j = R[eo] = J => {
                K || (K = !0,
                J ? T(O, [R]) : T(q, [R]),
                N.delayedLeave && N.delayedLeave(),
                R[eo] = void 0)
            }
            ;
            P ? x(P, [R, j]) : j()
        },
        leave(R, P) {
            const q = String(e.key);
            if (R[eo] && R[eo](!0),
            n.isUnmounting)
                return P();
            T(d, [R]);
            let O = !1;
            const K = R[Ht] = j => {
                O || (O = !0,
                P(),
                j ? T(p, [R]) : T(g, [R]),
                R[Ht] = void 0,
                E[q] === e && delete E[q])
            }
            ;
            E[q] = e,
            h ? x(h, [R, K]) : K()
        },
        clone(R) {
            const P = Gn(R, t, n, r, o);
            return o && o(P),
            P
        }
    };
    return N
}
function Ss(e) {
    if (zr(e))
        return e = Et(e),
        e.children = null,
        e
}
function ja(e) {
    if (!zr(e))
        return su(e.type) && e.children ? cu(e.children) : e;
    if (e.component)
        return e.component.subTree;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && Q(n.default))
            return n.default()
    }
}
function Kt(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Kt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function ss(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === Pe ? (i.patchFlag & 128 && o++,
        r = r.concat(ss(i.children, t, a))) : (t || i.type !== Ce) && r.push(a != null ? Et(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
function st(e, t) {
    return Q(e) ? ye({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function bp() {
    const e = Ae();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}
function Ki(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function wp(e) {
    const t = Ae()
      , n = xe(null);
    if (t) {
        const o = t.refs === re ? t.refs = {} : t.refs;
        Object.defineProperty(o, e, {
            enumerable: !0,
            get: () => n.value,
            set: s => n.value = s
        })
    }
    return n
}
const Ro = new WeakMap;
function zn(e, t, n, r, o=!1) {
    if (z(e)) {
        e.forEach( (g, p) => zn(g, t && (z(t) ? t[p] : t), n, r, o));
        return
    }
    if (cn(r) && !o) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && zn(e, t, n, r.component.subTree);
        return
    }
    const s = r.shapeFlag & 4 ? Kr(r.component) : r.el
      , i = o ? null : s
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === re ? a.refs = {} : a.refs
      , f = a.setupState
      , d = se(f)
      , h = f === re ? Mi : g => ce(d, g);
    if (u != null && u !== l) {
        if (Fa(t),
        me(u))
            c[u] = null,
            h(u) && (f[u] = null);
        else if (Re(u)) {
            u.value = null;
            const g = t;
            g.k && (c[g.k] = null)
        }
    }
    if (Q(l))
        sr(l, a, 12, [i, c]);
    else {
        const g = me(l)
          , p = Re(l);
        if (g || p) {
            const v = () => {
                if (e.f) {
                    const k = g ? h(l) ? f[l] : c[l] : l.value;
                    if (o)
                        z(k) && Yo(k, s);
                    else if (z(k))
                        k.includes(s) || k.push(s);
                    else if (g)
                        c[l] = [s],
                        h(l) && (f[l] = c[l]);
                    else {
                        const w = [s];
                        l.value = w,
                        e.k && (c[e.k] = w)
                    }
                } else
                    g ? (c[l] = i,
                    h(l) && (f[l] = i)) : p && (l.value = i,
                    e.k && (c[e.k] = i))
            }
            ;
            if (i) {
                const k = () => {
                    v(),
                    Ro.delete(e)
                }
                ;
                k.id = -1,
                Ro.set(e, k),
                Oe(k, n)
            } else
                Fa(e),
                v()
        }
    }
}
function Fa(e) {
    const t = Ro.get(e);
    t && (t.flags |= 8,
    Ro.delete(e))
}
let Ba = !1;
const Dn = () => {
    Ba || (console.error("Hydration completed but contains mismatches."),
    Ba = !0)
}
  , Ep = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , kp = e => e.namespaceURI.includes("MathML")
  , to = e => {
    if (e.nodeType === 1) {
        if (Ep(e))
            return "svg";
        if (kp(e))
            return "mathml"
    }
}
  , Bn = e => e.nodeType === 8;
function Tp(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u}} = e
      , c = (m, _) => {
        if (!_.hasChildNodes()) {
            n(null, m, _),
            Co(),
            _._vnode = m;
            return
        }
        f(_.firstChild, m, null, null, null),
        Co(),
        _._vnode = m
    }
      , f = (m, _, E, T, x, N=!1) => {
        N = N || !!_.dynamicChildren;
        const R = Bn(m) && m.data === "["
          , P = () => p(m, _, E, T, x, R)
          , {type: q, ref: O, shapeFlag: K, patchFlag: j} = _;
        let J = m.nodeType;
        _.el = m,
        j === -2 && (N = !1,
        _.dynamicChildren = null);
        let H = null;
        switch (q) {
        case un:
            J !== 3 ? _.children === "" ? (l(_.el = o(""), i(m), m),
            H = m) : H = P() : (m.data !== _.children && (Dn(),
            m.data = _.children),
            H = s(m));
            break;
        case Ce:
            w(m) ? (H = s(m),
            k(_.el = m.content.firstChild, m, E)) : J !== 8 || R ? H = P() : H = s(m);
            break;
        case xn:
            if (R && (m = s(m),
            J = m.nodeType),
            J === 1 || J === 3) {
                H = m;
                const Z = !_.children.length;
                for (let W = 0; W < _.staticCount; W++)
                    Z && (_.children += H.nodeType === 1 ? H.outerHTML : H.data),
                    W === _.staticCount - 1 && (_.anchor = H),
                    H = s(H);
                return R ? s(H) : H
            } else
                P();
            break;
        case Pe:
            R ? H = g(m, _, E, T, x, N) : H = P();
            break;
        default:
            if (K & 1)
                (J !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase()) && !w(m) ? H = P() : H = d(m, _, E, T, x, N);
            else if (K & 6) {
                _.slotScopeIds = x;
                const Z = i(m);
                if (R ? H = v(m) : Bn(m) && m.data === "teleport start" ? H = v(m, m.data, "teleport end") : H = s(m),
                t(_, Z, null, E, T, to(Z), N),
                cn(_) && !_.type.__asyncResolved) {
                    let W;
                    R ? (W = ue(Pe),
                    W.anchor = H ? H.previousSibling : Z.lastChild) : W = m.nodeType === 3 ? Ke("") : ue("div"),
                    W.el = m,
                    _.component.subTree = W
                }
            } else
                K & 64 ? J !== 8 ? H = P() : H = _.type.hydrate(m, _, E, T, x, N, e, h) : K & 128 && (H = _.type.hydrate(m, _, E, T, to(i(m)), x, N, e, f))
        }
        return O != null && zn(O, null, T, _),
        H
    }
      , d = (m, _, E, T, x, N) => {
        N = N || !!_.dynamicChildren;
        const {type: R, props: P, patchFlag: q, shapeFlag: O, dirs: K, transition: j} = _
          , J = R === "input" || R === "option";
        if (J || q !== -1) {
            K && At(_, null, E, "created");
            let H = !1;
            if (w(m)) {
                H = Nu(null, j) && E && E.vnode.props && E.vnode.props.appear;
                const W = m.content.firstChild;
                if (H) {
                    const ke = W.getAttribute("class");
                    ke && (W.$cls = ke),
                    j.beforeEnter(W)
                }
                k(W, m, E),
                _.el = m = W
            }
            if (O & 16 && !(P && (P.innerHTML || P.textContent))) {
                let W = h(m.firstChild, _, m, E, T, x, N);
                for (; W; ) {
                    no(m, 1) || Dn();
                    const ke = W;
                    W = W.nextSibling,
                    a(ke)
                }
            } else if (O & 8) {
                let W = _.children;
                W[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (W = W.slice(1)),
                m.textContent !== W && (no(m, 0) || Dn(),
                m.textContent = _.children)
            }
            if (P) {
                if (J || !N || q & 48) {
                    const W = m.tagName.includes("-");
                    for (const ke in P)
                        (J && (ke.endsWith("value") || ke === "indeterminate") || tr(ke) && !En(ke) || ke[0] === "." || W) && r(m, ke, null, P[ke], void 0, E)
                } else if (P.onClick)
                    r(m, "onClick", null, P.onClick, void 0, E);
                else if (q & 4 && ln(P.style))
                    for (const W in P.style)
                        P.style[W]
            }
            let Z;
            (Z = P && P.onVnodeBeforeMount) && Qe(Z, E, _),
            K && At(_, null, E, "beforeMount"),
            ((Z = P && P.onVnodeMounted) || K || H) && Wu( () => {
                Z && Qe(Z, E, _),
                H && j.enter(m),
                K && At(_, null, E, "mounted")
            }
            , T)
        }
        return m.nextSibling
    }
      , h = (m, _, E, T, x, N, R) => {
        R = R || !!_.dynamicChildren;
        const P = _.children
          , q = P.length;
        for (let O = 0; O < q; O++) {
            const K = R ? P[O] : P[O] = Xe(P[O])
              , j = K.type === un;
            m ? (j && !R && O + 1 < q && Xe(P[O + 1]).type === un && (l(o(m.data.slice(K.children.length)), E, s(m)),
            m.data = K.children),
            m = f(m, K, T, x, N, R)) : j && !K.children ? l(K.el = o(""), E) : (no(E, 1) || Dn(),
            n(null, K, E, null, T, x, to(E), N))
        }
        return m
    }
      , g = (m, _, E, T, x, N) => {
        const {slotScopeIds: R} = _;
        R && (x = x ? x.concat(R) : R);
        const P = i(m)
          , q = h(s(m), _, P, E, T, x, N);
        return q && Bn(q) && q.data === "]" ? s(_.anchor = q) : (Dn(),
        l(_.anchor = u("]"), P, q),
        q)
    }
      , p = (m, _, E, T, x, N) => {
        if (no(m.parentElement, 1) || Dn(),
        _.el = null,
        N) {
            const q = v(m);
            for (; ; ) {
                const O = s(m);
                if (O && O !== q)
                    a(O);
                else
                    break
            }
        }
        const R = s(m)
          , P = i(m);
        return a(m),
        n(null, _, P, R, E, T, to(P), x),
        E && (E.vnode.el = _.el,
        cs(E, _.el)),
        R
    }
      , v = (m, _="[", E="]") => {
        let T = 0;
        for (; m; )
            if (m = s(m),
            m && Bn(m) && (m.data === _ && T++,
            m.data === E)) {
                if (T === 0)
                    return s(m);
                T--
            }
        return m
    }
      , k = (m, _, E) => {
        const T = _.parentNode;
        T && T.replaceChild(m, _);
        let x = E;
        for (; x; )
            x.vnode.el === _ && (x.vnode.el = x.subTree.el = m),
            x = x.parent
    }
      , w = m => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [c, f]
}
const Ua = "data-allow-mismatch"
  , Sp = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function no(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Ua); )
            e = e.parentElement;
    const n = e && e.getAttribute(Ua);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(Sp[t])
    }
}
const xp = Br().requestIdleCallback || (e => setTimeout(e, 1))
  , Cp = Br().cancelIdleCallback || (e => clearTimeout(e))
  , Rp = (e=1e4) => t => {
    const n = xp(t, {
        timeout: e
    });
    return () => Cp(n)
}
;
function Ap(e) {
    const {top: t, left: n, bottom: r, right: o} = e.getBoundingClientRect()
      , {innerHeight: s, innerWidth: i} = window;
    return (t > 0 && t < s || r > 0 && r < s) && (n > 0 && n < i || o > 0 && o < i)
}
const Pp = e => (t, n) => {
    const r = new IntersectionObserver(o => {
        for (const s of o)
            if (s.isIntersecting) {
                r.disconnect(),
                t();
                break
            }
    }
    ,e);
    return n(o => {
        if (o instanceof Element) {
            if (Ap(o))
                return t(),
                r.disconnect(),
                !1;
            r.observe(o)
        }
    }
    ),
    () => r.disconnect()
}
  , Op = e => t => {
    if (e) {
        const n = matchMedia(e);
        if (n.matches)
            t();
        else
            return n.addEventListener("change", t, {
                once: !0
            }),
            () => n.removeEventListener("change", t)
    }
}
  , Mp = (e=[]) => (t, n) => {
    me(e) && (e = [e]);
    let r = !1;
    const o = i => {
        r || (r = !0,
        s(),
        t(),
        i.target.dispatchEvent(new i.constructor(i.type,i)))
    }
      , s = () => {
        n(i => {
            for (const a of e)
                i.removeEventListener(a, o)
        }
        )
    }
    ;
    return n(i => {
        for (const a of e)
            i.addEventListener(a, o, {
                once: !0
            })
    }
    ),
    s
}
;
function Lp(e, t) {
    if (Bn(e) && e.data === "[") {
        let n = 1
          , r = e.nextSibling;
        for (; r; ) {
            if (r.nodeType === 1) {
                if (t(r) === !1)
                    break
            } else if (Bn(r))
                if (r.data === "]") {
                    if (--n === 0)
                        break
                } else
                    r.data === "[" && n++;
            r = r.nextSibling
        }
    } else
        t(e)
}
const cn = e => !!e.type.__asyncLoader;
function Ee(e) {
    Q(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: r, delay: o=200, hydrate: s, timeout: i, suspensible: a=!0, onError: l} = e;
    let u = null, c, f = 0;
    const d = () => (f++,
    u = null,
    h())
      , h = () => {
        let g;
        return u || (g = u = t().catch(p => {
            if (p = p instanceof Error ? p : new Error(String(p)),
            l)
                return new Promise( (v, k) => {
                    l(p, () => v(d()), () => k(p), f + 1)
                }
                );
            throw p
        }
        ).then(p => g !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default),
        c = p,
        p)))
    }
    ;
    return st({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(g, p, v) {
            let k = !1;
            (p.bu || (p.bu = [])).push( () => k = !0);
            const w = () => {
                k || v()
            }
              , m = s ? () => {
                const _ = s(w, E => Lp(g, E));
                _ && (p.bum || (p.bum = [])).push(_)
            }
            : w;
            c ? m() : h().then( () => !p.isUnmounted && m())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const g = $e;
            if (Ki(g),
            c)
                return () => xs(c, g);
            const p = m => {
                u = null,
                Mn(m, g, 13, !r)
            }
            ;
            if (a && g.suspense || Yn)
                return h().then(m => () => xs(m, g)).catch(m => (p(m),
                () => r ? ue(r, {
                    error: m
                }) : null));
            const v = he(!1)
              , k = he()
              , w = he(!!o);
            return o && setTimeout( () => {
                w.value = !1
            }
            , o),
            i != null && setTimeout( () => {
                if (!v.value && !k.value) {
                    const m = new Error(`Async component timed out after ${i}ms.`);
                    p(m),
                    k.value = m
                }
            }
            , i),
            h().then( () => {
                v.value = !0,
                g.parent && zr(g.parent.vnode) && g.parent.update()
            }
            ).catch(m => {
                p(m),
                k.value = m
            }
            ),
            () => {
                if (v.value && c)
                    return xs(c, g);
                if (k.value && r)
                    return ue(r, {
                        error: k.value
                    });
                if (n && !w.value)
                    return ue(n)
            }
        }
    })
}
function xs(e, t) {
    const {ref: n, props: r, children: o, ce: s} = t.vnode
      , i = ue(e, r, o);
    return i.ref = n,
    i.ce = s,
    delete t.vnode.ce,
    i
}
const zr = e => e.type.__isKeepAlive
  , Ip = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Ae()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const w = t.default && t.default();
                return w && w.length === 1 ? w[0] : w
            }
            ;
        const o = new Map
          , s = new Set;
        let i = null;
        const a = n.suspense
          , {renderer: {p: l, m: u, um: c, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (w, m, _, E, T) => {
            const x = w.component;
            u(w, m, _, 0, a),
            l(x.vnode, w, m, _, x, a, E, w.slotScopeIds, T),
            Oe( () => {
                x.isDeactivated = !1,
                x.a && kn(x.a);
                const N = w.props && w.props.onVnodeMounted;
                N && Qe(N, x.parent, w)
            }
            , a)
        }
        ,
        r.deactivate = w => {
            const m = w.component;
            Po(m.m),
            Po(m.a),
            u(w, d, null, 1, a),
            Oe( () => {
                m.da && kn(m.da);
                const _ = w.props && w.props.onVnodeUnmounted;
                _ && Qe(_, m.parent, w),
                m.isDeactivated = !0
            }
            , a)
        }
        ;
        function h(w) {
            Cs(w),
            c(w, n, a, !0)
        }
        function g(w) {
            o.forEach( (m, _) => {
                const E = ci(m.type);
                E && !w(E) && p(_)
            }
            )
        }
        function p(w) {
            const m = o.get(w);
            m && (!i || !vt(m, i)) ? h(m) : i && Cs(i),
            o.delete(w),
            s.delete(w)
        }
        Se( () => [e.include, e.exclude], ([w,m]) => {
            w && g(_ => yr(w, _)),
            m && g(_ => !yr(m, _))
        }
        , {
            flush: "post",
            deep: !0
        });
        let v = null;
        const k = () => {
            v != null && (Oo(n.subTree.type) ? Oe( () => {
                o.set(v, ro(n.subTree))
            }
            , n.subTree.suspense) : o.set(v, ro(n.subTree)))
        }
        ;
        return it(k),
        as(k),
        Ln( () => {
            o.forEach(w => {
                const {subTree: m, suspense: _} = n
                  , E = ro(m);
                if (w.type === E.type && w.key === E.key) {
                    Cs(E);
                    const T = E.component.da;
                    T && Oe(T, _);
                    return
                }
                h(w)
            }
            )
        }
        ),
        () => {
            if (v = null,
            !t.default)
                return i = null;
            const w = t.default()
              , m = w[0];
            if (w.length > 1)
                return i = null,
                w;
            if (!Gt(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128))
                return i = null,
                m;
            let _ = ro(m);
            if (_.type === Ce)
                return i = null,
                _;
            const E = _.type
              , T = ci(cn(_) ? _.type.__asyncResolved || {} : E)
              , {include: x, exclude: N, max: R} = e;
            if (x && (!T || !yr(x, T)) || N && T && yr(N, T))
                return _.shapeFlag &= -257,
                i = _,
                m;
            const P = _.key == null ? E : _.key
              , q = o.get(P);
            return _.el && (_ = Et(_),
            m.shapeFlag & 128 && (m.ssContent = _)),
            v = P,
            q ? (_.el = q.el,
            _.component = q.component,
            _.transition && Kt(_, _.transition),
            _.shapeFlag |= 512,
            s.delete(P),
            s.add(P)) : (s.add(P),
            R && s.size > parseInt(R, 10) && p(s.values().next().value)),
            _.shapeFlag |= 256,
            i = _,
            Oo(m.type) ? m : _
        }
    }
}
  , du = Ip;
function yr(e, t) {
    return z(e) ? e.some(n => yr(n, t)) : me(e) ? e.split(",").includes(t) : kc(e) ? (e.lastIndex = 0,
    e.test(t)) : !1
}
function Gi(e, t) {
    hu(e, "a", t)
}
function Yi(e, t) {
    hu(e, "da", t)
}
function hu(e, t, n=$e) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (is(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            zr(o.parent.vnode) && Np(r, t, n, o),
            o = o.parent
    }
}
function Np(e, t, n, r) {
    const o = is(t, e, r, !0);
    ir( () => {
        Yo(r[t], o)
    }
    , n)
}
function Cs(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function ro(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function is(e, t, n=$e, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...i) => {
            zt();
            const a = Rn(n)
              , l = ht(t, n, e, i);
            return a(),
            qt(),
            l
        }
        );
        return r ? o.unshift(s) : o.push(s),
        s
    }
}
const Jt = e => (t, n=$e) => {
    (!Yn || e === "sp") && is(e, (...r) => t(...r), n)
}
  , Ji = Jt("bm")
  , it = Jt("m")
  , Qi = Jt("bu")
  , as = Jt("u")
  , Ln = Jt("bum")
  , ir = Jt("um")
  , pu = Jt("sp")
  , mu = Jt("rtg")
  , gu = Jt("rtc");
function Xi(e, t=$e) {
    is("ec", e, t)
}
const Zi = "components"
  , Dp = "directives";
function Qs(e, t) {
    return ea(Zi, e, !0, t) || e
}
const yu = Symbol.for("v-ndc");
function _u(e) {
    return me(e) ? ea(Zi, e, !1) || e : e || yu
}
function Hp(e) {
    return ea(Dp, e)
}
function ea(e, t, n=!0, r=!1) {
    const o = je || $e;
    if (o) {
        const s = o.type;
        if (e === Zi) {
            const a = ci(s, !1);
            if (a && (a === t || a === De(t) || a === rr(De(t))))
                return s
        }
        const i = Va(o[e] || s[e], t) || Va(o.appContext[e], t);
        return !i && r ? s : i
    }
}
function Va(e, t) {
    return e && (e[t] || e[De(t)] || e[rr(De(t))])
}
function vu(e, t, n, r) {
    let o;
    const s = n && n[r]
      , i = z(e);
    if (i || me(e)) {
        const a = i && ln(e);
        let l = !1
          , u = !1;
        a && (l = !rt(e),
        u = Mt(e),
        e = es(e)),
        o = new Array(e.length);
        for (let c = 0, f = e.length; c < f; c++)
            o[c] = t(l ? u ? To(He(e[c])) : He(e[c]) : e[c], c, void 0, s && s[c])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++)
            o[a] = t(a + 1, a, void 0, s && s[a])
    } else if (ge(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (a, l) => t(a, l, void 0, s && s[l]));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                o[l] = t(e[c], c, l, s && s[l])
            }
        }
    else
        o = [];
    return n && (n[r] = o),
    o
}
function $p(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (z(r))
            for (let o = 0; o < r.length; o++)
                e[r[o].name] = r[o].fn;
        else
            r && (e[r.name] = r.key ? (...o) => {
                const s = r.fn(...o);
                return s && (s.key = r.key),
                s
            }
            : r.fn)
    }
    return e
}
function jp(e, t, n={}, r, o) {
    if (je.ce || je.parent && cn(je.parent) && je.parent.ce)
        return t !== "default" && (n.name = t),
        be(),
        Ft(Pe, null, [ue("slot", n, r && r())], 64);
    let s = e[t];
    s && s._c && (s._d = !1),
    be();
    const i = s && ta(s(n))
      , a = n.key || i && i.key
      , l = Ft(Pe, {
        key: (a && !dt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
}
function ta(e) {
    return e.some(t => Gt(t) ? !(t.type === Ce || t.type === Pe && !ta(t.children)) : !0) ? e : null
}
function Fp(e, t) {
    const n = {};
    for (const r in e)
        n[t && /[A-Z]/.test(r) ? `on:${r}` : Vn(r)] = e[r];
    return n
}
const Xs = e => e ? Qu(e) ? Kr(e) : Xs(e.parent) : null
  , Er = ye(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Xs(e.parent),
    $root: e => Xs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => na(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Wi(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = pt.bind(e.proxy)),
    $watch: e => mm.bind(e)
})
  , Rs = (e, t) => e !== re && !e.__isScriptSetup && ce(e, t)
  , Zs = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l} = e;
        let u;
        if (t[0] !== "$") {
            const h = i[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                }
            else {
                if (Rs(r, t))
                    return i[t] = 1,
                    r[t];
                if (o !== re && ce(o, t))
                    return i[t] = 2,
                    o[t];
                if ((u = e.propsOptions[0]) && ce(u, t))
                    return i[t] = 3,
                    s[t];
                if (n !== re && ce(n, t))
                    return i[t] = 4,
                    n[t];
                ei && (i[t] = 0)
            }
        }
        const c = Er[t];
        let f, d;
        if (c)
            return t === "$attrs" && Ve(e.attrs, "get", ""),
            c(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== re && ce(n, t))
            return i[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        ce(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: s} = e;
        return Rs(o, t) ? (o[t] = n,
        !0) : r !== re && ce(r, t) ? (r[t] = n,
        !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s, type: i}}, a) {
        let l, u;
        return !!(n[a] || e !== re && a[0] !== "$" && ce(e, a) || Rs(t, a) || (l = s[0]) && ce(l, a) || ce(r, a) || ce(Er, a) || ce(o.config.globalProperties, a) || (u = i.__cssModules) && u[a])
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
}
  , Bp = ye({}, Zs, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return Zs.get(e, t, e)
    },
    has(e, t) {
        return t[0] !== "_" && !Ni(t)
    }
});
function Up() {
    return null
}
function Vp() {
    return null
}
function Wp(e) {}
function zp(e) {}
function qp() {
    return null
}
function Kp() {}
function Gp(e, t) {
    return null
}
function Yp() {
    return bu().slots
}
function Jp() {
    return bu().attrs
}
function bu(e) {
    const t = Ae();
    return t.setupContext || (t.setupContext = ef(t))
}
function Nr(e) {
    return z(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function Qp(e, t) {
    const n = Nr(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let o = n[r];
        o ? z(o) || Q(o) ? o = n[r] = {
            type: o,
            default: t[r]
        } : o.default = t[r] : o === null && (o = n[r] = {
            default: t[r]
        }),
        o && t[`__skip_${r}`] && (o.skipFactory = !0)
    }
    return n
}
function Xp(e, t) {
    return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : ye({}, Nr(e), Nr(t))
}
function Zp(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || Object.defineProperty(n, r, {
            enumerable: !0,
            get: () => e[r]
        });
    return n
}
function wu(e) {
    const t = Ae();
    let n = e();
    return ii(),
    Jo(n) && (n = n.catch(r => {
        throw Rn(t),
        r
    }
    )),
    [n, () => Rn(t)]
}
let ei = !0;
function em(e) {
    const t = na(e)
      , n = e.proxy
      , r = e.ctx;
    ei = !1,
    t.beforeCreate && Wa(t.beforeCreate, e, "bc");
    const {data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: g, activated: p, deactivated: v, beforeDestroy: k, beforeUnmount: w, destroyed: m, unmounted: _, render: E, renderTracked: T, renderTriggered: x, errorCaptured: N, serverPrefetch: R, expose: P, inheritAttrs: q, components: O, directives: K, filters: j} = t;
    if (u && tm(u, r, null),
    i)
        for (const Z in i) {
            const W = i[Z];
            Q(W) && (r[Z] = W.bind(n))
        }
    if (o) {
        const Z = o.call(n, n);
        ge(Z) && (e.data = ot(Z))
    }
    if (ei = !0,
    s)
        for (const Z in s) {
            const W = s[Z]
              , ke = Q(W) ? W.bind(n, n) : Q(W.get) ? W.get.bind(n, n) : nt
              , gt = !Q(W) && Q(W.set) ? W.set.bind(n) : nt
              , at = le({
                get: ke,
                set: gt
            });
            Object.defineProperty(r, Z, {
                enumerable: !0,
                configurable: !0,
                get: () => at.value,
                set: Le => at.value = Le
            })
        }
    if (a)
        for (const Z in a)
            Eu(a[Z], r, n, Z);
    if (l) {
        const Z = Q(l) ? l.call(n) : l;
        Reflect.ownKeys(Z).forEach(W => {
            Ot(W, Z[W])
        }
        )
    }
    c && Wa(c, e, "c");
    function H(Z, W) {
        z(W) ? W.forEach(ke => Z(ke.bind(n))) : W && Z(W.bind(n))
    }
    if (H(Ji, f),
    H(it, d),
    H(Qi, h),
    H(as, g),
    H(Gi, p),
    H(Yi, v),
    H(Xi, N),
    H(gu, T),
    H(mu, x),
    H(Ln, w),
    H(ir, _),
    H(pu, R),
    z(P))
        if (P.length) {
            const Z = e.exposed || (e.exposed = {});
            P.forEach(W => {
                Object.defineProperty(Z, W, {
                    get: () => n[W],
                    set: ke => n[W] = ke,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    E && e.render === nt && (e.render = E),
    q != null && (e.inheritAttrs = q),
    O && (e.components = O),
    K && (e.directives = K),
    R && Ki(e)
}
function tm(e, t, n=nt) {
    z(e) && (e = ti(e));
    for (const r in e) {
        const o = e[r];
        let s;
        ge(o) ? "default" in o ? s = Me(o.from || r, o.default, !0) : s = Me(o.from || r) : s = Me(o),
        Re(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[r] = s
    }
}
function Wa(e, t, n) {
    ht(z(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Eu(e, t, n, r) {
    let o = r.includes(".") ? Fu(n, r) : () => n[r];
    if (me(e)) {
        const s = t[e];
        Q(s) && Se(o, s)
    } else if (Q(e))
        Se(o, e.bind(n));
    else if (ge(e))
        if (z(e))
            e.forEach(s => Eu(s, t, n, r));
        else {
            const s = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
            Q(s) && Se(o, s, e)
        }
}
function na(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: s, config: {optionMergeStrategies: i}} = e.appContext
      , a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(u => Ao(l, u, i, !0)),
    Ao(l, t, i)),
    ge(t) && s.set(t, l),
    l
}
function Ao(e, t, n, r=!1) {
    const {mixins: o, extends: s} = t;
    s && Ao(e, s, n, !0),
    o && o.forEach(i => Ao(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = nm[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const nm = {
    data: za,
    props: qa,
    emits: qa,
    methods: _r,
    computed: _r,
    beforeCreate: qe,
    created: qe,
    beforeMount: qe,
    mounted: qe,
    beforeUpdate: qe,
    updated: qe,
    beforeDestroy: qe,
    beforeUnmount: qe,
    destroyed: qe,
    unmounted: qe,
    activated: qe,
    deactivated: qe,
    errorCaptured: qe,
    serverPrefetch: qe,
    components: _r,
    directives: _r,
    watch: om,
    provide: za,
    inject: rm
};
function za(e, t) {
    return t ? e ? function() {
        return ye(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t)
    }
    : t : e
}
function rm(e, t) {
    return _r(ti(e), ti(t))
}
function ti(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function _r(e, t) {
    return e ? ye(Object.create(null), e, t) : t
}
function qa(e, t) {
    return e ? z(e) && z(t) ? [...new Set([...e, ...t])] : ye(Object.create(null), Nr(e), Nr(t ?? {})) : t
}
function om(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = ye(Object.create(null), e);
    for (const r in t)
        n[r] = qe(e[r], t[r]);
    return n
}
function ku() {
    return {
        app: null,
        config: {
            isNativeTag: Mi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let sm = 0;
function im(e, t) {
    return function(r, o=null) {
        Q(r) || (r = ye({}, r)),
        o != null && !ge(o) && (o = null);
        const s = ku()
          , i = new WeakSet
          , a = [];
        let l = !1;
        const u = s.app = {
            _uid: sm++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: nf,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return i.has(c) || (c && Q(c.install) ? (i.add(c),
                c.install(u, ...f)) : Q(c) && (i.add(c),
                c(u, ...f))),
                u
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c),
                u
            },
            component(c, f) {
                return f ? (s.components[c] = f,
                u) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f,
                u) : s.directives[c]
            },
            mount(c, f, d) {
                if (!l) {
                    const h = u._ceVNode || ue(r, o);
                    return h.appContext = s,
                    d === !0 ? d = "svg" : d === !1 && (d = void 0),
                    f && t ? t(h, c) : e(h, c, d),
                    l = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    Kr(h.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (ht(a, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f,
                u
            },
            runWithContext(c) {
                const f = Sn;
                Sn = u;
                try {
                    return c()
                } finally {
                    Sn = f
                }
            }
        };
        return u
    }
}
let Sn = null;
function Ot(e, t) {
    if ($e) {
        let n = $e.provides;
        const r = $e.parent && $e.parent.provides;
        r === n && (n = $e.provides = Object.create(r)),
        n[e] = t
    }
}
function Me(e, t, n=!1) {
    const r = Ae();
    if (r || Sn) {
        let o = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && Q(t) ? t.call(r && r.proxy) : t
    }
}
function In() {
    return !!(Ae() || Sn)
}
const Tu = {}
  , Su = () => Object.create(Tu)
  , xu = e => Object.getPrototypeOf(e) === Tu;
function am(e, t, n, r=!1) {
    const o = {}
      , s = Su();
    e.propsDefaults = Object.create(null),
    Cu(e, t, o, s);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = r ? o : Pt(o) : e.type.props ? e.props = o : e.props = s,
    e.attrs = s
}
function lm(e, t, n, r) {
    const {props: o, attrs: s, vnode: {patchFlag: i}} = e
      , a = se(o)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (ls(e.emitsOptions, d))
                    continue;
                const h = t[d];
                if (l)
                    if (ce(s, d))
                        h !== s[d] && (s[d] = h,
                        u = !0);
                    else {
                        const g = De(d);
                        o[g] = ni(l, a, g, h, e, !1)
                    }
                else
                    h !== s[d] && (s[d] = h,
                    u = !0)
            }
        }
    } else {
        Cu(e, t, o, s) && (u = !0);
        let c;
        for (const f in a)
            (!t || !ce(t, f) && ((c = We(f)) === f || !ce(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = ni(l, a, f, void 0, e, !0)) : delete o[f]);
        if (s !== a)
            for (const f in s)
                (!t || !ce(t, f)) && (delete s[f],
                u = !0)
    }
    u && $t(e.attrs, "set", "")
}
function Cu(e, t, n, r) {
    const [o,s] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let l in t) {
            if (En(l))
                continue;
            const u = t[l];
            let c;
            o && ce(o, c = De(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ls(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            i = !0)
        }
    if (s) {
        const l = se(n)
          , u = a || re;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = ni(o, l, f, u[f], e, !ce(u, f))
        }
    }
    return i
}
function ni(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = ce(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && Q(l)) {
                const {propsDefaults: u} = o;
                if (n in u)
                    r = u[n];
                else {
                    const c = Rn(o);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l;
            o.ce && o.ce._setProp(n, r)
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === We(n)) && (r = !0))
    }
    return r
}
const cm = new WeakMap;
function Ru(e, t, n=!1) {
    const r = n ? cm : t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const s = e.props
      , i = {}
      , a = [];
    let l = !1;
    if (!Q(e)) {
        const c = f => {
            l = !0;
            const [d,h] = Ru(f, t, !0);
            ye(i, d),
            h && a.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!s && !l)
        return ge(e) && r.set(e, bn),
        bn;
    if (z(s))
        for (let c = 0; c < s.length; c++) {
            const f = De(s[c]);
            Ka(f) && (i[f] = re)
        }
    else if (s)
        for (const c in s) {
            const f = De(c);
            if (Ka(f)) {
                const d = s[c]
                  , h = i[f] = z(d) || Q(d) ? {
                    type: d
                } : ye({}, d)
                  , g = h.type;
                let p = !1
                  , v = !0;
                if (z(g))
                    for (let k = 0; k < g.length; ++k) {
                        const w = g[k]
                          , m = Q(w) && w.name;
                        if (m === "Boolean") {
                            p = !0;
                            break
                        } else
                            m === "String" && (v = !1)
                    }
                else
                    p = Q(g) && g.name === "Boolean";
                h[0] = p,
                h[1] = v,
                (p || ce(h, "default")) && a.push(f)
            }
        }
    const u = [i, a];
    return ge(e) && r.set(e, u),
    u
}
function Ka(e) {
    return e[0] !== "$" && !En(e)
}
const ra = e => e === "_" || e === "_ctx" || e === "$stable"
  , oa = e => z(e) ? e.map(Xe) : [Xe(e)]
  , um = (e, t, n) => {
    if (t._n)
        return t;
    const r = _t( (...o) => oa(t(...o)), n);
    return r._c = !1,
    r
}
  , Au = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
        if (ra(o))
            continue;
        const s = e[o];
        if (Q(s))
            t[o] = um(o, s, r);
        else if (s != null) {
            const i = oa(s);
            t[o] = () => i
        }
    }
}
  , Pu = (e, t) => {
    const n = oa(t);
    e.slots.default = () => n
}
  , Ou = (e, t, n) => {
    for (const r in t)
        (n || !ra(r)) && (e[r] = t[r])
}
  , fm = (e, t, n) => {
    const r = e.slots = Su();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (Ou(r, t, n),
        n && Ii(r, "_", o, !0)) : Au(t, r)
    } else
        t && Pu(e, t)
}
  , dm = (e, t, n) => {
    const {vnode: r, slots: o} = e;
    let s = !0
      , i = re;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? s = !1 : Ou(o, t, n) : (s = !t.$stable,
        Au(t, o)),
        i = t
    } else
        t && (Pu(e, t),
        i = {
            default: 1
        });
    if (s)
        for (const a in o)
            !ra(a) && i[a] == null && delete o[a]
}
  , Oe = Wu;
function Mu(e) {
    return Iu(e)
}
function Lu(e) {
    return Iu(e, Tp)
}
function Iu(e, t) {
    const n = Br();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h=nt, insertStaticContent: g} = e
      , p = (y, b, S, M=null, C=null, L=null, F=void 0, $=null, D=!!b.dynamicChildren) => {
        if (y === b)
            return;
        y && !vt(y, b) && (M = A(y),
        Le(y, C, L, !0),
        y = null),
        b.patchFlag === -2 && (D = !1,
        b.dynamicChildren = null);
        const {type: I, ref: X, shapeFlag: U} = b;
        switch (I) {
        case un:
            v(y, b, S, M);
            break;
        case Ce:
            k(y, b, S, M);
            break;
        case xn:
            y == null && w(b, S, M, F);
            break;
        case Pe:
            O(y, b, S, M, C, L, F, $, D);
            break;
        default:
            U & 1 ? E(y, b, S, M, C, L, F, $, D) : U & 6 ? K(y, b, S, M, C, L, F, $, D) : (U & 64 || U & 128) && I.process(y, b, S, M, C, L, F, $, D, G)
        }
        X != null && C ? zn(X, y && y.ref, L, b || y, !b) : X == null && y && y.ref != null && zn(y.ref, null, L, y, !0)
    }
      , v = (y, b, S, M) => {
        if (y == null)
            r(b.el = a(b.children), S, M);
        else {
            const C = b.el = y.el;
            b.children !== y.children && u(C, b.children)
        }
    }
      , k = (y, b, S, M) => {
        y == null ? r(b.el = l(b.children || ""), S, M) : b.el = y.el
    }
      , w = (y, b, S, M) => {
        [y.el,y.anchor] = g(y.children, b, S, M, y.el, y.anchor)
    }
      , m = ({el: y, anchor: b}, S, M) => {
        let C;
        for (; y && y !== b; )
            C = d(y),
            r(y, S, M),
            y = C;
        r(b, S, M)
    }
      , _ = ({el: y, anchor: b}) => {
        let S;
        for (; y && y !== b; )
            S = d(y),
            o(y),
            y = S;
        o(b)
    }
      , E = (y, b, S, M, C, L, F, $, D) => {
        b.type === "svg" ? F = "svg" : b.type === "math" && (F = "mathml"),
        y == null ? T(b, S, M, C, L, F, $, D) : R(y, b, C, L, F, $, D)
    }
      , T = (y, b, S, M, C, L, F, $) => {
        let D, I;
        const {props: X, shapeFlag: U, transition: Y, dirs: ee} = y;
        if (D = y.el = i(y.type, L, X && X.is, X),
        U & 8 ? c(D, y.children) : U & 16 && N(y.children, D, null, M, C, As(y, L), F, $),
        ee && At(y, null, M, "created"),
        x(D, y, y.scopeId, F, M),
        X) {
            for (const _e in X)
                _e !== "value" && !En(_e) && s(D, _e, null, X[_e], L, M);
            "value" in X && s(D, "value", null, X.value, L),
            (I = X.onVnodeBeforeMount) && Qe(I, M, y)
        }
        ee && At(y, null, M, "beforeMount");
        const oe = Nu(C, Y);
        oe && Y.beforeEnter(D),
        r(D, b, S),
        ((I = X && X.onVnodeMounted) || oe || ee) && Oe( () => {
            I && Qe(I, M, y),
            oe && Y.enter(D),
            ee && At(y, null, M, "mounted")
        }
        , C)
    }
      , x = (y, b, S, M, C) => {
        if (S && h(y, S),
        M)
            for (let L = 0; L < M.length; L++)
                h(y, M[L]);
        if (C) {
            let L = C.subTree;
            if (b === L || Oo(L.type) && (L.ssContent === b || L.ssFallback === b)) {
                const F = C.vnode;
                x(y, F, F.scopeId, F.slotScopeIds, C.parent)
            }
        }
    }
      , N = (y, b, S, M, C, L, F, $, D=0) => {
        for (let I = D; I < y.length; I++) {
            const X = y[I] = $ ? sn(y[I]) : Xe(y[I]);
            p(null, X, b, S, M, C, L, F, $)
        }
    }
      , R = (y, b, S, M, C, L, F) => {
        const $ = b.el = y.el;
        let {patchFlag: D, dynamicChildren: I, dirs: X} = b;
        D |= y.patchFlag & 16;
        const U = y.props || re
          , Y = b.props || re;
        let ee;
        if (S && mn(S, !1),
        (ee = Y.onVnodeBeforeUpdate) && Qe(ee, S, b, y),
        X && At(b, y, S, "beforeUpdate"),
        S && mn(S, !0),
        (U.innerHTML && Y.innerHTML == null || U.textContent && Y.textContent == null) && c($, ""),
        I ? P(y.dynamicChildren, I, $, S, M, As(b, C), L) : F || W(y, b, $, null, S, M, As(b, C), L, !1),
        D > 0) {
            if (D & 16)
                q($, U, Y, S, C);
            else if (D & 2 && U.class !== Y.class && s($, "class", null, Y.class, C),
            D & 4 && s($, "style", U.style, Y.style, C),
            D & 8) {
                const oe = b.dynamicProps;
                for (let _e = 0; _e < oe.length; _e++) {
                    const pe = oe[_e]
                      , Je = U[pe]
                      , Fe = Y[pe];
                    (Fe !== Je || pe === "value") && s($, pe, Je, Fe, C, S)
                }
            }
            D & 1 && y.children !== b.children && c($, b.children)
        } else
            !F && I == null && q($, U, Y, S, C);
        ((ee = Y.onVnodeUpdated) || X) && Oe( () => {
            ee && Qe(ee, S, b, y),
            X && At(b, y, S, "updated")
        }
        , M)
    }
      , P = (y, b, S, M, C, L, F) => {
        for (let $ = 0; $ < b.length; $++) {
            const D = y[$]
              , I = b[$]
              , X = D.el && (D.type === Pe || !vt(D, I) || D.shapeFlag & 198) ? f(D.el) : S;
            p(D, I, X, null, M, C, L, F, !0)
        }
    }
      , q = (y, b, S, M, C) => {
        if (b !== S) {
            if (b !== re)
                for (const L in b)
                    !En(L) && !(L in S) && s(y, L, b[L], null, C, M);
            for (const L in S) {
                if (En(L))
                    continue;
                const F = S[L]
                  , $ = b[L];
                F !== $ && L !== "value" && s(y, L, $, F, C, M)
            }
            "value" in S && s(y, "value", b.value, S.value, C)
        }
    }
      , O = (y, b, S, M, C, L, F, $, D) => {
        const I = b.el = y ? y.el : a("")
          , X = b.anchor = y ? y.anchor : a("");
        let {patchFlag: U, dynamicChildren: Y, slotScopeIds: ee} = b;
        ee && ($ = $ ? $.concat(ee) : ee),
        y == null ? (r(I, S, M),
        r(X, S, M),
        N(b.children || [], S, X, C, L, F, $, D)) : U > 0 && U & 64 && Y && y.dynamicChildren ? (P(y.dynamicChildren, Y, S, C, L, F, $),
        (b.key != null || C && b === C.subTree) && sa(y, b, !0)) : W(y, b, S, X, C, L, F, $, D)
    }
      , K = (y, b, S, M, C, L, F, $, D) => {
        b.slotScopeIds = $,
        y == null ? b.shapeFlag & 512 ? C.ctx.activate(b, S, M, F, D) : j(b, S, M, C, L, F, D) : J(y, b, D)
    }
      , j = (y, b, S, M, C, L, F) => {
        const $ = y.component = Ju(y, M, C);
        if (zr(y) && ($.ctx.renderer = G),
        Xu($, !1, F),
        $.asyncDep) {
            if (C && C.registerDep($, H, F),
            !y.el) {
                const D = $.subTree = ue(Ce);
                k(null, D, b, S),
                y.placeholder = D.el
            }
        } else
            H($, y, b, S, C, L, F)
    }
      , J = (y, b, S) => {
        const M = b.component = y.component;
        if (Em(y, b, S))
            if (M.asyncDep && !M.asyncResolved) {
                Z(M, b, S);
                return
            } else
                M.next = b,
                M.update();
        else
            b.el = y.el,
            M.vnode = b
    }
      , H = (y, b, S, M, C, L, F) => {
        const $ = () => {
            if (y.isMounted) {
                let {next: U, bu: Y, u: ee, parent: oe, vnode: _e} = y;
                {
                    const et = Du(y);
                    if (et) {
                        U && (U.el = _e.el,
                        Z(y, U, F)),
                        et.asyncDep.then( () => {
                            y.isUnmounted || $()
                        }
                        );
                        return
                    }
                }
                let pe = U, Je;
                mn(y, !1),
                U ? (U.el = _e.el,
                Z(y, U, F)) : U = _e,
                Y && kn(Y),
                (Je = U.props && U.props.onVnodeBeforeUpdate) && Qe(Je, oe, U, _e),
                mn(y, !0);
                const Fe = mo(y)
                  , yt = y.subTree;
                y.subTree = Fe,
                p(yt, Fe, f(yt.el), A(yt), y, C, L),
                U.el = Fe.el,
                pe === null && cs(y, Fe.el),
                ee && Oe(ee, C),
                (Je = U.props && U.props.onVnodeUpdated) && Oe( () => Qe(Je, oe, U, _e), C)
            } else {
                let U;
                const {el: Y, props: ee} = b
                  , {bm: oe, m: _e, parent: pe, root: Je, type: Fe} = y
                  , yt = cn(b);
                if (mn(y, !1),
                oe && kn(oe),
                !yt && (U = ee && ee.onVnodeBeforeMount) && Qe(U, pe, b),
                mn(y, !0),
                Y && Te) {
                    const et = () => {
                        y.subTree = mo(y),
                        Te(Y, y.subTree, y, C, null)
                    }
                    ;
                    yt && Fe.__asyncHydrate ? Fe.__asyncHydrate(Y, y, et) : et()
                } else {
                    Je.ce && Je.ce._def.shadowRoot !== !1 && Je.ce._injectChildStyle(Fe);
                    const et = y.subTree = mo(y);
                    p(null, et, S, M, y, C, L),
                    b.el = et.el
                }
                if (_e && Oe(_e, C),
                !yt && (U = ee && ee.onVnodeMounted)) {
                    const et = b;
                    Oe( () => Qe(U, pe, et), C)
                }
                (b.shapeFlag & 256 || pe && cn(pe.vnode) && pe.vnode.shapeFlag & 256) && y.a && Oe(y.a, C),
                y.isMounted = !0,
                b = S = M = null
            }
        }
        ;
        y.scope.on();
        const D = y.effect = new Ar($);
        y.scope.off();
        const I = y.update = D.run.bind(D)
          , X = y.job = D.runIfDirty.bind(D);
        X.i = y,
        X.id = y.uid,
        D.scheduler = () => Wi(X),
        mn(y, !0),
        I()
    }
      , Z = (y, b, S) => {
        b.component = y;
        const M = y.vnode.props;
        y.vnode = b,
        y.next = null,
        lm(y, b.props, M, S),
        dm(y, b.children, S),
        zt(),
        Na(y),
        qt()
    }
      , W = (y, b, S, M, C, L, F, $, D=!1) => {
        const I = y && y.children
          , X = y ? y.shapeFlag : 0
          , U = b.children
          , {patchFlag: Y, shapeFlag: ee} = b;
        if (Y > 0) {
            if (Y & 128) {
                gt(I, U, S, M, C, L, F, $, D);
                return
            } else if (Y & 256) {
                ke(I, U, S, M, C, L, F, $, D);
                return
            }
        }
        ee & 8 ? (X & 16 && lt(I, C, L),
        U !== I && c(S, U)) : X & 16 ? ee & 16 ? gt(I, U, S, M, C, L, F, $, D) : lt(I, C, L, !0) : (X & 8 && c(S, ""),
        ee & 16 && N(U, S, M, C, L, F, $, D))
    }
      , ke = (y, b, S, M, C, L, F, $, D) => {
        y = y || bn,
        b = b || bn;
        const I = y.length
          , X = b.length
          , U = Math.min(I, X);
        let Y;
        for (Y = 0; Y < U; Y++) {
            const ee = b[Y] = D ? sn(b[Y]) : Xe(b[Y]);
            p(y[Y], ee, S, null, C, L, F, $, D)
        }
        I > X ? lt(y, C, L, !0, !1, U) : N(b, S, M, C, L, F, $, D, U)
    }
      , gt = (y, b, S, M, C, L, F, $, D) => {
        let I = 0;
        const X = b.length;
        let U = y.length - 1
          , Y = X - 1;
        for (; I <= U && I <= Y; ) {
            const ee = y[I]
              , oe = b[I] = D ? sn(b[I]) : Xe(b[I]);
            if (vt(ee, oe))
                p(ee, oe, S, null, C, L, F, $, D);
            else
                break;
            I++
        }
        for (; I <= U && I <= Y; ) {
            const ee = y[U]
              , oe = b[Y] = D ? sn(b[Y]) : Xe(b[Y]);
            if (vt(ee, oe))
                p(ee, oe, S, null, C, L, F, $, D);
            else
                break;
            U--,
            Y--
        }
        if (I > U) {
            if (I <= Y) {
                const ee = Y + 1
                  , oe = ee < X ? b[ee].el : M;
                for (; I <= Y; )
                    p(null, b[I] = D ? sn(b[I]) : Xe(b[I]), S, oe, C, L, F, $, D),
                    I++
            }
        } else if (I > Y)
            for (; I <= U; )
                Le(y[I], C, L, !0),
                I++;
        else {
            const ee = I
              , oe = I
              , _e = new Map;
            for (I = oe; I <= Y; I++) {
                const tt = b[I] = D ? sn(b[I]) : Xe(b[I]);
                tt.key != null && _e.set(tt.key, I)
            }
            let pe, Je = 0;
            const Fe = Y - oe + 1;
            let yt = !1
              , et = 0;
            const cr = new Array(Fe);
            for (I = 0; I < Fe; I++)
                cr[I] = 0;
            for (I = ee; I <= U; I++) {
                const tt = y[I];
                if (Je >= Fe) {
                    Le(tt, C, L, !0);
                    continue
                }
                let xt;
                if (tt.key != null)
                    xt = _e.get(tt.key);
                else
                    for (pe = oe; pe <= Y; pe++)
                        if (cr[pe - oe] === 0 && vt(tt, b[pe])) {
                            xt = pe;
                            break
                        }
                xt === void 0 ? Le(tt, C, L, !0) : (cr[xt - oe] = I + 1,
                xt >= et ? et = xt : yt = !0,
                p(tt, b[xt], S, null, C, L, F, $, D),
                Je++)
            }
            const Ra = yt ? hm(cr) : bn;
            for (pe = Ra.length - 1,
            I = Fe - 1; I >= 0; I--) {
                const tt = oe + I
                  , xt = b[tt]
                  , Aa = b[tt + 1]
                  , Pa = tt + 1 < X ? Aa.el || Aa.placeholder : M;
                cr[I] === 0 ? p(null, xt, S, Pa, C, L, F, $, D) : yt && (pe < 0 || I !== Ra[pe] ? at(xt, S, Pa, 2) : pe--)
            }
        }
    }
      , at = (y, b, S, M, C=null) => {
        const {el: L, type: F, transition: $, children: D, shapeFlag: I} = y;
        if (I & 6) {
            at(y.component.subTree, b, S, M);
            return
        }
        if (I & 128) {
            y.suspense.move(b, S, M);
            return
        }
        if (I & 64) {
            F.move(y, b, S, G);
            return
        }
        if (F === Pe) {
            r(L, b, S);
            for (let U = 0; U < D.length; U++)
                at(D[U], b, S, M);
            r(y.anchor, b, S);
            return
        }
        if (F === xn) {
            m(y, b, S);
            return
        }
        if (M !== 2 && I & 1 && $)
            if (M === 0)
                $.beforeEnter(L),
                r(L, b, S),
                Oe( () => $.enter(L), C);
            else {
                const {leave: U, delayLeave: Y, afterLeave: ee} = $
                  , oe = () => {
                    y.ctx.isUnmounted ? o(L) : r(L, b, S)
                }
                  , _e = () => {
                    L._isLeaving && L[Ht](!0),
                    U(L, () => {
                        oe(),
                        ee && ee()
                    }
                    )
                }
                ;
                Y ? Y(L, oe, _e) : _e()
            }
        else
            r(L, b, S)
    }
      , Le = (y, b, S, M=!1, C=!1) => {
        const {type: L, props: F, ref: $, children: D, dynamicChildren: I, shapeFlag: X, patchFlag: U, dirs: Y, cacheIndex: ee} = y;
        if (U === -2 && (C = !1),
        $ != null && (zt(),
        zn($, null, S, y, !0),
        qt()),
        ee != null && (b.renderCache[ee] = void 0),
        X & 256) {
            b.ctx.deactivate(y);
            return
        }
        const oe = X & 1 && Y
          , _e = !cn(y);
        let pe;
        if (_e && (pe = F && F.onVnodeBeforeUnmount) && Qe(pe, b, y),
        X & 6)
            Xt(y.component, S, M);
        else {
            if (X & 128) {
                y.suspense.unmount(S, M);
                return
            }
            oe && At(y, null, b, "beforeUnmount"),
            X & 64 ? y.type.remove(y, b, S, G, M) : I && !I.hasOnce && (L !== Pe || U > 0 && U & 64) ? lt(I, b, S, !1, !0) : (L === Pe && U & 384 || !C && X & 16) && lt(D, b, S),
            M && Tt(y)
        }
        (_e && (pe = F && F.onVnodeUnmounted) || oe) && Oe( () => {
            pe && Qe(pe, b, y),
            oe && At(y, null, b, "unmounted")
        }
        , S)
    }
      , Tt = y => {
        const {type: b, el: S, anchor: M, transition: C} = y;
        if (b === Pe) {
            St(S, M);
            return
        }
        if (b === xn) {
            _(y);
            return
        }
        const L = () => {
            o(S),
            C && !C.persisted && C.afterLeave && C.afterLeave()
        }
        ;
        if (y.shapeFlag & 1 && C && !C.persisted) {
            const {leave: F, delayLeave: $} = C
              , D = () => F(S, L);
            $ ? $(y.el, L, D) : D()
        } else
            L()
    }
      , St = (y, b) => {
        let S;
        for (; y !== b; )
            S = d(y),
            o(y),
            y = S;
        o(b)
    }
      , Xt = (y, b, S) => {
        const {bum: M, scope: C, job: L, subTree: F, um: $, m: D, a: I} = y;
        Po(D),
        Po(I),
        M && kn(M),
        C.stop(),
        L && (L.flags |= 8,
        Le(F, y, b, S)),
        $ && Oe($, b),
        Oe( () => {
            y.isUnmounted = !0
        }
        , b)
    }
      , lt = (y, b, S, M=!1, C=!1, L=0) => {
        for (let F = L; F < y.length; F++)
            Le(y[F], b, S, M, C)
    }
      , A = y => {
        if (y.shapeFlag & 6)
            return A(y.component.subTree);
        if (y.shapeFlag & 128)
            return y.suspense.next();
        const b = d(y.anchor || y.el)
          , S = b && b[ou];
        return S ? d(S) : b
    }
    ;
    let V = !1;
    const B = (y, b, S) => {
        y == null ? b._vnode && Le(b._vnode, null, null, !0) : p(b._vnode || null, y, b, null, null, null, S),
        b._vnode = y,
        V || (V = !0,
        Na(),
        Co(),
        V = !1)
    }
      , G = {
        p,
        um: Le,
        m: at,
        r: Tt,
        mt: j,
        mc: N,
        pc: W,
        pbc: P,
        n: A,
        o: e
    };
    let fe, Te;
    return t && ([fe,Te] = t(G)),
    {
        render: B,
        hydrate: fe,
        createApp: im(B, fe)
    }
}
function As({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function mn({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function Nu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function sa(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (z(r) && z(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = sn(o[s]),
            a.el = i.el),
            !n && a.patchFlag !== -2 && sa(i, a)),
            a.type === un && a.patchFlag !== -1 && (a.el = i.el),
            a.type === Ce && !a.el && (a.el = i.el)
        }
}
function hm(e) {
    const t = e.slice()
      , n = [0];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (o = n[n.length - 1],
            e[o] < u) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (s = 0,
            i = n.length - 1; s < i; )
                a = s + i >> 1,
                e[n[a]] < u ? s = a + 1 : i = a;
            u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    i = n[s - 1]; s-- > 0; )
        n[s] = i,
        i = t[i];
    return n
}
function Du(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Du(t)
}
function Po(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const Hu = Symbol.for("v-scx")
  , $u = () => Me(Hu);
function ia(e, t) {
    return qr(e, null, t)
}
function pm(e, t) {
    return qr(e, null, {
        flush: "post"
    })
}
function ju(e, t) {
    return qr(e, null, {
        flush: "sync"
    })
}
function Se(e, t, n) {
    return qr(e, t, n)
}
function qr(e, t, n=re) {
    const {immediate: r, deep: o, flush: s, once: i} = n
      , a = ye({}, n)
      , l = t && r || !t && s !== "post";
    let u;
    if (Yn) {
        if (s === "sync") {
            const h = $u();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {}
            ;
            return h.stop = nt,
            h.resume = nt,
            h.pause = nt,
            h
        }
    }
    const c = $e;
    a.call = (h, g, p) => ht(h, c, g, p);
    let f = !1;
    s === "post" ? a.scheduler = h => {
        Oe(h, c && c.suspense)
    }
    : s !== "sync" && (f = !0,
    a.scheduler = (h, g) => {
        g ? h() : Wi(h)
    }
    ),
    a.augmentJob = h => {
        t && (h.flags |= 4),
        f && (h.flags |= 2,
        c && (h.id = c.uid,
        h.i = c))
    }
    ;
    const d = sp(e, t, a);
    return Yn && (u ? u.push(d) : l && d()),
    d
}
function mm(e, t, n) {
    const r = this.proxy
      , o = me(e) ? e.includes(".") ? Fu(r, e) : () => r[e] : e.bind(r, r);
    let s;
    Q(t) ? s = t : (s = t.handler,
    n = t);
    const i = Rn(this)
      , a = qr(o, s.bind(r), n);
    return i(),
    a
}
function Fu(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function gm(e, t, n=re) {
    const r = Ae()
      , o = De(t)
      , s = We(t)
      , i = Bu(e, o)
      , a = Vi( (l, u) => {
        let c, f = re, d;
        return ju( () => {
            const h = e[o];
            Ue(c, h) && (c = h,
            u())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(c) : c
            },
            set(h) {
                const g = n.set ? n.set(h) : h;
                if (!Ue(g, c) && !(f !== re && Ue(h, f)))
                    return;
                const p = r.vnode.props;
                p && (t in p || o in p || s in p) && (`onUpdate:${t}` in p || `onUpdate:${o}` in p || `onUpdate:${s}` in p) || (c = h,
                u()),
                r.emit(`update:${t}`, g),
                Ue(h, g) && Ue(h, f) && !Ue(g, d) && u(),
                f = h,
                d = g
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? i || re : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const Bu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${We(t)}Modifiers`];
function ym(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || re;
    let o = n;
    const s = t.startsWith("update:")
      , i = s && Bu(r, t.slice(7));
    i && (i.trim && (o = n.map(c => me(c) ? c.trim() : c)),
    i.number && (o = n.map(Cr)));
    let a, l = r[a = Vn(t)] || r[a = Vn(De(t))];
    !l && s && (l = r[a = Vn(We(t))]),
    l && ht(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        ht(u, e, 6, o)
    }
}
const _m = new WeakMap;
function Uu(e, t, n=!1) {
    const r = n ? _m : t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const s = e.emits;
    let i = {}
      , a = !1;
    if (!Q(e)) {
        const l = u => {
            const c = Uu(u, t, !0);
            c && (a = !0,
            ye(i, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (ge(e) && r.set(e, null),
    null) : (z(s) ? s.forEach(l => i[l] = null) : ye(i, s),
    ge(e) && r.set(e, i),
    i)
}
function ls(e, t) {
    return !e || !tr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, We(t)) || ce(e, t))
}
function mo(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: g, inheritAttrs: p} = e
      , v = Ir(e);
    let k, w;
    try {
        if (n.shapeFlag & 4) {
            const _ = o || r
              , E = _;
            k = Xe(u.call(E, _, c, f, h, d, g)),
            w = a
        } else {
            const _ = t;
            k = Xe(_.length > 1 ? _(f, {
                attrs: a,
                slots: i,
                emit: l
            }) : _(f, null)),
            w = t.props ? a : bm(a)
        }
    } catch (_) {
        kr.length = 0,
        Mn(_, e, 1),
        k = ue(Ce)
    }
    let m = k;
    if (w && p !== !1) {
        const _ = Object.keys(w)
          , {shapeFlag: E} = m;
        _.length && E & 7 && (s && _.some(Go) && (w = wm(w, s)),
        m = Et(m, w, !1, !0))
    }
    return n.dirs && (m = Et(m, null, !1, !0),
    m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs),
    n.transition && Kt(m, n.transition),
    k = m,
    Ir(v),
    k
}
function vm(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (Gt(o)) {
            if (o.type !== Ce || o.children === "v-if") {
                if (n)
                    return;
                n = o
            }
        } else
            return
    }
    return n
}
const bm = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || tr(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , wm = (e, t) => {
    const n = {};
    for (const r in e)
        (!Go(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
}
;
function Em(e, t, n) {
    const {props: r, children: o, component: s} = e
      , {props: i, children: a, patchFlag: l} = t
      , u = s.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Ga(r, i, u) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (i[d] !== r[d] && !ls(u, d))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ga(r, i, u) : !0 : !!i;
    return !1
}
function Ga(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !ls(n, s))
            return !0
    }
    return !1
}
function cs({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Oo = e => e.__isSuspense;
let ri = 0;
const km = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
        if (e == null)
            Tm(t, n, r, o, s, i, a, l, u);
        else {
            if (s && s.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            Sm(e, t, n, r, o, i, a, l, u)
        }
    },
    hydrate: xm,
    normalize: Cm
}
  , aa = km;
function Dr(e, t) {
    const n = e.props && e.props[t];
    Q(n) && n()
}
function Tm(e, t, n, r, o, s, i, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = e.suspense = Vu(e, o, r, t, f, n, s, i, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i),
    d.deps > 0 ? (Dr(e, "onPending"),
    Dr(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, s, i),
    qn(d, e.ssFallback)) : d.resolve(!1, !0)
}
function Sm(e, t, n, r, o, s, i, a, {p: l, um: u, o: {createElement: c}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , h = t.ssFallback
      , {activeBranch: g, pendingBranch: p, isInFallback: v, isHydrating: k} = f;
    if (p)
        f.pendingBranch = d,
        vt(p, d) ? (l(p, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : v && (k || (l(g, h, n, r, o, null, s, i, a),
        qn(f, h)))) : (f.pendingId = ri++,
        k ? (f.isHydrating = !1,
        f.activeBranch = p) : u(p, o, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        v ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : (l(g, h, n, r, o, null, s, i, a),
        qn(f, h))) : g && vt(g, d) ? (l(g, d, n, r, o, f, s, i, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 && f.resolve()));
    else if (g && vt(g, d))
        l(g, d, n, r, o, f, s, i, a),
        qn(f, d);
    else if (Dr(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = ri++,
    l(null, d, f.hiddenContainer, null, o, f, s, i, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: w, pendingId: m} = f;
        w > 0 ? setTimeout( () => {
            f.pendingId === m && f.fallback(h)
        }
        , w) : w === 0 && f.fallback(h)
    }
}
function Vu(e, t, n, r, o, s, i, a, l, u, c=!1) {
    const {p: f, m: d, um: h, n: g, o: {parentNode: p, remove: v}} = u;
    let k;
    const w = Rm(e);
    w && t && t.pendingBranch && (k = t.pendingId,
    t.deps++);
    const m = e.props ? Rr(e.props.timeout) : void 0
      , _ = s
      , E = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: i,
        container: r,
        hiddenContainer: o,
        deps: 0,
        pendingId: ri++,
        timeout: typeof m == "number" ? m : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(T=!1, x=!1) {
            const {vnode: N, activeBranch: R, pendingBranch: P, pendingId: q, effects: O, parentComponent: K, container: j} = E;
            let J = !1;
            E.isHydrating ? E.isHydrating = !1 : T || (J = R && P.transition && P.transition.mode === "out-in",
            J && (R.transition.afterLeave = () => {
                q === E.pendingId && (d(P, j, s === _ ? g(R) : s, 0),
                Mr(O))
            }
            ),
            R && (p(R.el) === j && (s = g(R)),
            h(R, K, E, !0)),
            J || d(P, j, s, 0)),
            qn(E, P),
            E.pendingBranch = null,
            E.isInFallback = !1;
            let H = E.parent
              , Z = !1;
            for (; H; ) {
                if (H.pendingBranch) {
                    H.effects.push(...O),
                    Z = !0;
                    break
                }
                H = H.parent
            }
            !Z && !J && Mr(O),
            E.effects = [],
            w && t && t.pendingBranch && k === t.pendingId && (t.deps--,
            t.deps === 0 && !x && t.resolve()),
            Dr(N, "onResolve")
        },
        fallback(T) {
            if (!E.pendingBranch)
                return;
            const {vnode: x, activeBranch: N, parentComponent: R, container: P, namespace: q} = E;
            Dr(x, "onFallback");
            const O = g(N)
              , K = () => {
                E.isInFallback && (f(null, T, P, O, R, null, q, a, l),
                qn(E, T))
            }
              , j = T.transition && T.transition.mode === "out-in";
            j && (N.transition.afterLeave = K),
            E.isInFallback = !0,
            h(N, R, null, !0),
            j || K()
        },
        move(T, x, N) {
            E.activeBranch && d(E.activeBranch, T, x, N),
            E.container = T
        },
        next() {
            return E.activeBranch && g(E.activeBranch)
        },
        registerDep(T, x, N) {
            const R = !!E.pendingBranch;
            R && E.deps++;
            const P = T.vnode.el;
            T.asyncDep.catch(q => {
                Mn(q, T, 0)
            }
            ).then(q => {
                if (T.isUnmounted || E.isUnmounted || E.pendingId !== T.suspenseId)
                    return;
                T.asyncResolved = !0;
                const {vnode: O} = T;
                ai(T, q, !1),
                P && (O.el = P);
                const K = !P && T.subTree.el;
                x(T, O, p(P || T.subTree.el), P ? null : g(T.subTree), E, i, N),
                K && v(K),
                cs(T, O.el),
                R && --E.deps === 0 && E.resolve()
            }
            )
        },
        unmount(T, x) {
            E.isUnmounted = !0,
            E.activeBranch && h(E.activeBranch, n, T, x),
            E.pendingBranch && h(E.pendingBranch, n, T, x)
        }
    };
    return E
}
function xm(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = Vu(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, !0)
      , c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function Cm(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = Ya(r ? n.default : n),
    e.ssFallback = r ? Ya(n.fallback) : ue(Ce)
}
function Ya(e) {
    let t;
    if (Q(e)) {
        const n = Cn && e._c;
        n && (e._d = !1,
        be()),
        e = e(),
        n && (e._d = !0,
        t = ze,
        zu())
    }
    return z(e) && (e = vm(e)),
    e = Xe(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function Wu(e, t) {
    t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Mr(e)
}
function qn(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let o = t.el;
    for (; !o && t.component; )
        t = t.component.subTree,
        o = t.el;
    n.el = o,
    r && r.subTree === n && (r.vnode.el = o,
    cs(r, o))
}
function Rm(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Pe = Symbol.for("v-fgt")
  , un = Symbol.for("v-txt")
  , Ce = Symbol.for("v-cmt")
  , xn = Symbol.for("v-stc")
  , kr = [];
let ze = null;
function be(e=!1) {
    kr.push(ze = e ? null : [])
}
function zu() {
    kr.pop(),
    ze = kr[kr.length - 1] || null
}
let Cn = 1;
function Hr(e, t=!1) {
    Cn += e,
    e < 0 && ze && t && (ze.hasOnce = !0)
}
function qu(e) {
    return e.dynamicChildren = Cn > 0 ? ze || bn : null,
    zu(),
    Cn > 0 && ze && ze.push(e),
    e
}
function Ie(e, t, n, r, o, s) {
    return qu(te(e, t, n, r, o, s, !0))
}
function Ft(e, t, n, r, o) {
    return qu(ue(e, t, n, r, o, !0))
}
function Gt(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function vt(e, t) {
    return e.type === t.type && e.key === t.key
}
function Am(e) {}
const Ku = ({key: e}) => e ?? null
  , go = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? me(e) || Re(e) || Q(e) ? {
    i: je,
    r: e,
    k: t,
    f: !!n
} : e : null);
function te(e, t=null, n=null, r=0, o=null, s=e === Pe ? 0 : 1, i=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ku(t),
        ref: t && go(t),
        scopeId: os,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: je
    };
    return a ? (la(l, n),
    s & 128 && e.normalize(l)) : n && (l.shapeFlag |= me(n) ? 8 : 16),
    Cn > 0 && !i && ze && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && ze.push(l),
    l
}
const ue = Pm;
function Pm(e, t=null, n=null, r=0, o=null, s=!1) {
    if ((!e || e === yu) && (e = Ce),
    Gt(e)) {
        const a = Et(e, t, !0);
        return n && la(a, n),
        Cn > 0 && !s && ze && (a.shapeFlag & 6 ? ze[ze.indexOf(e)] = a : ze.push(a)),
        a.patchFlag = -2,
        a
    }
    if (Hm(e) && (e = e.__vccOpts),
    t) {
        t = Gu(t);
        let {class: a, style: l} = t;
        a && !me(a) && (t.class = dn(a)),
        ge(l) && (rs(l) && !z(l) && (l = ye({}, l)),
        t.style = On(l))
    }
    const i = me(e) ? 1 : Oo(e) ? 128 : su(e) ? 64 : ge(e) ? 4 : Q(e) ? 2 : 0;
    return te(e, t, n, r, o, i, s, !0)
}
function Gu(e) {
    return e ? rs(e) || xu(e) ? ye({}, e) : e : null
}
function Et(e, t, n=!1, r=!1) {
    const {props: o, ref: s, patchFlag: i, children: a, transition: l} = e
      , u = t ? Yu(o || {}, t) : o
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Ku(u),
        ref: t && t.ref ? n && s ? z(s) ? s.concat(go(t)) : [s, go(t)] : go(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Pe ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Et(e.ssContent),
        ssFallback: e.ssFallback && Et(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Kt(c, l.clone(c)),
    c
}
function Ke(e=" ", t=0) {
    return ue(un, null, e, t)
}
function oi(e, t) {
    const n = ue(xn, null, e);
    return n.staticCount = t,
    n
}
function on(e="", t=!1) {
    return t ? (be(),
    Ft(Ce, null, e)) : ue(Ce, null, e)
}
function Xe(e) {
    return e == null || typeof e == "boolean" ? ue(Ce) : z(e) ? ue(Pe, null, e.slice()) : Gt(e) ? sn(e) : ue(un, null, String(e))
}
function sn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e)
}
function la(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (z(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            la(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !xu(t) ? t._ctx = je : o === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        Q(t) ? (t = {
            default: t,
            _ctx: je
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Ke(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Yu(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = dn([t.class, r.class]));
            else if (o === "style")
                t.style = On([t.style, r.style]);
            else if (tr(o)) {
                const s = t[o]
                  , i = r[o];
                i && s !== i && !(z(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function Qe(e, t, n, r=null) {
    ht(e, t, 7, [n, r])
}
const Om = ku();
let Mm = 0;
function Ju(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || Om
      , s = {
        uid: Mm++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Hi(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ru(r, o),
        emitsOptions: Uu(r, o),
        emit: null,
        emitted: null,
        propsDefaults: re,
        inheritAttrs: r.inheritAttrs,
        ctx: re,
        data: re,
        props: re,
        attrs: re,
        slots: re,
        refs: re,
        setupState: re,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = t ? t.root : s,
    s.emit = ym.bind(null, s),
    e.ce && e.ce(s),
    s
}
let $e = null;
const Ae = () => $e || je;
let Mo, si;
{
    const e = Br()
      , t = (n, r) => {
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(r),
        s => {
            o.length > 1 ? o.forEach(i => i(s)) : o[0](s)
        }
    }
    ;
    Mo = t("__VUE_INSTANCE_SETTERS__", n => $e = n),
    si = t("__VUE_SSR_SETTERS__", n => Yn = n)
}
const Rn = e => {
    const t = $e;
    return Mo(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Mo(t)
    }
}
  , ii = () => {
    $e && $e.scope.off(),
    Mo(null)
}
;
function Qu(e) {
    return e.vnode.shapeFlag & 4
}
let Yn = !1;
function Xu(e, t=!1, n=!1) {
    t && si(t);
    const {props: r, children: o} = e.vnode
      , s = Qu(e);
    am(e, r, s, t),
    fm(e, o, n || t);
    const i = s ? Lm(e, t) : void 0;
    return t && si(!1),
    i
}
function Lm(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Zs);
    const {setup: r} = n;
    if (r) {
        zt();
        const o = e.setupContext = r.length > 1 ? ef(e) : null
          , s = Rn(e)
          , i = sr(r, e, 0, [e.props, o])
          , a = Jo(i);
        if (qt(),
        s(),
        (a || e.sp) && !cn(e) && Ki(e),
        a) {
            if (i.then(ii, ii),
            t)
                return i.then(l => {
                    ai(e, l, t)
                }
                ).catch(l => {
                    Mn(l, e, 0)
                }
                );
            e.asyncDep = i
        } else
            ai(e, i, t)
    } else
        Zu(e, t)
}
function ai(e, t, n) {
    Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Ui(t)),
    Zu(e, n)
}
let Lo, li;
function Im(e) {
    Lo = e,
    li = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,Bp))
    }
}
const Nm = () => !Lo;
function Zu(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Lo && !r.render) {
            const o = r.template || na(e).template;
            if (o) {
                const {isCustomElement: s, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = ye(ye({
                    isCustomElement: s,
                    delimiters: a
                }, i), l);
                r.render = Lo(o, u)
            }
        }
        e.render = r.render || nt,
        li && li(e)
    }
    {
        const o = Rn(e);
        zt();
        try {
            em(e)
        } finally {
            qt(),
            o()
        }
    }
}
const Dm = {
    get(e, t) {
        return Ve(e, "get", ""),
        e[t]
    }
};
function ef(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Dm),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Kr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ui(Yc(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Er)
                return Er[n](e)
        },
        has(t, n) {
            return n in t || n in Er
        }
    })) : e.proxy
}
function ci(e, t=!0) {
    return Q(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Hm(e) {
    return Q(e) && "__vccOpts" in e
}
const le = (e, t) => tp(e, t, Yn);
function Ne(e, t, n) {
    const r = (s, i, a) => {
        Hr(-1);
        try {
            return ue(s, i, a)
        } finally {
            Hr(1)
        }
    }
      , o = arguments.length;
    return o === 2 ? ge(t) && !z(t) ? Gt(t) ? r(e, null, [t]) : r(e, t) : r(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gt(n) && (n = [n]),
    r(e, t, n))
}
function $m() {}
function jm(e, t, n, r) {
    const o = n[r];
    if (o && tf(o, e))
        return o;
    const s = t();
    return s.memo = e.slice(),
    s.cacheIndex = r,
    n[r] = s
}
function tf(e, t) {
    const n = e.memo;
    if (n.length != t.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (Ue(n[r], t[r]))
            return !1;
    return Cn > 0 && ze && ze.push(e),
    !0
}
const nf = "3.5.21"
  , Fm = nt
  , Bm = up
  , Um = $n
  , Vm = ru
  , Wm = {
    createComponentInstance: Ju,
    setupComponent: Xu,
    renderComponentRoot: mo,
    setCurrentRenderingInstance: Ir,
    isVNode: Gt,
    normalizeVNode: Xe,
    getComponentPublicInstance: Kr,
    ensureValidVNode: ta,
    pushWarningContext: ip,
    popWarningContext: ap
}
  , zm = Wm
  , qm = null
  , Km = null
  , Gm = null;
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ui;
const Ja = typeof window < "u" && window.trustedTypes;
if (Ja)
    try {
        ui = Ja.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const rf = ui ? e => ui.createHTML(e) : e => e
  , Ym = "http://www.w3.org/2000/svg"
  , Jm = "http://www.w3.org/1998/Math/MathML"
  , Dt = typeof document < "u" ? document : null
  , Qa = Dt && Dt.createElement("template")
  , Qm = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const o = t === "svg" ? Dt.createElementNS(Ym, e) : t === "mathml" ? Dt.createElementNS(Jm, e) : n ? Dt.createElement(e, {
            is: n
        }) : Dt.createElement(e);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e => Dt.createTextNode(e),
    createComment: e => Dt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Dt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, s) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === s || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling)); )
                ;
        else {
            Qa.innerHTML = rf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const a = Qa.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Zt = "transition"
  , fr = "animation"
  , Jn = Symbol("_vtc")
  , of = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , sf = ye({}, qi, of)
  , Xm = e => (e.displayName = "Transition",
e.props = sf,
e)
  , af = Xm( (e, {slots: t}) => Ne(uu, lf(e), t))
  , gn = (e, t=[]) => {
    z(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Xa = e => e ? z(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function lf(e) {
    const t = {};
    for (const O in e)
        O in of || (t[O] = e[O]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: s=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=s, appearActiveClass: u=i, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , g = Zm(o)
      , p = g && g[0]
      , v = g && g[1]
      , {onBeforeEnter: k, onEnter: w, onEnterCancelled: m, onLeave: _, onLeaveCancelled: E, onBeforeAppear: T=k, onAppear: x=w, onAppearCancelled: N=m} = t
      , R = (O, K, j, J) => {
        O._enterCancelled = J,
        tn(O, K ? c : a),
        tn(O, K ? u : i),
        j && j()
    }
      , P = (O, K) => {
        O._isLeaving = !1,
        tn(O, f),
        tn(O, h),
        tn(O, d),
        K && K()
    }
      , q = O => (K, j) => {
        const J = O ? x : w
          , H = () => R(K, O, j);
        gn(J, [K, H]),
        Za( () => {
            tn(K, O ? l : s),
            Ct(K, O ? c : a),
            Xa(J) || el(K, r, p, H)
        }
        )
    }
    ;
    return ye(t, {
        onBeforeEnter(O) {
            gn(k, [O]),
            Ct(O, s),
            Ct(O, i)
        },
        onBeforeAppear(O) {
            gn(T, [O]),
            Ct(O, l),
            Ct(O, u)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(O, K) {
            O._isLeaving = !0;
            const j = () => P(O, K);
            Ct(O, f),
            O._enterCancelled ? (Ct(O, d),
            fi()) : (fi(),
            Ct(O, d)),
            Za( () => {
                O._isLeaving && (tn(O, f),
                Ct(O, h),
                Xa(_) || el(O, r, v, j))
            }
            ),
            gn(_, [O, j])
        },
        onEnterCancelled(O) {
            R(O, !1, void 0, !0),
            gn(m, [O])
        },
        onAppearCancelled(O) {
            R(O, !0, void 0, !0),
            gn(N, [O])
        },
        onLeaveCancelled(O) {
            P(O),
            gn(E, [O])
        }
    })
}
function Zm(e) {
    if (e == null)
        return null;
    if (ge(e))
        return [Ps(e.enter), Ps(e.leave)];
    {
        const t = Ps(e);
        return [t, t]
    }
}
function Ps(e) {
    return Rr(e)
}
function Ct(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Jn] || (e[Jn] = new Set)).add(t)
}
function tn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Jn];
    n && (n.delete(t),
    n.size || (e[Jn] = void 0))
}
function Za(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let e0 = 0;
function el(e, t, n, r) {
    const o = e._endId = ++e0
      , s = () => {
        o === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(s, n);
    const {type: i, timeout: a, propCount: l} = cf(e, t);
    if (!i)
        return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
        e.removeEventListener(u, d),
        s()
    }
      , d = h => {
        h.target === e && ++c >= l && f()
    }
    ;
    setTimeout( () => {
        c < l && f()
    }
    , a + 1),
    e.addEventListener(u, d)
}
function cf(e, t) {
    const n = window.getComputedStyle(e)
      , r = g => (n[g] || "").split(", ")
      , o = r(`${Zt}Delay`)
      , s = r(`${Zt}Duration`)
      , i = tl(o, s)
      , a = r(`${fr}Delay`)
      , l = r(`${fr}Duration`)
      , u = tl(a, l);
    let c = null
      , f = 0
      , d = 0;
    t === Zt ? i > 0 && (c = Zt,
    f = i,
    d = s.length) : t === fr ? u > 0 && (c = fr,
    f = u,
    d = l.length) : (f = Math.max(i, u),
    c = f > 0 ? i > u ? Zt : fr : null,
    d = c ? c === Zt ? s.length : l.length : 0);
    const h = c === Zt && /\b(?:transform|all)(?:,|$)/.test(r(`${Zt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}
function tl(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => nl(n) + nl(e[r])))
}
function nl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function fi() {
    return document.body.offsetHeight
}
function t0(e, t, n) {
    const r = e[Jn];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Io = Symbol("_vod")
  , uf = Symbol("_vsh")
  , ff = {
    name: "show",
    beforeMount(e, {value: t}, {transition: n}) {
        e[Io] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : dr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        dr(e, !0),
        r.enter(e)) : r.leave(e, () => {
            dr(e, !1)
        }
        ) : dr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        dr(e, t)
    }
};
function dr(e, t) {
    e.style.display = t ? e[Io] : "none",
    e[uf] = !t
}
function n0() {
    ff.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            }
    }
}
const df = Symbol("");
function r0(e) {
    const t = Ae();
    if (!t)
        return;
    const n = t.ut = (o=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s => No(s, o))
    }
      , r = () => {
        const o = e(t.proxy);
        t.ce ? No(t.ce, o) : di(t.subTree, o),
        n(o)
    }
    ;
    Qi( () => {
        Mr(r)
    }
    ),
    it( () => {
        Se(r, nt, {
            flush: "post"
        });
        const o = new MutationObserver(r);
        o.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        ir( () => o.disconnect())
    }
    )
}
function di(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            di(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        No(e.el, t);
    else if (e.type === Pe)
        e.children.forEach(n => di(n, t));
    else if (e.type === xn) {
        let {el: n, anchor: r} = e;
        for (; n && (No(n, t),
        n !== r); )
            n = n.nextSibling
    }
}
function No(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const o in t) {
            const s = Mc(t[o]);
            n.setProperty(`--${o}`, s),
            r += `--${o}: ${s};`
        }
        n[df] = r
    }
}
const o0 = /(?:^|;)\s*display\s*:/;
function s0(e, t, n) {
    const r = e.style
      , o = me(n);
    let s = !1;
    if (n && !o) {
        if (t)
            if (me(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && yo(r, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && yo(r, i, "");
        for (const i in n)
            i === "display" && (s = !0),
            yo(r, i, n[i])
    } else if (o) {
        if (t !== n) {
            const i = r[df];
            i && (n += ";" + i),
            r.cssText = n,
            s = o0.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Io in e && (e[Io] = s ? r.display : "",
    e[uf] && (r.display = "none"))
}
const rl = /\s*!important$/;
function yo(e, t, n) {
    if (z(n))
        n.forEach(r => yo(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = i0(e, t);
        rl.test(n) ? e.setProperty(We(r), n.replace(rl, ""), "important") : e[r] = n
    }
}
const ol = ["Webkit", "Moz", "ms"]
  , Os = {};
function i0(e, t) {
    const n = Os[t];
    if (n)
        return n;
    let r = De(t);
    if (r !== "filter" && r in e)
        return Os[t] = r;
    r = rr(r);
    for (let o = 0; o < ol.length; o++) {
        const s = ol[o] + r;
        if (s in e)
            return Os[t] = s
    }
    return t
}
const sl = "http://www.w3.org/1999/xlink";
function il(e, t, n, r, o, s=Rc(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sl, t.slice(6, t.length)) : e.setAttributeNS(sl, t, n) : n == null || s && !Di(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : dt(n) ? String(n) : n)
}
function al(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? rf(n) : n);
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Di(n) : n == null && a === "string" ? (n = "",
        i = !0) : a === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(o || t)
}
function Bt(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function a0(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const ll = Symbol("_vei");
function l0(e, t, n, r, o=null) {
    const s = e[ll] || (e[ll] = {})
      , i = s[t];
    if (r && i)
        i.value = r;
    else {
        const [a,l] = c0(t);
        if (r) {
            const u = s[t] = d0(r, o);
            Bt(e, a, u, l)
        } else
            i && (a0(e, a, i, l),
            s[t] = void 0)
    }
}
const cl = /(?:Once|Passive|Capture)$/;
function c0(e) {
    let t;
    if (cl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(cl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : We(e.slice(2)), t]
}
let Ms = 0;
const u0 = Promise.resolve()
  , f0 = () => Ms || (u0.then( () => Ms = 0),
Ms = Date.now());
function d0(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        ht(h0(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = f0(),
    n
}
function h0(e, t) {
    if (z(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => o => !o._stopped && r && r(o))
    } else
        return t
}
const ul = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , p0 = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? t0(e, r, i) : t === "style" ? s0(e, n, r) : tr(t) ? Go(t) || l0(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : m0(e, t, r, i)) ? (al(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && il(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !me(r)) ? al(e, De(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    il(e, t, r, i))
}
;
function m0(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && ul(t) && Q(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return ul(t) && me(n) ? !1 : t in e
}
const fl = {};
function hf(e, t, n) {
    let r = st(e, t);
    nr(r) && (r = ye({}, r, t));
    class o extends us {
        constructor(i) {
            super(r, i, n)
        }
    }
    return o.def = r,
    o
}
const g0 = ( (e, t) => hf(e, t, fa))
  , y0 = typeof HTMLElement < "u" ? HTMLElement : class {
}
;
class us extends y0 {
    constructor(t, n={}, r=$o) {
        super(),
        this._def = t,
        this._props = n,
        this._createApp = r,
        this._isVueCE = !0,
        this._instance = null,
        this._app = null,
        this._nonce = this._def.nonce,
        this._connected = !1,
        this._resolved = !1,
        this._numberProps = null,
        this._styleChildren = new WeakSet,
        this._ob = null,
        this.shadowRoot && r !== $o ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({
            mode: "open"
        }),
        this._root = this.shadowRoot) : this._root = this
    }
    connectedCallback() {
        if (!this.isConnected)
            return;
        !this.shadowRoot && !this._resolved && this._parseSlots(),
        this._connected = !0;
        let t = this;
        for (; t = t && (t.parentNode || t.host); )
            if (t instanceof us) {
                this._parent = t;
                break
            }
        this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then( () => {
            this._pendingResolve = void 0,
            this._resolveDef()
        }
        ) : this._resolveDef())
    }
    _setParent(t=this._parent) {
        t && (this._instance.parent = t._instance,
        this._inheritParentContext(t))
    }
    _inheritParentContext(t=this._parent) {
        t && this._app && Object.setPrototypeOf(this._app._context.provides, t._instance.provides)
    }
    disconnectedCallback() {
        this._connected = !1,
        pt( () => {
            this._connected || (this._ob && (this._ob.disconnect(),
            this._ob = null),
            this._app && this._app.unmount(),
            this._instance && (this._instance.ce = void 0),
            this._app = this._instance = null)
        }
        )
    }
    _resolveDef() {
        if (this._pendingResolve)
            return;
        for (let r = 0; r < this.attributes.length; r++)
            this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(r => {
            for (const o of r)
                this._setAttr(o.attributeName)
        }
        ),
        this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, o=!1) => {
            this._resolved = !0,
            this._pendingResolve = void 0;
            const {props: s, styles: i} = r;
            let a;
            if (s && !z(s))
                for (const l in s) {
                    const u = s[l];
                    (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = Rr(this._props[l])),
                    (a || (a = Object.create(null)))[De(l)] = !0)
                }
            this._numberProps = a,
            this._resolveProps(r),
            this.shadowRoot && this._applyStyles(i),
            this._mount(r)
        }
          , n = this._def.__asyncLoader;
        n ? this._pendingResolve = n().then(r => {
            r.configureApp = this._def.configureApp,
            t(this._def = r, !0)
        }
        ) : t(this._def)
    }
    _mount(t) {
        this._app = this._createApp(t),
        this._inheritParentContext(),
        t.configureApp && t.configureApp(this._app),
        this._app._ceVNode = this._createVNode(),
        this._app.mount(this._root);
        const n = this._instance && this._instance.exposed;
        if (n)
            for (const r in n)
                ce(this, r) || Object.defineProperty(this, r, {
                    get: () => ie(n[r])
                })
    }
    _resolveProps(t) {
        const {props: n} = t
          , r = z(n) ? n : Object.keys(n || {});
        for (const o of Object.keys(this))
            o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
        for (const o of r.map(De))
            Object.defineProperty(this, o, {
                get() {
                    return this._getProp(o)
                },
                set(s) {
                    this._setProp(o, s, !0, !0)
                }
            })
    }
    _setAttr(t) {
        if (t.startsWith("data-v-"))
            return;
        const n = this.hasAttribute(t);
        let r = n ? this.getAttribute(t) : fl;
        const o = De(t);
        n && this._numberProps && this._numberProps[o] && (r = Rr(r)),
        this._setProp(o, r, !1, !0)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r=!0, o=!1) {
        if (n !== this._props[t] && (n === fl ? delete this._props[t] : (this._props[t] = n,
        t === "key" && this._app && (this._app._ceVNode.key = n)),
        o && this._instance && this._update(),
        r)) {
            const s = this._ob;
            s && s.disconnect(),
            n === !0 ? this.setAttribute(We(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(We(t), n + "") : n || this.removeAttribute(We(t)),
            s && s.observe(this, {
                attributes: !0
            })
        }
    }
    _update() {
        const t = this._createVNode();
        this._app && (t.appContext = this._app._context),
        Tf(t, this._root)
    }
    _createVNode() {
        const t = {};
        this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
        const n = ue(this._def, ye(t, this._props));
        return this._instance || (n.ce = r => {
            this._instance = r,
            r.ce = this,
            r.isCE = !0;
            const o = (s, i) => {
                this.dispatchEvent(new CustomEvent(s,nr(i[0]) ? ye({
                    detail: i
                }, i[0]) : {
                    detail: i
                }))
            }
            ;
            r.emit = (s, ...i) => {
                o(s, i),
                We(s) !== s && o(We(s), i)
            }
            ,
            this._setParent()
        }
        ),
        n
    }
    _applyStyles(t, n) {
        if (!t)
            return;
        if (n) {
            if (n === this._def || this._styleChildren.has(n))
                return;
            this._styleChildren.add(n)
        }
        const r = this._nonce;
        for (let o = t.length - 1; o >= 0; o--) {
            const s = document.createElement("style");
            r && s.setAttribute("nonce", r),
            s.textContent = t[o],
            this.shadowRoot.prepend(s)
        }
    }
    _parseSlots() {
        const t = this._slots = {};
        let n;
        for (; n = this.firstChild; ) {
            const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
            (t[r] || (t[r] = [])).push(n),
            this.removeChild(n)
        }
    }
    _renderSlots() {
        const t = (this._teleportTarget || this).querySelectorAll("slot")
          , n = this._instance.type.__scopeId;
        for (let r = 0; r < t.length; r++) {
            const o = t[r]
              , s = o.getAttribute("name") || "default"
              , i = this._slots[s]
              , a = o.parentNode;
            if (i)
                for (const l of i) {
                    if (n && l.nodeType === 1) {
                        const u = n + "-s"
                          , c = document.createTreeWalker(l, 1);
                        l.setAttribute(u, "");
                        let f;
                        for (; f = c.nextNode(); )
                            f.setAttribute(u, "")
                    }
                    a.insertBefore(l, o)
                }
            else
                for (; o.firstChild; )
                    a.insertBefore(o.firstChild, o);
            a.removeChild(o)
        }
    }
    _injectChildStyle(t) {
        this._applyStyles(t.styles, t)
    }
    _removeChildStyle(t) {}
}
function pf(e) {
    const t = Ae()
      , n = t && t.ce;
    return n || null
}
function _0() {
    const e = pf();
    return e && e.shadowRoot
}
function v0(e="$style") {
    {
        const t = Ae();
        if (!t)
            return re;
        const n = t.type.__cssModules;
        if (!n)
            return re;
        const r = n[e];
        return r || re
    }
}
const mf = new WeakMap
  , gf = new WeakMap
  , Do = Symbol("_moveCb")
  , dl = Symbol("_enterCb")
  , b0 = e => (delete e.props.mode,
e)
  , w0 = b0({
    name: "TransitionGroup",
    props: ye({}, sf, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Ae()
          , r = zi();
        let o, s;
        return as( () => {
            if (!o.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!x0(o[0].el, n.vnode.el, i)) {
                o = [];
                return
            }
            o.forEach(k0),
            o.forEach(T0);
            const a = o.filter(S0);
            fi(),
            a.forEach(l => {
                const u = l.el
                  , c = u.style;
                Ct(u, i),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const f = u[Do] = d => {
                    d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f),
                    u[Do] = null,
                    tn(u, i))
                }
                ;
                u.addEventListener("transitionend", f)
            }
            ),
            o = []
        }
        ),
        () => {
            const i = se(e)
              , a = lf(i);
            let l = i.tag || Pe;
            if (o = [],
            s)
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    c.el && c.el instanceof Element && (o.push(c),
                    Kt(c, Gn(c, a, r, n)),
                    mf.set(c, c.el.getBoundingClientRect()))
                }
            s = t.default ? ss(t.default()) : [];
            for (let u = 0; u < s.length; u++) {
                const c = s[u];
                c.key != null && Kt(c, Gn(c, a, r, n))
            }
            return ue(l, null, s)
        }
    }
})
  , E0 = w0;
function k0(e) {
    const t = e.el;
    t[Do] && t[Do](),
    t[dl] && t[dl]()
}
function T0(e) {
    gf.set(e, e.el.getBoundingClientRect())
}
function S0(e) {
    const t = mf.get(e)
      , n = gf.get(e)
      , r = t.left - n.left
      , o = t.top - n.top;
    if (r || o) {
        const s = e.el.style;
        return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`,
        s.transitionDuration = "0s",
        e
    }
}
function x0(e, t, n) {
    const r = e.cloneNode()
      , o = e[Jn];
    o && o.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const {hasTransform: i} = cf(r);
    return s.removeChild(r),
    i
}
const hn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return z(t) ? n => kn(t, n) : t
}
;
function C0(e) {
    e.target.composing = !0
}
function hl(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const ft = Symbol("_assign")
  , Ho = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e[ft] = hn(o);
        const s = r || o.props && o.props.type === "number";
        Bt(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            s && (a = Cr(a)),
            e[ft](a)
        }
        ),
        n && Bt(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Bt(e, "compositionstart", C0),
        Bt(e, "compositionend", hl),
        Bt(e, "change", hl))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: o, number: s}}, i) {
        if (e[ft] = hn(i),
        e.composing)
            return;
        const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value
          , l = t ?? "";
        a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l))
    }
}
  , ca = {
    deep: !0,
    created(e, t, n) {
        e[ft] = hn(n),
        Bt(e, "change", () => {
            const r = e._modelValue
              , o = Qn(e)
              , s = e.checked
              , i = e[ft];
            if (z(r)) {
                const a = Ur(r, o)
                  , l = a !== -1;
                if (s && !l)
                    i(r.concat(o));
                else if (!s && l) {
                    const u = [...r];
                    u.splice(a, 1),
                    i(u)
                }
            } else if (pn(r)) {
                const a = new Set(r);
                s ? a.add(o) : a.delete(o),
                i(a)
            } else
                i(_f(e, s))
        }
        )
    },
    mounted: pl,
    beforeUpdate(e, t, n) {
        e[ft] = hn(n),
        pl(e, t, n)
    }
};
function pl(e, {value: t, oldValue: n}, r) {
    e._modelValue = t;
    let o;
    if (z(t))
        o = Ur(t, r.props.value) > -1;
    else if (pn(t))
        o = t.has(r.props.value);
    else {
        if (t === n)
            return;
        o = Wt(t, _f(e, !0))
    }
    e.checked !== o && (e.checked = o)
}
const ua = {
    created(e, {value: t}, n) {
        e.checked = Wt(t, n.props.value),
        e[ft] = hn(n),
        Bt(e, "change", () => {
            e[ft](Qn(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[ft] = hn(r),
        t !== n && (e.checked = Wt(t, r.props.value))
    }
}
  , yf = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const o = pn(t);
        Bt(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? Cr(Qn(i)) : Qn(i));
            e[ft](e.multiple ? o ? new Set(s) : s : s[0]),
            e._assigning = !0,
            pt( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[ft] = hn(r)
    },
    mounted(e, {value: t}) {
        ml(e, t)
    },
    beforeUpdate(e, t, n) {
        e[ft] = hn(n)
    },
    updated(e, {value: t}) {
        e._assigning || ml(e, t)
    }
};
function ml(e, t) {
    const n = e.multiple
      , r = z(t);
    if (!(n && !r && !pn(t))) {
        for (let o = 0, s = e.options.length; o < s; o++) {
            const i = e.options[o]
              , a = Qn(i);
            if (n)
                if (r) {
                    const l = typeof a;
                    l === "string" || l === "number" ? i.selected = t.some(u => String(u) === String(a)) : i.selected = Ur(t, a) > -1
                } else
                    i.selected = t.has(a);
            else if (Wt(Qn(i), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Qn(e) {
    return "_value" in e ? e._value : e.value
}
function _f(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const vf = {
    created(e, t, n) {
        oo(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        oo(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        oo(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        oo(e, t, n, r, "updated")
    }
};
function bf(e, t) {
    switch (e) {
    case "SELECT":
        return yf;
    case "TEXTAREA":
        return Ho;
    default:
        switch (t) {
        case "checkbox":
            return ca;
        case "radio":
            return ua;
        default:
            return Ho
        }
    }
}
function oo(e, t, n, r, o) {
    const i = bf(e.tagName, n.props && n.props.type)[o];
    i && i(e, t, n, r)
}
function R0() {
    Ho.getSSRProps = ({value: e}) => ({
        value: e
    }),
    ua.getSSRProps = ({value: e}, t) => {
        if (t.props && Wt(t.props.value, e))
            return {
                checked: !0
            }
    }
    ,
    ca.getSSRProps = ({value: e}, t) => {
        if (z(e)) {
            if (t.props && Ur(e, t.props.value) > -1)
                return {
                    checked: !0
                }
        } else if (pn(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                }
        } else if (e)
            return {
                checked: !0
            }
    }
    ,
    vf.getSSRProps = (e, t) => {
        if (typeof t.type != "string")
            return;
        const n = bf(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps)
            return n.getSSRProps(e, t)
    }
}
const A0 = ["ctrl", "shift", "alt", "meta"]
  , P0 = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => A0.some(n => e[`${n}Key`] && !t.includes(n))
}
  , O0 = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = ( (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
            const a = P0[t[i]];
            if (a && a(o, t))
                return
        }
        return e(o, ...s)
    }
    ))
}
  , M0 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , L0 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = (o => {
        if (!("key" in o))
            return;
        const s = We(o.key);
        if (t.some(i => i === s || M0[i] === s))
            return e(o)
    }
    ))
}
  , wf = ye({
    patchProp: p0
}, Qm);
let Tr, gl = !1;
function Ef() {
    return Tr || (Tr = Mu(wf))
}
function kf() {
    return Tr = gl ? Tr : Lu(wf),
    gl = !0,
    Tr
}
const Tf = ( (...e) => {
    Ef().render(...e)
}
)
  , I0 = ( (...e) => {
    kf().hydrate(...e)
}
)
  , $o = ( (...e) => {
    const t = Ef().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = xf(r);
        if (!o)
            return;
        const s = t._component;
        !Q(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
        const i = n(o, !1, Sf(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
)
  , fa = ( (...e) => {
    const t = kf().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = xf(r);
        if (o)
            return n(o, !0, Sf(o))
    }
    ,
    t
}
);
function Sf(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function xf(e) {
    return me(e) ? document.querySelector(e) : e
}
let yl = !1;
const N0 = () => {
    yl || (yl = !0,
    R0(),
    n0())
}
  , Qw = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: uu,
    BaseTransitionPropsValidators: qi,
    Comment: Ce,
    DeprecationTypes: Gm,
    EffectScope: Hi,
    ErrorCodes: cp,
    ErrorTypeStrings: Bm,
    Fragment: Pe,
    KeepAlive: du,
    ReactiveEffect: Ar,
    Static: xn,
    Suspense: aa,
    Teleport: _p,
    Text: un,
    TrackOpTypes: np,
    Transition: af,
    TransitionGroup: E0,
    TriggerOpTypes: rp,
    VueElement: us,
    assertNumber: lp,
    callWithAsyncErrorHandling: ht,
    callWithErrorHandling: sr,
    camelize: De,
    capitalize: rr,
    cloneVNode: Et,
    compatUtils: Km,
    computed: le,
    createApp: $o,
    createBlock: Ft,
    createCommentVNode: on,
    createElementBlock: Ie,
    createElementVNode: te,
    createHydrationRenderer: Lu,
    createPropsRestProxy: Zp,
    createRenderer: Mu,
    createSSRApp: fa,
    createSlots: $p,
    createStaticVNode: oi,
    createTextVNode: Ke,
    createVNode: ue,
    customRef: Vi,
    defineAsyncComponent: Ee,
    defineComponent: st,
    defineCustomElement: hf,
    defineEmits: Vp,
    defineExpose: Wp,
    defineModel: Kp,
    defineOptions: zp,
    defineProps: Up,
    defineSSRCustomElement: g0,
    defineSlots: qp,
    devtools: Um,
    effect: xh,
    effectScope: Lc,
    getCurrentInstance: Ae,
    getCurrentScope: Vr,
    getCurrentWatcher: op,
    getTransitionRawChildren: ss,
    guardReactiveProps: Gu,
    h: Ne,
    handleError: Mn,
    hasInjectionContext: In,
    hydrate: I0,
    hydrateOnIdle: Rp,
    hydrateOnInteraction: Mp,
    hydrateOnMediaQuery: Op,
    hydrateOnVisible: Pp,
    initCustomFormatter: $m,
    initDirectivesForSSR: N0,
    inject: Me,
    isMemoSame: tf,
    isProxy: rs,
    isReactive: ln,
    isReadonly: Mt,
    isRef: Re,
    isRuntimeOnly: Nm,
    isShallow: rt,
    isVNode: Gt,
    markRaw: Yc,
    mergeDefaults: Qp,
    mergeModels: Xp,
    mergeProps: Yu,
    nextTick: pt,
    normalizeClass: dn,
    normalizeProps: xc,
    normalizeStyle: On,
    onActivated: Gi,
    onBeforeMount: Ji,
    onBeforeUnmount: Ln,
    onBeforeUpdate: Qi,
    onDeactivated: Yi,
    onErrorCaptured: Xi,
    onMounted: it,
    onRenderTracked: gu,
    onRenderTriggered: mu,
    onScopeDispose: $i,
    onServerPrefetch: pu,
    onUnmounted: ir,
    onUpdated: as,
    onWatcherCleanup: Xc,
    openBlock: be,
    popScopeId: pp,
    provide: Ot,
    proxyRefs: Ui,
    pushScopeId: hp,
    queuePostFlushCb: Mr,
    reactive: ot,
    readonly: or,
    ref: he,
    registerRuntimeCompiler: Im,
    render: Tf,
    renderList: vu,
    renderSlot: jp,
    resolveComponent: Qs,
    resolveDirective: Hp,
    resolveDynamicComponent: _u,
    resolveFilter: qm,
    resolveTransitionHooks: Gn,
    setBlockTracking: Hr,
    setDevtoolsHook: Vm,
    setTransitionHooks: Kt,
    shallowReactive: Pt,
    shallowReadonly: qh,
    shallowRef: xe,
    ssrContextKey: Hu,
    ssrUtils: zm,
    stop: Ch,
    toDisplayString: Ut,
    toHandlerKey: Vn,
    toHandlers: Fp,
    toRaw: se,
    toRef: Wr,
    toRefs: Qh,
    toValue: ae,
    transformVNodeArgs: Am,
    triggerRef: Gh,
    unref: ie,
    useAttrs: Jp,
    useCssModule: v0,
    useCssVars: r0,
    useHost: pf,
    useId: bp,
    useModel: gm,
    useSSRContext: $u,
    useShadowRoot: _0,
    useSlots: Yp,
    useTemplateRef: wp,
    useTransitionState: zi,
    vModelCheckbox: ca,
    vModelDynamic: vf,
    vModelRadio: ua,
    vModelSelect: yf,
    vModelText: Ho,
    vShow: ff,
    version: nf,
    warn: Fm,
    watch: Se,
    watchEffect: ia,
    watchPostEffect: pm,
    watchSyncEffect: ju,
    withAsyncContext: wu,
    withCtx: _t,
    withDefaults: Gp,
    withDirectives: gp,
    withKeys: L0,
    withMemo: jm,
    withModifiers: O0,
    withScopeId: mp
}, Symbol.toStringTag, {
    value: "Module"
}))
  , D0 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , H0 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , $0 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function j0(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        F0(e);
        return
    }
    return t
}
function F0(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function jo(e, t={}) {
    if (typeof e != "string")
        return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
        return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9)
        switch (n.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
        }
    if (!$0.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (D0.test(e) || H0.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, j0)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
const B0 = /#/g
  , U0 = /&/g
  , V0 = /\//g
  , W0 = /=/g
  , da = /\+/g
  , z0 = /%5e/gi
  , q0 = /%60/gi
  , K0 = /%7c/gi
  , G0 = /%20/gi;
function Y0(e) {
    return encodeURI("" + e).replace(K0, "|")
}
function hi(e) {
    return Y0(typeof e == "string" ? e : JSON.stringify(e)).replace(da, "%2B").replace(G0, "+").replace(B0, "%23").replace(U0, "%26").replace(q0, "`").replace(z0, "^").replace(V0, "%2F")
}
function Ls(e) {
    return hi(e).replace(W0, "%3D")
}
function Fo(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function J0(e) {
    return Fo(e.replace(da, " "))
}
function Q0(e) {
    return Fo(e.replace(da, " "))
}
function ha(e="") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const o = J0(r[1]);
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = Q0(r[2] || "");
        t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
    }
    return t
}
function X0(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n => `${Ls(e)}=${hi(n)}`).join("&") : `${Ls(e)}=${hi(t)}` : Ls(e)
}
function Z0(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => X0(t, e[t])).filter(Boolean).join("&")
}
const eg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , tg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , ng = /^([/\\]\s*){2,}[^/\\]/
  , rg = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , og = /\/$|\/\?|\/#/
  , sg = /^\.?\//;
function Qt(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? eg.test(e) : tg.test(e) || (t.acceptRelative ? ng.test(e) : !1)
}
function ig(e) {
    return !!e && rg.test(e)
}
function pi(e="", t) {
    return t ? og.test(e) : e.endsWith("/")
}
function Xn(e="", t) {
    if (!t)
        return (pi(e) ? e.slice(0, -1) : e) || "/";
    if (!pi(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o),
    r = e.slice(o));
    const [s,...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function Cf(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (pi(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o),
    r = e.slice(o),
    !n))
        return r;
    const [s,...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function ag(e="") {
    return e.startsWith("/")
}
function Xw(e="") {
    return ag(e) ? e : "/" + e
}
function lg(e, t) {
    if (Af(t) || Qt(e))
        return e;
    const n = Xn(t);
    return e.startsWith(n) ? e : fs(n, e)
}
function _l(e, t) {
    if (Af(t))
        return e;
    const n = Xn(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function Rf(e, t) {
    const n = Mf(e)
      , r = {
        ...ha(n.search),
        ...t
    };
    return n.search = Z0(r),
    fg(n)
}
function Af(e) {
    return !e || e === "/"
}
function cg(e) {
    return e && e !== "/"
}
function fs(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => cg(o)))
        if (n) {
            const o = r.replace(sg, "");
            n = Cf(n) + o
        } else
            n = r;
    return n
}
function Pf(...e) {
    const t = /\/(?!\/)/
      , n = e.filter(Boolean)
      , r = [];
    let o = 0;
    for (const i of n)
        if (!(!i || i === "/")) {
            for (const [a,l] of i.split(t).entries())
                if (!(!l || l === ".")) {
                    if (l === "..") {
                        if (r.length === 1 && Qt(r[0]))
                            continue;
                        r.pop(),
                        o--;
                        continue
                    }
                    if (a === 1 && r[r.length - 1]?.endsWith(":/")) {
                        r[r.length - 1] += "/" + l;
                        continue
                    }
                    r.push(l),
                    o++
                }
        }
    let s = r.join("/");
    return o >= 0 ? n[0]?.startsWith("/") && !s.startsWith("/") ? s = "/" + s : n[0]?.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s,
    n[n.length - 1]?.endsWith("/") && !s.endsWith("/") && (s += "/"),
    s
}
function ug(e, t) {
    return Fo(Xn(e)) === Fo(Xn(t))
}
const Of = Symbol.for("ufo:protocolRelative");
function Mf(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!Qt(e, {
        acceptRelative: !0
    }))
        return vl(e);
    const [,r="",o,s=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let[,i="",a=""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {pathname: l, search: u, hash: c} = vl(a);
    return {
        protocol: r.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: i,
        pathname: l,
        search: u,
        hash: c,
        [Of]: !r
    }
}
function vl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function fg(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , o = e.auth ? e.auth + "@" : ""
      , s = e.host || "";
    return (e.protocol || e[Of] ? (e.protocol || "") + "//" : "") + o + s + t + n + r
}
class dg extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n?.cause && !this.cause && (this.cause = n.cause)
    }
}
function hg(e) {
    const t = e.error?.message || e.error?.toString() || ""
      , n = e.request?.method || e.options?.method || "GET"
      , r = e.request?.url || String(e.request) || "/"
      , o = `[${n}] ${JSON.stringify(r)}`
      , s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , i = `${o}: ${s}${t ? ` ${t}` : ""}`
      , a = new dg(i,e.error ? {
        cause: e.error
    } : void 0);
    for (const l of ["request", "options", "response"])
        Object.defineProperty(a, l, {
            get() {
                return e[l]
            }
        });
    for (const [l,u] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, l, {
            get() {
                return e.response && e.response[u]
            }
        });
    return a
}
const pg = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function bl(e="GET") {
    return pg.has(e.toUpperCase())
}
function mg(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const gg = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , yg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function _g(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return yg.test(t) ? "json" : gg.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function vg(e, t, n, r) {
    const o = bg(t?.headers ?? e?.headers, n?.headers, r);
    let s;
    return (n?.query || n?.params || t?.params || t?.query) && (s = {
        ...n?.params,
        ...n?.query,
        ...t?.params,
        ...t?.query
    }),
    {
        ...n,
        ...t,
        query: s,
        params: s,
        headers: o
    }
}
function bg(e, t, n) {
    if (!t)
        return new n(e);
    const r = new n(t);
    if (e)
        for (const [o,s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e))
            r.set(o, s);
    return r
}
async function so(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t)
                await n(e);
        else
            await t(e)
}
const wg = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Eg = new Set([101, 204, 205, 304]);
function Lf(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function o(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = bl(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : wg.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)),
                s(a.request, {
                    ...a.options,
                    retry: c - 1
                })
            }
        }
        const u = hg(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, s),
        u
    }
    const s = async function(l, u={}) {
        const c = {
            request: l,
            options: vg(l, u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        c.options.method && (c.options.method = c.options.method.toUpperCase()),
        c.options.onRequest && await so(c, c.options.onRequest),
        typeof c.request == "string" && (c.options.baseURL && (c.request = lg(c.request, c.options.baseURL)),
        c.options.query && (c.request = Rf(c.request, c.options.query),
        delete c.options.query),
        "query" in c.options && delete c.options.query,
        "params" in c.options && delete c.options.params),
        c.options.body && bl(c.options.method) && (mg(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new n(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
        let f;
        if (!c.options.signal && c.options.timeout) {
            const h = new r;
            f = setTimeout( () => {
                const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
                g.name = "TimeoutError",
                g.code = 23,
                h.abort(g)
            }
            , c.options.timeout),
            c.options.signal = h.signal
        }
        try {
            c.response = await t(c.request, c.options)
        } catch (h) {
            return c.error = h,
            c.options.onRequestError && await so(c, c.options.onRequestError),
            await o(c)
        } finally {
            f && clearTimeout(f)
        }
        if ((c.response.body || c.response._bodyInit) && !Eg.has(c.response.status) && c.options.method !== "HEAD") {
            const h = (c.options.parseResponse ? "json" : c.options.responseType) || _g(c.response.headers.get("content-type") || "");
            switch (h) {
            case "json":
                {
                    const g = await c.response.text()
                      , p = c.options.parseResponse || jo;
                    c.response._data = p(g);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body || c.response._bodyInit;
                    break
                }
            default:
                c.response._data = await c.response[h]()
            }
        }
        return c.options.onResponse && await so(c, c.options.onResponse),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await so(c, c.options.onResponseError),
        await o(c)) : c.response
    }
      , i = async function(l, u) {
        return (await s(l, u))._data
    };
    return i.raw = s,
    i.native = (...a) => t(...a),
    i.create = (a={}, l={}) => Lf({
        ...e,
        ...l,
        defaults: {
            ...e.defaults,
            ...l.defaults,
            ...a
        }
    }),
    i
}
const Bo = (function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
)()
  , kg = Bo.fetch ? (...e) => Bo.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))
  , Tg = Bo.Headers
  , Sg = Bo.AbortController
  , xg = Lf({
    fetch: kg,
    Headers: Tg,
    AbortController: Sg
})
  , Cg = xg
  , Rg = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config
  , pa = () => Rg().app
  , Ag = () => pa().baseURL
  , Pg = () => pa().buildAssetsDir
  , ma = (...e) => Pf(ga(), Pg(), ...e)
  , ga = (...e) => {
    const t = pa()
      , n = t.cdnURL || t.baseURL;
    return e.length ? Pf(n, ...e) : n
}
;
globalThis.__buildAssetsURL = ma,
globalThis.__publicAssetsURL = ga;
globalThis.$fetch || (globalThis.$fetch = Cg.create({
    baseURL: Ag()
}));
"global" in globalThis || (globalThis.global = globalThis);
function mi(e, t={}, n) {
    for (const r in e) {
        const o = e[r]
          , s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? mi(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}
const Og = {
    run: e => e()
}
  , Mg = () => Og
  , If = typeof console.createTask < "u" ? console.createTask : Mg;
function Lg(e, t) {
    const n = t.shift()
      , r = If(n);
    return e.reduce( (o, s) => o.then( () => r.run( () => s(...t))), Promise.resolve())
}
function Ig(e, t) {
    const n = t.shift()
      , r = If(n);
    return Promise.all(e.map(o => r.run( () => o(...t))))
}
function Is(e, t) {
    for (const n of [...e])
        n(t)
}
class Ng {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const o = t;
        let s;
        for (; this._deprecatedHooks[t]; )
            s = this._deprecatedHooks[t],
            t = s.to;
        if (s && !r.allowDeprecated) {
            let i = s.message;
            i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(),
        r = void 0,
        o = void 0,
        n(...s));
        return r = this.hook(t, o),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r)
            this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = mi(t)
          , r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length))
                o()
        }
    }
    removeHooks(t) {
        const n = mi(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Lg, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Ig, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Is(this._before, o);
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally( () => {
            this._after && o && Is(this._after, o)
        }
        ) : (this._after && o && Is(this._after, o),
        s)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Nf() {
    return new Ng
}
function Dg(e={}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i)
            throw new Error("Context conflict")
    }
    ;
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (o) {
            const i = o.getStore();
            if (i !== void 0)
                return i
        }
        return t
    }
    ;
    return {
        use: () => {
            const i = s();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => s(),
        set: (i, a) => {
            a || r(i),
            t = i,
            n = !0
        }
        ,
        unset: () => {
            t = void 0,
            n = !1
        }
        ,
        call: (i, a) => {
            r(i),
            t = i;
            try {
                return o ? o.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(i, a) {
            t = i;
            const l = () => {
                t = i
            }
              , u = () => t === i ? l : void 0;
            gi.add(u);
            try {
                const c = o ? o.run(i, a) : a();
                return n || (t = void 0),
                await c
            } finally {
                gi.delete(u)
            }
        }
    }
}
function Hg(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = Dg({
                ...e,
                ...r
            })),
            t[n]
        }
    }
}
const Uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , wl = "__unctx__"
  , $g = Uo[wl] || (Uo[wl] = Hg())
  , jg = (e, t={}) => $g.get(e, t)
  , El = "__unctx_async_handlers__"
  , gi = Uo[El] || (Uo[El] = new Set);
function Kn(e) {
    const t = [];
    for (const o of gi) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t)
            o()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(o => {
        throw n(),
        o
    }
    )),
    [r, n]
}
const kl = !1
  , Fg = !1
  , Tl = {
    id: "__nuxt-loader"
}
  , Bg = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
        visibility: !0
    }
}
  , Ug = {
    deep: !1
}
  , Vg = {}
  , Wg = "#__nuxt"
  , Df = "nuxt-app"
  , Sl = 36e5
  , zg = "vite:preloadError";
function Hf(e=Df) {
    return jg(e, {
        asyncContext: !1
    })
}
const qg = "__nuxt_plugin";
function Kg(e) {
    let t = 0;
    const n = {
        _id: e.id || Df || "nuxt-app",
        _scope: Lc(),
        provide: void 0,
        versions: {
            get nuxt() {
                return "4.1.0"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Pt({
            ...e.ssrContext?.payload || {},
            data: Pt({}),
            state: ot({}),
            once: new Set,
            _errors: Pt({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return n._scope.active && !Vr() ? n._scope.run( () => xl(n, o)) : xl(n, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: Pt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const o = window.__NUXT__;
        if (o)
            for (const s in o)
                switch (s) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[s], o[s]);
                    break;
                default:
                    n.payload[s] = o[s]
                }
    }
    n.hooks = Nf(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (o, s) => {
        const i = "$" + o;
        io(n, i, s),
        io(n.vueApp.config.globalProperties, i, s)
    }
    ,
    io(n.vueApp, "$nuxt", n),
    io(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener(zg, s => {
            n.callHook("app:chunkError", {
                error: s.payload
            }),
            s.payload.message.includes("Unable to preload CSS") && s.preventDefault()
        }
        ),
        window.useNuxtApp ||= we;
        const o = n.hook("app:error", (...s) => {
            console.error("[nuxt] error caught during app initialization", ...s)
        }
        );
        n.hook("app:mounted", o)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
function Gg(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function Yg(e, t) {
    if (typeof t == "function") {
        const {provide: n} = await e.runWithContext( () => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function Jg(e, t) {
    const n = new Set
      , r = []
      , o = [];
    let s, i = 0;
    async function a(l) {
        const u = l.dependsOn?.filter(c => t.some(f => f._name === c) && !n.has(c)) ?? [];
        if (u.length > 0)
            r.push([new Set(u), l]);
        else {
            const c = Yg(e, l).then(async () => {
                l._name && (n.add(l._name),
                await Promise.all(r.map(async ([f,d]) => {
                    f.has(l._name) && (f.delete(l._name),
                    f.size === 0 && (i++,
                    await a(d)))
                }
                )))
            }
            ).catch(f => {
                if (!l.parallel && !e.payload.error)
                    throw f;
                s ||= f
            }
            );
            l.parallel ? o.push(c) : await c
        }
    }
    for (const l of t)
        Gg(e, l);
    for (const l of t)
        await a(l);
    if (await Promise.all(o),
    i)
        for (let l = 0; l < i; l++)
            await Promise.all(o);
    if (s)
        throw e.payload.error || s
}
function mt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || ( () => {}
    ), e, {
        [qg]: !0,
        _name: t
    })
}
function xl(e, t, n) {
    const r = () => t();
    return Hf(e._id).set(e),
    e.vueApp.runWithContext(r)
}
function Qg(e) {
    let t;
    return In() && (t = Ae()?.appContext.app.$nuxt),
    t ||= Hf(e).tryUse(),
    t || null
}
function we(e) {
    const t = Qg(e);
    if (!t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function ar(e) {
    return we().$config
}
function io(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
function Xg(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => jf(n, e)
    }
}
function $f(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map( ([r,o]) => [r, $f(o)])) : new Map(Object.entries(e[n]));
    return t
}
function Zg(e) {
    return Xg($f(e))
}
function jf(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s,i] of Cl(t.wildcard))
        (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s,i] of Cl(t.dynamic))
        if (e.startsWith(s + "/")) {
            const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
            r.push(...jf(a, i))
        }
    const o = t.static.get(e);
    return o && r.push(o),
    r.filter(Boolean)
}
function Cl(e) {
    return [...e.entries()].sort( (t, n) => t[0].length - n[0].length)
}
function Ns(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function yi(e, t, n=".", r) {
    if (!Ns(t))
        return yi(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor")
            continue;
        const i = e[s];
        i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Ns(i) && Ns(o[s]) ? o[s] = yi(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i))
    }
    return o
}
function Ff(e) {
    return (...t) => t.reduce( (n, r) => yi(n, r, "", e), {})
}
const Bf = Ff()
  , ey = Ff( (e, t, n) => {
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function ty(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class Rl extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, n={}) {
        super(t, n),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: _i(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Uf(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
function ny(e) {
    if (typeof e == "string")
        return new Rl(e);
    if (ry(e))
        return e;
    const t = new Rl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (ty(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = _i(e.statusCode, t.statusCode) : e.status && (t.statusCode = _i(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Uf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function ry(e) {
    return e?.constructor?.__h3_error__ === !0
}
const oy = /[^\u0009\u0020-\u007E]/g;
function Uf(e="") {
    return e.replace(oy, "")
}
function _i(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const sy = Symbol("layout-meta")
  , ds = Symbol("route")
  , Ye = () => we()?.$router
  , ya = () => In() ? Me(ds, we()._route) : we()._route;
const iy = () => {
    try {
        if (we()._processingMiddleware)
            return !0
    } catch {
        return !1
    }
    return !1
}
  , ay = (e, t) => {
    e ||= "/";
    const n = typeof e == "string" ? e : "path" in e ? vi(e) : Ye().resolve(e).href;
    if (t?.open) {
        const {target: l="_blank", windowFeatures: u={}} = t.open
          , c = Object.entries(u).filter( ([f,d]) => d !== void 0).map( ([f,d]) => `${f.toLowerCase()}=${d}`).join(", ");
        return open(n, l, c),
        Promise.resolve()
    }
    const r = Qt(n, {
        acceptRelative: !0
    })
      , o = t?.external || r;
    if (o) {
        if (!t?.external)
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const {protocol: l} = new URL(n,window.location.href);
        if (l && ig(l))
            throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const s = iy();
    if (!o && s) {
        if (t?.replace) {
            if (typeof e == "string") {
                const {pathname: l, search: u, hash: c} = Mf(e);
                return {
                    path: l,
                    ...u && {
                        query: ha(u)
                    },
                    ...c && {
                        hash: c
                    },
                    replace: !0
                }
            }
            return {
                ...e,
                replace: !0
            }
        }
        return e
    }
    const i = Ye()
      , a = we();
    return o ? (a._scope.stop(),
    t?.replace ? location.replace(n) : location.href = n,
    s ? a.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : t?.replace ? i.replace(e) : i.push(e)
}
;
function vi(e) {
    return Rf(e.path || "", e.query || {}) + (e.hash || "")
}
const Vf = "__nuxt_error"
  , hs = () => Wr(we().payload, "error")
  , vn = e => {
    const t = fn(e);
    try {
        const n = we()
          , r = hs();
        n.hooks.callHook("app:error", t),
        r.value ||= t
    } catch {
        throw t
    }
    return t
}
  , ly = async (e={}) => {
    const t = we()
      , n = hs();
    t.callHook("app:error:cleared", e),
    e.redirect && await Ye().replace(e.redirect),
    n.value = void 0
}
  , Wf = e => !!e && typeof e == "object" && Vf in e
  , fn = e => {
    const t = ny(e);
    return Object.defineProperty(t, Vf, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
;
function cy(e) {
    const t = fy(e)
      , n = new ArrayBuffer(t.length)
      , r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++)
        r.setUint8(o, t.charCodeAt(o));
    return n
}
const uy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function fy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = ""
      , n = 0
      , r = 0;
    for (let o = 0; o < e.length; o++)
        n <<= 6,
        n |= uy.indexOf(e[o]),
        r += 6,
        r === 24 && (t += String.fromCharCode((n & 16711680) >> 16),
        t += String.fromCharCode((n & 65280) >> 8),
        t += String.fromCharCode(n & 255),
        n = r = 0);
    return r === 12 ? (n >>= 4,
    t += String.fromCharCode(n)) : r === 18 && (n >>= 2,
    t += String.fromCharCode((n & 65280) >> 8),
    t += String.fromCharCode(n & 255)),
    t
}
const dy = -1
  , hy = -2
  , py = -3
  , my = -4
  , gy = -5
  , yy = -6;
function _y(e, t) {
    return vy(JSON.parse(e), t)
}
function vy(e, t) {
    if (typeof e == "number")
        return o(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function o(s, i=!1) {
        if (s === dy)
            return;
        if (s === py)
            return NaN;
        if (s === my)
            return 1 / 0;
        if (s === gy)
            return -1 / 0;
        if (s === yy)
            return -0;
        if (i || typeof s != "number")
            throw new Error("Invalid input");
        if (s in r)
            return r[s];
        const a = n[s];
        if (!a || typeof a != "object")
            r[s] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , u = t?.[l];
                if (u)
                    return r[s] = u(o(a[1]));
                switch (l) {
                case "Date":
                    r[s] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[s] = c;
                    for (let h = 1; h < a.length; h += 1)
                        c.add(o(a[h]));
                    break;
                case "Map":
                    const f = new Map;
                    r[s] = f;
                    for (let h = 1; h < a.length; h += 2)
                        f.set(o(a[h]), o(a[h + 1]));
                    break;
                case "RegExp":
                    r[s] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[s] = Object(a[1]);
                    break;
                case "BigInt":
                    r[s] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[s] = d;
                    for (let h = 1; h < a.length; h += 2)
                        d[a[h]] = o(a[h + 1]);
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "BigInt64Array":
                case "BigUint64Array":
                    {
                        const h = globalThis[l]
                          , g = new h(o(a[1]));
                        r[s] = a[2] !== void 0 ? g.subarray(a[2], a[3]) : g;
                        break
                    }
                case "ArrayBuffer":
                    {
                        const h = a[1]
                          , g = cy(h);
                        r[s] = g;
                        break
                    }
                case "Temporal.Duration":
                case "Temporal.Instant":
                case "Temporal.PlainDate":
                case "Temporal.PlainTime":
                case "Temporal.PlainDateTime":
                case "Temporal.PlainMonthDay":
                case "Temporal.PlainYearMonth":
                case "Temporal.ZonedDateTime":
                    {
                        const h = l.slice(9);
                        r[s] = Temporal[h].from(a[1]);
                        break
                    }
                case "URL":
                    {
                        const h = new URL(a[1]);
                        r[s] = h;
                        break
                    }
                case "URLSearchParams":
                    {
                        const h = new URLSearchParams(a[1]);
                        r[s] = h;
                        break
                    }
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[s] = l;
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== hy && (l[u] = o(c))
                }
            }
        else {
            const l = {};
            r[s] = l;
            for (const u in a) {
                if (u === "__proto__")
                    throw new Error("Cannot parse an object with a `__proto__` property");
                const c = a[u];
                l[u] = o(c)
            }
        }
        return r[s]
    }
    return o(0)
}
const by = new Set(["link", "style", "script", "noscript"])
  , wy = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , Al = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , Ey = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , ky = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , Ty = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"])
  , Sy = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , xy = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"])
  , Cy = ["name", "property", "http-equiv"]
  , Ry = new Set(["viewport", "description", "keywords", "robots"]);
function zf(e) {
    const t = e.split(":");
    return t.length ? xy.has(t[1]) : !1
}
function bi(e) {
    const {props: t, tag: n} = e;
    if (ky.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    if (e.tag === "meta") {
        for (const r of Cy)
            if (t[r] !== void 0) {
                const o = t[r]
                  , s = o.includes(":")
                  , i = Ry.has(o)
                  , l = !(s || i) && e.key ? `:key:${e.key}` : "";
                return `${n}:${o}${l}`
            }
    }
    if (e.key)
        return `${n}:key:${e.key}`;
    if (t.id)
        return `${n}:id:${t.id}`;
    if (wy.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r)
            return `${n}:content:${r}`
    }
}
function Pl(e) {
    const t = e._h || e._d;
    if (t)
        return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map( ([r,o]) => `${r}:${String(o)}`).join(",")}`
}
function Vo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)),
    Array.isArray(o))
        return o.map(s => Vo(s, t));
    if (o?.constructor === Object) {
        const s = {};
        for (const i of Object.keys(o))
            s[i] = Vo(o[i], t, i);
        return s
    }
    return o
}
function Ay(e, t) {
    const n = e === "style" ? new Map : new Set;
    function r(o) {
        const s = o.trim();
        if (s)
            if (e === "style") {
                const [i,...a] = s.split(":").map(l => l.trim());
                i && a.length && n.set(i, a.join(":"))
            } else
                s.split(" ").filter(Boolean).forEach(i => n.add(i))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(o => r(o)) : t && typeof t == "object" && Object.entries(t).forEach( ([o,s]) => {
        s && s !== "false" && (e === "style" ? n.set(o.trim(), s) : r(o))
    }
    ),
    n
}
function qf(e, t) {
    return e.props = e.props || {},
    t ? e.tag === "templateParams" ? (e.props = t,
    e) : (Object.entries(t).forEach( ([n,r]) => {
        if (r === null) {
            e.props[n] = null;
            return
        }
        if (n === "class" || n === "style") {
            e.props[n] = Ay(n, r);
            return
        }
        if (Ty.has(n)) {
            if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
                let i = t.type;
                if (t.type || (i = "application/json"),
                !i?.endsWith("json") && i !== "speculationrules")
                    return;
                t.type = i,
                e.props.type = i,
                e[n] = JSON.stringify(r)
            } else
                e[n] = r;
            return
        }
        const o = String(r)
          , s = n.startsWith("data-");
        o === "true" || o === "" ? e.props[n] = s ? o : !0 : !r && s && o === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r)
    }
    ),
    e) : e
}
function Py(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }
      , r = qf({
        tag: e,
        props: {}
    }, n);
    return r.key && by.has(r.tag) && (r.props["data-hid"] = r._h = r.key),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(o => ({
        ...r,
        props: {
            ...r.props,
            content: o
        }
    })) : r
}
function Oy(e, t) {
    if (!e)
        return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
        for (let i = 0; i < t.length; i++)
            s = t[i](o, s);
        return s
    }
    ;
    e = n(void 0, e);
    const r = [];
    return e = Vo(e, n),
    Object.entries(e || {}).forEach( ([o,s]) => {
        if (s !== void 0)
            for (const i of Array.isArray(s) ? s : [s])
                r.push(Py(o, i))
    }
    ),
    r.flat()
}
const Ol = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w
  , Ml = {
    base: -10,
    title: 10
}
  , My = {
    critical: -8,
    high: -1,
    low: 2
}
  , Ll = {
    meta: {
        "content-security-policy": -30,
        charset: -20,
        viewport: -15
    },
    link: {
        preconnect: 20,
        stylesheet: 60,
        preload: 70,
        modulepreload: 70,
        prefetch: 90,
        "dns-prefetch": 90,
        prerender: 90
    },
    script: {
        async: 30,
        defer: 80,
        sync: 50
    },
    style: {
        imported: 40,
        sync: 60
    }
}
  , Ly = /@import/
  , hr = e => e === "" || e === !0;
function Iy(e, t) {
    if (typeof t.tagPriority == "number")
        return t.tagPriority;
    let n = 100;
    const r = My[t.tagPriority] || 0
      , o = e.resolvedOptions.disableCapoSorting ? {
        link: {},
        script: {},
        style: {}
    } : Ll;
    if (t.tag in Ml)
        n = Ml[t.tag];
    else if (t.tag === "meta") {
        const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        s && (n = Ll.meta[s])
    } else
        t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? hr(t.props.async) ? n = o.script.async : t.props.src && !hr(t.props.defer) && !hr(t.props.async) && t.props.type !== "module" && !t.props.type?.endsWith("json") ? n = o.script.sync : hr(t.props.defer) && t.props.src && !hr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Ly.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r
}
function Il(e, t) {
    const n = typeof t == "function" ? t(e) : t
      , r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n),
    e.hooks.addHooks(n.hooks || {}))
}
function Ny(e={}) {
    const t = Nf();
    t.addHooks(e.hooks || {});
    const n = !e.document
      , r = new Map
      , o = new Map
      , s = new Set
      , i = {
        _entryCount: 1,
        plugins: o,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        ssr: n,
        entries: r,
        headEntries() {
            return [...r.values()]
        },
        use: a => Il(i, a),
        push(a, l) {
            const u = {
                ...l || {}
            };
            delete u.head;
            const c = u._index ?? i._entryCount++
              , f = {
                _i: c,
                input: a,
                options: u
            }
              , d = {
                _poll(h=!1) {
                    i.dirty = !0,
                    !h && s.add(c),
                    t.callHook("entries:updated", i)
                },
                dispose() {
                    r.delete(c) && i.invalidate()
                },
                patch(h) {
                    (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (f.input = h,
                    r.set(c, f),
                    d._poll())
                }
            };
            return d.patch(a),
            d
        },
        async resolveTags() {
            const a = {
                tagMap: new Map,
                tags: [],
                entries: [...i.entries.values()]
            };
            for (await t.callHook("entries:resolve", a); s.size; ) {
                const d = s.values().next().value;
                s.delete(d);
                const h = r.get(d);
                if (h) {
                    const g = {
                        tags: Oy(h.input, e.propResolvers || []).map(p => Object.assign(p, h.options)),
                        entry: h
                    };
                    await t.callHook("entries:normalize", g),
                    h._tags = g.tags.map( (p, v) => (p._w = Iy(i, p),
                    p._p = (h._i << 10) + v,
                    p._d = bi(p),
                    p))
                }
            }
            let l = !1;
            a.entries.flatMap(d => (d._tags || []).map(h => ({
                ...h,
                props: {
                    ...h.props
                }
            }))).sort(Ol).reduce( (d, h) => {
                const g = String(h._d || h._p);
                if (!d.has(g))
                    return d.set(g, h);
                const p = d.get(g);
                if ((h?.tagDuplicateStrategy || (Sy.has(h.tag) ? "merge" : null) || (h.key && h.key === p.key ? "merge" : null)) === "merge") {
                    const k = {
                        ...p.props
                    };
                    Object.entries(h.props).forEach( ([w,m]) => k[w] = w === "style" ? new Map([...p.props.style || new Map, ...m]) : w === "class" ? new Set([...p.props.class || new Set, ...m]) : m),
                    d.set(g, {
                        ...h,
                        props: k
                    })
                } else
                    h._p >> 10 === p._p >> 10 && h.tag === "meta" && zf(g) ? (d.set(g, Object.assign([...Array.isArray(p) ? p : [p], h], h)),
                    l = !0) : (h._w === p._w ? h._p > p._p : h?._w < p?._w) && d.set(g, h);
                return d
            }
            , a.tagMap);
            const u = a.tagMap.get("title")
              , c = a.tagMap.get("titleTemplate");
            if (i._title = u?.textContent,
            c) {
                const d = c?.textContent;
                if (i._titleTemplate = d,
                d) {
                    let h = typeof d == "function" ? d(u?.textContent) : d;
                    typeof h == "string" && !i.plugins.has("template-params") && (h = h.replace("%s", u?.textContent || "")),
                    u ? h === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
                        ...u,
                        textContent: h
                    }) : (c.tag = "title",
                    c.textContent = h)
                }
            }
            a.tags = Array.from(a.tagMap.values()),
            l && (a.tags = a.tags.flat().sort(Ol)),
            await t.callHook("tags:beforeResolve", a),
            await t.callHook("tags:resolve", a),
            await t.callHook("tags:afterResolve", a);
            const f = [];
            for (const d of a.tags) {
                const {innerHTML: h, tag: g, props: p} = d;
                if (Ey.has(g) && !(Object.keys(p).length === 0 && !d.innerHTML && !d.textContent) && !(g === "meta" && !p.content && !p["http-equiv"] && !p.charset)) {
                    if (g === "script" && h) {
                        if (p.type?.endsWith("json")) {
                            const v = typeof h == "string" ? h : JSON.stringify(h);
                            d.innerHTML = v.replace(/</g, "\\u003C")
                        } else
                            typeof h == "string" && (d.innerHTML = h.replace(new RegExp(`</${g}`,"g"), `<\\/${g}`));
                        d._d = bi(d)
                    }
                    f.push(d)
                }
            }
            return f
        },
        invalidate() {
            for (const a of r.values())
                s.add(a._i);
            i.dirty = !0,
            t.callHook("entries:updated", i)
        }
    };
    return (e?.plugins || []).forEach(a => Il(i, a)),
    i.hooks.callHook("init", i),
    e.init?.forEach(a => a && i.push(a)),
    i
}
const Dy = (e, t) => Re(t) ? ae(t) : t
  , _a = "usehead";
function Hy(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(_a, e)
        }
    }.install
}
function $y() {
    if (In()) {
        const e = Me(_a);
        if (!e)
            throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
        return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}
function jy(e, t={}) {
    const n = t.head || $y();
    return n.ssr ? n.push(e || {}, t) : Fy(n, e, t)
}
function Fy(e, t, n={}) {
    const r = he(!1);
    let o;
    return ia( () => {
        const i = r.value ? {} : Vo(t, Dy);
        o ? o.patch(i) : o = e.push(i, n)
    }
    ),
    Ae() && (Ln( () => {
        o.dispose()
    }
    ),
    Yi( () => {
        r.value = !0
    }
    ),
    Gi( () => {
        r.value = !1
    }
    )),
    o
}
function By(e) {
    const t = e || we();
    return t.ssrContext?.head || t.runWithContext( () => {
        if (In()) {
            const n = Me(_a);
            if (!n)
                throw new Error("[nuxt] [unhead] Missing Unhead instance.");
            return n
        }
    }
    )
}
function va(e, t={}) {
    const n = By(t.nuxt);
    return jy(e, {
        head: n,
        ...t
    })
}
const Uy = "modulepreload"
  , Vy = function(e, t) {
    return new URL(e,t).href
}
  , Nl = {}
  , ne = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        let u = function(c) {
            return Promise.all(c.map(f => Promise.resolve(f).then(d => ({
                status: "fulfilled",
                value: d
            }), d => ({
                status: "rejected",
                reason: d
            }))))
        };
        const i = document.getElementsByTagName("link")
          , a = document.querySelector("meta[property=csp-nonce]")
          , l = a?.nonce || a?.getAttribute("nonce");
        o = u(n.map(c => {
            if (c = Vy(c, r),
            c in Nl)
                return;
            Nl[c] = !0;
            const f = c.endsWith(".css")
              , d = f ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let p = i.length - 1; p >= 0; p--) {
                    const v = i[p];
                    if (v.href === c && (!f || v.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${c}"]${d}`))
                return;
            const g = document.createElement("link");
            if (g.rel = f ? "stylesheet" : Uy,
            f || (g.as = "script"),
            g.crossOrigin = "",
            g.href = c,
            l && g.setAttribute("nonce", l),
            document.head.appendChild(g),
            f)
                return new Promise( (p, v) => {
                    g.addEventListener("load", p),
                    g.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function s(i) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = i,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw i
    }
    return o.then(i => {
        for (const a of i || [])
            a.status === "rejected" && s(a.reason);
        return t().catch(s)
    }
    )
};
let _o, vo;
function Wy() {
    return _o = $fetch(ma(`builds/meta/${ar().app.buildId}.json`), {
        responseType: "json"
    }),
    _o.then(e => {
        vo = Zg(e.matcher)
    }
    ).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }
    ),
    _o
}
function ps() {
    return _o || Wy()
}
async function ba(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ps(),
    !vo)
        return console.error("[nuxt] Error creating app manifest matcher.", vo),
        {};
    try {
        return Bf({}, ...vo.matchAll(t).reverse())
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n),
        {}
    }
}
async function Dl(e, t={}) {
    if (!await Gf(e))
        return null;
    const r = await qy(e, t);
    return await Kf(r) || null
}
const zy = "_payload.json";
async function qy(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Qt(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = ar()
      , o = t.hash || (t.fresh ? Date.now() : r.app.buildId)
      , s = r.app.cdnURL
      , i = s && await Gf(e) ? s : r.app.baseURL;
    return fs(i, n.pathname, zy + (o ? `?${o}` : ""))
}
async function Kf(e) {
    const t = fetch(e, {
        cache: "force-cache"
    }).then(n => n.text().then(Yf));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Gf(e=ya().path) {
    const t = we();
    return e = Xn(e),
    (await ps()).prerendered.includes(e) ? !0 : t.runWithContext(async () => {
        const r = await ba({
            path: e
        });
        return !!r.prerender && !r.redirect
    }
    )
}
let yn = null;
async function Ky() {
    if (yn)
        return yn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Yf(e.textContent || "")
      , n = e.dataset.src ? await Kf(e.dataset.src) : void 0;
    return yn = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    yn.config?.public && (yn.config.public = ot(yn.config.public)),
    yn
}
async function Yf(e) {
    return await _y(e, we()._payloadRevivers)
}
function Gy(e, t) {
    we()._payloadRevivers[e] = t
}
const Yy = [["NuxtError", e => fn(e)], ["EmptyShallowRef", e => xe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : jo(e))], ["EmptyRef", e => he(e === "_" ? void 0 : e === "0n" ? BigInt(0) : jo(e))], ["ShallowRef", e => xe(e)], ["ShallowReactive", e => Pt(e)], ["Ref", e => he(e)], ["Reactive", e => ot(e)]]
  , Jy = mt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const [r,o] of Yy)
            Gy(r, o);
        Object.assign(e.payload, ([t,n] = Kn( () => e.runWithContext(Ky)),
        t = await t,
        n(),
        t)),
        delete window.__NUXT__
    }
});
async function wa(e, t={}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !!r.shouldRender)
        return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async o => {
            const s = new Map
              , i = new Promise(h => {
                e.resolveTags().then(g => {
                    h(g.map(p => {
                        const v = s.get(p._d) || 0
                          , k = {
                            tag: p,
                            id: (v ? `${p._d}:${v}` : p._d) || Pl(p),
                            shouldRender: !0
                        };
                        return p._d && zf(p._d) && s.set(p._d, v + 1),
                        k
                    }
                    ))
                }
                )
            }
            );
            let a = e._dom;
            if (!a) {
                a = {
                    title: n.title,
                    elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
                };
                for (const h of ["body", "head"]) {
                    const g = n[h]?.children;
                    for (const p of g) {
                        const v = p.tagName.toLowerCase();
                        if (!Al.has(v))
                            continue;
                        const k = qf({
                            tag: v,
                            props: {}
                        }, {
                            innerHTML: p.innerHTML,
                            ...p.getAttributeNames().reduce( (w, m) => (w[m] = p.getAttribute(m),
                            w), {}) || {}
                        });
                        if (k.key = p.getAttribute("data-hid") || void 0,
                        k._d = bi(k) || Pl(k),
                        a.elMap.has(k._d)) {
                            let w = 1
                              , m = k._d;
                            for (; a.elMap.has(m); )
                                m = `${k._d}:${w++}`;
                            a.elMap.set(m, p)
                        } else
                            a.elMap.set(k._d, p)
                    }
                }
            }
            a.pendingSideEffects = {
                ...a.sideEffects
            },
            a.sideEffects = {};
            function l(h, g, p) {
                const v = `${h}:${g}`;
                a.sideEffects[v] = p,
                delete a.pendingSideEffects[v]
            }
            function u({id: h, $el: g, tag: p}) {
                const v = p.tag.endsWith("Attrs");
                a.elMap.set(h, g),
                v || (p.textContent && p.textContent !== g.textContent && (g.textContent = p.textContent),
                p.innerHTML && p.innerHTML !== g.innerHTML && (g.innerHTML = p.innerHTML),
                l(h, "el", () => {
                    g?.remove(),
                    a.elMap.delete(h)
                }
                ));
                for (const k in p.props) {
                    if (!Object.prototype.hasOwnProperty.call(p.props, k))
                        continue;
                    const w = p.props[k];
                    if (k.startsWith("on") && typeof w == "function") {
                        const _ = g?.dataset;
                        if (_ && _[`${k}fired`]) {
                            const E = k.slice(0, -5);
                            w.call(g, new Event(E.substring(2)))
                        }
                        g.getAttribute(`data-${k}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : g).addEventListener(k.substring(2), w.bind(g)),
                        g.setAttribute(`data-${k}`, ""));
                        continue
                    }
                    const m = `attr:${k}`;
                    if (k === "class") {
                        if (!w)
                            continue;
                        for (const _ of w)
                            v && l(h, `${m}:${_}`, () => g.classList.remove(_)),
                            !g.classList.contains(_) && g.classList.add(_)
                    } else if (k === "style") {
                        if (!w)
                            continue;
                        for (const [_,E] of w)
                            l(h, `${m}:${_}`, () => {
                                g.style.removeProperty(_)
                            }
                            ),
                            g.style.setProperty(_, E)
                    } else
                        w !== !1 && w !== null && (g.getAttribute(k) !== w && g.setAttribute(k, w === !0 ? "" : String(w)),
                        v && l(h, m, () => g.removeAttribute(k)))
                }
            }
            const c = []
              , f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            }
              , d = await i;
            for (const h of d) {
                const {tag: g, shouldRender: p, id: v} = h;
                if (p) {
                    if (g.tag === "title") {
                        n.title = g.textContent,
                        l("title", "", () => n.title = a.title);
                        continue
                    }
                    h.$el = h.$el || a.elMap.get(v),
                    h.$el ? u(h) : Al.has(g.tag) && c.push(h)
                }
            }
            for (const h of c) {
                const g = h.tag.tagPosition || "head";
                h.$el = n.createElement(h.tag.tag),
                u(h),
                f[g] = f[g] || n.createDocumentFragment(),
                f[g].appendChild(h.$el)
            }
            for (const h of d)
                await e.hooks.callHook("dom:renderTag", h, n, l);
            f.head && n.head.appendChild(f.head),
            f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild),
            f.bodyClose && n.body.appendChild(f.bodyClose);
            for (const h in a.pendingSideEffects)
                a.pendingSideEffects[h]();
            e._dom = a,
            await e.hooks.callHook("dom:rendered", {
                renders: d
            }),
            o()
        }
        ).finally( () => {
            e._domUpdatePromise = void 0,
            e.dirty = !1
        }
        )),
        e._domUpdatePromise
}
function Qy(e={}) {
    const t = e.domOptions?.render || wa;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
    return Ny({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}
function Xy(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t( () => {
            n === r && e()
        }
        )
    }
}
function Zy(e={}) {
    const t = Qy({
        domOptions: {
            render: Xy( () => wa(t), n => setTimeout(n, 0))
        },
        ...e
    });
    return t.install = Hy(t),
    t
}
const e_ = {
    disableDefaults: !0
}
  , t_ = mt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = Zy(e_);
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await wa(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", o => {
                o.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            e.hooks.hook("page:finish", () => {
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const jn = typeof document < "u";
function Jf(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}
function n_(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Jf(e.default)
}
const de = Object.assign;
function Ds(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = kt(o) ? o.map(e) : e(o)
    }
    return n
}
const Sr = () => {}
  , kt = Array.isArray
  , Qf = /#/g
  , r_ = /&/g
  , o_ = /\//g
  , s_ = /=/g
  , i_ = /\?/g
  , Xf = /\+/g
  , a_ = /%5B/g
  , l_ = /%5D/g
  , Zf = /%5E/g
  , c_ = /%60/g
  , ed = /%7B/g
  , u_ = /%7C/g
  , td = /%7D/g
  , f_ = /%20/g;
function Ea(e) {
    return encodeURI("" + e).replace(u_, "|").replace(a_, "[").replace(l_, "]")
}
function d_(e) {
    return Ea(e).replace(ed, "{").replace(td, "}").replace(Zf, "^")
}
function wi(e) {
    return Ea(e).replace(Xf, "%2B").replace(f_, "+").replace(Qf, "%23").replace(r_, "%26").replace(c_, "`").replace(ed, "{").replace(td, "}").replace(Zf, "^")
}
function h_(e) {
    return wi(e).replace(s_, "%3D")
}
function p_(e) {
    return Ea(e).replace(Qf, "%23").replace(i_, "%3F")
}
function m_(e) {
    return e == null ? "" : p_(e).replace(o_, "%2F")
}
function $r(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const g_ = /\/$/
  , y_ = e => e.replace(g_, "");
function Hs(e, t, n="/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    s = t.slice(l + 1, a > -1 ? a : t.length),
    o = e(s)),
    a > -1 && (r = r || t.slice(0, a),
    i = t.slice(a, t.length)),
    r = w_(r ?? t, n),
    {
        fullPath: r + (s && "?") + s + i,
        path: r,
        query: o,
        hash: $r(i)
    }
}
function __(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Hl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function v_(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && Zn(t.matched[r], n.matched[o]) && nd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Zn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function nd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!b_(e[n], t[n]))
            return !1;
    return !0
}
function b_(e, t) {
    return kt(e) ? $l(e, t) : kt(t) ? $l(t, e) : e === t
}
function $l(e, t) {
    return kt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function w_(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                s > 1 && s--;
            else
                break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/")
}
const ut = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var jr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(jr || (jr = {}));
var xr;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(xr || (xr = {}));
function E_(e) {
    if (!e)
        if (jn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    y_(e)
}
const k_ = /^[^#]+#/;
function T_(e, t) {
    return e.replace(k_, "#") + t
}
function S_(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ms = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function x_(e) {
    let t;
    if ("el" in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = S_(o, e)
    } else
        t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function jl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ei = new Map;
function C_(e, t) {
    Ei.set(e, t)
}
function R_(e) {
    const t = Ei.get(e);
    return Ei.delete(e),
    t
}
let A_ = () => location.protocol + "//" + location.host;
function rd(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        let a = o.includes(e.slice(s)) ? e.slice(s).length : 1
          , l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Hl(l, "")
    }
    return Hl(n, e) + r + o
}
function P_(e, t, n, r) {
    let o = []
      , s = []
      , i = null;
    const a = ({state: d}) => {
        const h = rd(e, location)
          , g = n.value
          , p = t.value;
        let v = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            i && i === g) {
                i = null;
                return
            }
            v = p ? d.position - p.position : 0
        } else
            r(h);
        o.forEach(k => {
            k(n.value, g, {
                delta: v,
                type: jr.pop,
                direction: v ? v > 0 ? xr.forward : xr.back : xr.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function u(d) {
        o.push(d);
        const h = () => {
            const g = o.indexOf(d);
            g > -1 && o.splice(g, 1)
        }
        ;
        return s.push(h),
        h
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(de({}, d.state, {
            scroll: ms()
        }), "")
    }
    function f() {
        for (const d of s)
            d();
        s = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function Fl(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? ms() : null
    }
}
function O_(e) {
    const {history: t, location: n} = window
      , r = {
        value: rd(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function s(l, u, c) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : A_() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            o.value = u
        } catch (h) {
            console.error(h),
            n[c ? "replace" : "assign"](d)
        }
    }
    function i(l, u) {
        const c = de({}, t.state, Fl(o.value.back, l, o.value.forward, !0), u, {
            position: o.value.position
        });
        s(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = de({}, o.value, t.state, {
            forward: l,
            scroll: ms()
        });
        s(c.current, c, !0);
        const f = de({}, Fl(r.value, l, null), {
            position: c.position + 1
        }, u);
        s(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: i
    }
}
function M_(e) {
    e = E_(e);
    const t = O_(e)
      , n = P_(e, t.state, t.location, t.replace);
    function r(s, i=!0) {
        i || n.pauseListeners(),
        history.go(s)
    }
    const o = de({
        location: "",
        base: e,
        go: r,
        createHref: T_.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function L_(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function od(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const sd = Symbol("");
var Bl;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Bl || (Bl = {}));
function er(e, t) {
    return de(new Error, {
        type: e,
        [sd]: !0
    }, t)
}
function It(e, t) {
    return e instanceof Error && sd in e && (t == null || !!(e.type & t))
}
const Ul = "[^/]+?"
  , I_ = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , N_ = /[.+*?^${}()[\]/\\]/g;
function D_(e, t) {
    const n = de({}, I_, t)
      , r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (o += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (o += "/"),
                o += d.value.replace(N_, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: g, repeatable: p, optional: v, regexp: k} = d;
                s.push({
                    name: g,
                    repeatable: p,
                    optional: v
                });
                const w = k || Ul;
                if (w !== Ul) {
                    h += 10;
                    try {
                        new RegExp(`(${w})`)
                    } catch (_) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${w}): ` + _.message)
                    }
                }
                let m = p ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
                f || (m = v && u.length < 2 ? `(?:/${m})` : "/" + m),
                v && (m += "?"),
                o += m,
                h += 20,
                v && (h += -8),
                p && (h += -20),
                w === ".*" && (h += -50)
            }
            c.push(h)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(i)
          , f = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || ""
              , g = s[d - 1];
            f[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const d of e) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    c += h.value;
                else if (h.type === 1) {
                    const {value: g, repeatable: p, optional: v} = h
                      , k = g in u ? u[g] : "";
                    if (kt(k) && !p)
                        throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                    const w = kt(k) ? k.join("/") : k;
                    if (!w)
                        if (v)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${g}"`);
                    c += w
                }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: s,
        parse: a,
        stringify: l
    }
}
function H_(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function id(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const s = H_(r[n], o[n]);
        if (s)
            return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Vl(r))
            return 1;
        if (Vl(o))
            return -1
    }
    return o.length - r.length
}
function Vl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const $_ = {
    type: 0,
    value: ""
}
  , j_ = /[a-zA-Z0-9_]/;
function F_(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[$_]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${u}": ${h}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let s;
    function i() {
        s && o.push(s),
        s = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (n === 0 ? s.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && f(),
            i()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : j_.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    o
}
function B_(e, t, n) {
    const r = D_(F_(e.path), n)
      , o = de(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function U_(e, t) {
    const n = []
      , r = new Map;
    t = Kl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(f) {
        return r.get(f)
    }
    function s(f, d, h) {
        const g = !h
          , p = zl(f);
        p.aliasOf = h && h.record;
        const v = Kl(t, f)
          , k = [p];
        if ("alias" in f) {
            const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const E of _)
                k.push(zl(de({}, p, {
                    components: h ? h.record.components : p.components,
                    path: E,
                    aliasOf: h ? h.record : p
                })))
        }
        let w, m;
        for (const _ of k) {
            const {path: E} = _;
            if (d && E[0] !== "/") {
                const T = d.record.path
                  , x = T[T.length - 1] === "/" ? "" : "/";
                _.path = d.record.path + (E && x + E)
            }
            if (w = B_(_, d, v),
            h ? h.alias.push(w) : (m = m || w,
            m !== w && m.alias.push(w),
            g && f.name && !ql(w) && i(f.name)),
            ad(w) && l(w),
            p.children) {
                const T = p.children;
                for (let x = 0; x < T.length; x++)
                    s(T[x], w, h && h.children[x])
            }
            h = h || w
        }
        return m ? () => {
            i(m)
        }
        : Sr
    }
    function i(f) {
        if (od(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(i),
            d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(i),
            f.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function l(f) {
        const d = z_(f, n);
        n.splice(d, 0, f),
        f.record.name && !ql(f) && r.set(f.record.name, f)
    }
    function u(f, d) {
        let h, g = {}, p, v;
        if ("name" in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw er(1, {
                    location: f
                });
            v = h.record.name,
            g = de(Wl(d.params, h.keys.filter(m => !m.optional).concat(h.parent ? h.parent.keys.filter(m => m.optional) : []).map(m => m.name)), f.params && Wl(f.params, h.keys.map(m => m.name))),
            p = h.stringify(g)
        } else if (f.path != null)
            p = f.path,
            h = n.find(m => m.re.test(p)),
            h && (g = h.parse(p),
            v = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(m => m.re.test(d.path)),
            !h)
                throw er(1, {
                    location: f,
                    currentLocation: d
                });
            v = h.record.name,
            g = de({}, d.params, f.params),
            p = h.stringify(g)
        }
        const k = [];
        let w = h;
        for (; w; )
            k.unshift(w.record),
            w = w.parent;
        return {
            name: v,
            path: p,
            params: g,
            matched: k,
            meta: W_(k)
        }
    }
    e.forEach(f => s(f));
    function c() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: s,
        resolve: u,
        removeRoute: i,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function Wl(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function zl(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: V_(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function V_(e) {
    const t = {}
      , n = e.props || !1;
    if ("component" in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function ql(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function W_(e) {
    return e.reduce( (t, n) => de(t, n.meta), {})
}
function Kl(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function z_(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const s = n + r >> 1;
        id(e, t[s]) < 0 ? r = s : n = s + 1
    }
    const o = q_(e);
    return o && (r = t.lastIndexOf(o, r - 1)),
    r
}
function q_(e) {
    let t = e;
    for (; t = t.parent; )
        if (ad(t) && id(e, t) === 0)
            return t
}
function ad({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function K_(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(Xf, " ")
          , i = s.indexOf("=")
          , a = $r(i < 0 ? s : s.slice(0, i))
          , l = i < 0 ? null : $r(s.slice(i + 1));
        if (a in t) {
            let u = t[a];
            kt(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function Gl(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = h_(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (kt(r) ? r.map(s => s && wi(s)) : [r && wi(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n,
            s != null && (t += "=" + s))
        }
        )
    }
    return t
}
function G_(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = kt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const Y_ = Symbol("")
  , Yl = Symbol("")
  , gs = Symbol("")
  , ka = Symbol("")
  , ki = Symbol("");
function pr() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function an(e, t, n, r, o, s=i => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (a, l) => {
        const u = d => {
            d === !1 ? l(er(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : L_(d) ? l(er(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d),
            a())
        }
          , c = s( () => e.call(r && r.instances[o], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)),
        f.catch(d => l(d))
    }
    )
}
function $s(e, t, n, r, o=s => s()) {
    const s = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (Jf(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && s.push(an(c, n, r, i, a, o))
                } else {
                    let u = l();
                    s.push( () => u.then(c => {
                        if (!c)
                            throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                        const f = n_(c) ? c.default : c;
                        i.mods[a] = c,
                        i.components[a] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && an(h, n, r, i, a, o)()
                    }
                    ))
                }
        }
    return s
}
function Jl(e) {
    const t = Me(gs)
      , n = Me(ka)
      , r = le( () => {
        const l = ie(e.to);
        return t.resolve(l)
    }
    )
      , o = le( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(Zn.bind(null, c));
        if (d > -1)
            return d;
        const h = Ql(l[u - 2]);
        return u > 1 && Ql(c) === h && f[f.length - 1].path !== h ? f.findIndex(Zn.bind(null, l[u - 2])) : d
    }
    )
      , s = le( () => o.value > -1 && ev(n.params, r.value.params))
      , i = le( () => o.value > -1 && o.value === n.matched.length - 1 && nd(n.params, r.value.params));
    function a(l={}) {
        if (Z_(l)) {
            const u = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Sr);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition( () => u),
            u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: le( () => r.value.href),
        isActive: s,
        isExactActive: i,
        navigate: a
    }
}
function J_(e) {
    return e.length === 1 ? e[0] : e
}
const Q_ = st({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: Jl,
    setup(e, {slots: t}) {
        const n = ot(Jl(e))
          , {options: r} = Me(gs)
          , o = le( () => ({
            [Xl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Xl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const s = t.default && J_(t.default(n));
            return e.custom ? s : Ne("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, s)
        }
    }
})
  , X_ = Q_;
function Z_(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function ev(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!kt(o) || o.length !== r.length || r.some( (s, i) => s !== o[i]))
            return !1
    }
    return !0
}
function Ql(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Xl = (e, t, n) => e ?? t ?? n
  , tv = st({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = Me(ki)
          , o = le( () => e.route || r.value)
          , s = Me(Yl, 0)
          , i = le( () => {
            let u = ie(s);
            const {matched: c} = o.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = le( () => o.value.matched[i.value]);
        Ot(Yl, le( () => i.value + 1)),
        Ot(Y_, a),
        Ot(ki, o);
        const l = he();
        return Se( () => [l.value, a.value, e.name], ([u,c,f], [d,h,g]) => {
            c && (c.instances[f] = u,
            h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
            c.updateGuards.size || (c.updateGuards = h.updateGuards))),
            u && c && (!h || !Zn(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(p => p(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = o.value
              , c = e.name
              , f = a.value
              , d = f && f.components[c];
            if (!d)
                return Zl(n.default, {
                    Component: d,
                    route: u
                });
            const h = f.props[c]
              , g = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null
              , v = Ne(d, de({}, g, t, {
                onVnodeUnmounted: k => {
                    k.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return Zl(n.default, {
                Component: v,
                route: u
            }) || v
        }
    }
});
function Zl(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ld = tv;
function nv(e) {
    const t = U_(e.routes, e)
      , n = e.parseQuery || K_
      , r = e.stringifyQuery || Gl
      , o = e.history
      , s = pr()
      , i = pr()
      , a = pr()
      , l = xe(ut);
    let u = ut;
    jn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ds.bind(null, A => "" + A)
      , f = Ds.bind(null, m_)
      , d = Ds.bind(null, $r);
    function h(A, V) {
        let B, G;
        return od(A) ? (B = t.getRecordMatcher(A),
        G = V) : G = A,
        t.addRoute(G, B)
    }
    function g(A) {
        const V = t.getRecordMatcher(A);
        V && t.removeRoute(V)
    }
    function p() {
        return t.getRoutes().map(A => A.record)
    }
    function v(A) {
        return !!t.getRecordMatcher(A)
    }
    function k(A, V) {
        if (V = de({}, V || l.value),
        typeof A == "string") {
            const b = Hs(n, A, V.path)
              , S = t.resolve({
                path: b.path
            }, V)
              , M = o.createHref(b.fullPath);
            return de(b, S, {
                params: d(S.params),
                hash: $r(b.hash),
                redirectedFrom: void 0,
                href: M
            })
        }
        let B;
        if (A.path != null)
            B = de({}, A, {
                path: Hs(n, A.path, V.path).path
            });
        else {
            const b = de({}, A.params);
            for (const S in b)
                b[S] == null && delete b[S];
            B = de({}, A, {
                params: f(b)
            }),
            V.params = f(V.params)
        }
        const G = t.resolve(B, V)
          , fe = A.hash || "";
        G.params = c(d(G.params));
        const Te = __(r, de({}, A, {
            hash: d_(fe),
            path: G.path
        }))
          , y = o.createHref(Te);
        return de({
            fullPath: Te,
            hash: fe,
            query: r === Gl ? G_(A.query) : A.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: y
        })
    }
    function w(A) {
        return typeof A == "string" ? Hs(n, A, l.value.path) : de({}, A)
    }
    function m(A, V) {
        if (u !== A)
            return er(8, {
                from: V,
                to: A
            })
    }
    function _(A) {
        return x(A)
    }
    function E(A) {
        return _(de(w(A), {
            replace: !0
        }))
    }
    function T(A) {
        const V = A.matched[A.matched.length - 1];
        if (V && V.redirect) {
            const {redirect: B} = V;
            let G = typeof B == "function" ? B(A) : B;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = w(G) : {
                path: G
            },
            G.params = {}),
            de({
                query: A.query,
                hash: A.hash,
                params: G.path != null ? {} : A.params
            }, G)
        }
    }
    function x(A, V) {
        const B = u = k(A)
          , G = l.value
          , fe = A.state
          , Te = A.force
          , y = A.replace === !0
          , b = T(B);
        if (b)
            return x(de(w(b), {
                state: typeof b == "object" ? de({}, fe, b.state) : fe,
                force: Te,
                replace: y
            }), V || B);
        const S = B;
        S.redirectedFrom = V;
        let M;
        return !Te && v_(r, G, B) && (M = er(16, {
            to: S,
            from: G
        }),
        at(G, G, !0, !1)),
        (M ? Promise.resolve(M) : P(S, G)).catch(C => It(C) ? It(C, 2) ? C : gt(C) : W(C, S, G)).then(C => {
            if (C) {
                if (It(C, 2))
                    return x(de({
                        replace: y
                    }, w(C.to), {
                        state: typeof C.to == "object" ? de({}, fe, C.to.state) : fe,
                        force: Te
                    }), V || S)
            } else
                C = O(S, G, !0, y, fe);
            return q(S, G, C),
            C
        }
        )
    }
    function N(A, V) {
        const B = m(A, V);
        return B ? Promise.reject(B) : Promise.resolve()
    }
    function R(A) {
        const V = St.values().next().value;
        return V && typeof V.runWithContext == "function" ? V.runWithContext(A) : A()
    }
    function P(A, V) {
        let B;
        const [G,fe,Te] = rv(A, V);
        B = $s(G.reverse(), "beforeRouteLeave", A, V);
        for (const b of G)
            b.leaveGuards.forEach(S => {
                B.push(an(S, A, V))
            }
            );
        const y = N.bind(null, A, V);
        return B.push(y),
        lt(B).then( () => {
            B = [];
            for (const b of s.list())
                B.push(an(b, A, V));
            return B.push(y),
            lt(B)
        }
        ).then( () => {
            B = $s(fe, "beforeRouteUpdate", A, V);
            for (const b of fe)
                b.updateGuards.forEach(S => {
                    B.push(an(S, A, V))
                }
                );
            return B.push(y),
            lt(B)
        }
        ).then( () => {
            B = [];
            for (const b of Te)
                if (b.beforeEnter)
                    if (kt(b.beforeEnter))
                        for (const S of b.beforeEnter)
                            B.push(an(S, A, V));
                    else
                        B.push(an(b.beforeEnter, A, V));
            return B.push(y),
            lt(B)
        }
        ).then( () => (A.matched.forEach(b => b.enterCallbacks = {}),
        B = $s(Te, "beforeRouteEnter", A, V, R),
        B.push(y),
        lt(B))).then( () => {
            B = [];
            for (const b of i.list())
                B.push(an(b, A, V));
            return B.push(y),
            lt(B)
        }
        ).catch(b => It(b, 8) ? b : Promise.reject(b))
    }
    function q(A, V, B) {
        a.list().forEach(G => R( () => G(A, V, B)))
    }
    function O(A, V, B, G, fe) {
        const Te = m(A, V);
        if (Te)
            return Te;
        const y = V === ut
          , b = jn ? history.state : {};
        B && (G || y ? o.replace(A.fullPath, de({
            scroll: y && b && b.scroll
        }, fe)) : o.push(A.fullPath, fe)),
        l.value = A,
        at(A, V, B, y),
        gt()
    }
    let K;
    function j() {
        K || (K = o.listen( (A, V, B) => {
            if (!Xt.listening)
                return;
            const G = k(A)
              , fe = T(G);
            if (fe) {
                x(de(fe, {
                    replace: !0,
                    force: !0
                }), G).catch(Sr);
                return
            }
            u = G;
            const Te = l.value;
            jn && C_(jl(Te.fullPath, B.delta), ms()),
            P(G, Te).catch(y => It(y, 12) ? y : It(y, 2) ? (x(de(w(y.to), {
                force: !0
            }), G).then(b => {
                It(b, 20) && !B.delta && B.type === jr.pop && o.go(-1, !1)
            }
            ).catch(Sr),
            Promise.reject()) : (B.delta && o.go(-B.delta, !1),
            W(y, G, Te))).then(y => {
                y = y || O(G, Te, !1),
                y && (B.delta && !It(y, 8) ? o.go(-B.delta, !1) : B.type === jr.pop && It(y, 20) && o.go(-1, !1)),
                q(G, Te, y)
            }
            ).catch(Sr)
        }
        ))
    }
    let J = pr(), H = pr(), Z;
    function W(A, V, B) {
        gt(A);
        const G = H.list();
        return G.length ? G.forEach(fe => fe(A, V, B)) : console.error(A),
        Promise.reject(A)
    }
    function ke() {
        return Z && l.value !== ut ? Promise.resolve() : new Promise( (A, V) => {
            J.add([A, V])
        }
        )
    }
    function gt(A) {
        return Z || (Z = !A,
        j(),
        J.list().forEach( ([V,B]) => A ? B(A) : V()),
        J.reset()),
        A
    }
    function at(A, V, B, G) {
        const {scrollBehavior: fe} = e;
        if (!jn || !fe)
            return Promise.resolve();
        const Te = !B && R_(jl(A.fullPath, 0)) || (G || !B) && history.state && history.state.scroll || null;
        return pt().then( () => fe(A, V, Te)).then(y => y && x_(y)).catch(y => W(y, A, V))
    }
    const Le = A => o.go(A);
    let Tt;
    const St = new Set
      , Xt = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: g,
        clearRoutes: t.clearRoutes,
        hasRoute: v,
        getRoutes: p,
        resolve: k,
        options: e,
        push: _,
        replace: E,
        go: Le,
        back: () => Le(-1),
        forward: () => Le(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: H.add,
        isReady: ke,
        install(A) {
            const V = this;
            A.component("RouterLink", X_),
            A.component("RouterView", ld),
            A.config.globalProperties.$router = V,
            Object.defineProperty(A.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ie(l)
            }),
            jn && !Tt && l.value === ut && (Tt = !0,
            _(o.location).catch(fe => {}
            ));
            const B = {};
            for (const fe in ut)
                Object.defineProperty(B, fe, {
                    get: () => l.value[fe],
                    enumerable: !0
                });
            A.provide(gs, V),
            A.provide(ka, Pt(B)),
            A.provide(ki, l);
            const G = A.unmount;
            St.add(A),
            A.unmount = function() {
                St.delete(A),
                St.size < 1 && (u = ut,
                K && K(),
                K = null,
                l.value = ut,
                Tt = !1,
                Z = !1),
                G()
            }
        }
    };
    function lt(A) {
        return A.reduce( (V, B) => V.then( () => R(B)), Promise.resolve())
    }
    return Xt
}
function rv(e, t) {
    const n = []
      , r = []
      , o = []
      , s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
        const a = t.matched[i];
        a && (e.matched.find(u => Zn(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(u => Zn(u, l)) || o.push(l))
    }
    return [n, r, o]
}
function Zw() {
    return Me(gs)
}
function eE(e) {
    return Me(ka)
}
const ov = /(:\w+)\([^)]+\)/g
  , sv = /(:\w+)[?+*]/g
  , iv = /:\w+/g
  , av = (e, t) => t.path.replace(ov, "$1").replace(sv, "$1").replace(iv, n => e.params[n.slice(1)]?.toString() || "")
  , Ti = (e, t) => {
    const n = e.route.matched.find(o => o.components?.default === e.Component.type)
      , r = t ?? n?.meta.key ?? (n && av(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , lv = (e, t) => ({
    default: () => e ? Ne(du, e === !0 ? {} : e, t) : t
});
function Ta(e) {
    return Array.isArray(e) ? e : [e]
}
const js = [{
    name: "index",
    path: "/",
    component: () => ne( () => import("./C8Lexrho.js"), [], import.meta.url)
}, {
    name: "torii",
    path: "/torii",
    component: () => ne( () => import("./BE-4G615.js"), [], import.meta.url)
}, {
    name: "hive",
    path: "/hive",
    component: () => ne( () => import("./CwWu6hMO.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
}, {
    name: "ama-preview",
    path: "/ama/preview",
    component: () => ne( () => import("./CeYZhXiA.js"), [], import.meta.url)
}, {
    name: "clicker-news",
    path: "/clicker/news",
    component: () => ne( () => import("./xtGvwCe_.js"), [], import.meta.url)
}, {
    name: "clicker-chart",
    path: "/clicker/chart",
    component: () => ne( () => import("./XNCJIUnA.js"), __vite__mapDeps([4, 5]), import.meta.url)
}, {
    name: "clicker",
    path: "/clicker",
    component: () => ne( () => import("./BPuP_hXi.js"), __vite__mapDeps([6, 7, 8, 9, 5, 10, 11]), import.meta.url)
}, {
    name: "clicker-manage",
    path: "/clicker/manage",
    component: () => ne( () => import("./ROWTofcR.js"), [], import.meta.url)
}, {
    name: "clicker-search",
    path: "/clicker/search",
    component: () => ne( () => import("./KDdXfVIT.js"), __vite__mapDeps([12, 13, 2]), import.meta.url)
}, {
    name: "contracts",
    path: "/contracts",
    component: () => ne( () => import("./eINxeAT5.js"), [], import.meta.url)
}, {
    name: "clicker-tech-tree",
    path: "/clicker/tech-tree",
    component: () => ne( () => import("./XYblUQ4q.js"), [], import.meta.url)
}, {
    name: "clicker-editor-setId",
    path: "/clicker/editor/:setId()",
    component: () => ne( () => import("./B7s6GHU7.js"), __vite__mapDeps([14, 2, 13, 3, 10]), import.meta.url)
}, {
    name: "contracts-editor-contractId",
    path: "/contracts/editor/:contractId()",
    component: () => ne( () => import("./DbluH_Oc.js").then(e => e._), __vite__mapDeps([15, 7, 1, 16]), import.meta.url)
}]
  , cv = (e, t) => ({
    default: () => e ? Ne(af, e === !0 ? {} : e, t) : t.default?.()
})
  , uv = /(:\w+)\([^)]+\)/g
  , fv = /(:\w+)[?+*]/g
  , dv = /:\w+/g;
function ec(e) {
    const t = e?.meta.key ?? e.path.replace(uv, "$1").replace(fv, "$1").replace(dv, n => e.params[n.slice(1)]?.toString() || "");
    return typeof t == "function" ? t(e) : t
}
function hv(e, t) {
    return e === t || t === ut ? !1 : ec(e) !== ec(t) ? !0 : !e.matched.every( (r, o) => r.components && r.components.default === t.matched[o]?.components?.default)
}
const pv = {
    scrollBehavior(e, t, n) {
        const r = we()
          , o = Ye().options?.scrollBehaviorType ?? "auto";
        if (e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: cd(e.hash),
                behavior: o
            } : !1;
        if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1)
            return !1;
        const i = r._runningTransition ? "page:transition:finish" : "page:loading:end";
        return new Promise(a => {
            if (t === ut) {
                a(tc(e, t, n, o));
                return
            }
            r.hooks.hookOnce(i, () => {
                requestAnimationFrame( () => a(tc(e, t, n, o)))
            }
            )
        }
        )
    }
};
function cd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
function tc(e, t, n, r) {
    if (n)
        return n;
    const o = hv(e, t);
    return e.hash ? {
        el: e.hash,
        top: cd(e.hash),
        behavior: o ? r : "instant"
    } : {
        left: 0,
        top: 0
    }
}
const mv = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , en = {
    ...mv,
    ...pv
}
  , gv = async (e, t) => {
    let n, r;
    if (!e.meta?.validate)
        return;
    const o = ([n,r] = Kn( () => Promise.resolve(e.meta.validate(e))),
    n = await n,
    r(),
    n);
    if (o === !0)
        return;
    const s = fn({
        fatal: !0,
        statusCode: o && o.statusCode || 404,
        statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath),
    s
}
  , yv = async e => {
    let t, n;
    const r = ([t,n] = Kn( () => ba({
        path: e.path
    })),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return Qt(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , _v = [gv, yv]
  , Si = {};
function vv(e, t, n) {
    const {pathname: r, search: o, hash: s} = t
      , i = e.indexOf("#");
    if (i > -1) {
        const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
        let c = s.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        _l(c, "")
    }
    const a = _l(r, e)
      , l = !n || ug(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s
}
const bv = mt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        let t, n, r = ar().app.baseURL;
        const o = en.history?.(r) ?? M_(r)
          , s = en.routes ? ([t,n] = Kn( () => en.routes(js)),
        t = await t,
        n(),
        t ?? js) : js;
        let i;
        const a = nv({
            ...en,
            scrollBehavior: (v, k, w) => {
                if (k === ut) {
                    i = w;
                    return
                }
                if (en.scrollBehavior) {
                    if (a.options.scrollBehavior = en.scrollBehavior,
                    "scrollRestoration" in window.history) {
                        const m = a.beforeEach( () => {
                            m(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return en.scrollBehavior(v, ut, i || w)
                }
            }
            ,
            history: o,
            routes: s
        });
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(a);
        const l = xe(a.currentRoute.value);
        a.afterEach( (v, k) => {
            l.value = k
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const u = vv(r, window.location, e.payload.path)
          , c = xe(a.currentRoute.value)
          , f = () => {
            c.value = a.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        a.afterEach( (v, k) => {
            v.matched[v.matched.length - 1]?.components?.default === k.matched[k.matched.length - 1]?.components?.default && f()
        }
        );
        const d = {};
        for (const v in c.value)
            Object.defineProperty(d, v, {
                get: () => c.value[v],
                enumerable: !0
            });
        e._route = Pt(d),
        e._middleware ||= {
            global: [],
            named: {}
        };
        const h = hs();
        a.afterEach(async (v, k, w) => {
            delete e._processingMiddleware,
            !e.isHydrating && h.value && await e.runWithContext(ly),
            w && await e.callHook("page:loading:end")
        }
        );
        try {
            [t,n] = Kn( () => a.isReady()),
            await t,
            n()
        } catch (v) {
            [t,n] = Kn( () => e.runWithContext( () => vn(v))),
            await t,
            n()
        }
        const g = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
        f();
        const p = e.payload.state._layout;
        return a.beforeEach(async (v, k) => {
            await e.callHook("page:loading:start"),
            v.meta = ot(v.meta),
            e.isHydrating && p && !Mt(v.meta.layout) && (v.meta.layout = p),
            e._processingMiddleware = !0;
            {
                const w = new Set([..._v, ...e._middleware.global]);
                for (const m of v.matched) {
                    const _ = m.meta.middleware;
                    if (_)
                        for (const E of Ta(_))
                            w.add(E)
                }
                {
                    const m = await e.runWithContext( () => ba({
                        path: v.path
                    }));
                    if (m.appMiddleware)
                        for (const _ in m.appMiddleware)
                            m.appMiddleware[_] ? w.add(_) : w.delete(_)
                }
                for (const m of w) {
                    const _ = typeof m == "string" ? e._middleware.named[m] || await Si[m]?.().then(E => E.default || E) : m;
                    if (!_)
                        throw new Error(`Unknown route middleware: '${m}'.`);
                    try {
                        const E = await e.runWithContext( () => _(v, k));
                        if (!e.payload.serverRendered && e.isHydrating && (E === !1 || E instanceof Error)) {
                            const T = E || fn({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${u}`
                            });
                            return await e.runWithContext( () => vn(T)),
                            !1
                        }
                        if (E === !0)
                            continue;
                        if (E === !1)
                            return E;
                        if (E)
                            return Wf(E) && E.fatal && await e.runWithContext( () => vn(E)),
                            E
                    } catch (E) {
                        const T = fn(E);
                        return T.fatal && await e.runWithContext( () => vn(T)),
                        T
                    }
                }
            }
        }
        ),
        a.onError(async () => {
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        a.afterEach(v => {
            if (v.matched.length === 0)
                return e.runWithContext( () => vn(fn({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${v.fullPath}`,
                    data: {
                        path: v.fullPath
                    }
                })))
        }
        ),
        e.hooks.hookOnce("app:created", async () => {
            try {
                "name" in g && (g.name = void 0),
                await a.replace({
                    ...g,
                    force: !0
                }),
                a.options.scrollBehavior = en.scrollBehavior
            } catch (v) {
                await e.runWithContext( () => vn(v))
            }
        }
        ),
        {
            provide: {
                router: a
            }
        }
    }
})
  , xi = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout( () => {
        e(n)
    }
    , 1)
}
)
  , wv = globalThis.cancelIdleCallback || (e => {
    clearTimeout(e)
}
)
  , ys = e => {
    const t = we();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
        xi( () => e())
    }
    ) : xi( () => e())
}
  , Ev = mt({
    name: "nuxt:payload",
    setup(e) {
        const t = new Set;
        Ye().beforeResolve(async (n, r) => {
            if (n.path === r.path)
                return;
            const o = await Dl(n.path);
            if (o) {
                for (const s of t)
                    delete e.static.data[s];
                for (const s in o.data)
                    s in e.static.data || t.add(s),
                    e.static.data[s] = o.data[s]
            }
        }
        ),
        ys( () => {
            e.hooks.hook("link:prefetch", async n => {
                const {hostname: r} = new URL(n,window.location.href);
                r === window.location.hostname && await Dl(n).catch( () => {
                    console.warn("[nuxt] Error preloading payload for", n)
                }
                )
            }
            ),
            navigator.connection?.effectiveType !== "slow-2g" && setTimeout(ps, 1e3)
        }
        )
    }
})
  , kv = mt( () => {
    const e = Ye();
    ys( () => {
        e.beforeResolve(async () => {
            await new Promise(t => {
                setTimeout(t, 100),
                requestAnimationFrame( () => {
                    setTimeout(t, 0)
                }
                )
            }
            )
        }
        )
    }
    )
}
)
  , Tv = mt(e => {
    let t;
    async function n() {
        let r;
        try {
            r = await ps()
        } catch (o) {
            const s = o;
            if (!("status" in s && (s.status === 404 || s.status === 403)))
                throw s
        }
        t && clearTimeout(t),
        t = setTimeout(n, Sl);
        try {
            const o = await $fetch(ma("builds/latest.json") + `?${Date.now()}`);
            o.id !== r?.id && (e.hooks.callHook("app:manifest:update", o),
            t && clearTimeout(t))
        } catch {}
    }
    ys( () => {
        t = setTimeout(n, Sl)
    }
    )
}
);
function Sv(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = jo(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || n?.path !== t || n?.expires < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: we().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const xv = mt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Ye()
          , n = ar()
          , r = new Set;
        t.beforeEach( () => {
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: s}) => {
            r.add(s)
        }
        );
        function o(s) {
            const i = fs(n.app.baseURL, s.fullPath);
            Sv({
                path: i,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", () => {
            t.beforeResolve(o)
        }
        ),
        t.onError( (s, i) => {
            r.has(s) && o(i)
        }
        )
    }
})
  , Cv = Ee( () => ne( () => import("./s1NVb3Eb.js"), __vite__mapDeps([17, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Rv = Ee( () => ne( () => import("./CMylc2fj.js"), __vite__mapDeps([19, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Av = Ee( () => ne( () => import("./pDuR_pqH.js"), __vite__mapDeps([20, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Pv = Ee( () => ne( () => import("./CS2C5Di7.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Ov = Ee( () => ne( () => import("./xtExtWTm.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Mv = Ee( () => ne( () => import("./lPp7mbH6.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Lv = Ee( () => ne( () => import("./CcaoSEl-.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Iv = Ee( () => ne( () => import("./DPqacczD.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Nv = Ee( () => ne( () => import("./zCt05qXx.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Dv = Ee( () => ne( () => import("./DJpEn3_2.js"), __vite__mapDeps([21, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Hv = Ee( () => ne( () => import("./Cq8AIF07.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , $v = Ee( () => ne( () => import("./6bP3mW5m.js"), __vite__mapDeps([22, 18]), import.meta.url).then(e => e.default || e.default || e))
  , jv = Ee( () => ne( () => import("./D1Zt9Eax.js"), __vite__mapDeps([23, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Fv = Ee( () => ne( () => import("./CUb4ZiLZ.js"), __vite__mapDeps([24, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Bv = Ee( () => ne( () => import("./CHMaNiXP.js"), __vite__mapDeps([25, 26]), import.meta.url).then(e => e.default || e.default || e))
  , Uv = Ee( () => ne( () => import("./ChN1Zm1n.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Vv = Ee( () => ne( () => import("./DWzMaTp5.js"), __vite__mapDeps([27, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Wv = Ee( () => ne( () => import("./DUcUzu8l.js"), __vite__mapDeps([28, 18]), import.meta.url).then(e => e.default || e.default || e))
  , zv = Ee( () => ne( () => import("./BggMB-82.js"), __vite__mapDeps([29, 18]), import.meta.url).then(e => e.default || e.default || e))
  , qv = Ee( () => ne( () => import("./CXR7IpPr.js"), __vite__mapDeps([30, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Kv = Ee( () => ne( () => import("./C6Qy8QyI.js"), __vite__mapDeps([31, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Gv = Ee( () => ne( () => import("./w0UZ36yD.js"), __vite__mapDeps([32, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Yv = Ee( () => ne( () => import("./-SNeWsBY.js"), __vite__mapDeps([33, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Jv = Ee( () => ne( () => import("./BaXHbvcu.js"), __vite__mapDeps([34, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Qv = Ee( () => ne( () => import("./BpxCNpq2.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Xv = [["ProseBlockquote", Cv], ["ProseCode", Rv], ["ProseEm", Av], ["ProseH1", Pv], ["ProseH2", Ov], ["ProseH3", Mv], ["ProseH4", Lv], ["ProseH5", Iv], ["ProseH6", Nv], ["ProseHr", Dv], ["ProseImg", Hv], ["ProseLi", $v], ["ProseOl", jv], ["ProseP", Fv], ["ProsePre", Bv], ["ProseScript", Uv], ["ProseStrong", Vv], ["ProseTable", Wv], ["ProseTbody", zv], ["ProseTd", qv], ["ProseTh", Kv], ["ProseThead", Gv], ["ProseTr", Yv], ["ProseUl", Jv], ["Icon", Qv]]
  , Zv = mt({
    name: "nuxt:global-components",
    setup(e) {
        for (const [t,n] of Xv)
            e.vueApp.component(t, n),
            e.vueApp.component("Lazy" + t, n)
    }
})
  , ao = {};
function eb(e) {
    if (e?.__asyncLoader && !e.__asyncResolved)
        return e.__asyncLoader()
}
async function ud(e, t=Ye()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded ||= new Set,
    t._routePreloaded.has(n)))
        return;
    const o = t._preloadPromises ||= [];
    if (o.length > 4)
        return Promise.all(o).then( () => ud(e, t));
    t._routePreloaded.add(n);
    const s = r.map(i => i.components?.default).filter(i => typeof i == "function");
    for (const i of s) {
        const a = Promise.resolve(i()).catch( () => {}
        ).finally( () => o.splice(o.indexOf(a)));
        o.push(a)
    }
    await Promise.all(o)
}
const tb = mt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Ye();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                const r = n?.meta?.layout;
                r && typeof ao[r] == "function" && await ao[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n => {
            if (Qt(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const o = r.meta.layout;
            let s = Ta(r.meta.middleware);
            s = s.filter(i => typeof i == "string");
            for (const i of s)
                typeof Si[i] == "function" && Si[i]();
            typeof o == "string" && o in ao && eb(ao[o])
        }
        )
    }
});
var lo = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
const nb = {
    ui: {
        button: {
            slots: {
                base: "border-2 border-stone-900",
                variants: {
                    primary: "text-white"
                }
            }
        },
        drawer: {
            slots: {
                overlay: "fixed inset-0 backdrop-blur-sm"
            }
        }
    }
}
  , rb = {
    nuxt: {},
    ui: {
        colors: {
            primary: "green",
            secondary: "blue",
            success: "green",
            info: "blue",
            warning: "yellow",
            error: "red",
            neutral: "slate"
        },
        icons: {
            arrowLeft: "i-lucide-arrow-left",
            arrowRight: "i-lucide-arrow-right",
            check: "i-lucide-check",
            chevronDoubleLeft: "i-lucide-chevrons-left",
            chevronDoubleRight: "i-lucide-chevrons-right",
            chevronDown: "i-lucide-chevron-down",
            chevronLeft: "i-lucide-chevron-left",
            chevronRight: "i-lucide-chevron-right",
            chevronUp: "i-lucide-chevron-up",
            close: "i-lucide-x",
            ellipsis: "i-lucide-ellipsis",
            external: "i-lucide-arrow-up-right",
            file: "i-lucide-file",
            folder: "i-lucide-folder",
            folderOpen: "i-lucide-folder-open",
            loading: "i-lucide-loader-circle",
            minus: "i-lucide-minus",
            plus: "i-lucide-plus",
            search: "i-lucide-search",
            upload: "i-lucide-upload"
        }
    },
    icon: {
        provider: "server",
        class: "",
        aliases: {},
        iconifyApiEndpoint: "https://api.iconify.design",
        localApiEndpoint: "/api/_nuxt_icon",
        fallbackToApi: !0,
        cssSelectorPrefix: "i-",
        cssWherePseudo: !0,
        cssLayer: "components",
        mode: "css",
        attrs: {
            "aria-hidden": !0
        },
        collections: ["academicons", "akar-icons", "ant-design", "arcticons", "basil", "bi", "bitcoin-icons", "bpmn", "brandico", "bx", "bxl", "bxs", "bytesize", "carbon", "catppuccin", "cbi", "charm", "ci", "cib", "cif", "cil", "circle-flags", "circum", "clarity", "codicon", "covid", "cryptocurrency", "cryptocurrency-color", "dashicons", "devicon", "devicon-plain", "ei", "el", "emojione", "emojione-monotone", "emojione-v1", "entypo", "entypo-social", "eos-icons", "ep", "et", "eva", "f7", "fa", "fa-brands", "fa-regular", "fa-solid", "fa6-brands", "fa6-regular", "fa6-solid", "fad", "fe", "feather", "file-icons", "flag", "flagpack", "flat-color-icons", "flat-ui", "flowbite", "fluent", "fluent-emoji", "fluent-emoji-flat", "fluent-emoji-high-contrast", "fluent-mdl2", "fontelico", "fontisto", "formkit", "foundation", "fxemoji", "gala", "game-icons", "geo", "gg", "gis", "gravity-ui", "gridicons", "grommet-icons", "guidance", "healthicons", "heroicons", "heroicons-outline", "heroicons-solid", "hugeicons", "humbleicons", "ic", "icomoon-free", "icon-park", "icon-park-outline", "icon-park-solid", "icon-park-twotone", "iconamoon", "iconoir", "icons8", "il", "ion", "iwwa", "jam", "la", "lets-icons", "line-md", "logos", "ls", "lucide", "lucide-lab", "mage", "majesticons", "maki", "map", "marketeq", "material-symbols", "material-symbols-light", "mdi", "mdi-light", "medical-icon", "memory", "meteocons", "mi", "mingcute", "mono-icons", "mynaui", "nimbus", "nonicons", "noto", "noto-v1", "octicon", "oi", "ooui", "openmoji", "oui", "pajamas", "pepicons", "pepicons-pencil", "pepicons-pop", "pepicons-print", "ph", "pixelarticons", "prime", "ps", "quill", "radix-icons", "raphael", "ri", "rivet-icons", "si-glyph", "simple-icons", "simple-line-icons", "skill-icons", "solar", "streamline", "streamline-emojis", "subway", "svg-spinners", "system-uicons", "tabler", "tdesign", "teenyicons", "token", "token-branded", "topcoat", "twemoji", "typcn", "uil", "uim", "uis", "uit", "uiw", "unjs", "vaadin", "vs", "vscode-icons", "websymbol", "weui", "whh", "wi", "wpf", "zmdi", "zondicons"],
        fetchTimeout: 1500
    }
}
  , ob = ey(nb, rb);
function fd() {
    const e = we();
    return e._appConfig ||= ot(ob),
    e._appConfig
}
const sb = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function ib(e, t) {
    return e in lo && typeof lo[e] == "object" && t in lo[e] ? lo[e][t] : ""
}
function ab(e, t) {
    return `${sb.map(n => `--ui-color-${e}-${n}: var(--color-${t === "neutral" ? "old-neutral" : t}-${n}, ${ib(t, n)});`).join(`
  `)}`
}
function nc(e, t) {
    return `--ui-${e}: var(--ui-color-${e}-${t});`
}
const lb = mt( () => {
    const e = fd()
      , t = we()
      , n = le( () => {
        const {neutral: o, ...s} = e.ui.colors;
        return `@layer base {
  :root {
  ${Object.entries(e.ui.colors).map( ([i,a]) => ab(i, a)).join(`
  `)}
  }
  :root, .light {
  ${Object.keys(s).map(i => nc(i, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(s).map(i => nc(i, 400)).join(`
  `)}
  }
}`
    }
    )
      , r = {
        style: [{
            innerHTML: () => n.value,
            tagPriority: -2,
            id: "nuxt-ui-colors"
        }]
    };
    if (t.isHydrating && !t.payload.serverRendered) {
        const o = document.createElement("style");
        o.innerHTML = n.value,
        o.setAttribute("data-nuxt-ui-colors", ""),
        document.head.appendChild(o),
        r.script = [{
            innerHTML: "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"
        }]
    }
    va(r)
}
)
  , cb = "__NUXT_COLOR_MODE__"
  , Fs = "nuxt-color-mode"
  , ub = "localStorage"
  , fb = "$s";
function db(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n,r] = e;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = fb + n
      , s = we()
      , i = Wr(s.payload.state, o);
    if (i.value === void 0 && r) {
        const a = r();
        if (Re(a))
            return s.payload.state[o] = a,
            a;
        i.value = a
    }
    return i
}
const Nt = window[cb] || {}
  , hb = mt(e => {
    const t = db("color-mode", () => ot({
        preference: Nt.preference,
        value: Nt.value,
        unknown: !1,
        forced: !1
    })).value;
    Ye().afterEach(s => {
        const i = s.meta.colorMode;
        i && i !== "system" ? (t.value = i,
        t.forced = !0) : (i === "system" && console.warn("You cannot force the colorMode to system at the page level."),
        t.forced = !1,
        t.value = t.preference === "system" ? Nt.getColorScheme() : t.preference)
    }
    );
    let n;
    function r() {
        n || !window.matchMedia || (n = window.matchMedia("(prefers-color-scheme: dark)"),
        n.addEventListener("change", () => {
            !t.forced && t.preference === "system" && (t.value = Nt.getColorScheme())
        }
        ))
    }
    function o(s, i) {
        switch (s) {
        case "cookie":
            window.document.cookie = Fs + "=" + i;
            break;
        case "sessionStorage":
            window.sessionStorage?.setItem(Fs, i);
            break;
        case "localStorage":
        default:
            window.localStorage?.setItem(Fs, i)
        }
    }
    Se( () => t.preference, s => {
        t.forced || (s === "system" ? (t.value = Nt.getColorScheme(),
        r()) : t.value = s,
        o(ub, s))
    }
    , {
        immediate: !0
    }),
    Se( () => t.value, (s, i) => {
        let a;
        a = window.document.createElement("style"),
        a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
        window.document.head.appendChild(a),
        Nt.removeColorScheme(i),
        Nt.addColorScheme(s),
        window.getComputedStyle(a).opacity,
        document.head.removeChild(a)
    }
    ),
    t.preference === "system" && r(),
    e.hook("app:mounted", () => {
        t.unknown && (t.preference = Nt.preference,
        t.value = Nt.value,
        t.unknown = !1)
    }
    ),
    e.provide("colorMode", t)
}
)
  , dd = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , Gr = (e, t, n, r="") => {
    const o = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (o.length < 2 || o.length > 3)
            return null;
        r = o.shift().slice(1)
    }
    if (o.length > 3 || !o.length)
        return null;
    if (o.length > 1) {
        const a = o.pop()
          , l = o.pop()
          , u = {
            provider: o.length > 0 ? o[0] : r,
            prefix: l,
            name: a
        };
        return t && !bo(u) ? null : u
    }
    const s = o[0]
      , i = s.split("-");
    if (i.length > 1) {
        const a = {
            provider: r,
            prefix: i.shift(),
            name: i.join("-")
        };
        return t && !bo(a) ? null : a
    }
    if (n && r === "") {
        const a = {
            provider: r,
            prefix: "",
            name: s
        };
        return t && !bo(a, n) ? null : a
    }
    return null
}
  , bo = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1
  , hd = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , Wo = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , lr = Object.freeze({
    ...hd,
    ...Wo
})
  , Ci = Object.freeze({
    ...lr,
    body: "",
    hidden: !1
});
function pb(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function rc(e, t) {
    const n = pb(e, t);
    for (const r in Ci)
        r in Wo ? r in e && !(r in n) && (n[r] = Wo[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}
function mb(e, t) {
    const n = e.icons
      , r = e.aliases || Object.create(null)
      , o = Object.create(null);
    function s(i) {
        if (n[i])
            return o[i] = [];
        if (!(i in o)) {
            o[i] = null;
            const a = r[i] && r[i].parent
              , l = a && s(a);
            l && (o[i] = [a].concat(l))
        }
        return o[i]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(s),
    o
}
function gb(e, t, n) {
    const r = e.icons
      , o = e.aliases || Object.create(null);
    let s = {};
    function i(a) {
        s = rc(r[a] || o[a], s)
    }
    return i(t),
    n.forEach(i),
    rc(e, s)
}
function pd(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object")
        return n;
    e.not_found instanceof Array && e.not_found.forEach(o => {
        t(o, null),
        n.push(o)
    }
    );
    const r = mb(e);
    for (const o in r) {
        const s = r[o];
        s && (t(o, gb(e, o, s)),
        n.push(o))
    }
    return n
}
const yb = {
    provider: "",
    aliases: {},
    not_found: {},
    ...hd
};
function Bs(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n])
            return !1;
    return !0
}
function md(e) {
    if (typeof e != "object" || e === null)
        return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Bs(e, yb))
        return null;
    const n = t.icons;
    for (const o in n) {
        const s = n[o];
        if (!o || typeof s.body != "string" || !Bs(s, Ci))
            return null
    }
    const r = t.aliases || Object.create(null);
    for (const o in r) {
        const s = r[o]
          , i = s.parent;
        if (!o || typeof i != "string" || !n[i] && !r[i] || !Bs(s, Ci))
            return null
    }
    return t
}
const oc = Object.create(null);
function _b(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}
function An(e, t) {
    const n = oc[e] || (oc[e] = Object.create(null));
    return n[t] || (n[t] = _b(e, t))
}
function gd(e, t) {
    return md(t) ? pd(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }
    ) : []
}
function vb(e, t, n) {
    try {
        if (typeof n.body == "string")
            return e.icons[t] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
let Fr = !1;
function yd(e) {
    return typeof e == "boolean" && (Fr = e),
    Fr
}
function Sa(e) {
    const t = typeof e == "string" ? Gr(e, !0, Fr) : e;
    if (t) {
        const n = An(t.provider, t.prefix)
          , r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function bb(e, t) {
    const n = Gr(e, !0, Fr);
    if (!n)
        return !1;
    const r = An(n.provider, n.prefix);
    return t ? vb(r, n.name, t) : (r.missing.add(n.name),
    !0)
}
function wb(e, t) {
    if (typeof e != "object")
        return !1;
    if (typeof t != "string" && (t = e.provider || ""),
    Fr && !t && !e.prefix) {
        let o = !1;
        return md(e) && (e.prefix = "",
        pd(e, (s, i) => {
            bb(s, i) && (o = !0)
        }
        )),
        o
    }
    const n = e.prefix;
    if (!bo({
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = An(t, n);
    return !!gd(r, e)
}
function tE(e) {
    const t = Sa(e);
    return t && {
        ...lr,
        ...t
    }
}
const _d = Object.freeze({
    width: null,
    height: null
})
  , vd = Object.freeze({
    ..._d,
    ...Wo
})
  , Eb = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , kb = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function sc(e, t, n) {
    if (t === 1)
        return e;
    if (n = n || 100,
    typeof e == "number")
        return Math.ceil(e * t * n) / n;
    if (typeof e != "string")
        return e;
    const r = e.split(Eb);
    if (r === null || !r.length)
        return e;
    const o = [];
    let s = r.shift()
      , i = kb.test(s);
    for (; ; ) {
        if (i) {
            const a = parseFloat(s);
            isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n)
        } else
            o.push(s);
        if (s = r.shift(),
        s === void 0)
            return o.join("");
        i = !i
    }
}
function Tb(e, t="defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0; ) {
        const o = e.indexOf(">", r)
          , s = e.indexOf("</" + t);
        if (o === -1 || s === -1)
            break;
        const i = e.indexOf(">", s);
        if (i === -1)
            break;
        n += e.slice(o + 1, s).trim(),
        e = e.slice(0, r).trim() + e.slice(i + 1)
    }
    return {
        defs: n,
        content: e
    }
}
function Sb(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}
function xb(e, t, n) {
    const r = Tb(e);
    return Sb(r.defs, t + r.content + n)
}
const Cb = e => e === "unset" || e === "undefined" || e === "none";
function Rb(e, t) {
    const n = {
        ...lr,
        ...e
    }
      , r = {
        ...vd,
        ...t
    }
      , o = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let s = n.body;
    [n, r].forEach(p => {
        const v = []
          , k = p.hFlip
          , w = p.vFlip;
        let m = p.rotate;
        k ? w ? m += 2 : (v.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"),
        v.push("scale(-1 1)"),
        o.top = o.left = 0) : w && (v.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"),
        v.push("scale(1 -1)"),
        o.top = o.left = 0);
        let _;
        switch (m < 0 && (m -= Math.floor(m / 4) * 4),
        m = m % 4,
        m) {
        case 1:
            _ = o.height / 2 + o.top,
            v.unshift("rotate(90 " + _.toString() + " " + _.toString() + ")");
            break;
        case 2:
            v.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
            break;
        case 3:
            _ = o.width / 2 + o.left,
            v.unshift("rotate(-90 " + _.toString() + " " + _.toString() + ")");
            break
        }
        m % 2 === 1 && (o.left !== o.top && (_ = o.left,
        o.left = o.top,
        o.top = _),
        o.width !== o.height && (_ = o.width,
        o.width = o.height,
        o.height = _)),
        v.length && (s = xb(s, '<g transform="' + v.join(" ") + '">', "</g>"))
    }
    );
    const i = r.width
      , a = r.height
      , l = o.width
      , u = o.height;
    let c, f;
    i === null ? (f = a === null ? "1em" : a === "auto" ? u : a,
    c = sc(f, l / u)) : (c = i === "auto" ? l : i,
    f = a === null ? sc(c, u / l) : a === "auto" ? u : a);
    const d = {}
      , h = (p, v) => {
        Cb(v) || (d[p] = v.toString())
    }
    ;
    h("width", c),
    h("height", f);
    const g = [o.left, o.top, l, u];
    return d.viewBox = g.join(" "),
    {
        attributes: d,
        viewBox: g,
        body: s
    }
}
const Ab = /\sid="(\S+)"/g
  , Pb = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Ob = 0;
function Mb(e, t=Pb) {
    const n = [];
    let r;
    for (; r = Ab.exec(e); )
        n.push(r[1]);
    if (!n.length)
        return e;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(s => {
        const i = typeof t == "function" ? t(s) : t + (Ob++).toString()
          , a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])',"g"), "$1" + i + o + "$3")
    }
    ),
    e = e.replace(new RegExp(o,"g"), ""),
    e
}
const Ri = Object.create(null);
function bd(e, t) {
    Ri[e] = t
}
function Ai(e) {
    return Ri[e] || Ri[""]
}
function xa(e) {
    let t;
    if (typeof e.resources == "string")
        t = [e.resources];
    else if (t = e.resources,
    !(t instanceof Array) || !t.length)
        return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const _s = Object.create(null)
  , mr = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , wo = [];
for (; mr.length > 0; )
    mr.length === 1 || Math.random() > .5 ? wo.push(mr.shift()) : wo.push(mr.pop());
_s[""] = xa({
    resources: ["https://api.iconify.design"].concat(wo)
});
function wd(e, t) {
    const n = xa(t);
    return n === null ? !1 : (_s[e] = n,
    !0)
}
function vs(e) {
    return _s[e]
}
function Lb() {
    return Object.keys(_s)
}
const Ib = () => {
    let e;
    try {
        if (e = fetch,
        typeof e == "function")
            return e
    } catch {}
}
;
let zo = Ib();
function Nb(e) {
    zo = e
}
function Db() {
    return zo
}
function Hb(e, t) {
    const n = vs(e);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let o = 0;
        n.resources.forEach(i => {
            o = Math.max(o, i.length)
        }
        );
        const s = t + ".json?icons=";
        r = n.maxURL - o - n.path.length - s.length
    }
    return r
}
function $b(e) {
    return e === 404
}
const jb = (e, t, n) => {
    const r = []
      , o = Hb(e, t)
      , s = "icons";
    let i = {
        type: s,
        provider: e,
        prefix: t,
        icons: []
    }
      , a = 0;
    return n.forEach( (l, u) => {
        a += l.length + 1,
        a >= o && u > 0 && (r.push(i),
        i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        },
        a = l.length),
        i.icons.push(l)
    }
    ),
    r.push(i),
    r
}
;
function Fb(e) {
    if (typeof e == "string") {
        const t = vs(e);
        if (t)
            return t.path
    }
    return "/"
}
const Bb = (e, t, n) => {
    if (!zo) {
        n("abort", 424);
        return
    }
    let r = Fb(t.provider);
    switch (t.type) {
    case "icons":
        {
            const s = t.prefix
              , a = t.icons.join(",")
              , l = new URLSearchParams({
                icons: a
            });
            r += s + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const s = t.uri;
            r += s.slice(0, 1) === "/" ? s.slice(1) : s;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let o = 503;
    zo(e + r).then(s => {
        const i = s.status;
        if (i !== 200) {
            setTimeout( () => {
                n($b(i) ? "abort" : "next", i)
            }
            );
            return
        }
        return o = 501,
        s.json()
    }
    ).then(s => {
        if (typeof s != "object" || s === null) {
            setTimeout( () => {
                s === 404 ? n("abort", s) : n("next", o)
            }
            );
            return
        }
        setTimeout( () => {
            n("success", s)
        }
        )
    }
    ).catch( () => {
        n("next", o)
    }
    )
}
  , Ub = {
    prepare: jb,
    send: Bb
};
function Vb(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    e.sort( (o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(o => {
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
            return;
        r = o;
        const s = o.provider
          , i = o.prefix
          , a = o.name
          , l = n[s] || (n[s] = Object.create(null))
          , u = l[i] || (l[i] = An(s, i));
        let c;
        a in u.icons ? c = t.loaded : i === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
        const f = {
            provider: s,
            prefix: i,
            name: a
        };
        c.push(f)
    }
    ),
    t
}
function Ed(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o => o.id !== t))
    }
    )
}
function Wb(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
    setTimeout( () => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length)
            return;
        let n = !1;
        const r = e.provider
          , o = e.prefix;
        t.forEach(s => {
            const i = s.icons
              , a = i.pending.length;
            i.pending = i.pending.filter(l => {
                if (l.prefix !== o)
                    return !0;
                const u = l.name;
                if (e.icons[u])
                    i.loaded.push({
                        provider: r,
                        prefix: o,
                        name: u
                    });
                else if (e.missing.has(u))
                    i.missing.push({
                        provider: r,
                        prefix: o,
                        name: u
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            i.pending.length !== a && (n || Ed([e], s.id),
            s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort))
        }
        )
    }
    ))
}
let zb = 0;
function qb(e, t, n) {
    const r = zb++
      , o = Ed.bind(null, n, r);
    if (!t.pending.length)
        return o;
    const s = {
        id: r,
        icons: t,
        callback: e,
        abort: o
    };
    return n.forEach(i => {
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s)
    }
    ),
    o
}
function Kb(e, t=!0, n=!1) {
    const r = [];
    return e.forEach(o => {
        const s = typeof o == "string" ? Gr(o, t, n) : o;
        s && r.push(s)
    }
    ),
    r
}
var Gb = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function Yb(e, t, n, r) {
    const o = e.resources.length
      , s = e.random ? Math.floor(Math.random() * o) : e.index;
    let i;
    if (e.random) {
        let T = e.resources.slice(0);
        for (i = []; T.length > 1; ) {
            const x = Math.floor(Math.random() * T.length);
            i.push(T[x]),
            T = T.slice(0, x).concat(T.slice(x + 1))
        }
        i = i.concat(T)
    } else
        i = e.resources.slice(s).concat(e.resources.slice(0, s));
    const a = Date.now();
    let l = "pending", u = 0, c, f = null, d = [], h = [];
    typeof r == "function" && h.push(r);
    function g() {
        f && (clearTimeout(f),
        f = null)
    }
    function p() {
        l === "pending" && (l = "aborted"),
        g(),
        d.forEach(T => {
            T.status === "pending" && (T.status = "aborted")
        }
        ),
        d = []
    }
    function v(T, x) {
        x && (h = []),
        typeof T == "function" && h.push(T)
    }
    function k() {
        return {
            startTime: a,
            payload: t,
            status: l,
            queriesSent: u,
            queriesPending: d.length,
            subscribe: v,
            abort: p
        }
    }
    function w() {
        l = "failed",
        h.forEach(T => {
            T(void 0, c)
        }
        )
    }
    function m() {
        d.forEach(T => {
            T.status === "pending" && (T.status = "aborted")
        }
        ),
        d = []
    }
    function _(T, x, N) {
        const R = x !== "success";
        switch (d = d.filter(P => P !== T),
        l) {
        case "pending":
            break;
        case "failed":
            if (R || !e.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (x === "abort") {
            c = N,
            w();
            return
        }
        if (R) {
            c = N,
            d.length || (i.length ? E() : w());
            return
        }
        if (g(),
        m(),
        !e.random) {
            const P = e.resources.indexOf(T.resource);
            P !== -1 && P !== e.index && (e.index = P)
        }
        l = "completed",
        h.forEach(P => {
            P(N)
        }
        )
    }
    function E() {
        if (l !== "pending")
            return;
        g();
        const T = i.shift();
        if (T === void 0) {
            if (d.length) {
                f = setTimeout( () => {
                    g(),
                    l === "pending" && (m(),
                    w())
                }
                , e.timeout);
                return
            }
            w();
            return
        }
        const x = {
            status: "pending",
            resource: T,
            callback: (N, R) => {
                _(x, N, R)
            }
        };
        d.push(x),
        u++,
        f = setTimeout(E, e.rotate),
        n(T, t, x.callback)
    }
    return setTimeout(E),
    k
}
function kd(e) {
    const t = {
        ...Gb,
        ...e
    };
    let n = [];
    function r() {
        n = n.filter(a => a().status === "pending")
    }
    function o(a, l, u) {
        const c = Yb(t, a, l, (f, d) => {
            r(),
            u && u(f, d)
        }
        );
        return n.push(c),
        c
    }
    function s(a) {
        return n.find(l => a(l)) || null
    }
    return {
        query: o,
        find: s,
        setIndex: a => {
            t.index = a
        }
        ,
        getIndex: () => t.index,
        cleanup: r
    }
}
function ic() {}
const Us = Object.create(null);
function Jb(e) {
    if (!Us[e]) {
        const t = vs(e);
        if (!t)
            return;
        const n = kd(t)
          , r = {
            config: t,
            redundancy: n
        };
        Us[e] = r
    }
    return Us[e]
}
function Td(e, t, n) {
    let r, o;
    if (typeof e == "string") {
        const s = Ai(e);
        if (!s)
            return n(void 0, 424),
            ic;
        o = s.send;
        const i = Jb(e);
        i && (r = i.redundancy)
    } else {
        const s = xa(e);
        if (s) {
            r = kd(s);
            const i = e.resources ? e.resources[0] : ""
              , a = Ai(i);
            a && (o = a.send)
        }
    }
    return !r || !o ? (n(void 0, 424),
    ic) : r.query(t, o, n)().abort
}
function ac() {}
function Qb(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
    setTimeout( () => {
        e.iconsLoaderFlag = !1,
        Wb(e)
    }
    ))
}
function Xb(e) {
    const t = []
      , n = [];
    return e.forEach(r => {
        (r.match(dd) ? t : n).push(r)
    }
    ),
    {
        valid: t,
        invalid: n
    }
}
function gr(e, t, n) {
    function r() {
        const o = e.pendingIcons;
        t.forEach(s => {
            o && o.delete(s),
            e.icons[s] || e.missing.add(s)
        }
        )
    }
    if (n && typeof n == "object")
        try {
            if (!gd(e, n).length) {
                r();
                return
            }
        } catch (o) {
            console.error(o)
        }
    r(),
    Qb(e)
}
function lc(e, t) {
    e instanceof Promise ? e.then(n => {
        t(n)
    }
    ).catch( () => {
        t(null)
    }
    ) : t(e)
}
function Zb(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t,
    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
    setTimeout( () => {
        e.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = e
          , o = e.iconsToLoad;
        if (delete e.iconsToLoad,
        !o || !o.length)
            return;
        const s = e.loadIcon;
        if (e.loadIcons && (o.length > 1 || !s)) {
            lc(e.loadIcons(o, r, n), c => {
                gr(e, o, c)
            }
            );
            return
        }
        if (s) {
            o.forEach(c => {
                const f = s(c, r, n);
                lc(f, d => {
                    const h = d ? {
                        prefix: r,
                        icons: {
                            [c]: d
                        }
                    } : null;
                    gr(e, [c], h)
                }
                )
            }
            );
            return
        }
        const {valid: i, invalid: a} = Xb(o);
        if (a.length && gr(e, a, null),
        !i.length)
            return;
        const l = r.match(dd) ? Ai(n) : null;
        if (!l) {
            gr(e, i, null);
            return
        }
        l.prepare(n, r, i).forEach(c => {
            Td(n, c, f => {
                gr(e, c.icons, f)
            }
            )
        }
        )
    }
    ))
}
const Sd = (e, t) => {
    const n = Kb(e, !0, yd())
      , r = Vb(n);
    if (!r.pending.length) {
        let l = !0;
        return t && setTimeout( () => {
            l && t(r.loaded, r.missing, r.pending, ac)
        }
        ),
        () => {
            l = !1
        }
    }
    const o = Object.create(null)
      , s = [];
    let i, a;
    return r.pending.forEach(l => {
        const {provider: u, prefix: c} = l;
        if (c === a && u === i)
            return;
        i = u,
        a = c,
        s.push(An(u, c));
        const f = o[u] || (o[u] = Object.create(null));
        f[c] || (f[c] = [])
    }
    ),
    r.pending.forEach(l => {
        const {provider: u, prefix: c, name: f} = l
          , d = An(u, c)
          , h = d.pendingIcons || (d.pendingIcons = new Set);
        h.has(f) || (h.add(f),
        o[u][c].push(f))
    }
    ),
    s.forEach(l => {
        const u = o[l.provider][l.prefix];
        u.length && Zb(l, u)
    }
    ),
    t ? qb(t, r, s) : ac
}
  , nE = e => new Promise( (t, n) => {
    const r = typeof e == "string" ? Gr(e, !0) : e;
    if (!r) {
        n(e);
        return
    }
    Sd([r || e], o => {
        if (o.length && r) {
            const s = Sa(r);
            if (s) {
                t({
                    ...lr,
                    ...s
                });
                return
            }
        }
        n(e)
    }
    )
}
);
function e1(e, t, n) {
    An("", t).loadIcons = e
}
function t1(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const o = t[r]
          , s = typeof o;
        r in _d ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const n1 = /[\s,]+/;
function r1(e, t) {
    t.split(n1).forEach(n => {
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    }
    )
}
function o1(e, t=0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(o) {
        for (; o < 0; )
            o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(e);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== e) {
        let o = 0;
        switch (n) {
        case "%":
            o = 25;
            break;
        case "deg":
            o = 90
        }
        if (o) {
            let s = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(s) ? 0 : (s = s / o,
            s % 1 === 0 ? r(s) : 0)
        }
    }
    return t
}
function s1(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
        n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}
function i1(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function a1(e) {
    return "data:image/svg+xml," + i1(e)
}
function l1(e) {
    return 'url("' + a1(e) + '")'
}
const cc = {
    ...vd,
    inline: !1
}
  , c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img"
}
  , u1 = {
    display: "inline-block"
}
  , Pi = {
    backgroundColor: "currentColor"
}
  , xd = {
    backgroundColor: "transparent"
}
  , uc = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , fc = {
    webkitMask: Pi,
    mask: Pi,
    background: xd
};
for (const e in fc) {
    const t = fc[e];
    for (const n in uc)
        t[e + n] = uc[n]
}
const Eo = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    Eo[e + "-flip"] = t,
    Eo[e.slice(0, 1) + "-flip"] = t,
    Eo[e + "Flip"] = t
}
);
function dc(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const hc = (e, t) => {
    const n = t1(cc, t)
      , r = {
        ...c1
    }
      , o = t.mode || "svg"
      , s = {}
      , i = t.style
      , a = typeof i == "object" && !(i instanceof Array) ? i : {};
    for (let p in t) {
        const v = t[p];
        if (v !== void 0)
            switch (p) {
            case "icon":
            case "style":
            case "onLoad":
            case "mode":
            case "ssr":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                n[p] = v === !0 || v === "true" || v === 1;
                break;
            case "flip":
                typeof v == "string" && r1(n, v);
                break;
            case "color":
                s.color = v;
                break;
            case "rotate":
                typeof v == "string" ? n[p] = o1(v) : typeof v == "number" && (n[p] = v);
                break;
            case "ariaHidden":
            case "aria-hidden":
                v !== !0 && v !== "true" && delete r["aria-hidden"];
                break;
            default:
                {
                    const k = Eo[p];
                    k ? (v === !0 || v === "true" || v === 1) && (n[k] = !0) : cc[p] === void 0 && (r[p] = v)
                }
            }
    }
    const l = Rb(e, n)
      , u = l.attributes;
    if (n.inline && (s.verticalAlign = "-0.125em"),
    o === "svg") {
        r.style = {
            ...s,
            ...a
        },
        Object.assign(r, u);
        let p = 0
          , v = t.id;
        return typeof v == "string" && (v = v.replace(/-/g, "_")),
        r.innerHTML = Mb(l.body, v ? () => v + "ID" + p++ : "iconifyVue"),
        Ne("svg", r)
    }
    const {body: c, width: f, height: d} = e
      , h = o === "mask" || (o === "bg" ? !1 : c.indexOf("currentColor") !== -1)
      , g = s1(c, {
        ...u,
        width: f + "",
        height: d + ""
    });
    return r.style = {
        ...s,
        "--svg": l1(g),
        width: dc(u.width),
        height: dc(u.height),
        ...u1,
        ...h ? Pi : xd,
        ...a
    },
    Ne("span", r)
}
;
yd(!0);
bd("", Ub);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !wb(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = t[n];
                    if (typeof o != "object" || !o || o.resources === void 0)
                        continue;
                    wd(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const f1 = {
    ...lr,
    body: ""
}
  , rE = st( (e, {emit: t}) => {
    const n = he(null);
    function r() {
        n.value && (n.value.abort?.(),
        n.value = null)
    }
    const o = he(!!e.ssr)
      , s = he("")
      , i = xe(null);
    function a() {
        const u = e.icon;
        if (typeof u == "object" && u !== null && typeof u.body == "string")
            return s.value = "",
            {
                data: u
            };
        let c;
        if (typeof u != "string" || (c = Gr(u, !1, !0)) === null)
            return null;
        let f = Sa(c);
        if (!f) {
            const g = n.value;
            return (!g || g.name !== u) && (f === null ? n.value = {
                name: u
            } : n.value = {
                name: u,
                abort: Sd([c], l)
            }),
            null
        }
        r(),
        s.value !== u && (s.value = u,
        pt( () => {
            t("load", u)
        }
        ));
        const d = e.customise;
        if (d) {
            f = Object.assign({}, f);
            const g = d(f.body, c.name, c.prefix, c.provider);
            typeof g == "string" && (f.body = g)
        }
        const h = ["iconify"];
        return c.prefix !== "" && h.push("iconify--" + c.prefix),
        c.provider !== "" && h.push("iconify--" + c.provider),
        {
            data: f,
            classes: h
        }
    }
    function l() {
        const u = a();
        u ? u.data !== i.value?.data && (i.value = u) : i.value = null
    }
    return o.value ? l() : it( () => {
        o.value = !0,
        l()
    }
    ),
    Se( () => e.icon, l),
    ir(r),
    () => {
        const u = i.value;
        if (!u)
            return hc(f1, e);
        let c = e;
        return u.classes && (c = {
            ...e,
            class: u.classes.join(" ")
        }),
        hc({
            ...lr,
            ...u.data
        }, c)
    }
}
, {
    props: ["icon", "mode", "ssr", "width", "height", "style", "color", "inline", "rotate", "hFlip", "horizontalFlip", "vFlip", "verticalFlip", "flip", "id", "ariaHidden", "customise", "title"],
    emits: ["load"]
})
  , pc = {
    getAPIConfig: vs,
    setAPIModule: bd,
    sendAPIQuery: Td,
    setFetch: Nb,
    getFetch: Db,
    listAPIProviders: Lb
}
  , d1 = mt({
    name: "@nuxt/icon",
    setup() {
        const e = ar()
          , t = fd().icon;
        pc.setFetch($fetch.native);
        const n = [];
        if (t.provider === "server") {
            const o = e.app?.baseURL?.replace(/\/$/, "") ?? "";
            n.push(o + (t.localApiEndpoint || "/api/_nuxt_icon")),
            (t.fallbackToApi === !0 || t.fallbackToApi === "client-only") && n.push(t.iconifyApiEndpoint)
        } else
            t.provider === "none" ? pc.setFetch( () => Promise.resolve(new Response)) : n.push(t.iconifyApiEndpoint);
        async function r(o, s) {
            try {
                const i = await $fetch(n[0] + "/" + s + ".json", {
                    query: {
                        icons: o.join(",")
                    }
                });
                if (!i || i.prefix !== s || !i.icons)
                    throw new Error("Invalid data" + JSON.stringify(i));
                return i
            } catch (i) {
                return console.error("Failed to load custom icons", i),
                null
            }
        }
        wd("", {
            resources: n
        });
        for (const o of t.customCollections || [])
            o && e1(r, o)
    }
})
  , h1 = [Jy, t_, bv, Ev, kv, Tv, xv, Zv, tb, lb, hb, d1];
function Ca(e) {
    return Vr() ? ($i(e),
    !0) : !1
}
const Vs = new WeakMap
  , p1 = (...e) => {
    var t;
    const n = e[0]
      , r = (t = Ae()) == null ? void 0 : t.proxy;
    if (r == null && !In())
        throw new Error("injectLocal must be called in setup");
    return r && Vs.has(r) && n in Vs.get(r) ? Vs.get(r)[n] : Me(...e)
}
  , m1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g1 = Object.prototype.toString
  , y1 = e => g1.call(e) === "[object Object]"
  , _1 = () => {}
;
function v1(...e) {
    if (e.length !== 1)
        return Wr(...e);
    const t = e[0];
    return typeof t == "function" ? or(Vi( () => ({
        get: t,
        set: _1
    }))) : he(t)
}
function b1(e, t) {
    function n(...r) {
        return new Promise( (o, s) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).catch(s)
        }
        )
    }
    return n
}
const Cd = e => e();
function w1(e=Cd, t={}) {
    const {initialState: n="active"} = t
      , r = v1(n === "active");
    function o() {
        r.value = !1
    }
    function s() {
        r.value = !0
    }
    const i = (...a) => {
        r.value && e(...a)
    }
    ;
    return {
        isActive: or(r),
        pause: o,
        resume: s,
        eventFilter: i
    }
}
function E1(e, t=!1, n="Timeout") {
    return new Promise( (r, o) => {
        setTimeout(t ? () => o(n) : r, e)
    }
    )
}
function Rd(e) {
    return e
}
function mc(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function Ws(e) {
    return Array.isArray(e) ? e : [e]
}
function k1(e) {
    return Ae()
}
function T1(e, t, n={}) {
    const {eventFilter: r=Cd, ...o} = n;
    return Se(e, b1(r, t), o)
}
function S1(e, t, n={}) {
    const {eventFilter: r, initialState: o="active", ...s} = n
      , {eventFilter: i, pause: a, resume: l, isActive: u} = w1(r, {
        initialState: o
    });
    return {
        stop: T1(e, t, {
            ...s,
            eventFilter: i
        }),
        pause: a,
        resume: l,
        isActive: u
    }
}
function Ad(e, t=!0, n) {
    k1() ? it(e, n) : t ? e() : pt(e)
}
function x1(e, t, n) {
    return Se(e, t, {
        ...n,
        immediate: !0
    })
}
const Yt = m1 ? window : void 0;
function C1(e) {
    var t;
    const n = ae(e);
    return (t = n?.$el) != null ? t : n
}
function Vt(...e) {
    const t = []
      , n = () => {
        t.forEach(a => a()),
        t.length = 0
    }
      , r = (a, l, u, c) => (a.addEventListener(l, u, c),
    () => a.removeEventListener(l, u, c))
      , o = le( () => {
        const a = Ws(ae(e[0])).filter(l => l != null);
        return a.every(l => typeof l != "string") ? a : void 0
    }
    )
      , s = x1( () => {
        var a, l;
        return [(l = (a = o.value) == null ? void 0 : a.map(u => C1(u))) != null ? l : [Yt].filter(u => u != null), Ws(ae(o.value ? e[1] : e[0])), Ws(ie(o.value ? e[2] : e[1])), ae(o.value ? e[3] : e[2])]
    }
    , ([a,l,u,c]) => {
        if (n(),
        !a?.length || !l?.length || !u?.length)
            return;
        const f = y1(c) ? {
            ...c
        } : c;
        t.push(...a.flatMap(d => l.flatMap(h => u.map(g => r(d, h, g, f)))))
    }
    , {
        flush: "post"
    })
      , i = () => {
        s(),
        n()
    }
    ;
    return Ca(n),
    i
}
function R1() {
    const e = xe(!1)
      , t = Ae();
    return t && it( () => {
        e.value = !0
    }
    , t),
    e
}
function A1(e) {
    const t = R1();
    return le( () => (t.value,
    !!e()))
}
function P1(e, t={}) {
    const {immediate: n=!0, fpsLimit: r=void 0, window: o=Yt, once: s=!1} = t
      , i = xe(!1)
      , a = le( () => r ? 1e3 / ae(r) : null);
    let l = 0
      , u = null;
    function c(h) {
        if (!i.value || !o)
            return;
        l || (l = h);
        const g = h - l;
        if (a.value && g < a.value) {
            u = o.requestAnimationFrame(c);
            return
        }
        if (l = h,
        e({
            delta: g,
            timestamp: h
        }),
        s) {
            i.value = !1,
            u = null;
            return
        }
        u = o.requestAnimationFrame(c)
    }
    function f() {
        !i.value && o && (i.value = !0,
        l = 0,
        u = o.requestAnimationFrame(c))
    }
    function d() {
        i.value = !1,
        u != null && o && (o.cancelAnimationFrame(u),
        u = null)
    }
    return n && f(),
    Ca(d),
    {
        isActive: or(i),
        pause: d,
        resume: f
    }
}
const O1 = Symbol("vueuse-ssr-width");
function M1() {
    const e = In() ? p1(O1, null) : null;
    return typeof e == "number" ? e : void 0
}
function L1(e, t={}) {
    const {window: n=Yt, ssrWidth: r=M1()} = t
      , o = A1( () => n && "matchMedia" in n && typeof n.matchMedia == "function")
      , s = xe(typeof r == "number")
      , i = xe()
      , a = xe(!1)
      , l = u => {
        a.value = u.matches
    }
    ;
    return ia( () => {
        if (s.value) {
            s.value = !o.value;
            const u = ae(e).split(",");
            a.value = u.some(c => {
                const f = c.includes("not all")
                  , d = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
                  , h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let g = !!(d || h);
                return d && g && (g = r >= mc(d[1])),
                h && g && (g = r <= mc(h[1])),
                f ? !g : g
            }
            );
            return
        }
        o.value && (i.value = n.matchMedia(ae(e)),
        a.value = i.value.matches)
    }
    ),
    Vt(i, "change", l, {
        passive: !0
    }),
    le( () => a.value)
}
const co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , uo = "__vueuse_ssr_handlers__"
  , I1 = N1();
function N1() {
    return uo in co || (co[uo] = co[uo] || {}),
    co[uo]
}
function D1(e, t) {
    return I1[e] || t
}
function H1(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const $1 = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , gc = "vueuse-storage";
function Pd(e, t, n, r={}) {
    var o;
    const {flush: s="pre", deep: i=!0, listenToStorageChanges: a=!0, writeDefaults: l=!0, mergeDefaults: u=!1, shallow: c, window: f=Yt, eventFilter: d, onError: h=j => {
        console.error(j)
    }
    , initOnMounted: g} = r
      , p = (c ? xe : he)(typeof t == "function" ? t() : t)
      , v = le( () => ae(e));
    if (!n)
        try {
            n = D1("getDefaultStorage", () => {
                var j;
                return (j = Yt) == null ? void 0 : j.localStorage
            }
            )()
        } catch (j) {
            h(j)
        }
    if (!n)
        return p;
    const k = ae(t)
      , w = H1(k)
      , m = (o = r.serializer) != null ? o : $1[w]
      , {pause: _, resume: E} = S1(p, j => P(j), {
        flush: s,
        deep: i,
        eventFilter: d
    });
    Se(v, () => O(), {
        flush: s
    });
    let T = !1;
    const x = j => {
        g && !T || O(j)
    }
      , N = j => {
        g && !T || K(j)
    }
    ;
    f && a && (n instanceof Storage ? Vt(f, "storage", x, {
        passive: !0
    }) : Vt(f, gc, N)),
    g ? Ad( () => {
        T = !0,
        O()
    }
    ) : O();
    function R(j, J) {
        if (f) {
            const H = {
                key: v.value,
                oldValue: j,
                newValue: J,
                storageArea: n
            };
            f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage",H) : new CustomEvent(gc,{
                detail: H
            }))
        }
    }
    function P(j) {
        try {
            const J = n.getItem(v.value);
            if (j == null)
                R(J, null),
                n.removeItem(v.value);
            else {
                const H = m.write(j);
                J !== H && (n.setItem(v.value, H),
                R(J, H))
            }
        } catch (J) {
            h(J)
        }
    }
    function q(j) {
        const J = j ? j.newValue : n.getItem(v.value);
        if (J == null)
            return l && k != null && n.setItem(v.value, m.write(k)),
            k;
        if (!j && u) {
            const H = m.read(J);
            return typeof u == "function" ? u(H, k) : w === "object" && !Array.isArray(H) ? {
                ...k,
                ...H
            } : H
        } else
            return typeof J != "string" ? J : m.read(J)
    }
    function O(j) {
        if (!(j && j.storageArea !== n)) {
            if (j && j.key == null) {
                p.value = k;
                return
            }
            if (!(j && j.key !== v.value)) {
                _();
                try {
                    const J = m.write(p.value);
                    (j === void 0 || j?.newValue !== J) && (p.value = q(j))
                } catch (J) {
                    h(J)
                } finally {
                    j ? pt(E) : E()
                }
            }
        }
    }
    function K(j) {
        O(j.detail)
    }
    return p
}
function oE(e, t, n={}) {
    const {window: r=Yt} = n;
    return Pd(e, t, r?.localStorage, n)
}
const j1 = {
    page: e => [e.pageX, e.pageY],
    client: e => [e.clientX, e.clientY],
    screen: e => [e.screenX, e.screenY],
    movement: e => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};
function F1(e={}) {
    const {type: t="page", touch: n=!0, resetOnTouchEnds: r=!1, initialValue: o={
        x: 0,
        y: 0
    }, window: s=Yt, target: i=s, scroll: a=!0, eventFilter: l} = e;
    let u = null
      , c = 0
      , f = 0;
    const d = xe(o.x)
      , h = xe(o.y)
      , g = xe(null)
      , p = typeof t == "function" ? t : j1[t]
      , v = x => {
        const N = p(x);
        u = x,
        N && ([d.value,h.value] = N,
        g.value = "mouse"),
        s && (c = s.scrollX,
        f = s.scrollY)
    }
      , k = x => {
        if (x.touches.length > 0) {
            const N = p(x.touches[0]);
            N && ([d.value,h.value] = N,
            g.value = "touch")
        }
    }
      , w = () => {
        if (!u || !s)
            return;
        const x = p(u);
        u instanceof MouseEvent && x && (d.value = x[0] + s.scrollX - c,
        h.value = x[1] + s.scrollY - f)
    }
      , m = () => {
        d.value = o.x,
        h.value = o.y
    }
      , _ = l ? x => l( () => v(x), {}) : x => v(x)
      , E = l ? x => l( () => k(x), {}) : x => k(x)
      , T = l ? () => l( () => w(), {}) : () => w();
    if (i) {
        const x = {
            passive: !0
        };
        Vt(i, ["mousemove", "dragover"], _, x),
        n && t !== "movement" && (Vt(i, ["touchstart", "touchmove"], E, x),
        r && Vt(i, "touchend", m, x)),
        a && t === "page" && Vt(s, "scroll", T, x)
    }
    return {
        x: d,
        y: h,
        sourceType: g
    }
}
const B1 = {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
}
  , sE = Object.assign({}, {
    linear: Rd
}, B1);
function U1([e,t,n,r]) {
    const o = (c, f) => 1 - 3 * f + 3 * c
      , s = (c, f) => 3 * f - 6 * c
      , i = c => 3 * c
      , a = (c, f, d) => ((o(f, d) * c + s(f, d)) * c + i(f)) * c
      , l = (c, f, d) => 3 * o(f, d) * c * c + 2 * s(f, d) * c + i(f)
      , u = c => {
        let f = c;
        for (let d = 0; d < 4; ++d) {
            const h = l(f, e, n);
            if (h === 0)
                return f;
            const g = a(f, e, n) - c;
            f -= g / h
        }
        return f
    }
    ;
    return c => e === t && n === r ? c : a(u(c), t, r)
}
function yc(e, t, n) {
    return e + n * (t - e)
}
function zs(e) {
    return (typeof e == "number" ? [e] : e) || []
}
function V1(e, t, n, r={}) {
    var o, s;
    const {window: i=Yt} = r
      , a = ae(t)
      , l = ae(n)
      , u = zs(a)
      , c = zs(l)
      , f = (o = ae(r.duration)) != null ? o : 1e3
      , d = Date.now()
      , h = Date.now() + f
      , g = typeof r.transition == "function" ? r.transition : (s = ae(r.transition)) != null ? s : Rd
      , p = typeof g == "function" ? g : U1(g);
    return new Promise(v => {
        e.value = a;
        const k = () => {
            var w;
            if ((w = r.abort) != null && w.call(r)) {
                v();
                return
            }
            const m = Date.now()
              , _ = p((m - d) / f)
              , E = zs(e.value).map( (T, x) => yc(u[x], c[x], _));
            Array.isArray(e.value) ? e.value = E.map( (T, x) => {
                var N, R;
                return yc((N = u[x]) != null ? N : 0, (R = c[x]) != null ? R : 0, _)
            }
            ) : typeof e.value == "number" && (e.value = E[0]),
            m < h ? i?.requestAnimationFrame(k) : (e.value = l,
            v())
        }
        ;
        k()
    }
    )
}
function iE(e, t={}) {
    let n = 0;
    const r = () => {
        const s = ae(e);
        return typeof s == "number" ? s : s.map(ae)
    }
      , o = he(r());
    return Se(r, async s => {
        var i, a;
        if (ae(t.disabled))
            return;
        const l = ++n;
        if (t.delay && await E1(ae(t.delay)),
        l !== n)
            return;
        const u = Array.isArray(s) ? s.map(ae) : ae(s);
        (i = t.onStarted) == null || i.call(t),
        await V1(o, o.value, u, {
            ...t,
            abort: () => {
                var c;
                return l !== n || ((c = t.abort) == null ? void 0 : c.call(t))
            }
        }),
        (a = t.onFinished) == null || a.call(t)
    }
    , {
        deep: !0
    }),
    Se( () => ae(t.disabled), s => {
        s && (n++,
        o.value = r())
    }
    ),
    Ca( () => {
        n++
    }
    ),
    le( () => ae(t.disabled) ? r() : o.value)
}
function W1(e={}) {
    const {window: t=Yt, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: o=!0, includeScrollbar: s=!0, type: i="inner"} = e
      , a = xe(n)
      , l = xe(r)
      , u = () => {
        if (t)
            if (i === "outer")
                a.value = t.outerWidth,
                l.value = t.outerHeight;
            else if (i === "visual" && t.visualViewport) {
                const {width: f, height: d, scale: h} = t.visualViewport;
                a.value = Math.round(f * h),
                l.value = Math.round(d * h)
            } else
                s ? (a.value = t.innerWidth,
                l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth,
                l.value = t.document.documentElement.clientHeight)
    }
    ;
    u(),
    Ad(u);
    const c = {
        passive: !0
    };
    if (Vt("resize", u, c),
    t && i === "visual" && t.visualViewport && Vt(t.visualViewport, "resize", u, c),
    o) {
        const f = L1("(orientation: portrait)");
        Se(f, () => u())
    }
    return {
        width: a,
        height: l
    }
}
const z1 = st({
    __name: "dot-grid",
    props: {
        enabled: {
            type: Boolean,
            default: !0
        },
        dotSpacing: {
            default: 17
        },
        dotSize: {
            default: 1.5
        },
        glowRadius: {
            default: 100
        },
        dotColor: {
            default: "#44403c"
        },
        glowColor: {
            default: "#3b82f6"
        },
        bgColor: {
            default: "#0c0a09"
        },
        cooldown: {
            default: .02
        }
    },
    setup(e) {
        const t = e
          , n = he(null)
          , {x: r, y: o} = F1({
            type: "client"
        })
          , {width: s, height: i} = W1()
          , a = he(t.enabled);
        let l = new Float32Array(0)
          , u = 0
          , c = 0;
        function f(p, v) {
            if (p === u && v === c)
                return;
            const k = new Float32Array(p * v)
              , w = Math.min(p, u)
              , m = Math.min(v, c);
            for (let _ = 0; _ < w; _++)
                for (let E = 0; E < m; E++)
                    k[_ * v + E] = l[_ * c + E];
            l = k,
            u = p,
            c = v
        }
        Se([s, i], ([p,v]) => {
            const k = n.value;
            k && (k.width = p,
            k.height = v)
        }
        );
        function d(p) {
            return p * p * (3 - 2 * p)
        }
        function h(p) {
            const v = parseInt(p.replace("#", ""), 16);
            return [v >> 16 & 255, v >> 8 & 255, v & 255]
        }
        function g(p, v, k) {
            const [w,m,_] = h(p)
              , [E,T,x] = h(v)
              , N = Math.round(w + (E - w) * k)
              , R = Math.round(m + (T - m) * k)
              , P = Math.round(_ + (x - _) * k);
            return `rgb(${N},${R},${P})`
        }
        return P1( () => {
            const p = n.value;
            if (!p)
                return;
            const v = p.getContext("2d");
            if (!v)
                return;
            const {dotSpacing: k, dotSize: w, glowRadius: m, dotColor: _, glowColor: E, bgColor: T, cooldown: x} = t
              , N = p.width
              , R = p.height
              , P = w / 2
              , q = a.value ? r.value : -99999
              , O = a.value ? o.value : -99999
              , K = Math.ceil(N / k)
              , j = Math.ceil(R / k);
            f(K, j),
            v.fillStyle = T,
            v.fillRect(0, 0, N, R);
            let J = 0;
            for (let H = k / 2; H < N; H += k,
            J++) {
                let Z = 0;
                for (let W = k / 2; W < R; W += k,
                Z++) {
                    const ke = H - q
                      , gt = W - O
                      , at = Math.sqrt(ke * ke + gt * gt)
                      , Le = d(Math.max(0, 1 - at / m))
                      , Tt = J * j + Z
                      , St = l[Tt] || 0;
                    l[Tt] = Le >= St ? Le : St + (Le - St) * x;
                    const Xt = l[Tt];
                    v.fillStyle = Xt > .001 ? g(_, E, Xt) : _,
                    v.beginPath(),
                    v.arc(H, W, P + Xt * .8, 0, Math.PI * 2),
                    v.fill()
                }
            }
        }
        ),
        it( () => {
            const p = n.value;
            p.width = s.value,
            p.height = i.value
        }
        ),
        (p, v) => (be(),
        Ie("canvas", {
            ref_key: "canvasRef",
            ref: n,
            class: "fixed inset-0 pointer-events-none opacity-40",
            style: {
                "z-index": "0"
            }
        }, null, 512))
    }
})
  , q1 = Object.assign(z1, {
    __name: "DotGrid"
})
  , Od = Symbol.for("nuxt:client-only")
  , K1 = st({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {slots: t, attrs: n}) {
        const r = xe(!1);
        it( () => {
            r.value = !0
        }
        );
        const o = Ae();
        return o && (o._nuxtClientOnly = !0),
        Ot(Od, !0),
        () => {
            if (r.value) {
                const l = t.default?.();
                return l && l.length === 1 ? [Et(l[0], n)] : l
            }
            const s = t.fallback || t.placeholder;
            if (s)
                return Ne(s);
            const i = e.fallback || e.placeholder || ""
              , a = e.fallbackTag || e.placeholderTag || "span";
            return Ie(a, n, i)
        }
    }
})
  , G1 = (...e) => e.find(t => t !== void 0);
function Y1(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
        return typeof s == "string" && s.startsWith("#")
    }
    function r(s, i, a) {
        const l = a ?? e.trailingSlash;
        if (!s || l !== "append" && l !== "remove")
            return s;
        if (typeof s == "string")
            return fo(s, l);
        const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
        return {
            ...s,
            name: void 0,
            path: fo(u, l)
        }
    }
    function o(s) {
        const i = Ye()
          , a = ar()
          , l = le( () => !!s.target && s.target !== "_self")
          , u = le( () => {
            const v = s.to || s.href || "";
            return typeof v == "string" && Qt(v, {
                acceptRelative: !0
            })
        }
        )
          , c = Qs("RouterLink")
          , f = c && typeof c != "string" ? c.useLink : void 0
          , d = le( () => {
            if (s.external)
                return !0;
            const v = s.to || s.href || "";
            return typeof v == "object" ? !1 : v === "" || u.value
        }
        )
          , h = le( () => {
            const v = s.to || s.href || "";
            return d.value ? v : r(v, i.resolve, s.trailingSlash)
        }
        )
          , g = d.value ? void 0 : f?.({
            ...s,
            to: h
        })
          , p = le( () => {
            const v = s.trailingSlash ?? e.trailingSlash;
            if (!h.value || u.value || n(h.value))
                return h.value;
            if (d.value) {
                const k = typeof h.value == "object" && "path" in h.value ? vi(h.value) : h.value
                  , w = typeof k == "object" ? i.resolve(k).href : k;
                return fo(w, v)
            }
            return typeof h.value == "object" ? i.resolve(h.value)?.href ?? null : fo(fs(a.app.baseURL, h.value), v)
        }
        );
        return {
            to: h,
            hasTarget: l,
            isAbsoluteUrl: u,
            isExternal: d,
            href: p,
            isActive: g?.isActive ?? le( () => h.value === i.currentRoute.value.path),
            isExactActive: g?.isExactActive ?? le( () => h.value === i.currentRoute.value.path),
            route: g?.route ?? le( () => i.resolve(h.value)),
            async navigate(v) {
                await ay(p.value, {
                    replace: s.replace,
                    external: d.value || l.value
                })
            }
        }
    }
    return st({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            trailingSlash: {
                type: String,
                default: void 0,
                required: !1
            }
        },
        useLink: o,
        setup(s, {slots: i}) {
            const a = Ye()
              , {to: l, href: u, navigate: c, isExternal: f, hasTarget: d, isAbsoluteUrl: h} = o(s)
              , g = xe(!1)
              , p = he(null)
              , v = m => {
                p.value = s.custom ? m?.$el?.nextElementSibling : m?.$el
            }
            ;
            function k(m) {
                return !g.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : s.prefetchOn?.[m] ?? e.prefetchOn?.[m]) && (s.prefetch ?? e.prefetch) !== !1 && s.noPrefetch !== !0 && s.target !== "_blank" && !X1()
            }
            async function w(m=we()) {
                if (g.value)
                    return;
                g.value = !0;
                const _ = typeof l.value == "string" ? l.value : f.value ? vi(l.value) : a.resolve(l.value).fullPath
                  , E = f.value ? new URL(_,window.location.href).href : _;
                await Promise.all([m.hooks.callHook("link:prefetch", E).catch( () => {}
                ), !f.value && !d.value && ud(l.value, a).catch( () => {}
                )])
            }
            if (k("visibility")) {
                const m = we();
                let _, E = null;
                it( () => {
                    const T = J1();
                    ys( () => {
                        _ = xi( () => {
                            p?.value?.tagName && (E = T.observe(p.value, async () => {
                                E?.(),
                                E = null,
                                await w(m)
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                Ln( () => {
                    _ && wv(_),
                    E?.(),
                    E = null
                }
                )
            }
            return () => {
                if (!f.value && !d.value && !n(l.value)) {
                    const E = {
                        ref: v,
                        to: l.value,
                        activeClass: s.activeClass || e.activeClass,
                        exactActiveClass: s.exactActiveClass || e.exactActiveClass,
                        replace: s.replace,
                        ariaCurrentValue: s.ariaCurrentValue,
                        custom: s.custom
                    };
                    return s.custom || (k("interaction") && (E.onPointerenter = w.bind(null, void 0),
                    E.onFocus = w.bind(null, void 0)),
                    g.value && (E.class = s.prefetchedClass || e.prefetchedClass),
                    E.rel = s.rel || void 0),
                    Ne(Qs("RouterLink"), E, i.default)
                }
                const m = s.target || null
                  , _ = G1(s.noRel ? "" : s.rel, e.externalRelAttribute, h.value || d.value ? "noopener noreferrer" : "") || null;
                return s.custom ? i.default ? i.default({
                    href: u.value,
                    navigate: c,
                    prefetch: w,
                    get route() {
                        if (!u.value)
                            return;
                        const E = new URL(u.value,window.location.href);
                        return {
                            path: E.pathname,
                            fullPath: E.pathname,
                            get query() {
                                return ha(E.search)
                            },
                            hash: E.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: u.value
                        }
                    },
                    rel: _,
                    target: m,
                    isExternal: f.value || d.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : Ne("a", {
                    ref: p,
                    href: u.value || null,
                    rel: _,
                    target: m,
                    onClick: E => {
                        if (!(f.value || d.value))
                            return E.preventDefault(),
                            s.replace ? a.replace(u.value) : a.push(u.value)
                    }
                }, i.default?.())
            }
        }
    })
}
const Md = Y1(Bg);
function fo(e, t) {
    const n = t === "append" ? Cf : Xn;
    return Qt(e) && !e.startsWith("http") ? e : n(e, !0)
}
function J1() {
    const e = we();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
      , r = (s, i) => (t ||= new IntersectionObserver(a => {
        for (const l of a) {
            const u = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
        }
    }
    ),
    n.set(s, i),
    t.observe(s),
    () => {
        n.delete(s),
        t?.unobserve(s),
        n.size === 0 && (t?.disconnect(),
        t = null)
    }
    );
    return e._observer = {
        observe: r
    }
}
const Q1 = /2g/;
function X1() {
    const e = navigator.connection;
    return !!(e && (e.saveData || Q1.test(e.effectiveType)))
}
const Ld = (e="RouteProvider") => st({
    name: e,
    props: {
        route: {
            type: Object,
            required: !0
        },
        vnode: Object,
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(t) {
        const n = t.renderKey
          , r = t.route
          , o = {};
        for (const s in t.route)
            Object.defineProperty(o, s, {
                get: () => n === t.renderKey ? t.route[s] : r[s],
                enumerable: !0
            });
        return Ot(ds, Pt(o)),
        () => t.vnode ? Ne(t.vnode, {
            ref: t.vnodeRef
        }) : t.vnode
    }
})
  , Z1 = Ld()
  , _c = new WeakMap
  , ew = st({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        const o = we()
          , s = he()
          , i = Me(ds, null);
        let a;
        r({
            pageRef: s
        });
        const l = Me(sy, null);
        let u;
        const c = o.deferHydration();
        if (o.isHydrating) {
            const d = o.hooks.hookOnce("app:error", c);
            Ye().beforeEach(d)
        }
        e.pageKey && Se( () => e.pageKey, (d, h) => {
            d !== h && o.callHook("page:loading:start")
        }
        );
        let f = !1;
        {
            const d = Ye().beforeResolve( () => {
                f = !1
            }
            );
            Ln( () => {
                d()
            }
            )
        }
        return () => Ne(ld, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: d => {
                const h = nw(i, d.route, d.Component)
                  , g = i && i.matched.length === d.route.matched.length;
                if (!d.Component) {
                    if (u && !g)
                        return u;
                    c();
                    return
                }
                if (u && l && !l.isCurrent(d.route))
                    return u;
                if (h && i && (!l || l?.isCurrent(i)))
                    return g ? u : null;
                const p = Ti(d, e.pageKey)
                  , v = rw(i, d.route, d.Component);
                !o.isHydrating && a === p && !v && pt( () => {
                    f = !0,
                    o.callHook("page:loading:end")
                }
                ),
                a = p;
                const k = !!(e.transition ?? d.route.meta.pageTransition ?? kl)
                  , w = k && tw([e.transition, d.route.meta.pageTransition, kl, {
                    onAfterLeave() {
                        delete o._runningTransition,
                        o.callHook("page:transition:finish", d.Component)
                    }
                }])
                  , m = e.keepalive ?? d.route.meta.keepalive ?? Fg;
                return u = cv(k && w, lv(m, Ne(aa, {
                    suspensible: !0,
                    onPending: () => {
                        k && (o._runningTransition = !0),
                        o.callHook("page:start", d.Component)
                    }
                    ,
                    onResolve: () => {
                        pt( () => o.callHook("page:finish", d.Component).then( () => {
                            if (delete o._runningTransition,
                            !f && !v)
                                return f = !0,
                                o.callHook("page:loading:end")
                        }
                        ).finally(c))
                    }
                }, {
                    default: () => {
                        const _ = {
                            key: p || void 0,
                            vnode: n.default ? ow(n.default, d) : d.Component,
                            route: d.route,
                            renderKey: p || void 0,
                            trackRootNodes: k,
                            vnodeRef: s
                        };
                        if (!m)
                            return Ne(Z1, _);
                        const E = d.Component.type
                          , T = E;
                        let x = _c.get(T);
                        return x || (x = Ld(E.name || E.__name),
                        _c.set(T, x)),
                        Ne(x, _)
                    }
                }))).default(),
                u
            }
        })
    }
});
function tw(e) {
    const t = e.filter(Boolean).map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? Ta(n.onAfterLeave) : void 0
    }));
    return Bf(...t)
}
function nw(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(o => o.components?.default === n?.type);
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some( (o, s) => o.components?.default !== e.matched[s]?.components?.default) || n && Ti({
        route: t,
        Component: n
    }) !== Ti({
        route: e,
        Component: n
    })
}
function rw(e, t, n) {
    return e ? t.matched.findIndex(o => o.components?.default === n?.type) < t.matched.length - 1 : !1
}
function ow(e, t) {
    const n = e(t);
    return n.length === 1 ? Ne(n[0]) : Ne(Pe, void 0, n)
}
const sw = ga("/avatar.png")
  , aE = async () => bt.value ? bt.value : new Promise(e => {
    const t = Se(bt, n => {
        n && (t(),
        e(n))
    }
    )
}
)
  , bt = he(null)
  , vc = () => Ko.value = ""
  , qo = he([]);
$fetch("/api/default-flags").then(e => {
    qo.value = e.flags
}
);
window && (window.flags = qo);
const Ko = Pd("authorizationToken", "");
Se(Ko, e => {
    e ? (console.log("[AUTH] Auth token changed, getting user..."),
    fetch("https://id.tori.dog/api/auth/profile", {
        headers: {
            Authorization: `Bearer ${e}`
        }
    }).then(t => t.json()).then(t => {
        if (bt.value = {
            ...t.user,
            subscription: t.subscription || {
                isSubscribed: !1,
                subscriptionTier: "none"
            }
        },
        window) {
            const n = window;
            n.activeUser = bt
        }
        console.log(`[AUTH] Hello, ${bt?.value?.email}!`),
        $fetch("/api/flags", {
            headers: {
                Authorization: `Bearer ${e}`
            }
        }).then(n => {
            qo.value = n.flags,
            console.log(`[FLAGS] ${JSON.stringify(qo.value)}`)
        }
        )
    }
    )) : bt.value = null
}
, {
    immediate: !0
});
const lE = le( () => Ko.value ? {
    Authorization: `Bearer ${Ko.value}`,
    "X-Client": "tori-web"
} : {})
  , Id = (e, t, n) => {}
  , iw = async (e, t) => {
    {
        const n = new URLSearchParams({
            type: e
        });
        for (const i in t)
            n.append(i, t[i]);
        const {data: r, error: o, metadata: s} = await $fetch("/api/data?" + n.toString(), {
            method: "GET"
        });
        if (o)
            throw new Error(`Failed to fetch analytics data: ${o.statusMessage}`);
        return {
            success: !0,
            data: r,
            metadata: s
        }
    }
}
  , aw = async (e, t) => {
    const n = new URLSearchParams({
        type: e
    });
    for (const o in t)
        n.append(o, t[o]);
    n.append("onlyTotals", "1");
    const {metadata: r} = await $fetch("/api/data?" + n.toString(), {
        method: "GET"
    });
    return console.log(r),
    r?.totalAllTime || 0
}
;
window.analytics = {
    writeAnalytics: Id,
    getAnalytics: iw,
    getTotals: aw
};
const lw = {
    trailing: !0
};
function cw(e, t=25, n={}) {
    if (n = {
        ...lw,
        ...n
    },
    !Number.isFinite(t))
        throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (f, d) => (i = uw(e, f, d),
    i.finally( () => {
        if (i = null,
        n.trailing && a && !o) {
            const h = l(f, a);
            return a = null,
            h
        }
    }
    ),
    i)
      , u = function(...f) {
        return n.trailing && (a = f),
        i || new Promise(d => {
            const h = !o && n.leading;
            clearTimeout(o),
            o = setTimeout( () => {
                o = null;
                const g = n.leading ? r : l(this, f);
                a = null;
                for (const p of s)
                    p(g);
                s = []
            }
            , t),
            h ? (r = l(this, f),
            d(r)) : s.push(d)
        }
        )
    }
      , c = f => {
        f && (clearTimeout(f),
        o = null)
    }
    ;
    return u.isPending = () => !!o,
    u.cancel = () => {
        c(o),
        s = [],
        a = null
    }
    ,
    u.flush = () => {
        if (c(o),
        !a || i)
            return;
        const f = a;
        return a = null,
        l(this, f)
    }
    ,
    u
}
async function uw(e, t, n) {
    return await e.apply(t, n)
}
function Oi(e) {
    return typeof e == "string" ? `'${e}'` : new fw().serialize(e)
}
const fw = (function() {
    class e {
        #e = new Map;
        compare(n, r) {
            const o = typeof n
              , s = typeof r;
            return o === "string" && s === "string" ? n.localeCompare(r) : o === "number" && s === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(r, !0))
        }
        serialize(n, r) {
            if (n === null)
                return "null";
            switch (typeof n) {
            case "string":
                return r ? n : `'${n}'`;
            case "bigint":
                return `${n}n`;
            case "object":
                return this.$object(n);
            case "function":
                return this.$function(n)
            }
            return String(n)
        }
        serializeObject(n) {
            const r = Object.prototype.toString.call(n);
            if (r !== "[object Object]")
                return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n);
            const o = n.constructor
              , s = o === Object || o === void 0 ? "" : o.name;
            if (s !== "" && globalThis[s] === o)
                return this.serializeBuiltInType(s, n);
            if (typeof n.toJSON == "function") {
                const i = n.toJSON();
                return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`)
            }
            return this.serializeObjectEntries(s, Object.entries(n))
        }
        serializeBuiltInType(n, r) {
            const o = this["$" + n];
            if (o)
                return o.call(this, r);
            if (typeof r?.entries == "function")
                return this.serializeObjectEntries(n, r.entries());
            throw new Error(`Cannot serialize ${n}`)
        }
        serializeObjectEntries(n, r) {
            const o = Array.from(r).sort( (i, a) => this.compare(i[0], a[0]));
            let s = `${n}{`;
            for (let i = 0; i < o.length; i++) {
                const [a,l] = o[i];
                s += `${this.serialize(a, !0)}:${this.serialize(l)}`,
                i < o.length - 1 && (s += ",")
            }
            return s + "}"
        }
        $object(n) {
            let r = this.#e.get(n);
            return r === void 0 && (this.#e.set(n, `#${this.#e.size}`),
            r = this.serializeObject(n),
            this.#e.set(n, r)),
            r
        }
        $function(n) {
            const r = Function.prototype.toString.call(n);
            return r.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g, "")}`
        }
        $Array(n) {
            let r = "[";
            for (let o = 0; o < n.length; o++)
                r += this.serialize(n[o]),
                o < n.length - 1 && (r += ",");
            return r + "]"
        }
        $Date(n) {
            try {
                return `Date(${n.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(n) {
            return `ArrayBuffer[${new Uint8Array(n).join(",")}]`
        }
        $Set(n) {
            return `Set${this.$Array(Array.from(n).sort( (r, o) => this.compare(r, o)))}`
        }
        $Map(n) {
            return this.serializeObjectEntries("Map", n.entries())
        }
    }
    for (const t of ["Error", "RegExp", "URL"])
        e.prototype["$" + t] = function(n) {
            return `${t}(${n})`
        }
        ;
    for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"])
        e.prototype["$" + t] = function(n) {
            return `${t}[${n.join(",")}]`
        }
        ;
    for (const t of ["BigInt64Array", "BigUint64Array"])
        e.prototype["$" + t] = function(n) {
            return `${t}[${n.join("n,")}${n.length > 0 ? "n" : ""}]`
        }
        ;
    return e
}
)();
function cE(e, t) {
    return e === t || Oi(e) === Oi(t)
}
const dw = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
  , hw = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
  , pw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  , _n = [];
class mw {
    _data = new Un;
    _hash = new Un([...dw]);
    _nDataBytes = 0;
    _minBufferSize = 0;
    finalize(t) {
        t && this._append(t);
        const n = this._nDataBytes * 8
          , r = this._data.sigBytes * 8;
        return this._data.words[r >>> 5] |= 128 << 24 - r % 32,
        this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
        this._data.words[(r + 64 >>> 9 << 4) + 15] = n,
        this._data.sigBytes = this._data.words.length * 4,
        this._process(),
        this._hash
    }
    _doProcessBlock(t, n) {
        const r = this._hash.words;
        let o = r[0]
          , s = r[1]
          , i = r[2]
          , a = r[3]
          , l = r[4]
          , u = r[5]
          , c = r[6]
          , f = r[7];
        for (let d = 0; d < 64; d++) {
            if (d < 16)
                _n[d] = t[n + d] | 0;
            else {
                const m = _n[d - 15]
                  , _ = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3
                  , E = _n[d - 2]
                  , T = (E << 15 | E >>> 17) ^ (E << 13 | E >>> 19) ^ E >>> 10;
                _n[d] = _ + _n[d - 7] + T + _n[d - 16]
            }
            const h = l & u ^ ~l & c
              , g = o & s ^ o & i ^ s & i
              , p = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
              , v = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)
              , k = f + v + h + hw[d] + _n[d]
              , w = p + g;
            f = c,
            c = u,
            u = l,
            l = a + k | 0,
            a = i,
            i = s,
            s = o,
            o = k + w | 0
        }
        r[0] = r[0] + o | 0,
        r[1] = r[1] + s | 0,
        r[2] = r[2] + i | 0,
        r[3] = r[3] + a | 0,
        r[4] = r[4] + l | 0,
        r[5] = r[5] + u | 0,
        r[6] = r[6] + c | 0,
        r[7] = r[7] + f | 0
    }
    _append(t) {
        typeof t == "string" && (t = Un.fromUtf8(t)),
        this._data.concat(t),
        this._nDataBytes += t.sigBytes
    }
    _process(t) {
        let n, r = this._data.sigBytes / 64;
        t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
        const o = r * 16
          , s = Math.min(o * 4, this._data.sigBytes);
        if (o) {
            for (let i = 0; i < o; i += 16)
                this._doProcessBlock(this._data.words, i);
            n = this._data.words.splice(0, o),
            this._data.sigBytes -= s
        }
        return new Un(n,s)
    }
}
class Un {
    words;
    sigBytes;
    constructor(t, n) {
        t = this.words = t || [],
        this.sigBytes = n === void 0 ? t.length * 4 : n
    }
    static fromUtf8(t) {
        const n = unescape(encodeURIComponent(t))
          , r = n.length
          , o = [];
        for (let s = 0; s < r; s++)
            o[s >>> 2] |= (n.charCodeAt(s) & 255) << 24 - s % 4 * 8;
        return new Un(o,r)
    }
    toBase64() {
        const t = [];
        for (let n = 0; n < this.sigBytes; n += 3) {
            const r = this.words[n >>> 2] >>> 24 - n % 4 * 8 & 255
              , o = this.words[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255
              , s = this.words[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255
              , i = r << 16 | o << 8 | s;
            for (let a = 0; a < 4 && n * 8 + a * 6 < this.sigBytes * 8; a++)
                t.push(pw.charAt(i >>> 6 * (3 - a) & 63))
        }
        return t.join("")
    }
    concat(t) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4),
        this.sigBytes % 4)
            for (let n = 0; n < t.sigBytes; n++) {
                const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
            }
        else
            for (let n = 0; n < t.sigBytes; n += 4)
                this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
        this.sigBytes += t.sigBytes
    }
}
function gw(e) {
    return new mw().finalize(e).toBase64()
}
function Fn(e) {
    return gw(Oi(e))
}
function Nd(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    yw(e[0], e[1]) && e.unshift(t);
    let[n,r,o={}] = e;
    const s = le( () => ae(n));
    if (typeof s.value != "string")
        throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = we();
    o.server ??= !0,
    o.default ??= vw,
    o.getCachedData ??= Hd,
    o.lazy ??= !1,
    o.immediate ??= !0,
    o.deep ??= Ug.deep,
    o.dedupe ??= "cancel",
    o._functionName,
    i._asyncData[s.value];
    const a = {
        cause: "initial",
        dedupe: o.dedupe
    };
    i._asyncData[s.value]?._init || (a.cachedData = o.getCachedData(s.value, i, {
        cause: "initial"
    }),
    i._asyncData[s.value] = bc(i, s.value, r, o, a.cachedData));
    const l = i._asyncData[s.value];
    l._deps++;
    const u = () => i._asyncData[s.value].execute(a)
      , c = o.server !== !1 && i.payload.serverRendered;
    {
        let h = function(w) {
            const m = i._asyncData[w];
            m?._deps && (m._deps--,
            m._deps === 0 && m?._off())
        };
        const g = Ae();
        if (g && c && o.immediate && !g.sp && (g.sp = []),
        g && !g._nuxtOnBeforeMountCbs) {
            g._nuxtOnBeforeMountCbs = [];
            const w = g._nuxtOnBeforeMountCbs;
            Ji( () => {
                w.forEach(m => {
                    m()
                }
                ),
                w.splice(0, w.length)
            }
            ),
            ir( () => w.splice(0, w.length))
        }
        const p = g && (g._nuxtClientOnly || Me(Od, !1));
        c && i.isHydrating && (l.error.value || l.data.value !== void 0) ? l.status.value = l.error.value ? "error" : "success" : g && (!p && i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? g._nuxtOnBeforeMountCbs.push(u) : o.immediate && l.status.value !== "success" && u();
        const v = Vr()
          , k = Se([s, ...o.watch || []], ([w], [m]) => {
            if ((w || m) && w !== m) {
                const _ = i._asyncData[m]?.data.value !== void 0
                  , E = i._asyncDataPromises[m] !== void 0;
                m && h(m);
                const T = {
                    cause: "initial",
                    dedupe: o.dedupe
                };
                if (!i._asyncData[w]?._init) {
                    let x;
                    m && _ ? x = i._asyncData[m]?.data.value : (x = o.getCachedData(w, i, {
                        cause: "initial"
                    }),
                    T.cachedData = x),
                    i._asyncData[w] = bc(i, w, r, o, x)
                }
                i._asyncData[w]._deps++,
                (o.immediate || _ || E) && i._asyncData[w].execute(T)
            } else
                l._execute({
                    cause: "watch",
                    dedupe: o.dedupe
                })
        }
        , {
            flush: "sync"
        });
        v && $i( () => {
            k(),
            h(s.value)
        }
        )
    }
    const f = {
        data: ho( () => i._asyncData[s.value]?.data),
        pending: ho( () => i._asyncData[s.value]?.pending),
        status: ho( () => i._asyncData[s.value]?.status),
        error: ho( () => i._asyncData[s.value]?.error),
        refresh: (...h) => i._asyncData[s.value].execute(...h),
        execute: (...h) => i._asyncData[s.value].execute(...h),
        clear: () => Dd(i, s.value)
    }
      , d = Promise.resolve(i._asyncDataPromises[s.value]).then( () => f);
    return Object.assign(d, f),
    d
}
function ho(e) {
    return le({
        get() {
            return e()?.value
        },
        set(t) {
            const n = e();
            n && (n.value = t)
        }
    })
}
function yw(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function")
}
function Dd(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = void 0),
    e._asyncData[t] && (e._asyncData[t].data.value = ie(e._asyncData[t]._default()),
    e._asyncData[t].error.value = void 0,
    e._asyncData[t].status.value = "idle"),
    t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0),
    e._asyncDataPromises[t] = void 0)
}
function _w(e, t) {
    const n = {};
    for (const r of t)
        n[r] = e[r];
    return n
}
function bc(e, t, n, r, o) {
    e.payload._errors[t] ??= void 0;
    const s = r.getCachedData !== Hd
      , i = n
      , a = r.deep ? he : xe
      , l = o !== void 0
      , u = e.hook("app:data:refresh", async f => {
        (!f || f.includes(t)) && await c.execute({
            cause: "refresh:hook"
        })
    }
    )
      , c = {
        data: a(l ? o : r.default()),
        pending: le( () => c.status.value === "pending"),
        error: Wr(e.payload._errors, t),
        status: xe("idle"),
        execute: (...f) => {
            const [d,h=void 0] = f
              , g = d && h === void 0 && typeof d == "object" ? d : {};
            if (e._asyncDataPromises[t]) {
                if ((g.dedupe ?? r.dedupe) === "defer")
                    return e._asyncDataPromises[t];
                e._asyncDataPromises[t].cancelled = !0
            }
            {
                const v = "cachedData" in g ? g.cachedData : r.getCachedData(t, e, {
                    cause: g.cause ?? "refresh:manual"
                });
                if (v !== void 0)
                    return e.payload.data[t] = c.data.value = v,
                    c.error.value = void 0,
                    c.status.value = "success",
                    Promise.resolve(v)
            }
            c.status.value = "pending";
            const p = new Promise( (v, k) => {
                try {
                    v(i(e))
                } catch (w) {
                    k(w)
                }
            }
            ).then(async v => {
                if (p.cancelled)
                    return e._asyncDataPromises[t];
                let k = v;
                r.transform && (k = await r.transform(v)),
                r.pick && (k = _w(k, r.pick)),
                e.payload.data[t] = k,
                c.data.value = k,
                c.error.value = void 0,
                c.status.value = "success"
            }
            ).catch(v => {
                if (p.cancelled)
                    return e._asyncDataPromises[t];
                c.error.value = fn(v),
                c.data.value = ie(r.default()),
                c.status.value = "error"
            }
            ).finally( () => {
                p.cancelled || delete e._asyncDataPromises[t]
            }
            );
            return e._asyncDataPromises[t] = p,
            e._asyncDataPromises[t]
        }
        ,
        _execute: cw( (...f) => c.execute(...f), 0, {
            leading: !0
        }),
        _default: r.default,
        _deps: 0,
        _init: !0,
        _hash: void 0,
        _off: () => {
            u(),
            e._asyncData[t]?._init && (e._asyncData[t]._init = !1),
            s || pt( () => {
                e._asyncData[t]?._init || (Dd(e, t),
                c.execute = () => Promise.resolve())
            }
            )
        }
    };
    return c
}
const vw = () => {}
  , Hd = (e, t, n) => {
    if (t.isHydrating)
        return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook")
        return t.static.data[e]
}
;
function bw(e, t, n) {
    const [r={},o] = [{}, t]
      , s = le( () => ae(e))
      , i = le( () => ae(r.key) || "$f" + Fn([o, typeof s.value == "string" ? s.value : "", ...ww(r)]));
    if (!r.baseURL && typeof s.value == "string" && s.value[0] === "/" && s.value[1] === "/")
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {server: a, lazy: l, default: u, transform: c, pick: f, watch: d, immediate: h, getCachedData: g, deep: p, dedupe: v, ...k} = r
      , w = ot({
        ...Vg,
        ...k,
        cache: typeof r.cache == "boolean" ? void 0 : r.cache
    })
      , m = {
        server: a,
        lazy: l,
        default: u,
        transform: c,
        pick: f,
        immediate: h,
        getCachedData: g,
        deep: p,
        dedupe: v,
        watch: d === !1 ? [] : [...d || [], w]
    };
    let _;
    return Nd(d === !1 ? i.value : i, () => {
        _?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),
        _ = typeof AbortController < "u" ? new AbortController : {};
        const T = ae(r.timeout);
        let x;
        return T && (x = setTimeout( () => _.abort(new DOMException("Request aborted due to timeout.","AbortError")), T),
        _.signal.onabort = () => clearTimeout(x)),
        (r.$fetch || globalThis.$fetch)(s.value, {
            signal: _.signal,
            ...w
        }).finally( () => {
            clearTimeout(x)
        }
        )
    }
    , m)
}
function ww(e) {
    const t = [ae(e.method)?.toUpperCase() || "GET", ae(e.baseURL)];
    for (const n of [e.params || e.query]) {
        const r = ae(n);
        if (!r)
            continue;
        const o = {};
        for (const [s,i] of Object.entries(r))
            o[ae(s)] = ae(i);
        t.push(o)
    }
    if (e.body) {
        const n = ae(e.body);
        if (!n)
            t.push(Fn(n));
        else if (n instanceof ArrayBuffer)
            t.push(Fn(Object.fromEntries([...new Uint8Array(n).entries()].map( ([r,o]) => [r, o.toString()]))));
        else if (n instanceof FormData) {
            const r = {};
            for (const o of n.entries()) {
                const [s,i] = o;
                r[s] = i instanceof File ? i.name : i
            }
            t.push(Fn(r))
        } else if (nr(n))
            t.push(Fn(ot(n)));
        else
            try {
                t.push(Fn(n))
            } catch {
                console.warn("[useFetch] Failed to hash body", n)
            }
    }
    return t
}
const Ew = {
    class: "col-span-2 p-3"
}
  , kw = {
    key: 0,
    class: "tori-card space-x-3 font-medium flex flex-row"
}
  , Tw = {
    key: 0
}
  , Sw = {
    key: 1
}
  , xw = {
    key: 2
}
  , Cw = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
}
  , Rw = {
    key: 1,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
}
  , Aw = {
    key: 0,
    class: "col-span-1 z-10 relative flex flex-col-reverse md:flex-col"
}
  , Pw = {
    class: "tori-card m-3 p-3"
}
  , Ow = {
    class: "text-stone-200 font-[600] text-sm mt-1.5"
}
  , Mw = {
    class: "mt-3"
}
  , Lw = {
    class: "flex flex-row items-center text-sm text-stone-200"
}
  , Iw = ["href"]
  , Nw = {
    key: 0
}
  , Dw = {
    class: "tori-card m-3 p-3"
}
  , Hw = {
    class: "flex flex-col md:flex-row gap-3 items-center text-xs font-bold"
}
  , $w = {
    href: "https://id.tori.dog/manage",
    class: "flex flex-row items-center space-x-3",
    target: "_blank",
    rel: "noopener"
}
  , jw = ["src"]
  , Fw = {
    class: "text-primary-500"
}
  , Bw = {
    key: 1
}
  , Uw = {
    key: 0,
    class: "tori-card m-3",
    href: "https://www.patreon.com/c/rimjobdog",
    target: "_blank",
    rel: "noopener"
}
  , Vw = st({
    __name: "app",
    async setup(e) {
        let t, n;
        const r = ya()
          , o = he(r.path === "/")
          , s = he(r.path.startsWith("/ama"))
          , i = he("")
          , a = he(!0)
          , l = he(!1)
          , {data: u} = ([t,n] = wu( () => Nd("profile", () => bw("/api/profile", "$3oRWNoOsuN").then(g => g?.data?.value?.object))),
        t = await t,
        n(),
        t);
        Ot("profile", u);
        const c = he(!1)
          , f = he(!1);
        Ot("pageRequestsFullSize", c),
        Se(c, () => {
            c.value || (f.value = !1)
        }
        ),
        it( () => {
            window.innerWidth < 768 && (a.value = !1)
        }
        );
        const d = () => {
            f.value = !f.value
        }
        ;
        Se( () => r.path, g => {
            o.value = g === "/",
            i.value = {
                "": "",
                music: "music",
                toys: "toys"
            }[g?.split("/")[1]] || ""
        }
        , {
            immediate: !0
        });
        const h = {
            labs: {
                "--ui-primary": "var(--color-blue-500)",
                "--ui-color-primary-50": "var(--color-blue-50)",
                "--ui-color-primary-100": "var(--color-blue-100)",
                "--ui-color-primary-200": "var(--color-blue-200)",
                "--ui-color-primary-300": "var(--color-blue-300)",
                "--ui-color-primary-400": "var(--color-blue-400)",
                "--ui-color-primary-500": "var(--color-blue-500)",
                "--ui-color-primary-600": "var(--color-blue-600)",
                "--ui-color-primary-700": "var(--color-blue-700)",
                "--ui-color-primary-800": "var(--color-blue-800)",
                "--ui-color-primary-900": "var(--color-blue-900)",
                "--ui-color-primary-950": "var(--color-blue-950)"
            }
        };
        return va({
            title: "Queen of Rimjobs, Suki.",
            link: [{
                rel: "icon",
                type: "image/png",
                href: "/favicon.png"
            }],
            meta: [{
                name: "description",
                content: "26, She / Her, Software engineer~ <3"
            }, {
                name: "theme-color",
                content: "#3b82f6"
            }, {
                name: "twitter:card",
                content: "summary_large_image"
            }, {
                name: "twitter:image",
                content: "https://images.unsplash.com/photo-1560837616-fee1f3d8753a?q=80&w=774&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }, {
                name: "twitter:creator",
                content: "@suki_knot"
            }, {
                name: "keywords",
                content: "Cloudflare, Workers, Tutorials, Serverless, Edge Computing, JavaScript, Python, API, Form Handling, Redirects, Personalization, Static Sites"
            }, {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }]
        }),
        Se( () => r.path, async g => {
            Id("page.view", r.path)
        }
        , {
            immediate: !0
        }),
        (g, p) => {
            const v = q1
              , k = K1
              , w = Md
              , m = ew;
            return be(),
            Ie("div", {
                class: "font-[400] relative text-stone-200 min-h-screen relative",
                style: On(h.labs)
            }, [ue(k, null, {
                default: _t( () => [ue(v, {
                    "glow-radius": 145,
                    enabled: a.value
                }, null, 8, ["enabled"])]),
                _: 1
            }), p[20] || (p[20] = oi('<div class="fixed top-0 left-0 z-[1] h-screen w-full overflow-hidden" style="pointer-events:none;" id="background-portal"></div><div class="hidden"><div class="bg-red-500 text-red-500"></div><div class="bg-blue-500 text-blue-500"></div><div class="bg-amber-500 text-amber-500"></div><div class="bg-yellow-500 text-yellow-500"></div><div class="bg-lime-500 text-lime-500"></div><div class="bg-green-500 text-green-500"></div><div class="bg-emerald-500 text-emerald-500"></div><div class="bg-teal-500 text-teal-500"></div><div class="bg-cyan-500 text-cyan-500"></div><div class="bg-sky-500 text-sky-500"></div><div class="bg-blue-500 text-blue-500"></div><div class="bg-sky-500 text-sky-500"></div><div class="bg-violet-500 text-violet-500"></div><div class="bg-purple-500 text-purple-500"></div><div class="bg-fuchsia-500 text-fuchsia-500"></div><div class="bg-pink-500 text-pink-500"></div><div class="bg-rose-500 text-rose-500"></div></div><div id="audio-effect" class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-600/40 via-primary-600/20 to-transparent animate-gradient-x z-[0] pointer-none" style="opacity:0;pointer-events:none;transition:opacity 0.25s ease-out;"></div><div id="visual" class="fixed z-10 bottom-0 left-0 w-full h-[10rem] w-full pointer-none" style="pointer-events:none;"></div>', 4)), te("div", {
                class: dn(`grid ${f.value ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"} font-medium max-w-4xl mx-auto z-10 relative`),
                style: {
                    isolation: "isolate"
                }
            }, [te("div", Ew, [!o.value && !s.value ? (be(),
            Ie("div", kw, [ue(w, {
                to: "/",
                class: "text-primary-500 hover:underline flex flex-row items-center"
            }, {
                default: _t( () => [...p[1] || (p[1] = [te("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "size-6 mr-1"
                }, [te("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                })], -1), Ke(" Home ", -1)])]),
                _: 1
            }), p[6] || (p[6] = te("div", {
                class: "flex-grow"
            }, null, -1)), ie(r).path.includes("clicker") ? (be(),
            Ie("div", Tw, [ue(w, {
                class: "px-3 py-1.5 bg-primary-600 rounded-lg text-stone-200 cursor-pointer text-xs inline-block",
                to: "/clicker/search"
            }, {
                default: _t( () => [...p[2] || (p[2] = [Ke(" Search ", -1)])]),
                _: 1
            })])) : on("", !0), ie(r).path.includes("clicker") ? (be(),
            Ie("div", Sw, [ue(w, {
                class: "px-3 py-1.5 bg-primary-600 rounded-lg text-stone-200 cursor-pointer text-xs inline-block",
                to: "/clicker/manage"
            }, {
                default: _t( () => [...p[3] || (p[3] = [Ke(" Make your own~ ", -1)])]),
                _: 1
            })])) : on("", !0), c.value ? (be(),
            Ie("div", xw, [te("a", {
                class: "text-primary-500 cursor-pointer",
                onClick: d
            }, [f.value ? (be(),
            Ie("svg", Rw, [...p[5] || (p[5] = [te("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
            }, null, -1)])])) : (be(),
            Ie("svg", Cw, [...p[4] || (p[4] = [te("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            }, null, -1)])]))])])) : on("", !0)])) : on("", !0), ue(m)]), f.value ? on("", !0) : (be(),
            Ie("div", Aw, [te("div", Pw, [p[12] || (p[12] = oi('<a href="https://feralcatalyst.art/" target="_blank" rel="noopener"><img src="' + sw + '" class="mb-2 rounded-sm overflow-hidden size-32 md:size-[unset] object-cover" alt="Tori&#39;s avatar."></a><h1 class="text-4xl font-bold text-primary-500"> Suki. </h1><p class="text-xs text-stone-500 font-medium mb-1 tracking-wide"><a class="" href="https://twitter.com/seris_knot" target="_blank" rel="noopener"> @seris_knot </a></p>', 3)), te("p", Ow, [Ke(" 26, She / Her, " + Ut(ie(u).Class) + ". Join my ", 1), p[7] || (p[7] = te("a", {
                href: "https://rimjob.dog/chat",
                class: "text-primary-500"
            }, "Discord", -1)), p[8] || (p[8] = Ke()), p[9] || (p[9] = te("i", {
                class: "fa-solid fa-heart"
            }, null, -1))]), te("div", Mw, [p[11] || (p[11] = te("p", {
                class: "text-stone-500 text-sm"
            }, " Status effects ", -1)), (be(!0),
            Ie(Pe, null, vu(ie(u).Statuses, _ => (be(),
            Ie("div", null, [te("div", Lw, [te("i", {
                class: dn(`fa-solid ${_.Icon} mr-1`)
            }, null, 2), Ke(" " + Ut(_.Status) + " ", 1), p[10] || (p[10] = te("div", {
                class: "flex-grow"
            }, null, -1)), te("a", {
                class: "text-stone-600 block ml-3",
                href: `https://twitter.com/${_.Cause.split("@")[1]}`,
                target: "_blank",
                rel: "noopener"
            }, Ut(_.Cause), 9, Iw)])]))), 256))])]), ue(k, null, {
                default: _t( () => [ie(bt)?.id ? (be(),
                Ie("div", Nw, [te("div", Dw, [te("div", Hw, [te("a", $w, [te("img", {
                    src: `https://id.tori.dog/api/users/${ie(bt).id}/avatar`,
                    alt: "Your avatar",
                    class: "w-12 h-12 rounded-full border-2 border-stone-900 object-cover cursor-pointer"
                }, null, 8, jw)]), te("div", null, [p[13] || (p[13] = Ke(" Logged in as", -1)), p[14] || (p[14] = te("br", null, null, -1)), te("span", Fw, Ut(ie(bt).email), 1), p[15] || (p[15] = Ke(". ", -1)), p[16] || (p[16] = te("br", null, null, -1)), te("a", {
                    onClick: p[0] || (p[0] = (..._) => ie(vc) && ie(vc)(..._)),
                    class: "text-stone-600 cursor-pointer block mt-1"
                }, " Not you? ")])])])])) : (be(),
                Ie("div", Bw, [ue(w, {
                    to: `https://id.tori.dog/authorize?redirect=${l.value ? "http://localhost:3000" : "https://rimjob.dog"}/torii`,
                    class: "p-3 m-3 border-2 border-stone-900 rounded-lg bg-stone-950 text-sm text-stone-500 font-bold block text-center cursor-pointer hover:bg-stone-900/50"
                }, {
                    default: _t( () => [...p[17] || (p[17] = [Ke(" Log in / Sign up ", -1)])]),
                    _: 1
                }, 8, ["to"])]))]),
                _: 1
            }), ie(bt)?.subscription?.isSubscribed ? on("", !0) : (be(),
            Ie("a", Uw, [...p[18] || (p[18] = [te("div", {
                class: "flex flex-row items-center"
            }, [te("div", null, [te("p", {
                class: "text-sm text-stone-200 font-medium"
            }, [Ke(" Support me on "), te("span", {
                class: "text-primary-500"
            }, "Patreon"), Ke("! ")]), te("p", {
                class: "text-xs text-stone-500"
            }, " Get early access to new features, and help support the site! ")])], -1)])])), p[19] || (p[19] = te("div", {
                id: "sidebar-portal"
            }, null, -1))]))], 2)], 4)
        }
    }
})
  , Ww = {
    key: 0,
    class: "font-mono font-medium text-stone-200 p-12"
}
  , zw = ["src"]
  , qw = {
    class: "text-8xl font-bold"
}
  , Kw = {
    class: "text-3xl"
}
  , Gw = st({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        const t = e
          , n = he("");
        return it( () => {
            fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()).then(r => {
                n.value = r.message
            }
            )
        }
        ),
        va({
            title: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error",
            meta: [{
                name: "twitter:title",
                content: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error"
            }, {
                property: "theme-color",
                content: "#b91c1c"
            }, {
                name: "twitter:description",
                content: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error"
            }]
        }),
        (r, o) => {
            const s = Md;
            return e.error ? (be(),
            Ie("div", Ww, [ue(s, {
                to: "/",
                class: "text-primary-500 mb-6 inline-block text-xl"
            }, {
                default: _t( () => [...o[0] || (o[0] = [Ke(" Home ", -1)])]),
                _: 1
            }), te("img", {
                class: "mb-3 rounded-lg shadow-lg max-w-full h-[500px] bg-stone-800",
                src: ie(n)
            }, null, 8, zw), o[1] || (o[1] = te("b", {
                class: "text-primary-500 block mb-1 text-xl"
            }, "Error", -1)), te("h1", qw, Ut(e.error.statusCode), 1), te("p", Kw, Ut(e.error.statusMessage), 1)])) : on("", !0)
        }
    }
})
  , Yw = {
    key: 0
}
  , wc = {
    __name: "nuxt-root",
    setup(e) {
        const t = () => null
          , n = we()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const u = n.hooks.hookOnce("app:error", r);
            Ye().beforeEach(u)
        }
        const o = !1;
        Ot(ds, ya()),
        n.hooks.callHookWith(u => u.map(c => c()), "vue:setup");
        const s = hs()
          , i = !1
          , a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
        Xi( (u, c, f) => {
            if (n.hooks.callHook("vue:error", u, c, f).catch(d => console.error("[nuxt] Error in `vue:error` hook", d)),
            a.test(navigator.userAgent))
                return n.hooks.callHook("app:error", u),
                console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u),
                !1;
            if (Wf(u) && (u.fatal || u.unhandled))
                return n.runWithContext( () => vn(u)),
                !1
        }
        );
        const l = !1;
        return (u, c) => (be(),
        Ft(aa, {
            onResolve: ie(r)
        }, {
            default: _t( () => [ie(i) ? (be(),
            Ie("div", Yw)) : ie(s) ? (be(),
            Ft(ie(Gw), {
                key: 1,
                error: ie(s)
            }, null, 8, ["error"])) : ie(l) ? (be(),
            Ft(ie(t), {
                key: 2,
                context: ie(l)
            }, null, 8, ["context"])) : ie(o) ? (be(),
            Ft(_u(ie(o)), {
                key: 3
            })) : (be(),
            Ft(ie(Vw), {
                key: 4
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Ec;
{
    let e;
    Ec = async function() {
        if (e)
            return e;
        const n = !!(window.__NUXT__?.serverRendered ?? document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true")
          , r = n ? fa(wc) : $o(wc)
          , o = Kg({
            vueApp: r
        });
        async function s(i) {
            await o.callHook("app:error", i),
            o.payload.error ||= fn(i)
        }
        r.config.errorHandler = s,
        o.hook("app:suspense:resolve", () => {
            r.config.errorHandler === s && (r.config.errorHandler = void 0)
        }
        ),
        !n && Tl.id && o.hook("app:suspense:resolve", () => {
            document.getElementById(Tl.id)?.remove()
        }
        );
        try {
            await Jg(o, h1)
        } catch (i) {
            s(i)
        }
        try {
            await o.hooks.callHook("app:created", r),
            await o.hooks.callHook("app:beforeMount", r),
            r.mount(Wg),
            await o.hooks.callHook("app:mounted", r),
            await pt()
        } catch (i) {
            s(i)
        }
        return r
    }
    ,
    e = Ec().catch(t => {
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Ln as $, Qh as A, jp as B, Ft as C, _t as D, Yu as E, Pe as F, ia as G, ae as H, ot as I, ue as J, on as K, xc as L, Gu as M, O0 as N, dn as O, ya as P, oE as Q, wp as R, iE as S, _p as T, sE as U, wu as V, va as W, bt as X, ff as Y, ca as Z, K1 as _, be as a, aE as a0, lE as a1, oi as a2, Md as a3, cE as a4, L0 as a5, _u as a6, Ne as a7, Me as a8, Yc as a9, ch as aA, uh as aB, Sc as aC, Ze as aD, Xd as aE, Qw as aF, Jw as aG, yf as aH, ar as aI, Xw as aJ, Cf as aK, fs as aL, fd as aM, tE as aN, nE as aO, we as aP, bb as aQ, rE as aR, Ot as aa, Vr as ab, $i as ac, Lc as ad, xe as ae, bp as af, Ce as ag, Et as ah, Wr as ai, Gt as aj, ne as ak, $o as al, nt as am, ye as an, me as ao, Mi as ap, dt as aq, jd as ar, rr as as, re as at, ge as au, z as av, tr as aw, En as ax, ah as ay, lh as az, te as b, Ie as c, st as d, ie as e, Ke as f, vu as g, eE as h, Re as i, Pd as j, Zw as k, le as l, Se as m, On as n, it as o, Bf as p, pt as q, he as r, Ae as s, Ut as t, Ye as u, Ho as v, gp as w, Vn as x, De as y, ir as z};
=======
const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./CwWu6hMO.js", "./c-iJqvqp.js", "./Bn38pGyi.js", "./Cpu0iyM-.js", "./XNCJIUnA.js", "./DI7r5gpH.js", "./BPuP_hXi.js", "./DsqdWQfm.js", "./xtGvwCe_.js", "./XYblUQ4q.js", "./CtTCefNa.js", "./index.BNus6C5W.css", "./KDdXfVIT.js", "./YNmpfwq8.js", "./B7s6GHU7.js", "./DbluH_Oc.js", "./_contractId_.BOhaFhW_.css", "./s1NVb3Eb.js", "./DlAUqK2U.js", "./CMylc2fj.js", "./pDuR_pqH.js", "./DJpEn3_2.js", "./6bP3mW5m.js", "./D1Zt9Eax.js", "./CUb4ZiLZ.js", "./CHMaNiXP.js", "./ProsePre.D5orA6B_.css", "./DWzMaTp5.js", "./DUcUzu8l.js", "./BggMB-82.js", "./CXR7IpPr.js", "./C6Qy8QyI.js", "./w0UZ36yD.js", "./-SNeWsBY.js", "./BaXHbvcu.js"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ze(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const re = {}
  , bn = []
  , nt = () => {}
  , Mi = () => !1
  , tr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Go = e => e.startsWith("onUpdate:")
  , ye = Object.assign
  , Yo = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , $d = Object.prototype.hasOwnProperty
  , ce = (e, t) => $d.call(e, t)
  , z = Array.isArray
  , wn = e => Pn(e) === "[object Map]"
  , pn = e => Pn(e) === "[object Set]"
  , qs = e => Pn(e) === "[object Date]"
  , kc = e => Pn(e) === "[object RegExp]"
  , Q = e => typeof e == "function"
  , me = e => typeof e == "string"
  , dt = e => typeof e == "symbol"
  , ge = e => e !== null && typeof e == "object"
  , Jo = e => (ge(e) || Q(e)) && Q(e.then) && Q(e.catch)
  , Li = Object.prototype.toString
  , Pn = e => Li.call(e)
  , Tc = e => Pn(e).slice(8, -1)
  , nr = e => Pn(e) === "[object Object]"
  , Qo = e => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , En = Ze(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , jd = Ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo")
  , Xo = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
  , Fd = /-\w/g
  , De = Xo(e => e.replace(Fd, t => t.slice(1).toUpperCase()))
  , Bd = /\B([A-Z])/g
  , We = Xo(e => e.replace(Bd, "-$1").toLowerCase())
  , rr = Xo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Vn = Xo(e => e ? `on${rr(e)}` : "")
  , Ue = (e, t) => !Object.is(e, t)
  , kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Ii = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Cr = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Rr = e => {
    const t = me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Oa;
const Br = () => Oa || (Oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {})
  , Ud = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function Vd(e) {
    return Ud.test(e) ? `__props.${e}` : `__props[${JSON.stringify(e)}]`
}
function Wd(e, t) {
    return e + JSON.stringify(t, (n, r) => typeof r == "function" ? r.toString() : r)
}
const zd = {
    TEXT: 1,
    1: "TEXT",
    CLASS: 2,
    2: "CLASS",
    STYLE: 4,
    4: "STYLE",
    PROPS: 8,
    8: "PROPS",
    FULL_PROPS: 16,
    16: "FULL_PROPS",
    NEED_HYDRATION: 32,
    32: "NEED_HYDRATION",
    STABLE_FRAGMENT: 64,
    64: "STABLE_FRAGMENT",
    KEYED_FRAGMENT: 128,
    128: "KEYED_FRAGMENT",
    UNKEYED_FRAGMENT: 256,
    256: "UNKEYED_FRAGMENT",
    NEED_PATCH: 512,
    512: "NEED_PATCH",
    DYNAMIC_SLOTS: 1024,
    1024: "DYNAMIC_SLOTS",
    DEV_ROOT_FRAGMENT: 2048,
    2048: "DEV_ROOT_FRAGMENT",
    CACHED: -1,
    "-1": "CACHED",
    BAIL: -2,
    "-2": "BAIL"
}
  , qd = {
    1: "TEXT",
    2: "CLASS",
    4: "STYLE",
    8: "PROPS",
    16: "FULL_PROPS",
    32: "NEED_HYDRATION",
    64: "STABLE_FRAGMENT",
    128: "KEYED_FRAGMENT",
    256: "UNKEYED_FRAGMENT",
    512: "NEED_PATCH",
    1024: "DYNAMIC_SLOTS",
    2048: "DEV_ROOT_FRAGMENT",
    [-1]: "CACHED",
    [-2]: "BAIL"
}
  , Kd = {
    ELEMENT: 1,
    1: "ELEMENT",
    FUNCTIONAL_COMPONENT: 2,
    2: "FUNCTIONAL_COMPONENT",
    STATEFUL_COMPONENT: 4,
    4: "STATEFUL_COMPONENT",
    TEXT_CHILDREN: 8,
    8: "TEXT_CHILDREN",
    ARRAY_CHILDREN: 16,
    16: "ARRAY_CHILDREN",
    SLOTS_CHILDREN: 32,
    32: "SLOTS_CHILDREN",
    TELEPORT: 64,
    64: "TELEPORT",
    SUSPENSE: 128,
    128: "SUSPENSE",
    COMPONENT_SHOULD_KEEP_ALIVE: 256,
    256: "COMPONENT_SHOULD_KEEP_ALIVE",
    COMPONENT_KEPT_ALIVE: 512,
    512: "COMPONENT_KEPT_ALIVE",
    COMPONENT: 6,
    6: "COMPONENT"
}
  , Gd = {
    STABLE: 1,
    1: "STABLE",
    DYNAMIC: 2,
    2: "DYNAMIC",
    FORWARDED: 3,
    3: "FORWARDED"
}
  , Yd = {
    1: "STABLE",
    2: "DYNAMIC",
    3: "FORWARDED"
}
  , Jd = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol"
  , Ni = Ze(Jd)
  , Qd = Ni
  , Ma = 2;
function Xd(e, t=0, n=e.length) {
    if (t = Math.max(0, Math.min(t, e.length)),
    n = Math.max(0, Math.min(n, e.length)),
    t > n)
        return "";
    let r = e.split(/(\r?\n)/);
    const o = r.filter( (a, l) => l % 2 === 1);
    r = r.filter( (a, l) => l % 2 === 0);
    let s = 0;
    const i = [];
    for (let a = 0; a < r.length; a++)
        if (s += r[a].length + (o[a] && o[a].length || 0),
        s >= t) {
            for (let l = a - Ma; l <= a + Ma || n > s; l++) {
                if (l < 0 || l >= r.length)
                    continue;
                const u = l + 1;
                i.push(`${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${r[l]}`);
                const c = r[l].length
                  , f = o[l] && o[l].length || 0;
                if (l === a) {
                    const d = t - (s - (c + f))
                      , h = Math.max(1, n > s ? c - d : n - t);
                    i.push("   |  " + " ".repeat(d) + "^".repeat(h))
                } else if (l > a) {
                    if (n > s) {
                        const d = Math.max(Math.min(n - s, c), 1);
                        i.push("   |  " + "^".repeat(d))
                    }
                    s += c + f
                }
            }
            break
        }
    return i.join(`
`)
}
function On(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = me(r) ? Sc(r) : On(r);
            if (o)
                for (const s in o)
                    t[s] = o[s]
        }
        return t
    } else if (me(e) || ge(e))
        return e
}
const Zd = /;(?![^(]*\))/g
  , eh = /:([^]+)/
  , th = /\/\*[^]*?\*\//g;
function Sc(e) {
    const t = {};
    return e.replace(th, "").split(Zd).forEach(n => {
        if (n) {
            const r = n.split(eh);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function nh(e) {
    if (!e)
        return "";
    if (me(e))
        return e;
    let t = "";
    for (const n in e) {
        const r = e[n];
        if (me(r) || typeof r == "number") {
            const o = n.startsWith("--") ? n : We(n);
            t += `${o}:${r};`
        }
    }
    return t
}
function dn(e) {
    let t = "";
    if (me(e))
        t = e;
    else if (z(e))
        for (let n = 0; n < e.length; n++) {
            const r = dn(e[n]);
            r && (t += r + " ")
        }
    else if (ge(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function xc(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !me(t) && (e.class = dn(t)),
    n && (e.style = On(n)),
    e
}
const rh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , oh = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
  , sh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"
  , ih = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
  , ah = Ze(rh)
  , lh = Ze(oh)
  , ch = Ze(sh)
  , uh = Ze(ih)
  , Cc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Rc = Ze(Cc)
  , fh = Ze(Cc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Di(e) {
    return !!e || e === ""
}
const dh = /[>/="'\u0009\u000a\u000c\u0020]/
  , bs = {};
function hh(e) {
    if (bs.hasOwnProperty(e))
        return bs[e];
    const t = dh.test(e);
    return t && console.error(`unsafe attribute name: ${e}`),
    bs[e] = !t
}
const ph = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
}
  , mh = Ze("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap")
  , gh = Ze("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan")
  , yh = Ze("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
function _h(e) {
    if (e == null)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean"
}
const vh = /["'&<>]/;
function bh(e) {
    const t = "" + e
      , n = vh.exec(t);
    if (!n)
        return t;
    let r = "", o, s, i = 0;
    for (s = n.index; s < t.length; s++) {
        switch (t.charCodeAt(s)) {
        case 34:
            o = "&quot;";
            break;
        case 38:
            o = "&amp;";
            break;
        case 39:
            o = "&#39;";
            break;
        case 60:
            o = "&lt;";
            break;
        case 62:
            o = "&gt;";
            break;
        default:
            continue
        }
        i !== s && (r += t.slice(i, s)),
        i = s + 1,
        r += o
    }
    return i !== s ? r + t.slice(i, s) : r
}
const wh = /^-?>|<!--|-->|--!>|<!-$/g;
function Eh(e) {
    return e.replace(wh, "")
}
const Ac = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function kh(e, t) {
    return e.replace(Ac, n => t ? n === '"' ? '\\\\\\"' : `\\\\${n}` : `\\${n}`)
}
function Th(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = Wt(e[r], t[r]);
    return n
}
function Wt(e, t) {
    if (e === t)
        return !0;
    let n = qs(e)
      , r = qs(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = dt(e),
    r = dt(t),
    n || r)
        return e === t;
    if (n = z(e),
    r = z(t),
    n || r)
        return n && r ? Th(e, t) : !1;
    if (n = ge(e),
    r = ge(t),
    n || r) {
        if (!n || !r)
            return !1;
        const o = Object.keys(e).length
          , s = Object.keys(t).length;
        if (o !== s)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , l = t.hasOwnProperty(i);
            if (a && !l || !a && l || !Wt(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Ur(e, t) {
    return e.findIndex(n => Wt(n, t))
}
const Pc = e => !!(e && e.__v_isRef === !0)
  , Ut = e => me(e) ? e : e == null ? "" : z(e) || ge(e) && (e.toString === Li || !Q(e.toString)) ? Pc(e) ? Ut(e.value) : JSON.stringify(e, Oc, 2) : String(e)
  , Oc = (e, t) => Pc(t) ? Oc(e, t.value) : wn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,o], s) => (n[ws(r, s) + " =>"] = o,
    n), {})
} : pn(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => ws(n))
} : dt(t) ? ws(t) : ge(t) && !z(t) && !nr(t) ? String(t) : t
  , ws = (e, t="") => {
    var n;
    return dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
function Mc(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e)
}
const Jw = Object.freeze(Object.defineProperty({
    __proto__: null,
    EMPTY_ARR: bn,
    EMPTY_OBJ: re,
    NO: Mi,
    NOOP: nt,
    PatchFlagNames: qd,
    PatchFlags: zd,
    ShapeFlags: Kd,
    SlotFlags: Gd,
    camelize: De,
    capitalize: rr,
    cssVarNameEscapeSymbolsRE: Ac,
    def: Ii,
    escapeHtml: bh,
    escapeHtmlComment: Eh,
    extend: ye,
    genCacheKey: Wd,
    genPropsAccessExp: Vd,
    generateCodeFrame: Xd,
    getEscapedCssVarName: kh,
    getGlobalThis: Br,
    hasChanged: Ue,
    hasOwn: ce,
    hyphenate: We,
    includeBooleanAttr: Di,
    invokeArrayFns: kn,
    isArray: z,
    isBooleanAttr: fh,
    isBuiltInDirective: jd,
    isDate: qs,
    isFunction: Q,
    isGloballyAllowed: Ni,
    isGloballyWhitelisted: Qd,
    isHTMLTag: ah,
    isIntegerKey: Qo,
    isKnownHtmlAttr: mh,
    isKnownMathMLAttr: yh,
    isKnownSvgAttr: gh,
    isMap: wn,
    isMathMLTag: ch,
    isModelListener: Go,
    isObject: ge,
    isOn: tr,
    isPlainObject: nr,
    isPromise: Jo,
    isRegExp: kc,
    isRenderableAttrValue: _h,
    isReservedProp: En,
    isSSRSafeAttrName: hh,
    isSVGTag: lh,
    isSet: pn,
    isSpecialBooleanAttr: Rc,
    isString: me,
    isSymbol: dt,
    isVoidTag: uh,
    looseEqual: Wt,
    looseIndexOf: Ur,
    looseToNumber: Cr,
    makeMap: Ze,
    normalizeClass: dn,
    normalizeCssVarValue: Mc,
    normalizeProps: xc,
    normalizeStyle: On,
    objectToString: Li,
    parseStringStyle: Sc,
    propsToAttrMap: ph,
    remove: Yo,
    slotFlagsText: Yd,
    stringifyStyle: nh,
    toDisplayString: Ut,
    toHandlerKey: Vn,
    toNumber: Rr,
    toRawType: Tc,
    toTypeString: Pn
}, Symbol.toStringTag, {
    value: "Module"
}));
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class Hi {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = Be,
        !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Be;
            try {
                return Be = this,
                t()
            } finally {
                Be = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Be,
        Be = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Be = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Lc(e) {
    return new Hi(e)
}
function Vr() {
    return Be
}
function $i(e, t=!1) {
    Be && Be.cleanups.push(e)
}
let ve;
const Es = new WeakSet;
class Ar {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        Be && Be.active && Be.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Es.has(this) && (Es.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nc(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        La(this),
        Dc(this);
        const t = ve
          , n = wt;
        ve = this,
        wt = !0;
        try {
            return this.fn()
        } finally {
            Hc(this),
            ve = t,
            wt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Bi(t);
            this.deps = this.depsTail = void 0,
            La(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Es.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ks(this) && this.run()
    }
    get dirty() {
        return Ks(this)
    }
}
let Ic = 0, vr, br;
function Nc(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = br,
        br = e;
        return
    }
    e.next = vr,
    vr = e
}
function ji() {
    Ic++
}
function Fi() {
    if (--Ic > 0)
        return;
    if (br) {
        let t = br;
        for (br = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; vr; ) {
        let t = vr;
        for (vr = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Dc(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Hc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const o = r.prevDep;
        r.version === -1 ? (r === n && (n = o),
        Bi(r),
        Sh(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = o
    }
    e.deps = t,
    e.depsTail = n
}
function Ks(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && ($c(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function $c(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Pr) || (e.globalVersion = Pr,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ks(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = ve
      , r = wt;
    ve = e,
    wt = !0;
    try {
        Dc(e);
        const o = e.fn(e._value);
        (t.version === 0 || Ue(o, e._value)) && (e.flags |= 128,
        e._value = o,
        t.version++)
    } catch (o) {
        throw t.version++,
        o
    } finally {
        ve = n,
        wt = r,
        Hc(e),
        e.flags &= -3
    }
}
function Bi(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: o} = e;
    if (r && (r.nextSub = o,
    e.prevSub = void 0),
    o && (o.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let s = n.computed.deps; s; s = s.nextDep)
            Bi(s, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Sh(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
function xh(e, t) {
    e.effect instanceof Ar && (e = e.effect.fn);
    const n = new Ar(e);
    t && ye(n, t);
    try {
        n.run()
    } catch (o) {
        throw n.stop(),
        o
    }
    const r = n.run.bind(n);
    return r.effect = n,
    r
}
function Ch(e) {
    e.effect.stop()
}
let wt = !0;
const jc = [];
function zt() {
    jc.push(wt),
    wt = !1
}
function qt() {
    const e = jc.pop();
    wt = e === void 0 ? !0 : e
}
function La(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = ve;
        ve = void 0;
        try {
            t()
        } finally {
            ve = n
        }
    }
}
let Pr = 0;
class Rh {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Zo {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!ve || !wt || ve === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ve)
            n = this.activeLink = new Rh(ve,this),
            ve.deps ? (n.prevDep = ve.depsTail,
            ve.depsTail.nextDep = n,
            ve.depsTail = n) : ve.deps = ve.depsTail = n,
            Fc(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = ve.depsTail,
            n.nextDep = void 0,
            ve.depsTail.nextDep = n,
            ve.depsTail = n,
            ve.deps === n && (ve.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Pr++,
        this.notify(t)
    }
    notify(t) {
        ji();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Fi()
        }
    }
}
function Fc(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Fc(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const ko = new WeakMap
  , Tn = Symbol("")
  , Gs = Symbol("")
  , Or = Symbol("");
function Ve(e, t, n) {
    if (wt && ve) {
        let r = ko.get(e);
        r || ko.set(e, r = new Map);
        let o = r.get(n);
        o || (r.set(n, o = new Zo),
        o.map = r,
        o.key = n),
        o.track()
    }
}
function $t(e, t, n, r, o, s) {
    const i = ko.get(e);
    if (!i) {
        Pr++;
        return
    }
    const a = l => {
        l && l.trigger()
    }
    ;
    if (ji(),
    t === "clear")
        i.forEach(a);
    else {
        const l = z(e)
          , u = l && Qo(n);
        if (l && n === "length") {
            const c = Number(r);
            i.forEach( (f, d) => {
                (d === "length" || d === Or || !dt(d) && d >= c) && a(f)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)),
            u && a(i.get(Or)),
            t) {
            case "add":
                l ? u && a(i.get("length")) : (a(i.get(Tn)),
                wn(e) && a(i.get(Gs)));
                break;
            case "delete":
                l || (a(i.get(Tn)),
                wn(e) && a(i.get(Gs)));
                break;
            case "set":
                wn(e) && a(i.get(Tn));
                break
            }
    }
    Fi()
}
function Ah(e, t) {
    const n = ko.get(e);
    return n && n.get(t)
}
function Nn(e) {
    const t = se(e);
    return t === e ? t : (Ve(t, "iterate", Or),
    rt(e) ? t : t.map(He))
}
function es(e) {
    return Ve(e = se(e), "iterate", Or),
    e
}
const Ph = {
    __proto__: null,
    [Symbol.iterator]() {
        return ks(this, Symbol.iterator, He)
    },
    concat(...e) {
        return Nn(this).concat(...e.map(t => z(t) ? Nn(t) : t))
    },
    entries() {
        return ks(this, "entries", e => (e[1] = He(e[1]),
        e))
    },
    every(e, t) {
        return Lt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Lt(this, "filter", e, t, n => n.map(He), arguments)
    },
    find(e, t) {
        return Lt(this, "find", e, t, He, arguments)
    },
    findIndex(e, t) {
        return Lt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Lt(this, "findLast", e, t, He, arguments)
    },
    findLastIndex(e, t) {
        return Lt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Lt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ts(this, "includes", e)
    },
    indexOf(...e) {
        return Ts(this, "indexOf", e)
    },
    join(e) {
        return Nn(this).join(e)
    },
    lastIndexOf(...e) {
        return Ts(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Lt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return ur(this, "pop")
    },
    push(...e) {
        return ur(this, "push", e)
    },
    reduce(e, ...t) {
        return Ia(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Ia(this, "reduceRight", e, t)
    },
    shift() {
        return ur(this, "shift")
    },
    some(e, t) {
        return Lt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return ur(this, "splice", e)
    },
    toReversed() {
        return Nn(this).toReversed()
    },
    toSorted(e) {
        return Nn(this).toSorted(e)
    },
    toSpliced(...e) {
        return Nn(this).toSpliced(...e)
    },
    unshift(...e) {
        return ur(this, "unshift", e)
    },
    values() {
        return ks(this, "values", He)
    }
};
function ks(e, t, n) {
    const r = es(e)
      , o = r[t]();
    return r !== e && !rt(e) && (o._next = o.next,
    o.next = () => {
        const s = o._next();
        return s.value && (s.value = n(s.value)),
        s
    }
    ),
    o
}
const Oh = Array.prototype;
function Lt(e, t, n, r, o, s) {
    const i = es(e)
      , a = i !== e && !rt(e)
      , l = i[t];
    if (l !== Oh[t]) {
        const f = l.apply(e, s);
        return a ? He(f) : f
    }
    let u = n;
    i !== e && (a ? u = function(f, d) {
        return n.call(this, He(f), d, e)
    }
    : n.length > 2 && (u = function(f, d) {
        return n.call(this, f, d, e)
    }
    ));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c
}
function Ia(e, t, n, r) {
    const o = es(e);
    let s = n;
    return o !== e && (rt(e) ? n.length > 3 && (s = function(i, a, l) {
        return n.call(this, i, a, l, e)
    }
    ) : s = function(i, a, l) {
        return n.call(this, i, He(a), l, e)
    }
    ),
    o[t](s, ...r)
}
function Ts(e, t, n) {
    const r = se(e);
    Ve(r, "iterate", Or);
    const o = r[t](...n);
    return (o === -1 || o === !1) && rs(n[0]) ? (n[0] = se(n[0]),
    r[t](...n)) : o
}
function ur(e, t, n=[]) {
    zt(),
    ji();
    const r = se(e)[t].apply(e, n);
    return Fi(),
    qt(),
    r
}
const Mh = Ze("__proto__,__v_isRef,__isVue")
  , Bc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(dt));
function Lh(e) {
    dt(e) || (e = String(e));
    const t = se(this);
    return Ve(t, "has", e),
    t.hasOwnProperty(e)
}
class Uc {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const o = this._isReadonly
          , s = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return s;
        if (n === "__v_raw")
            return r === (o ? s ? Gc : Kc : s ? qc : zc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = z(t);
        if (!o) {
            let l;
            if (i && (l = Ph[n]))
                return l;
            if (n === "hasOwnProperty")
                return Lh
        }
        const a = Reflect.get(t, n, Re(t) ? t : r);
        return (dt(n) ? Bc.has(n) : Mh(n)) || (o || Ve(t, "get", n),
        s) ? a : Re(a) ? i && Qo(n) ? a : a.value : ge(a) ? o ? or(a) : ot(a) : a
    }
}
class Vc extends Uc {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let s = t[n];
        if (!this._isShallow) {
            const l = Mt(s);
            if (!rt(r) && !Mt(r) && (s = se(s),
            r = se(r)),
            !z(t) && Re(s) && !Re(r))
                return l || (s.value = r),
                !0
        }
        const i = z(t) && Qo(n) ? Number(n) < t.length : ce(t, n)
          , a = Reflect.set(t, n, r, Re(t) ? t : o);
        return t === se(o) && (i ? Ue(r, s) && $t(t, "set", n, r) : $t(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = ce(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && $t(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!dt(n) || !Bc.has(n)) && Ve(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ve(t, "iterate", z(t) ? "length" : Tn),
        Reflect.ownKeys(t)
    }
}
class Wc extends Uc {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Ih = new Vc
  , Nh = new Wc
  , Dh = new Vc(!0)
  , Hh = new Wc(!0)
  , Ys = e => e
  , Yr = e => Reflect.getPrototypeOf(e);
function $h(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , s = se(o)
          , i = wn(s)
          , a = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , u = o[e](...r)
          , c = n ? Ys : t ? To : He;
        return !t && Ve(s, "iterate", l ? Gs : Tn),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Jr(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function jh(e, t) {
    const n = {
        get(o) {
            const s = this.__v_raw
              , i = se(s)
              , a = se(o);
            e || (Ue(o, a) && Ve(i, "get", o),
            Ve(i, "get", a));
            const {has: l} = Yr(i)
              , u = t ? Ys : e ? To : He;
            if (l.call(i, o))
                return u(s.get(o));
            if (l.call(i, a))
                return u(s.get(a));
            s !== i && s.get(o)
        },
        get size() {
            const o = this.__v_raw;
            return !e && Ve(se(o), "iterate", Tn),
            o.size
        },
        has(o) {
            const s = this.__v_raw
              , i = se(s)
              , a = se(o);
            return e || (Ue(o, a) && Ve(i, "has", o),
            Ve(i, "has", a)),
            o === a ? s.has(o) : s.has(o) || s.has(a)
        },
        forEach(o, s) {
            const i = this
              , a = i.__v_raw
              , l = se(a)
              , u = t ? Ys : e ? To : He;
            return !e && Ve(l, "iterate", Tn),
            a.forEach( (c, f) => o.call(s, u(c), u(f), i))
        }
    };
    return ye(n, e ? {
        add: Jr("add"),
        set: Jr("set"),
        delete: Jr("delete"),
        clear: Jr("clear")
    } : {
        add(o) {
            !t && !rt(o) && !Mt(o) && (o = se(o));
            const s = se(this);
            return Yr(s).has.call(s, o) || (s.add(o),
            $t(s, "add", o, o)),
            this
        },
        set(o, s) {
            !t && !rt(s) && !Mt(s) && (s = se(s));
            const i = se(this)
              , {has: a, get: l} = Yr(i);
            let u = a.call(i, o);
            u || (o = se(o),
            u = a.call(i, o));
            const c = l.call(i, o);
            return i.set(o, s),
            u ? Ue(s, c) && $t(i, "set", o, s) : $t(i, "add", o, s),
            this
        },
        delete(o) {
            const s = se(this)
              , {has: i, get: a} = Yr(s);
            let l = i.call(s, o);
            l || (o = se(o),
            l = i.call(s, o)),
            a && a.call(s, o);
            const u = s.delete(o);
            return l && $t(s, "delete", o, void 0),
            u
        },
        clear() {
            const o = se(this)
              , s = o.size !== 0
              , i = o.clear();
            return s && $t(o, "clear", void 0, void 0),
            i
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        n[o] = $h(o, e, t)
    }
    ),
    n
}
function ts(e, t) {
    const n = jh(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ce(n, o) && o in r ? n : r, o, s)
}
const Fh = {
    get: ts(!1, !1)
}
  , Bh = {
    get: ts(!1, !0)
}
  , Uh = {
    get: ts(!0, !1)
}
  , Vh = {
    get: ts(!0, !0)
}
  , zc = new WeakMap
  , qc = new WeakMap
  , Kc = new WeakMap
  , Gc = new WeakMap;
function Wh(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function zh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Wh(Tc(e))
}
function ot(e) {
    return Mt(e) ? e : ns(e, !1, Ih, Fh, zc)
}
function Pt(e) {
    return ns(e, !1, Dh, Bh, qc)
}
function or(e) {
    return ns(e, !0, Nh, Uh, Kc)
}
function qh(e) {
    return ns(e, !0, Hh, Vh, Gc)
}
function ns(e, t, n, r, o) {
    if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = zh(e);
    if (s === 0)
        return e;
    const i = o.get(e);
    if (i)
        return i;
    const a = new Proxy(e,s === 2 ? r : n);
    return o.set(e, a),
    a
}
function ln(e) {
    return Mt(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Mt(e) {
    return !!(e && e.__v_isReadonly)
}
function rt(e) {
    return !!(e && e.__v_isShallow)
}
function rs(e) {
    return e ? !!e.__v_raw : !1
}
function se(e) {
    const t = e && e.__v_raw;
    return t ? se(t) : e
}
function Yc(e) {
    return !ce(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0),
    e
}
const He = e => ge(e) ? ot(e) : e
  , To = e => ge(e) ? or(e) : e;
function Re(e) {
    return e ? e.__v_isRef === !0 : !1
}
function he(e) {
    return Jc(e, !1)
}
function xe(e) {
    return Jc(e, !0)
}
function Jc(e, t) {
    return Re(e) ? e : new Kh(e,t)
}
class Kh {
    constructor(t, n) {
        this.dep = new Zo,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : se(t),
        this._value = n ? t : He(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || rt(t) || Mt(t);
        t = r ? t : se(t),
        Ue(t, n) && (this._rawValue = t,
        this._value = r ? t : He(t),
        this.dep.trigger())
    }
}
function Gh(e) {
    e.dep && e.dep.trigger()
}
function ie(e) {
    return Re(e) ? e.value : e
}
function ae(e) {
    return Q(e) ? e() : ie(e)
}
const Yh = {
    get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Re(o) && !Re(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Ui(e) {
    return ln(e) ? e : new Proxy(e,Yh)
}
class Jh {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new Zo
          , {get: r, set: o} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = o
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Vi(e) {
    return new Jh(e)
}
function Qh(e) {
    const t = z(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Qc(e, n);
    return t
}
class Xh {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Ah(se(this._object), this._key)
    }
}
class Zh {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function Wr(e, t, n) {
    return Re(e) ? e : Q(e) ? new Zh(e) : ge(e) && arguments.length > 1 ? Qc(e, t, n) : he(e)
}
function Qc(e, t, n) {
    const r = e[t];
    return Re(r) ? r : new Xh(e,t,n)
}
class ep {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Zo(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Pr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && ve !== this)
            return Nc(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return $c(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function tp(e, t, n=!1) {
    let r, o;
    return Q(e) ? r = e : (r = e.get,
    o = e.set),
    new ep(r,o,n)
}
const np = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}
  , rp = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
}
  , Qr = {}
  , So = new WeakMap;
let nn;
function op() {
    return nn
}
function Xc(e, t=!1, n=nn) {
    if (n) {
        let r = So.get(n);
        r || So.set(n, r = []),
        r.push(e)
    }
}
function sp(e, t, n=re) {
    const {immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l} = n
      , u = _ => o ? _ : rt(_) || o === !1 || o === 0 ? jt(_, 1) : jt(_);
    let c, f, d, h, g = !1, p = !1;
    if (Re(e) ? (f = () => e.value,
    g = rt(e)) : ln(e) ? (f = () => u(e),
    g = !0) : z(e) ? (p = !0,
    g = e.some(_ => ln(_) || rt(_)),
    f = () => e.map(_ => {
        if (Re(_))
            return _.value;
        if (ln(_))
            return u(_);
        if (Q(_))
            return l ? l(_, 2) : _()
    }
    )) : Q(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
        if (d) {
            zt();
            try {
                d()
            } finally {
                qt()
            }
        }
        const _ = nn;
        nn = c;
        try {
            return l ? l(e, 3, [h]) : e(h)
        } finally {
            nn = _
        }
    }
    : f = nt,
    t && o) {
        const _ = f
          , E = o === !0 ? 1 / 0 : o;
        f = () => jt(_(), E)
    }
    const v = Vr()
      , k = () => {
        c.stop(),
        v && v.active && Yo(v.effects, c)
    }
    ;
    if (s && t) {
        const _ = t;
        t = (...E) => {
            _(...E),
            k()
        }
    }
    let w = p ? new Array(e.length).fill(Qr) : Qr;
    const m = _ => {
        if (!(!(c.flags & 1) || !c.dirty && !_))
            if (t) {
                const E = c.run();
                if (o || g || (p ? E.some( (T, x) => Ue(T, w[x])) : Ue(E, w))) {
                    d && d();
                    const T = nn;
                    nn = c;
                    try {
                        const x = [E, w === Qr ? void 0 : p && w[0] === Qr ? [] : w, h];
                        w = E,
                        l ? l(t, 3, x) : t(...x)
                    } finally {
                        nn = T
                    }
                }
            } else
                c.run()
    }
    ;
    return a && a(m),
    c = new Ar(f),
    c.scheduler = i ? () => i(m, !1) : m,
    h = _ => Xc(_, !1, c),
    d = c.onStop = () => {
        const _ = So.get(c);
        if (_) {
            if (l)
                l(_, 4);
            else
                for (const E of _)
                    E();
            So.delete(c)
        }
    }
    ,
    t ? r ? m(!0) : w = c.run() : i ? i(m.bind(null, !0), !0) : c.run(),
    k.pause = c.pause.bind(c),
    k.resume = c.resume.bind(c),
    k.stop = k,
    k
}
function jt(e, t=1 / 0, n) {
    if (t <= 0 || !ge(e) || e.__v_skip || (n = n || new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    Re(e))
        jt(e.value, t, n);
    else if (z(e))
        for (let r = 0; r < e.length; r++)
            jt(e[r], t, n);
    else if (pn(e) || wn(e))
        e.forEach(r => {
            jt(r, t, n)
        }
        );
    else if (nr(e)) {
        for (const r in e)
            jt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Zc = [];
function ip(e) {
    Zc.push(e)
}
function ap() {
    Zc.pop()
}
function lp(e, t) {}
const cp = {
    SETUP_FUNCTION: 0,
    0: "SETUP_FUNCTION",
    RENDER_FUNCTION: 1,
    1: "RENDER_FUNCTION",
    NATIVE_EVENT_HANDLER: 5,
    5: "NATIVE_EVENT_HANDLER",
    COMPONENT_EVENT_HANDLER: 6,
    6: "COMPONENT_EVENT_HANDLER",
    VNODE_HOOK: 7,
    7: "VNODE_HOOK",
    DIRECTIVE_HOOK: 8,
    8: "DIRECTIVE_HOOK",
    TRANSITION_HOOK: 9,
    9: "TRANSITION_HOOK",
    APP_ERROR_HANDLER: 10,
    10: "APP_ERROR_HANDLER",
    APP_WARN_HANDLER: 11,
    11: "APP_WARN_HANDLER",
    FUNCTION_REF: 12,
    12: "FUNCTION_REF",
    ASYNC_COMPONENT_LOADER: 13,
    13: "ASYNC_COMPONENT_LOADER",
    SCHEDULER: 14,
    14: "SCHEDULER",
    COMPONENT_UPDATE: 15,
    15: "COMPONENT_UPDATE",
    APP_UNMOUNT_CLEANUP: 16,
    16: "APP_UNMOUNT_CLEANUP"
}
  , up = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    0: "setup function",
    1: "render function",
    2: "watcher getter",
    3: "watcher callback",
    4: "watcher cleanup function",
    5: "native event handler",
    6: "component event handler",
    7: "vnode hook",
    8: "directive hook",
    9: "transition hook",
    10: "app errorHandler",
    11: "app warnHandler",
    12: "ref function",
    13: "async component loader",
    14: "scheduler flush",
    15: "component update",
    16: "app unmount cleanup function"
};
function sr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        Mn(o, t, n)
    }
}
function ht(e, t, n, r) {
    if (Q(e)) {
        const o = sr(e, t, n, r);
        return o && Jo(o) && o.catch(s => {
            Mn(s, t, n)
        }
        ),
        o
    }
    if (z(e)) {
        const o = [];
        for (let s = 0; s < e.length; s++)
            o.push(ht(e[s], t, n, r));
        return o
    }
}
function Mn(e, t, n, r=!0) {
    const o = t ? t.vnode : null
      , {errorHandler: s, throwUnhandledErrorInProduction: i} = t && t.appContext.config || re;
    if (t) {
        let a = t.parent;
        const l = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, l, u) === !1)
                        return
            }
            a = a.parent
        }
        if (s) {
            zt(),
            sr(s, null, 10, [e, l, u]),
            qt();
            return
        }
    }
    fp(e, n, o, r, i)
}
function fp(e, t, n, r=!0, o=!1) {
    if (o)
        throw e;
    console.error(e)
}
const Ge = [];
let Rt = -1;
const Wn = [];
let rn = null
  , Hn = 0;
const eu = Promise.resolve();
let xo = null;
function pt(e) {
    const t = xo || eu;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function dp(e) {
    let t = Rt + 1
      , n = Ge.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = Ge[r]
          , s = Lr(o);
        s < e || s === e && o.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Wi(e) {
    if (!(e.flags & 1)) {
        const t = Lr(e)
          , n = Ge[Ge.length - 1];
        !n || !(e.flags & 2) && t >= Lr(n) ? Ge.push(e) : Ge.splice(dp(t), 0, e),
        e.flags |= 1,
        tu()
    }
}
function tu() {
    xo || (xo = eu.then(nu))
}
function Mr(e) {
    z(e) ? Wn.push(...e) : rn && e.id === -1 ? rn.splice(Hn + 1, 0, e) : e.flags & 1 || (Wn.push(e),
    e.flags |= 1),
    tu()
}
function Na(e, t, n=Rt + 1) {
    for (; n < Ge.length; n++) {
        const r = Ge[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            Ge.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function Co(e) {
    if (Wn.length) {
        const t = [...new Set(Wn)].sort( (n, r) => Lr(n) - Lr(r));
        if (Wn.length = 0,
        rn) {
            rn.push(...t);
            return
        }
        for (rn = t,
        Hn = 0; Hn < rn.length; Hn++) {
            const n = rn[Hn];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        rn = null,
        Hn = 0
    }
}
const Lr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nu(e) {
    try {
        for (Rt = 0; Rt < Ge.length; Rt++) {
            const t = Ge[Rt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            sr(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Rt < Ge.length; Rt++) {
            const t = Ge[Rt];
            t && (t.flags &= -2)
        }
        Rt = -1,
        Ge.length = 0,
        Co(),
        xo = null,
        (Ge.length || Wn.length) && nu()
    }
}
let $n, Xr = [];
function ru(e, t) {
    var n, r;
    $n = e,
    $n ? ($n.enabled = !0,
    Xr.forEach( ({event: o, args: s}) => $n.emit(o, ...s)),
    Xr = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(s => {
        ru(s, t)
    }
    ),
    setTimeout( () => {
        $n || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null,
        Xr = [])
    }
    , 3e3)) : Xr = []
}
let je = null
  , os = null;
function Ir(e) {
    const t = je;
    return je = e,
    os = e && e.type.__scopeId || null,
    t
}
function hp(e) {
    os = e
}
function pp() {
    os = null
}
const mp = e => _t;
function _t(e, t=je, n) {
    if (!t || e._n)
        return e;
    const r = (...o) => {
        r._d && Hr(-1);
        const s = Ir(t);
        let i;
        try {
            i = e(...o)
        } finally {
            Ir(s),
            r._d && Hr(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function gp(e, t) {
    if (je === null)
        return e;
    const n = Kr(je)
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[s,i,a,l=re] = t[o];
        s && (Q(s) && (s = {
            mounted: s,
            updated: s
        }),
        s.deep && jt(i),
        r.push({
            dir: s,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function At(e, t, n, r) {
    const o = e.dirs
      , s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let l = a.dir[r];
        l && (zt(),
        ht(l, n, 8, [e.el, a, e, t]),
        qt())
    }
}
const ou = Symbol("_vte")
  , su = e => e.__isTeleport
  , wr = e => e && (e.disabled || e.disabled === "")
  , Da = e => e && (e.defer || e.defer === "")
  , Ha = e => typeof SVGElement < "u" && e instanceof SVGElement
  , $a = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Js = (e, t) => {
    const n = e && e.to;
    return me(n) ? t ? t(n) : null : n
}
  , iu = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: h, querySelector: g, createText: p, createComment: v}} = u
          , k = wr(t.props);
        let {shapeFlag: w, children: m, dynamicChildren: _} = t;
        if (e == null) {
            const E = t.el = p("")
              , T = t.anchor = p("");
            h(E, n, r),
            h(T, n, r);
            const x = (R, P) => {
                w & 16 && (o && o.isCE && (o.ce._teleportTarget = R),
                c(m, R, P, o, s, i, a, l))
            }
              , N = () => {
                const R = t.target = Js(t.props, g)
                  , P = au(R, t, p, h);
                R && (i !== "svg" && Ha(R) ? i = "svg" : i !== "mathml" && $a(R) && (i = "mathml"),
                k || (x(R, P),
                po(t, !1)))
            }
            ;
            k && (x(n, T),
            po(t, !0)),
            Da(t.props) ? (t.el.__isMounted = !1,
            Oe( () => {
                N(),
                delete t.el.__isMounted
            }
            , s)) : N()
        } else {
            if (Da(t.props) && e.el.__isMounted === !1) {
                Oe( () => {
                    iu.process(e, t, n, r, o, s, i, a, l, u)
                }
                , s);
                return
            }
            t.el = e.el,
            t.targetStart = e.targetStart;
            const E = t.anchor = e.anchor
              , T = t.target = e.target
              , x = t.targetAnchor = e.targetAnchor
              , N = wr(e.props)
              , R = N ? n : T
              , P = N ? E : x;
            if (i === "svg" || Ha(T) ? i = "svg" : (i === "mathml" || $a(T)) && (i = "mathml"),
            _ ? (d(e.dynamicChildren, _, R, o, s, i, a),
            sa(e, t, !0)) : l || f(e, t, R, P, o, s, i, a, !1),
            k)
                N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Zr(t, n, E, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = Js(t.props, g);
                q && Zr(t, q, null, u, 0)
            } else
                N && Zr(t, T, x, u, 1);
            po(t, k)
        }
    },
    remove(e, t, n, {um: r, o: {remove: o}}, s) {
        const {shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d} = e;
        if (f && (o(u),
        o(c)),
        s && o(l),
        i & 16) {
            const h = s || !wr(d);
            for (let g = 0; g < a.length; g++) {
                const p = a[g];
                r(p, t, n, h, !!p.dynamicChildren)
            }
        }
    },
    move: Zr,
    hydrate: yp
};
function Zr(e, t, n, {o: {insert: r}, m: o}, s=2) {
    s === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: l, children: u, props: c} = e
      , f = s === 2;
    if (f && r(i, t, n),
    (!f || wr(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            o(u[d], t, n, 2);
    f && r(a, t, n)
}
function yp(e, t, n, r, o, s, {o: {nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c}}, f) {
    function d(p, v, k, w) {
        v.anchor = f(i(p), v, a(p), n, r, o, s),
        v.targetStart = k,
        v.targetAnchor = w
    }
    const h = t.target = Js(t.props, l)
      , g = wr(t.props);
    if (h) {
        const p = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (g)
                d(e, t, p, p && i(p));
            else {
                t.anchor = i(e);
                let v = p;
                for (; v; ) {
                    if (v && v.nodeType === 8) {
                        if (v.data === "teleport start anchor")
                            t.targetStart = v;
                        else if (v.data === "teleport anchor") {
                            t.targetAnchor = v,
                            h._lpa = t.targetAnchor && i(t.targetAnchor);
                            break
                        }
                    }
                    v = i(v)
                }
                t.targetAnchor || au(h, t, c, u),
                f(p && i(p), t, h, n, r, o, s)
            }
        po(t, g)
    } else
        g && t.shapeFlag & 16 && d(e, t, e, i(e));
    return t.anchor && i(t.anchor)
}
const _p = iu;
function po(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, o;
        for (t ? (r = e.el,
        o = e.anchor) : (r = e.targetStart,
        o = e.targetAnchor); r && r !== o; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function au(e, t, n, r) {
    const o = t.targetStart = n("")
      , s = t.targetAnchor = n("");
    return o[ou] = s,
    e && (r(o, e),
    r(s, e)),
    s
}
const Ht = Symbol("_leaveCb")
  , eo = Symbol("_enterCb");
function zi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return it( () => {
        e.isMounted = !0
    }
    ),
    Ln( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const ct = [Function, Array]
  , qi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ct,
    onEnter: ct,
    onAfterEnter: ct,
    onEnterCancelled: ct,
    onBeforeLeave: ct,
    onLeave: ct,
    onAfterLeave: ct,
    onLeaveCancelled: ct,
    onBeforeAppear: ct,
    onAppear: ct,
    onAfterAppear: ct,
    onAppearCancelled: ct
}
  , lu = e => {
    const t = e.subTree;
    return t.component ? lu(t.component) : t
}
  , vp = {
    name: "BaseTransition",
    props: qi,
    setup(e, {slots: t}) {
        const n = Ae()
          , r = zi();
        return () => {
            const o = t.default && ss(t.default(), !0);
            if (!o || !o.length)
                return;
            const s = cu(o)
              , i = se(e)
              , {mode: a} = i;
            if (r.isLeaving)
                return Ss(s);
            const l = ja(s);
            if (!l)
                return Ss(s);
            let u = Gn(l, i, r, n, f => u = f);
            l.type !== Ce && Kt(l, u);
            let c = n.subTree && ja(n.subTree);
            if (c && c.type !== Ce && !vt(c, l) && lu(n).type !== Ce) {
                let f = Gn(c, i, r, n);
                if (Kt(c, f),
                a === "out-in" && l.type !== Ce)
                    return r.isLeaving = !0,
                    f.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete f.afterLeave,
                        c = void 0
                    }
                    ,
                    Ss(s);
                a === "in-out" && l.type !== Ce ? f.delayLeave = (d, h, g) => {
                    const p = fu(r, c);
                    p[String(c.key)] = c,
                    d[Ht] = () => {
                        h(),
                        d[Ht] = void 0,
                        delete u.delayedLeave,
                        c = void 0
                    }
                    ,
                    u.delayedLeave = () => {
                        g(),
                        delete u.delayedLeave,
                        c = void 0
                    }
                }
                : c = void 0
            } else
                c && (c = void 0);
            return s
        }
    }
};
function cu(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Ce) {
                t = n;
                break
            }
    }
    return t
}
const uu = vp;
function fu(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Gn(e, t, n, r, o) {
    const {appear: s, mode: i, persisted: a=!1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: g, onLeaveCancelled: p, onBeforeAppear: v, onAppear: k, onAfterAppear: w, onAppearCancelled: m} = t
      , _ = String(e.key)
      , E = fu(n, e)
      , T = (R, P) => {
        R && ht(R, r, 9, P)
    }
      , x = (R, P) => {
        const q = P[1];
        T(R, P),
        z(R) ? R.every(O => O.length <= 1) && q() : R.length <= 1 && q()
    }
      , N = {
        mode: i,
        persisted: a,
        beforeEnter(R) {
            let P = l;
            if (!n.isMounted)
                if (s)
                    P = v || l;
                else
                    return;
            R[Ht] && R[Ht](!0);
            const q = E[_];
            q && vt(e, q) && q.el[Ht] && q.el[Ht](),
            T(P, [R])
        },
        enter(R) {
            let P = u
              , q = c
              , O = f;
            if (!n.isMounted)
                if (s)
                    P = k || u,
                    q = w || c,
                    O = m || f;
                else
                    return;
            let K = !1;
            const j = R[eo] = J => {
                K || (K = !0,
                J ? T(O, [R]) : T(q, [R]),
                N.delayedLeave && N.delayedLeave(),
                R[eo] = void 0)
            }
            ;
            P ? x(P, [R, j]) : j()
        },
        leave(R, P) {
            const q = String(e.key);
            if (R[eo] && R[eo](!0),
            n.isUnmounting)
                return P();
            T(d, [R]);
            let O = !1;
            const K = R[Ht] = j => {
                O || (O = !0,
                P(),
                j ? T(p, [R]) : T(g, [R]),
                R[Ht] = void 0,
                E[q] === e && delete E[q])
            }
            ;
            E[q] = e,
            h ? x(h, [R, K]) : K()
        },
        clone(R) {
            const P = Gn(R, t, n, r, o);
            return o && o(P),
            P
        }
    };
    return N
}
function Ss(e) {
    if (zr(e))
        return e = Et(e),
        e.children = null,
        e
}
function ja(e) {
    if (!zr(e))
        return su(e.type) && e.children ? cu(e.children) : e;
    if (e.component)
        return e.component.subTree;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && Q(n.default))
            return n.default()
    }
}
function Kt(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Kt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function ss(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === Pe ? (i.patchFlag & 128 && o++,
        r = r.concat(ss(i.children, t, a))) : (t || i.type !== Ce) && r.push(a != null ? Et(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
function st(e, t) {
    return Q(e) ? ye({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function bp() {
    const e = Ae();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}
function Ki(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function wp(e) {
    const t = Ae()
      , n = xe(null);
    if (t) {
        const o = t.refs === re ? t.refs = {} : t.refs;
        Object.defineProperty(o, e, {
            enumerable: !0,
            get: () => n.value,
            set: s => n.value = s
        })
    }
    return n
}
const Ro = new WeakMap;
function zn(e, t, n, r, o=!1) {
    if (z(e)) {
        e.forEach( (g, p) => zn(g, t && (z(t) ? t[p] : t), n, r, o));
        return
    }
    if (cn(r) && !o) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && zn(e, t, n, r.component.subTree);
        return
    }
    const s = r.shapeFlag & 4 ? Kr(r.component) : r.el
      , i = o ? null : s
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === re ? a.refs = {} : a.refs
      , f = a.setupState
      , d = se(f)
      , h = f === re ? Mi : g => ce(d, g);
    if (u != null && u !== l) {
        if (Fa(t),
        me(u))
            c[u] = null,
            h(u) && (f[u] = null);
        else if (Re(u)) {
            u.value = null;
            const g = t;
            g.k && (c[g.k] = null)
        }
    }
    if (Q(l))
        sr(l, a, 12, [i, c]);
    else {
        const g = me(l)
          , p = Re(l);
        if (g || p) {
            const v = () => {
                if (e.f) {
                    const k = g ? h(l) ? f[l] : c[l] : l.value;
                    if (o)
                        z(k) && Yo(k, s);
                    else if (z(k))
                        k.includes(s) || k.push(s);
                    else if (g)
                        c[l] = [s],
                        h(l) && (f[l] = c[l]);
                    else {
                        const w = [s];
                        l.value = w,
                        e.k && (c[e.k] = w)
                    }
                } else
                    g ? (c[l] = i,
                    h(l) && (f[l] = i)) : p && (l.value = i,
                    e.k && (c[e.k] = i))
            }
            ;
            if (i) {
                const k = () => {
                    v(),
                    Ro.delete(e)
                }
                ;
                k.id = -1,
                Ro.set(e, k),
                Oe(k, n)
            } else
                Fa(e),
                v()
        }
    }
}
function Fa(e) {
    const t = Ro.get(e);
    t && (t.flags |= 8,
    Ro.delete(e))
}
let Ba = !1;
const Dn = () => {
    Ba || (console.error("Hydration completed but contains mismatches."),
    Ba = !0)
}
  , Ep = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , kp = e => e.namespaceURI.includes("MathML")
  , to = e => {
    if (e.nodeType === 1) {
        if (Ep(e))
            return "svg";
        if (kp(e))
            return "mathml"
    }
}
  , Bn = e => e.nodeType === 8;
function Tp(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u}} = e
      , c = (m, _) => {
        if (!_.hasChildNodes()) {
            n(null, m, _),
            Co(),
            _._vnode = m;
            return
        }
        f(_.firstChild, m, null, null, null),
        Co(),
        _._vnode = m
    }
      , f = (m, _, E, T, x, N=!1) => {
        N = N || !!_.dynamicChildren;
        const R = Bn(m) && m.data === "["
          , P = () => p(m, _, E, T, x, R)
          , {type: q, ref: O, shapeFlag: K, patchFlag: j} = _;
        let J = m.nodeType;
        _.el = m,
        j === -2 && (N = !1,
        _.dynamicChildren = null);
        let H = null;
        switch (q) {
        case un:
            J !== 3 ? _.children === "" ? (l(_.el = o(""), i(m), m),
            H = m) : H = P() : (m.data !== _.children && (Dn(),
            m.data = _.children),
            H = s(m));
            break;
        case Ce:
            w(m) ? (H = s(m),
            k(_.el = m.content.firstChild, m, E)) : J !== 8 || R ? H = P() : H = s(m);
            break;
        case xn:
            if (R && (m = s(m),
            J = m.nodeType),
            J === 1 || J === 3) {
                H = m;
                const Z = !_.children.length;
                for (let W = 0; W < _.staticCount; W++)
                    Z && (_.children += H.nodeType === 1 ? H.outerHTML : H.data),
                    W === _.staticCount - 1 && (_.anchor = H),
                    H = s(H);
                return R ? s(H) : H
            } else
                P();
            break;
        case Pe:
            R ? H = g(m, _, E, T, x, N) : H = P();
            break;
        default:
            if (K & 1)
                (J !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase()) && !w(m) ? H = P() : H = d(m, _, E, T, x, N);
            else if (K & 6) {
                _.slotScopeIds = x;
                const Z = i(m);
                if (R ? H = v(m) : Bn(m) && m.data === "teleport start" ? H = v(m, m.data, "teleport end") : H = s(m),
                t(_, Z, null, E, T, to(Z), N),
                cn(_) && !_.type.__asyncResolved) {
                    let W;
                    R ? (W = ue(Pe),
                    W.anchor = H ? H.previousSibling : Z.lastChild) : W = m.nodeType === 3 ? Ke("") : ue("div"),
                    W.el = m,
                    _.component.subTree = W
                }
            } else
                K & 64 ? J !== 8 ? H = P() : H = _.type.hydrate(m, _, E, T, x, N, e, h) : K & 128 && (H = _.type.hydrate(m, _, E, T, to(i(m)), x, N, e, f))
        }
        return O != null && zn(O, null, T, _),
        H
    }
      , d = (m, _, E, T, x, N) => {
        N = N || !!_.dynamicChildren;
        const {type: R, props: P, patchFlag: q, shapeFlag: O, dirs: K, transition: j} = _
          , J = R === "input" || R === "option";
        if (J || q !== -1) {
            K && At(_, null, E, "created");
            let H = !1;
            if (w(m)) {
                H = Nu(null, j) && E && E.vnode.props && E.vnode.props.appear;
                const W = m.content.firstChild;
                if (H) {
                    const ke = W.getAttribute("class");
                    ke && (W.$cls = ke),
                    j.beforeEnter(W)
                }
                k(W, m, E),
                _.el = m = W
            }
            if (O & 16 && !(P && (P.innerHTML || P.textContent))) {
                let W = h(m.firstChild, _, m, E, T, x, N);
                for (; W; ) {
                    no(m, 1) || Dn();
                    const ke = W;
                    W = W.nextSibling,
                    a(ke)
                }
            } else if (O & 8) {
                let W = _.children;
                W[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (W = W.slice(1)),
                m.textContent !== W && (no(m, 0) || Dn(),
                m.textContent = _.children)
            }
            if (P) {
                if (J || !N || q & 48) {
                    const W = m.tagName.includes("-");
                    for (const ke in P)
                        (J && (ke.endsWith("value") || ke === "indeterminate") || tr(ke) && !En(ke) || ke[0] === "." || W) && r(m, ke, null, P[ke], void 0, E)
                } else if (P.onClick)
                    r(m, "onClick", null, P.onClick, void 0, E);
                else if (q & 4 && ln(P.style))
                    for (const W in P.style)
                        P.style[W]
            }
            let Z;
            (Z = P && P.onVnodeBeforeMount) && Qe(Z, E, _),
            K && At(_, null, E, "beforeMount"),
            ((Z = P && P.onVnodeMounted) || K || H) && Wu( () => {
                Z && Qe(Z, E, _),
                H && j.enter(m),
                K && At(_, null, E, "mounted")
            }
            , T)
        }
        return m.nextSibling
    }
      , h = (m, _, E, T, x, N, R) => {
        R = R || !!_.dynamicChildren;
        const P = _.children
          , q = P.length;
        for (let O = 0; O < q; O++) {
            const K = R ? P[O] : P[O] = Xe(P[O])
              , j = K.type === un;
            m ? (j && !R && O + 1 < q && Xe(P[O + 1]).type === un && (l(o(m.data.slice(K.children.length)), E, s(m)),
            m.data = K.children),
            m = f(m, K, T, x, N, R)) : j && !K.children ? l(K.el = o(""), E) : (no(E, 1) || Dn(),
            n(null, K, E, null, T, x, to(E), N))
        }
        return m
    }
      , g = (m, _, E, T, x, N) => {
        const {slotScopeIds: R} = _;
        R && (x = x ? x.concat(R) : R);
        const P = i(m)
          , q = h(s(m), _, P, E, T, x, N);
        return q && Bn(q) && q.data === "]" ? s(_.anchor = q) : (Dn(),
        l(_.anchor = u("]"), P, q),
        q)
    }
      , p = (m, _, E, T, x, N) => {
        if (no(m.parentElement, 1) || Dn(),
        _.el = null,
        N) {
            const q = v(m);
            for (; ; ) {
                const O = s(m);
                if (O && O !== q)
                    a(O);
                else
                    break
            }
        }
        const R = s(m)
          , P = i(m);
        return a(m),
        n(null, _, P, R, E, T, to(P), x),
        E && (E.vnode.el = _.el,
        cs(E, _.el)),
        R
    }
      , v = (m, _="[", E="]") => {
        let T = 0;
        for (; m; )
            if (m = s(m),
            m && Bn(m) && (m.data === _ && T++,
            m.data === E)) {
                if (T === 0)
                    return s(m);
                T--
            }
        return m
    }
      , k = (m, _, E) => {
        const T = _.parentNode;
        T && T.replaceChild(m, _);
        let x = E;
        for (; x; )
            x.vnode.el === _ && (x.vnode.el = x.subTree.el = m),
            x = x.parent
    }
      , w = m => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [c, f]
}
const Ua = "data-allow-mismatch"
  , Sp = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function no(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Ua); )
            e = e.parentElement;
    const n = e && e.getAttribute(Ua);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(Sp[t])
    }
}
const xp = Br().requestIdleCallback || (e => setTimeout(e, 1))
  , Cp = Br().cancelIdleCallback || (e => clearTimeout(e))
  , Rp = (e=1e4) => t => {
    const n = xp(t, {
        timeout: e
    });
    return () => Cp(n)
}
;
function Ap(e) {
    const {top: t, left: n, bottom: r, right: o} = e.getBoundingClientRect()
      , {innerHeight: s, innerWidth: i} = window;
    return (t > 0 && t < s || r > 0 && r < s) && (n > 0 && n < i || o > 0 && o < i)
}
const Pp = e => (t, n) => {
    const r = new IntersectionObserver(o => {
        for (const s of o)
            if (s.isIntersecting) {
                r.disconnect(),
                t();
                break
            }
    }
    ,e);
    return n(o => {
        if (o instanceof Element) {
            if (Ap(o))
                return t(),
                r.disconnect(),
                !1;
            r.observe(o)
        }
    }
    ),
    () => r.disconnect()
}
  , Op = e => t => {
    if (e) {
        const n = matchMedia(e);
        if (n.matches)
            t();
        else
            return n.addEventListener("change", t, {
                once: !0
            }),
            () => n.removeEventListener("change", t)
    }
}
  , Mp = (e=[]) => (t, n) => {
    me(e) && (e = [e]);
    let r = !1;
    const o = i => {
        r || (r = !0,
        s(),
        t(),
        i.target.dispatchEvent(new i.constructor(i.type,i)))
    }
      , s = () => {
        n(i => {
            for (const a of e)
                i.removeEventListener(a, o)
        }
        )
    }
    ;
    return n(i => {
        for (const a of e)
            i.addEventListener(a, o, {
                once: !0
            })
    }
    ),
    s
}
;
function Lp(e, t) {
    if (Bn(e) && e.data === "[") {
        let n = 1
          , r = e.nextSibling;
        for (; r; ) {
            if (r.nodeType === 1) {
                if (t(r) === !1)
                    break
            } else if (Bn(r))
                if (r.data === "]") {
                    if (--n === 0)
                        break
                } else
                    r.data === "[" && n++;
            r = r.nextSibling
        }
    } else
        t(e)
}
const cn = e => !!e.type.__asyncLoader;
function Ee(e) {
    Q(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: r, delay: o=200, hydrate: s, timeout: i, suspensible: a=!0, onError: l} = e;
    let u = null, c, f = 0;
    const d = () => (f++,
    u = null,
    h())
      , h = () => {
        let g;
        return u || (g = u = t().catch(p => {
            if (p = p instanceof Error ? p : new Error(String(p)),
            l)
                return new Promise( (v, k) => {
                    l(p, () => v(d()), () => k(p), f + 1)
                }
                );
            throw p
        }
        ).then(p => g !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default),
        c = p,
        p)))
    }
    ;
    return st({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(g, p, v) {
            let k = !1;
            (p.bu || (p.bu = [])).push( () => k = !0);
            const w = () => {
                k || v()
            }
              , m = s ? () => {
                const _ = s(w, E => Lp(g, E));
                _ && (p.bum || (p.bum = [])).push(_)
            }
            : w;
            c ? m() : h().then( () => !p.isUnmounted && m())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const g = $e;
            if (Ki(g),
            c)
                return () => xs(c, g);
            const p = m => {
                u = null,
                Mn(m, g, 13, !r)
            }
            ;
            if (a && g.suspense || Yn)
                return h().then(m => () => xs(m, g)).catch(m => (p(m),
                () => r ? ue(r, {
                    error: m
                }) : null));
            const v = he(!1)
              , k = he()
              , w = he(!!o);
            return o && setTimeout( () => {
                w.value = !1
            }
            , o),
            i != null && setTimeout( () => {
                if (!v.value && !k.value) {
                    const m = new Error(`Async component timed out after ${i}ms.`);
                    p(m),
                    k.value = m
                }
            }
            , i),
            h().then( () => {
                v.value = !0,
                g.parent && zr(g.parent.vnode) && g.parent.update()
            }
            ).catch(m => {
                p(m),
                k.value = m
            }
            ),
            () => {
                if (v.value && c)
                    return xs(c, g);
                if (k.value && r)
                    return ue(r, {
                        error: k.value
                    });
                if (n && !w.value)
                    return ue(n)
            }
        }
    })
}
function xs(e, t) {
    const {ref: n, props: r, children: o, ce: s} = t.vnode
      , i = ue(e, r, o);
    return i.ref = n,
    i.ce = s,
    delete t.vnode.ce,
    i
}
const zr = e => e.type.__isKeepAlive
  , Ip = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Ae()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const w = t.default && t.default();
                return w && w.length === 1 ? w[0] : w
            }
            ;
        const o = new Map
          , s = new Set;
        let i = null;
        const a = n.suspense
          , {renderer: {p: l, m: u, um: c, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (w, m, _, E, T) => {
            const x = w.component;
            u(w, m, _, 0, a),
            l(x.vnode, w, m, _, x, a, E, w.slotScopeIds, T),
            Oe( () => {
                x.isDeactivated = !1,
                x.a && kn(x.a);
                const N = w.props && w.props.onVnodeMounted;
                N && Qe(N, x.parent, w)
            }
            , a)
        }
        ,
        r.deactivate = w => {
            const m = w.component;
            Po(m.m),
            Po(m.a),
            u(w, d, null, 1, a),
            Oe( () => {
                m.da && kn(m.da);
                const _ = w.props && w.props.onVnodeUnmounted;
                _ && Qe(_, m.parent, w),
                m.isDeactivated = !0
            }
            , a)
        }
        ;
        function h(w) {
            Cs(w),
            c(w, n, a, !0)
        }
        function g(w) {
            o.forEach( (m, _) => {
                const E = ci(m.type);
                E && !w(E) && p(_)
            }
            )
        }
        function p(w) {
            const m = o.get(w);
            m && (!i || !vt(m, i)) ? h(m) : i && Cs(i),
            o.delete(w),
            s.delete(w)
        }
        Se( () => [e.include, e.exclude], ([w,m]) => {
            w && g(_ => yr(w, _)),
            m && g(_ => !yr(m, _))
        }
        , {
            flush: "post",
            deep: !0
        });
        let v = null;
        const k = () => {
            v != null && (Oo(n.subTree.type) ? Oe( () => {
                o.set(v, ro(n.subTree))
            }
            , n.subTree.suspense) : o.set(v, ro(n.subTree)))
        }
        ;
        return it(k),
        as(k),
        Ln( () => {
            o.forEach(w => {
                const {subTree: m, suspense: _} = n
                  , E = ro(m);
                if (w.type === E.type && w.key === E.key) {
                    Cs(E);
                    const T = E.component.da;
                    T && Oe(T, _);
                    return
                }
                h(w)
            }
            )
        }
        ),
        () => {
            if (v = null,
            !t.default)
                return i = null;
            const w = t.default()
              , m = w[0];
            if (w.length > 1)
                return i = null,
                w;
            if (!Gt(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128))
                return i = null,
                m;
            let _ = ro(m);
            if (_.type === Ce)
                return i = null,
                _;
            const E = _.type
              , T = ci(cn(_) ? _.type.__asyncResolved || {} : E)
              , {include: x, exclude: N, max: R} = e;
            if (x && (!T || !yr(x, T)) || N && T && yr(N, T))
                return _.shapeFlag &= -257,
                i = _,
                m;
            const P = _.key == null ? E : _.key
              , q = o.get(P);
            return _.el && (_ = Et(_),
            m.shapeFlag & 128 && (m.ssContent = _)),
            v = P,
            q ? (_.el = q.el,
            _.component = q.component,
            _.transition && Kt(_, _.transition),
            _.shapeFlag |= 512,
            s.delete(P),
            s.add(P)) : (s.add(P),
            R && s.size > parseInt(R, 10) && p(s.values().next().value)),
            _.shapeFlag |= 256,
            i = _,
            Oo(m.type) ? m : _
        }
    }
}
  , du = Ip;
function yr(e, t) {
    return z(e) ? e.some(n => yr(n, t)) : me(e) ? e.split(",").includes(t) : kc(e) ? (e.lastIndex = 0,
    e.test(t)) : !1
}
function Gi(e, t) {
    hu(e, "a", t)
}
function Yi(e, t) {
    hu(e, "da", t)
}
function hu(e, t, n=$e) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (is(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            zr(o.parent.vnode) && Np(r, t, n, o),
            o = o.parent
    }
}
function Np(e, t, n, r) {
    const o = is(t, e, r, !0);
    ir( () => {
        Yo(r[t], o)
    }
    , n)
}
function Cs(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function ro(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function is(e, t, n=$e, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...i) => {
            zt();
            const a = Rn(n)
              , l = ht(t, n, e, i);
            return a(),
            qt(),
            l
        }
        );
        return r ? o.unshift(s) : o.push(s),
        s
    }
}
const Jt = e => (t, n=$e) => {
    (!Yn || e === "sp") && is(e, (...r) => t(...r), n)
}
  , Ji = Jt("bm")
  , it = Jt("m")
  , Qi = Jt("bu")
  , as = Jt("u")
  , Ln = Jt("bum")
  , ir = Jt("um")
  , pu = Jt("sp")
  , mu = Jt("rtg")
  , gu = Jt("rtc");
function Xi(e, t=$e) {
    is("ec", e, t)
}
const Zi = "components"
  , Dp = "directives";
function Qs(e, t) {
    return ea(Zi, e, !0, t) || e
}
const yu = Symbol.for("v-ndc");
function _u(e) {
    return me(e) ? ea(Zi, e, !1) || e : e || yu
}
function Hp(e) {
    return ea(Dp, e)
}
function ea(e, t, n=!0, r=!1) {
    const o = je || $e;
    if (o) {
        const s = o.type;
        if (e === Zi) {
            const a = ci(s, !1);
            if (a && (a === t || a === De(t) || a === rr(De(t))))
                return s
        }
        const i = Va(o[e] || s[e], t) || Va(o.appContext[e], t);
        return !i && r ? s : i
    }
}
function Va(e, t) {
    return e && (e[t] || e[De(t)] || e[rr(De(t))])
}
function vu(e, t, n, r) {
    let o;
    const s = n && n[r]
      , i = z(e);
    if (i || me(e)) {
        const a = i && ln(e);
        let l = !1
          , u = !1;
        a && (l = !rt(e),
        u = Mt(e),
        e = es(e)),
        o = new Array(e.length);
        for (let c = 0, f = e.length; c < f; c++)
            o[c] = t(l ? u ? To(He(e[c])) : He(e[c]) : e[c], c, void 0, s && s[c])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++)
            o[a] = t(a + 1, a, void 0, s && s[a])
    } else if (ge(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (a, l) => t(a, l, void 0, s && s[l]));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                o[l] = t(e[c], c, l, s && s[l])
            }
        }
    else
        o = [];
    return n && (n[r] = o),
    o
}
function $p(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (z(r))
            for (let o = 0; o < r.length; o++)
                e[r[o].name] = r[o].fn;
        else
            r && (e[r.name] = r.key ? (...o) => {
                const s = r.fn(...o);
                return s && (s.key = r.key),
                s
            }
            : r.fn)
    }
    return e
}
function jp(e, t, n={}, r, o) {
    if (je.ce || je.parent && cn(je.parent) && je.parent.ce)
        return t !== "default" && (n.name = t),
        be(),
        Ft(Pe, null, [ue("slot", n, r && r())], 64);
    let s = e[t];
    s && s._c && (s._d = !1),
    be();
    const i = s && ta(s(n))
      , a = n.key || i && i.key
      , l = Ft(Pe, {
        key: (a && !dt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
}
function ta(e) {
    return e.some(t => Gt(t) ? !(t.type === Ce || t.type === Pe && !ta(t.children)) : !0) ? e : null
}
function Fp(e, t) {
    const n = {};
    for (const r in e)
        n[t && /[A-Z]/.test(r) ? `on:${r}` : Vn(r)] = e[r];
    return n
}
const Xs = e => e ? Qu(e) ? Kr(e) : Xs(e.parent) : null
  , Er = ye(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Xs(e.parent),
    $root: e => Xs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => na(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Wi(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = pt.bind(e.proxy)),
    $watch: e => mm.bind(e)
})
  , Rs = (e, t) => e !== re && !e.__isScriptSetup && ce(e, t)
  , Zs = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l} = e;
        let u;
        if (t[0] !== "$") {
            const h = i[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                }
            else {
                if (Rs(r, t))
                    return i[t] = 1,
                    r[t];
                if (o !== re && ce(o, t))
                    return i[t] = 2,
                    o[t];
                if ((u = e.propsOptions[0]) && ce(u, t))
                    return i[t] = 3,
                    s[t];
                if (n !== re && ce(n, t))
                    return i[t] = 4,
                    n[t];
                ei && (i[t] = 0)
            }
        }
        const c = Er[t];
        let f, d;
        if (c)
            return t === "$attrs" && Ve(e.attrs, "get", ""),
            c(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== re && ce(n, t))
            return i[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        ce(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: s} = e;
        return Rs(o, t) ? (o[t] = n,
        !0) : r !== re && ce(r, t) ? (r[t] = n,
        !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s, type: i}}, a) {
        let l, u;
        return !!(n[a] || e !== re && a[0] !== "$" && ce(e, a) || Rs(t, a) || (l = s[0]) && ce(l, a) || ce(r, a) || ce(Er, a) || ce(o.config.globalProperties, a) || (u = i.__cssModules) && u[a])
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
}
  , Bp = ye({}, Zs, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return Zs.get(e, t, e)
    },
    has(e, t) {
        return t[0] !== "_" && !Ni(t)
    }
});
function Up() {
    return null
}
function Vp() {
    return null
}
function Wp(e) {}
function zp(e) {}
function qp() {
    return null
}
function Kp() {}
function Gp(e, t) {
    return null
}
function Yp() {
    return bu().slots
}
function Jp() {
    return bu().attrs
}
function bu(e) {
    const t = Ae();
    return t.setupContext || (t.setupContext = ef(t))
}
function Nr(e) {
    return z(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function Qp(e, t) {
    const n = Nr(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let o = n[r];
        o ? z(o) || Q(o) ? o = n[r] = {
            type: o,
            default: t[r]
        } : o.default = t[r] : o === null && (o = n[r] = {
            default: t[r]
        }),
        o && t[`__skip_${r}`] && (o.skipFactory = !0)
    }
    return n
}
function Xp(e, t) {
    return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : ye({}, Nr(e), Nr(t))
}
function Zp(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || Object.defineProperty(n, r, {
            enumerable: !0,
            get: () => e[r]
        });
    return n
}
function wu(e) {
    const t = Ae();
    let n = e();
    return ii(),
    Jo(n) && (n = n.catch(r => {
        throw Rn(t),
        r
    }
    )),
    [n, () => Rn(t)]
}
let ei = !0;
function em(e) {
    const t = na(e)
      , n = e.proxy
      , r = e.ctx;
    ei = !1,
    t.beforeCreate && Wa(t.beforeCreate, e, "bc");
    const {data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: g, activated: p, deactivated: v, beforeDestroy: k, beforeUnmount: w, destroyed: m, unmounted: _, render: E, renderTracked: T, renderTriggered: x, errorCaptured: N, serverPrefetch: R, expose: P, inheritAttrs: q, components: O, directives: K, filters: j} = t;
    if (u && tm(u, r, null),
    i)
        for (const Z in i) {
            const W = i[Z];
            Q(W) && (r[Z] = W.bind(n))
        }
    if (o) {
        const Z = o.call(n, n);
        ge(Z) && (e.data = ot(Z))
    }
    if (ei = !0,
    s)
        for (const Z in s) {
            const W = s[Z]
              , ke = Q(W) ? W.bind(n, n) : Q(W.get) ? W.get.bind(n, n) : nt
              , gt = !Q(W) && Q(W.set) ? W.set.bind(n) : nt
              , at = le({
                get: ke,
                set: gt
            });
            Object.defineProperty(r, Z, {
                enumerable: !0,
                configurable: !0,
                get: () => at.value,
                set: Le => at.value = Le
            })
        }
    if (a)
        for (const Z in a)
            Eu(a[Z], r, n, Z);
    if (l) {
        const Z = Q(l) ? l.call(n) : l;
        Reflect.ownKeys(Z).forEach(W => {
            Ot(W, Z[W])
        }
        )
    }
    c && Wa(c, e, "c");
    function H(Z, W) {
        z(W) ? W.forEach(ke => Z(ke.bind(n))) : W && Z(W.bind(n))
    }
    if (H(Ji, f),
    H(it, d),
    H(Qi, h),
    H(as, g),
    H(Gi, p),
    H(Yi, v),
    H(Xi, N),
    H(gu, T),
    H(mu, x),
    H(Ln, w),
    H(ir, _),
    H(pu, R),
    z(P))
        if (P.length) {
            const Z = e.exposed || (e.exposed = {});
            P.forEach(W => {
                Object.defineProperty(Z, W, {
                    get: () => n[W],
                    set: ke => n[W] = ke,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    E && e.render === nt && (e.render = E),
    q != null && (e.inheritAttrs = q),
    O && (e.components = O),
    K && (e.directives = K),
    R && Ki(e)
}
function tm(e, t, n=nt) {
    z(e) && (e = ti(e));
    for (const r in e) {
        const o = e[r];
        let s;
        ge(o) ? "default" in o ? s = Me(o.from || r, o.default, !0) : s = Me(o.from || r) : s = Me(o),
        Re(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[r] = s
    }
}
function Wa(e, t, n) {
    ht(z(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Eu(e, t, n, r) {
    let o = r.includes(".") ? Fu(n, r) : () => n[r];
    if (me(e)) {
        const s = t[e];
        Q(s) && Se(o, s)
    } else if (Q(e))
        Se(o, e.bind(n));
    else if (ge(e))
        if (z(e))
            e.forEach(s => Eu(s, t, n, r));
        else {
            const s = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
            Q(s) && Se(o, s, e)
        }
}
function na(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: s, config: {optionMergeStrategies: i}} = e.appContext
      , a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(u => Ao(l, u, i, !0)),
    Ao(l, t, i)),
    ge(t) && s.set(t, l),
    l
}
function Ao(e, t, n, r=!1) {
    const {mixins: o, extends: s} = t;
    s && Ao(e, s, n, !0),
    o && o.forEach(i => Ao(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = nm[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const nm = {
    data: za,
    props: qa,
    emits: qa,
    methods: _r,
    computed: _r,
    beforeCreate: qe,
    created: qe,
    beforeMount: qe,
    mounted: qe,
    beforeUpdate: qe,
    updated: qe,
    beforeDestroy: qe,
    beforeUnmount: qe,
    destroyed: qe,
    unmounted: qe,
    activated: qe,
    deactivated: qe,
    errorCaptured: qe,
    serverPrefetch: qe,
    components: _r,
    directives: _r,
    watch: om,
    provide: za,
    inject: rm
};
function za(e, t) {
    return t ? e ? function() {
        return ye(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t)
    }
    : t : e
}
function rm(e, t) {
    return _r(ti(e), ti(t))
}
function ti(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function _r(e, t) {
    return e ? ye(Object.create(null), e, t) : t
}
function qa(e, t) {
    return e ? z(e) && z(t) ? [...new Set([...e, ...t])] : ye(Object.create(null), Nr(e), Nr(t ?? {})) : t
}
function om(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = ye(Object.create(null), e);
    for (const r in t)
        n[r] = qe(e[r], t[r]);
    return n
}
function ku() {
    return {
        app: null,
        config: {
            isNativeTag: Mi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let sm = 0;
function im(e, t) {
    return function(r, o=null) {
        Q(r) || (r = ye({}, r)),
        o != null && !ge(o) && (o = null);
        const s = ku()
          , i = new WeakSet
          , a = [];
        let l = !1;
        const u = s.app = {
            _uid: sm++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: nf,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return i.has(c) || (c && Q(c.install) ? (i.add(c),
                c.install(u, ...f)) : Q(c) && (i.add(c),
                c(u, ...f))),
                u
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c),
                u
            },
            component(c, f) {
                return f ? (s.components[c] = f,
                u) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f,
                u) : s.directives[c]
            },
            mount(c, f, d) {
                if (!l) {
                    const h = u._ceVNode || ue(r, o);
                    return h.appContext = s,
                    d === !0 ? d = "svg" : d === !1 && (d = void 0),
                    f && t ? t(h, c) : e(h, c, d),
                    l = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    Kr(h.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (ht(a, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f,
                u
            },
            runWithContext(c) {
                const f = Sn;
                Sn = u;
                try {
                    return c()
                } finally {
                    Sn = f
                }
            }
        };
        return u
    }
}
let Sn = null;
function Ot(e, t) {
    if ($e) {
        let n = $e.provides;
        const r = $e.parent && $e.parent.provides;
        r === n && (n = $e.provides = Object.create(r)),
        n[e] = t
    }
}
function Me(e, t, n=!1) {
    const r = Ae();
    if (r || Sn) {
        let o = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && Q(t) ? t.call(r && r.proxy) : t
    }
}
function In() {
    return !!(Ae() || Sn)
}
const Tu = {}
  , Su = () => Object.create(Tu)
  , xu = e => Object.getPrototypeOf(e) === Tu;
function am(e, t, n, r=!1) {
    const o = {}
      , s = Su();
    e.propsDefaults = Object.create(null),
    Cu(e, t, o, s);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = r ? o : Pt(o) : e.type.props ? e.props = o : e.props = s,
    e.attrs = s
}
function lm(e, t, n, r) {
    const {props: o, attrs: s, vnode: {patchFlag: i}} = e
      , a = se(o)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (ls(e.emitsOptions, d))
                    continue;
                const h = t[d];
                if (l)
                    if (ce(s, d))
                        h !== s[d] && (s[d] = h,
                        u = !0);
                    else {
                        const g = De(d);
                        o[g] = ni(l, a, g, h, e, !1)
                    }
                else
                    h !== s[d] && (s[d] = h,
                    u = !0)
            }
        }
    } else {
        Cu(e, t, o, s) && (u = !0);
        let c;
        for (const f in a)
            (!t || !ce(t, f) && ((c = We(f)) === f || !ce(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = ni(l, a, f, void 0, e, !0)) : delete o[f]);
        if (s !== a)
            for (const f in s)
                (!t || !ce(t, f)) && (delete s[f],
                u = !0)
    }
    u && $t(e.attrs, "set", "")
}
function Cu(e, t, n, r) {
    const [o,s] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let l in t) {
            if (En(l))
                continue;
            const u = t[l];
            let c;
            o && ce(o, c = De(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ls(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            i = !0)
        }
    if (s) {
        const l = se(n)
          , u = a || re;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = ni(o, l, f, u[f], e, !ce(u, f))
        }
    }
    return i
}
function ni(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = ce(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && Q(l)) {
                const {propsDefaults: u} = o;
                if (n in u)
                    r = u[n];
                else {
                    const c = Rn(o);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l;
            o.ce && o.ce._setProp(n, r)
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === We(n)) && (r = !0))
    }
    return r
}
const cm = new WeakMap;
function Ru(e, t, n=!1) {
    const r = n ? cm : t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const s = e.props
      , i = {}
      , a = [];
    let l = !1;
    if (!Q(e)) {
        const c = f => {
            l = !0;
            const [d,h] = Ru(f, t, !0);
            ye(i, d),
            h && a.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!s && !l)
        return ge(e) && r.set(e, bn),
        bn;
    if (z(s))
        for (let c = 0; c < s.length; c++) {
            const f = De(s[c]);
            Ka(f) && (i[f] = re)
        }
    else if (s)
        for (const c in s) {
            const f = De(c);
            if (Ka(f)) {
                const d = s[c]
                  , h = i[f] = z(d) || Q(d) ? {
                    type: d
                } : ye({}, d)
                  , g = h.type;
                let p = !1
                  , v = !0;
                if (z(g))
                    for (let k = 0; k < g.length; ++k) {
                        const w = g[k]
                          , m = Q(w) && w.name;
                        if (m === "Boolean") {
                            p = !0;
                            break
                        } else
                            m === "String" && (v = !1)
                    }
                else
                    p = Q(g) && g.name === "Boolean";
                h[0] = p,
                h[1] = v,
                (p || ce(h, "default")) && a.push(f)
            }
        }
    const u = [i, a];
    return ge(e) && r.set(e, u),
    u
}
function Ka(e) {
    return e[0] !== "$" && !En(e)
}
const ra = e => e === "_" || e === "_ctx" || e === "$stable"
  , oa = e => z(e) ? e.map(Xe) : [Xe(e)]
  , um = (e, t, n) => {
    if (t._n)
        return t;
    const r = _t( (...o) => oa(t(...o)), n);
    return r._c = !1,
    r
}
  , Au = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
        if (ra(o))
            continue;
        const s = e[o];
        if (Q(s))
            t[o] = um(o, s, r);
        else if (s != null) {
            const i = oa(s);
            t[o] = () => i
        }
    }
}
  , Pu = (e, t) => {
    const n = oa(t);
    e.slots.default = () => n
}
  , Ou = (e, t, n) => {
    for (const r in t)
        (n || !ra(r)) && (e[r] = t[r])
}
  , fm = (e, t, n) => {
    const r = e.slots = Su();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (Ou(r, t, n),
        n && Ii(r, "_", o, !0)) : Au(t, r)
    } else
        t && Pu(e, t)
}
  , dm = (e, t, n) => {
    const {vnode: r, slots: o} = e;
    let s = !0
      , i = re;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? s = !1 : Ou(o, t, n) : (s = !t.$stable,
        Au(t, o)),
        i = t
    } else
        t && (Pu(e, t),
        i = {
            default: 1
        });
    if (s)
        for (const a in o)
            !ra(a) && i[a] == null && delete o[a]
}
  , Oe = Wu;
function Mu(e) {
    return Iu(e)
}
function Lu(e) {
    return Iu(e, Tp)
}
function Iu(e, t) {
    const n = Br();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h=nt, insertStaticContent: g} = e
      , p = (y, b, S, M=null, C=null, L=null, F=void 0, $=null, D=!!b.dynamicChildren) => {
        if (y === b)
            return;
        y && !vt(y, b) && (M = A(y),
        Le(y, C, L, !0),
        y = null),
        b.patchFlag === -2 && (D = !1,
        b.dynamicChildren = null);
        const {type: I, ref: X, shapeFlag: U} = b;
        switch (I) {
        case un:
            v(y, b, S, M);
            break;
        case Ce:
            k(y, b, S, M);
            break;
        case xn:
            y == null && w(b, S, M, F);
            break;
        case Pe:
            O(y, b, S, M, C, L, F, $, D);
            break;
        default:
            U & 1 ? E(y, b, S, M, C, L, F, $, D) : U & 6 ? K(y, b, S, M, C, L, F, $, D) : (U & 64 || U & 128) && I.process(y, b, S, M, C, L, F, $, D, G)
        }
        X != null && C ? zn(X, y && y.ref, L, b || y, !b) : X == null && y && y.ref != null && zn(y.ref, null, L, y, !0)
    }
      , v = (y, b, S, M) => {
        if (y == null)
            r(b.el = a(b.children), S, M);
        else {
            const C = b.el = y.el;
            b.children !== y.children && u(C, b.children)
        }
    }
      , k = (y, b, S, M) => {
        y == null ? r(b.el = l(b.children || ""), S, M) : b.el = y.el
    }
      , w = (y, b, S, M) => {
        [y.el,y.anchor] = g(y.children, b, S, M, y.el, y.anchor)
    }
      , m = ({el: y, anchor: b}, S, M) => {
        let C;
        for (; y && y !== b; )
            C = d(y),
            r(y, S, M),
            y = C;
        r(b, S, M)
    }
      , _ = ({el: y, anchor: b}) => {
        let S;
        for (; y && y !== b; )
            S = d(y),
            o(y),
            y = S;
        o(b)
    }
      , E = (y, b, S, M, C, L, F, $, D) => {
        b.type === "svg" ? F = "svg" : b.type === "math" && (F = "mathml"),
        y == null ? T(b, S, M, C, L, F, $, D) : R(y, b, C, L, F, $, D)
    }
      , T = (y, b, S, M, C, L, F, $) => {
        let D, I;
        const {props: X, shapeFlag: U, transition: Y, dirs: ee} = y;
        if (D = y.el = i(y.type, L, X && X.is, X),
        U & 8 ? c(D, y.children) : U & 16 && N(y.children, D, null, M, C, As(y, L), F, $),
        ee && At(y, null, M, "created"),
        x(D, y, y.scopeId, F, M),
        X) {
            for (const _e in X)
                _e !== "value" && !En(_e) && s(D, _e, null, X[_e], L, M);
            "value" in X && s(D, "value", null, X.value, L),
            (I = X.onVnodeBeforeMount) && Qe(I, M, y)
        }
        ee && At(y, null, M, "beforeMount");
        const oe = Nu(C, Y);
        oe && Y.beforeEnter(D),
        r(D, b, S),
        ((I = X && X.onVnodeMounted) || oe || ee) && Oe( () => {
            I && Qe(I, M, y),
            oe && Y.enter(D),
            ee && At(y, null, M, "mounted")
        }
        , C)
    }
      , x = (y, b, S, M, C) => {
        if (S && h(y, S),
        M)
            for (let L = 0; L < M.length; L++)
                h(y, M[L]);
        if (C) {
            let L = C.subTree;
            if (b === L || Oo(L.type) && (L.ssContent === b || L.ssFallback === b)) {
                const F = C.vnode;
                x(y, F, F.scopeId, F.slotScopeIds, C.parent)
            }
        }
    }
      , N = (y, b, S, M, C, L, F, $, D=0) => {
        for (let I = D; I < y.length; I++) {
            const X = y[I] = $ ? sn(y[I]) : Xe(y[I]);
            p(null, X, b, S, M, C, L, F, $)
        }
    }
      , R = (y, b, S, M, C, L, F) => {
        const $ = b.el = y.el;
        let {patchFlag: D, dynamicChildren: I, dirs: X} = b;
        D |= y.patchFlag & 16;
        const U = y.props || re
          , Y = b.props || re;
        let ee;
        if (S && mn(S, !1),
        (ee = Y.onVnodeBeforeUpdate) && Qe(ee, S, b, y),
        X && At(b, y, S, "beforeUpdate"),
        S && mn(S, !0),
        (U.innerHTML && Y.innerHTML == null || U.textContent && Y.textContent == null) && c($, ""),
        I ? P(y.dynamicChildren, I, $, S, M, As(b, C), L) : F || W(y, b, $, null, S, M, As(b, C), L, !1),
        D > 0) {
            if (D & 16)
                q($, U, Y, S, C);
            else if (D & 2 && U.class !== Y.class && s($, "class", null, Y.class, C),
            D & 4 && s($, "style", U.style, Y.style, C),
            D & 8) {
                const oe = b.dynamicProps;
                for (let _e = 0; _e < oe.length; _e++) {
                    const pe = oe[_e]
                      , Je = U[pe]
                      , Fe = Y[pe];
                    (Fe !== Je || pe === "value") && s($, pe, Je, Fe, C, S)
                }
            }
            D & 1 && y.children !== b.children && c($, b.children)
        } else
            !F && I == null && q($, U, Y, S, C);
        ((ee = Y.onVnodeUpdated) || X) && Oe( () => {
            ee && Qe(ee, S, b, y),
            X && At(b, y, S, "updated")
        }
        , M)
    }
      , P = (y, b, S, M, C, L, F) => {
        for (let $ = 0; $ < b.length; $++) {
            const D = y[$]
              , I = b[$]
              , X = D.el && (D.type === Pe || !vt(D, I) || D.shapeFlag & 198) ? f(D.el) : S;
            p(D, I, X, null, M, C, L, F, !0)
        }
    }
      , q = (y, b, S, M, C) => {
        if (b !== S) {
            if (b !== re)
                for (const L in b)
                    !En(L) && !(L in S) && s(y, L, b[L], null, C, M);
            for (const L in S) {
                if (En(L))
                    continue;
                const F = S[L]
                  , $ = b[L];
                F !== $ && L !== "value" && s(y, L, $, F, C, M)
            }
            "value" in S && s(y, "value", b.value, S.value, C)
        }
    }
      , O = (y, b, S, M, C, L, F, $, D) => {
        const I = b.el = y ? y.el : a("")
          , X = b.anchor = y ? y.anchor : a("");
        let {patchFlag: U, dynamicChildren: Y, slotScopeIds: ee} = b;
        ee && ($ = $ ? $.concat(ee) : ee),
        y == null ? (r(I, S, M),
        r(X, S, M),
        N(b.children || [], S, X, C, L, F, $, D)) : U > 0 && U & 64 && Y && y.dynamicChildren ? (P(y.dynamicChildren, Y, S, C, L, F, $),
        (b.key != null || C && b === C.subTree) && sa(y, b, !0)) : W(y, b, S, X, C, L, F, $, D)
    }
      , K = (y, b, S, M, C, L, F, $, D) => {
        b.slotScopeIds = $,
        y == null ? b.shapeFlag & 512 ? C.ctx.activate(b, S, M, F, D) : j(b, S, M, C, L, F, D) : J(y, b, D)
    }
      , j = (y, b, S, M, C, L, F) => {
        const $ = y.component = Ju(y, M, C);
        if (zr(y) && ($.ctx.renderer = G),
        Xu($, !1, F),
        $.asyncDep) {
            if (C && C.registerDep($, H, F),
            !y.el) {
                const D = $.subTree = ue(Ce);
                k(null, D, b, S),
                y.placeholder = D.el
            }
        } else
            H($, y, b, S, C, L, F)
    }
      , J = (y, b, S) => {
        const M = b.component = y.component;
        if (Em(y, b, S))
            if (M.asyncDep && !M.asyncResolved) {
                Z(M, b, S);
                return
            } else
                M.next = b,
                M.update();
        else
            b.el = y.el,
            M.vnode = b
    }
      , H = (y, b, S, M, C, L, F) => {
        const $ = () => {
            if (y.isMounted) {
                let {next: U, bu: Y, u: ee, parent: oe, vnode: _e} = y;
                {
                    const et = Du(y);
                    if (et) {
                        U && (U.el = _e.el,
                        Z(y, U, F)),
                        et.asyncDep.then( () => {
                            y.isUnmounted || $()
                        }
                        );
                        return
                    }
                }
                let pe = U, Je;
                mn(y, !1),
                U ? (U.el = _e.el,
                Z(y, U, F)) : U = _e,
                Y && kn(Y),
                (Je = U.props && U.props.onVnodeBeforeUpdate) && Qe(Je, oe, U, _e),
                mn(y, !0);
                const Fe = mo(y)
                  , yt = y.subTree;
                y.subTree = Fe,
                p(yt, Fe, f(yt.el), A(yt), y, C, L),
                U.el = Fe.el,
                pe === null && cs(y, Fe.el),
                ee && Oe(ee, C),
                (Je = U.props && U.props.onVnodeUpdated) && Oe( () => Qe(Je, oe, U, _e), C)
            } else {
                let U;
                const {el: Y, props: ee} = b
                  , {bm: oe, m: _e, parent: pe, root: Je, type: Fe} = y
                  , yt = cn(b);
                if (mn(y, !1),
                oe && kn(oe),
                !yt && (U = ee && ee.onVnodeBeforeMount) && Qe(U, pe, b),
                mn(y, !0),
                Y && Te) {
                    const et = () => {
                        y.subTree = mo(y),
                        Te(Y, y.subTree, y, C, null)
                    }
                    ;
                    yt && Fe.__asyncHydrate ? Fe.__asyncHydrate(Y, y, et) : et()
                } else {
                    Je.ce && Je.ce._def.shadowRoot !== !1 && Je.ce._injectChildStyle(Fe);
                    const et = y.subTree = mo(y);
                    p(null, et, S, M, y, C, L),
                    b.el = et.el
                }
                if (_e && Oe(_e, C),
                !yt && (U = ee && ee.onVnodeMounted)) {
                    const et = b;
                    Oe( () => Qe(U, pe, et), C)
                }
                (b.shapeFlag & 256 || pe && cn(pe.vnode) && pe.vnode.shapeFlag & 256) && y.a && Oe(y.a, C),
                y.isMounted = !0,
                b = S = M = null
            }
        }
        ;
        y.scope.on();
        const D = y.effect = new Ar($);
        y.scope.off();
        const I = y.update = D.run.bind(D)
          , X = y.job = D.runIfDirty.bind(D);
        X.i = y,
        X.id = y.uid,
        D.scheduler = () => Wi(X),
        mn(y, !0),
        I()
    }
      , Z = (y, b, S) => {
        b.component = y;
        const M = y.vnode.props;
        y.vnode = b,
        y.next = null,
        lm(y, b.props, M, S),
        dm(y, b.children, S),
        zt(),
        Na(y),
        qt()
    }
      , W = (y, b, S, M, C, L, F, $, D=!1) => {
        const I = y && y.children
          , X = y ? y.shapeFlag : 0
          , U = b.children
          , {patchFlag: Y, shapeFlag: ee} = b;
        if (Y > 0) {
            if (Y & 128) {
                gt(I, U, S, M, C, L, F, $, D);
                return
            } else if (Y & 256) {
                ke(I, U, S, M, C, L, F, $, D);
                return
            }
        }
        ee & 8 ? (X & 16 && lt(I, C, L),
        U !== I && c(S, U)) : X & 16 ? ee & 16 ? gt(I, U, S, M, C, L, F, $, D) : lt(I, C, L, !0) : (X & 8 && c(S, ""),
        ee & 16 && N(U, S, M, C, L, F, $, D))
    }
      , ke = (y, b, S, M, C, L, F, $, D) => {
        y = y || bn,
        b = b || bn;
        const I = y.length
          , X = b.length
          , U = Math.min(I, X);
        let Y;
        for (Y = 0; Y < U; Y++) {
            const ee = b[Y] = D ? sn(b[Y]) : Xe(b[Y]);
            p(y[Y], ee, S, null, C, L, F, $, D)
        }
        I > X ? lt(y, C, L, !0, !1, U) : N(b, S, M, C, L, F, $, D, U)
    }
      , gt = (y, b, S, M, C, L, F, $, D) => {
        let I = 0;
        const X = b.length;
        let U = y.length - 1
          , Y = X - 1;
        for (; I <= U && I <= Y; ) {
            const ee = y[I]
              , oe = b[I] = D ? sn(b[I]) : Xe(b[I]);
            if (vt(ee, oe))
                p(ee, oe, S, null, C, L, F, $, D);
            else
                break;
            I++
        }
        for (; I <= U && I <= Y; ) {
            const ee = y[U]
              , oe = b[Y] = D ? sn(b[Y]) : Xe(b[Y]);
            if (vt(ee, oe))
                p(ee, oe, S, null, C, L, F, $, D);
            else
                break;
            U--,
            Y--
        }
        if (I > U) {
            if (I <= Y) {
                const ee = Y + 1
                  , oe = ee < X ? b[ee].el : M;
                for (; I <= Y; )
                    p(null, b[I] = D ? sn(b[I]) : Xe(b[I]), S, oe, C, L, F, $, D),
                    I++
            }
        } else if (I > Y)
            for (; I <= U; )
                Le(y[I], C, L, !0),
                I++;
        else {
            const ee = I
              , oe = I
              , _e = new Map;
            for (I = oe; I <= Y; I++) {
                const tt = b[I] = D ? sn(b[I]) : Xe(b[I]);
                tt.key != null && _e.set(tt.key, I)
            }
            let pe, Je = 0;
            const Fe = Y - oe + 1;
            let yt = !1
              , et = 0;
            const cr = new Array(Fe);
            for (I = 0; I < Fe; I++)
                cr[I] = 0;
            for (I = ee; I <= U; I++) {
                const tt = y[I];
                if (Je >= Fe) {
                    Le(tt, C, L, !0);
                    continue
                }
                let xt;
                if (tt.key != null)
                    xt = _e.get(tt.key);
                else
                    for (pe = oe; pe <= Y; pe++)
                        if (cr[pe - oe] === 0 && vt(tt, b[pe])) {
                            xt = pe;
                            break
                        }
                xt === void 0 ? Le(tt, C, L, !0) : (cr[xt - oe] = I + 1,
                xt >= et ? et = xt : yt = !0,
                p(tt, b[xt], S, null, C, L, F, $, D),
                Je++)
            }
            const Ra = yt ? hm(cr) : bn;
            for (pe = Ra.length - 1,
            I = Fe - 1; I >= 0; I--) {
                const tt = oe + I
                  , xt = b[tt]
                  , Aa = b[tt + 1]
                  , Pa = tt + 1 < X ? Aa.el || Aa.placeholder : M;
                cr[I] === 0 ? p(null, xt, S, Pa, C, L, F, $, D) : yt && (pe < 0 || I !== Ra[pe] ? at(xt, S, Pa, 2) : pe--)
            }
        }
    }
      , at = (y, b, S, M, C=null) => {
        const {el: L, type: F, transition: $, children: D, shapeFlag: I} = y;
        if (I & 6) {
            at(y.component.subTree, b, S, M);
            return
        }
        if (I & 128) {
            y.suspense.move(b, S, M);
            return
        }
        if (I & 64) {
            F.move(y, b, S, G);
            return
        }
        if (F === Pe) {
            r(L, b, S);
            for (let U = 0; U < D.length; U++)
                at(D[U], b, S, M);
            r(y.anchor, b, S);
            return
        }
        if (F === xn) {
            m(y, b, S);
            return
        }
        if (M !== 2 && I & 1 && $)
            if (M === 0)
                $.beforeEnter(L),
                r(L, b, S),
                Oe( () => $.enter(L), C);
            else {
                const {leave: U, delayLeave: Y, afterLeave: ee} = $
                  , oe = () => {
                    y.ctx.isUnmounted ? o(L) : r(L, b, S)
                }
                  , _e = () => {
                    L._isLeaving && L[Ht](!0),
                    U(L, () => {
                        oe(),
                        ee && ee()
                    }
                    )
                }
                ;
                Y ? Y(L, oe, _e) : _e()
            }
        else
            r(L, b, S)
    }
      , Le = (y, b, S, M=!1, C=!1) => {
        const {type: L, props: F, ref: $, children: D, dynamicChildren: I, shapeFlag: X, patchFlag: U, dirs: Y, cacheIndex: ee} = y;
        if (U === -2 && (C = !1),
        $ != null && (zt(),
        zn($, null, S, y, !0),
        qt()),
        ee != null && (b.renderCache[ee] = void 0),
        X & 256) {
            b.ctx.deactivate(y);
            return
        }
        const oe = X & 1 && Y
          , _e = !cn(y);
        let pe;
        if (_e && (pe = F && F.onVnodeBeforeUnmount) && Qe(pe, b, y),
        X & 6)
            Xt(y.component, S, M);
        else {
            if (X & 128) {
                y.suspense.unmount(S, M);
                return
            }
            oe && At(y, null, b, "beforeUnmount"),
            X & 64 ? y.type.remove(y, b, S, G, M) : I && !I.hasOnce && (L !== Pe || U > 0 && U & 64) ? lt(I, b, S, !1, !0) : (L === Pe && U & 384 || !C && X & 16) && lt(D, b, S),
            M && Tt(y)
        }
        (_e && (pe = F && F.onVnodeUnmounted) || oe) && Oe( () => {
            pe && Qe(pe, b, y),
            oe && At(y, null, b, "unmounted")
        }
        , S)
    }
      , Tt = y => {
        const {type: b, el: S, anchor: M, transition: C} = y;
        if (b === Pe) {
            St(S, M);
            return
        }
        if (b === xn) {
            _(y);
            return
        }
        const L = () => {
            o(S),
            C && !C.persisted && C.afterLeave && C.afterLeave()
        }
        ;
        if (y.shapeFlag & 1 && C && !C.persisted) {
            const {leave: F, delayLeave: $} = C
              , D = () => F(S, L);
            $ ? $(y.el, L, D) : D()
        } else
            L()
    }
      , St = (y, b) => {
        let S;
        for (; y !== b; )
            S = d(y),
            o(y),
            y = S;
        o(b)
    }
      , Xt = (y, b, S) => {
        const {bum: M, scope: C, job: L, subTree: F, um: $, m: D, a: I} = y;
        Po(D),
        Po(I),
        M && kn(M),
        C.stop(),
        L && (L.flags |= 8,
        Le(F, y, b, S)),
        $ && Oe($, b),
        Oe( () => {
            y.isUnmounted = !0
        }
        , b)
    }
      , lt = (y, b, S, M=!1, C=!1, L=0) => {
        for (let F = L; F < y.length; F++)
            Le(y[F], b, S, M, C)
    }
      , A = y => {
        if (y.shapeFlag & 6)
            return A(y.component.subTree);
        if (y.shapeFlag & 128)
            return y.suspense.next();
        const b = d(y.anchor || y.el)
          , S = b && b[ou];
        return S ? d(S) : b
    }
    ;
    let V = !1;
    const B = (y, b, S) => {
        y == null ? b._vnode && Le(b._vnode, null, null, !0) : p(b._vnode || null, y, b, null, null, null, S),
        b._vnode = y,
        V || (V = !0,
        Na(),
        Co(),
        V = !1)
    }
      , G = {
        p,
        um: Le,
        m: at,
        r: Tt,
        mt: j,
        mc: N,
        pc: W,
        pbc: P,
        n: A,
        o: e
    };
    let fe, Te;
    return t && ([fe,Te] = t(G)),
    {
        render: B,
        hydrate: fe,
        createApp: im(B, fe)
    }
}
function As({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function mn({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function Nu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function sa(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (z(r) && z(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = sn(o[s]),
            a.el = i.el),
            !n && a.patchFlag !== -2 && sa(i, a)),
            a.type === un && a.patchFlag !== -1 && (a.el = i.el),
            a.type === Ce && !a.el && (a.el = i.el)
        }
}
function hm(e) {
    const t = e.slice()
      , n = [0];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (o = n[n.length - 1],
            e[o] < u) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (s = 0,
            i = n.length - 1; s < i; )
                a = s + i >> 1,
                e[n[a]] < u ? s = a + 1 : i = a;
            u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    i = n[s - 1]; s-- > 0; )
        n[s] = i,
        i = t[i];
    return n
}
function Du(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Du(t)
}
function Po(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const Hu = Symbol.for("v-scx")
  , $u = () => Me(Hu);
function ia(e, t) {
    return qr(e, null, t)
}
function pm(e, t) {
    return qr(e, null, {
        flush: "post"
    })
}
function ju(e, t) {
    return qr(e, null, {
        flush: "sync"
    })
}
function Se(e, t, n) {
    return qr(e, t, n)
}
function qr(e, t, n=re) {
    const {immediate: r, deep: o, flush: s, once: i} = n
      , a = ye({}, n)
      , l = t && r || !t && s !== "post";
    let u;
    if (Yn) {
        if (s === "sync") {
            const h = $u();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {}
            ;
            return h.stop = nt,
            h.resume = nt,
            h.pause = nt,
            h
        }
    }
    const c = $e;
    a.call = (h, g, p) => ht(h, c, g, p);
    let f = !1;
    s === "post" ? a.scheduler = h => {
        Oe(h, c && c.suspense)
    }
    : s !== "sync" && (f = !0,
    a.scheduler = (h, g) => {
        g ? h() : Wi(h)
    }
    ),
    a.augmentJob = h => {
        t && (h.flags |= 4),
        f && (h.flags |= 2,
        c && (h.id = c.uid,
        h.i = c))
    }
    ;
    const d = sp(e, t, a);
    return Yn && (u ? u.push(d) : l && d()),
    d
}
function mm(e, t, n) {
    const r = this.proxy
      , o = me(e) ? e.includes(".") ? Fu(r, e) : () => r[e] : e.bind(r, r);
    let s;
    Q(t) ? s = t : (s = t.handler,
    n = t);
    const i = Rn(this)
      , a = qr(o, s.bind(r), n);
    return i(),
    a
}
function Fu(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function gm(e, t, n=re) {
    const r = Ae()
      , o = De(t)
      , s = We(t)
      , i = Bu(e, o)
      , a = Vi( (l, u) => {
        let c, f = re, d;
        return ju( () => {
            const h = e[o];
            Ue(c, h) && (c = h,
            u())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(c) : c
            },
            set(h) {
                const g = n.set ? n.set(h) : h;
                if (!Ue(g, c) && !(f !== re && Ue(h, f)))
                    return;
                const p = r.vnode.props;
                p && (t in p || o in p || s in p) && (`onUpdate:${t}` in p || `onUpdate:${o}` in p || `onUpdate:${s}` in p) || (c = h,
                u()),
                r.emit(`update:${t}`, g),
                Ue(h, g) && Ue(h, f) && !Ue(g, d) && u(),
                f = h,
                d = g
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? i || re : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const Bu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${We(t)}Modifiers`];
function ym(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || re;
    let o = n;
    const s = t.startsWith("update:")
      , i = s && Bu(r, t.slice(7));
    i && (i.trim && (o = n.map(c => me(c) ? c.trim() : c)),
    i.number && (o = n.map(Cr)));
    let a, l = r[a = Vn(t)] || r[a = Vn(De(t))];
    !l && s && (l = r[a = Vn(We(t))]),
    l && ht(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        ht(u, e, 6, o)
    }
}
const _m = new WeakMap;
function Uu(e, t, n=!1) {
    const r = n ? _m : t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const s = e.emits;
    let i = {}
      , a = !1;
    if (!Q(e)) {
        const l = u => {
            const c = Uu(u, t, !0);
            c && (a = !0,
            ye(i, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (ge(e) && r.set(e, null),
    null) : (z(s) ? s.forEach(l => i[l] = null) : ye(i, s),
    ge(e) && r.set(e, i),
    i)
}
function ls(e, t) {
    return !e || !tr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, We(t)) || ce(e, t))
}
function mo(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: g, inheritAttrs: p} = e
      , v = Ir(e);
    let k, w;
    try {
        if (n.shapeFlag & 4) {
            const _ = o || r
              , E = _;
            k = Xe(u.call(E, _, c, f, h, d, g)),
            w = a
        } else {
            const _ = t;
            k = Xe(_.length > 1 ? _(f, {
                attrs: a,
                slots: i,
                emit: l
            }) : _(f, null)),
            w = t.props ? a : bm(a)
        }
    } catch (_) {
        kr.length = 0,
        Mn(_, e, 1),
        k = ue(Ce)
    }
    let m = k;
    if (w && p !== !1) {
        const _ = Object.keys(w)
          , {shapeFlag: E} = m;
        _.length && E & 7 && (s && _.some(Go) && (w = wm(w, s)),
        m = Et(m, w, !1, !0))
    }
    return n.dirs && (m = Et(m, null, !1, !0),
    m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs),
    n.transition && Kt(m, n.transition),
    k = m,
    Ir(v),
    k
}
function vm(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (Gt(o)) {
            if (o.type !== Ce || o.children === "v-if") {
                if (n)
                    return;
                n = o
            }
        } else
            return
    }
    return n
}
const bm = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || tr(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , wm = (e, t) => {
    const n = {};
    for (const r in e)
        (!Go(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
}
;
function Em(e, t, n) {
    const {props: r, children: o, component: s} = e
      , {props: i, children: a, patchFlag: l} = t
      , u = s.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Ga(r, i, u) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (i[d] !== r[d] && !ls(u, d))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ga(r, i, u) : !0 : !!i;
    return !1
}
function Ga(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !ls(n, s))
            return !0
    }
    return !1
}
function cs({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Oo = e => e.__isSuspense;
let ri = 0;
const km = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
        if (e == null)
            Tm(t, n, r, o, s, i, a, l, u);
        else {
            if (s && s.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            Sm(e, t, n, r, o, i, a, l, u)
        }
    },
    hydrate: xm,
    normalize: Cm
}
  , aa = km;
function Dr(e, t) {
    const n = e.props && e.props[t];
    Q(n) && n()
}
function Tm(e, t, n, r, o, s, i, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = e.suspense = Vu(e, o, r, t, f, n, s, i, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i),
    d.deps > 0 ? (Dr(e, "onPending"),
    Dr(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, s, i),
    qn(d, e.ssFallback)) : d.resolve(!1, !0)
}
function Sm(e, t, n, r, o, s, i, a, {p: l, um: u, o: {createElement: c}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , h = t.ssFallback
      , {activeBranch: g, pendingBranch: p, isInFallback: v, isHydrating: k} = f;
    if (p)
        f.pendingBranch = d,
        vt(p, d) ? (l(p, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : v && (k || (l(g, h, n, r, o, null, s, i, a),
        qn(f, h)))) : (f.pendingId = ri++,
        k ? (f.isHydrating = !1,
        f.activeBranch = p) : u(p, o, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        v ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : (l(g, h, n, r, o, null, s, i, a),
        qn(f, h))) : g && vt(g, d) ? (l(g, d, n, r, o, f, s, i, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 && f.resolve()));
    else if (g && vt(g, d))
        l(g, d, n, r, o, f, s, i, a),
        qn(f, d);
    else if (Dr(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = ri++,
    l(null, d, f.hiddenContainer, null, o, f, s, i, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: w, pendingId: m} = f;
        w > 0 ? setTimeout( () => {
            f.pendingId === m && f.fallback(h)
        }
        , w) : w === 0 && f.fallback(h)
    }
}
function Vu(e, t, n, r, o, s, i, a, l, u, c=!1) {
    const {p: f, m: d, um: h, n: g, o: {parentNode: p, remove: v}} = u;
    let k;
    const w = Rm(e);
    w && t && t.pendingBranch && (k = t.pendingId,
    t.deps++);
    const m = e.props ? Rr(e.props.timeout) : void 0
      , _ = s
      , E = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: i,
        container: r,
        hiddenContainer: o,
        deps: 0,
        pendingId: ri++,
        timeout: typeof m == "number" ? m : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(T=!1, x=!1) {
            const {vnode: N, activeBranch: R, pendingBranch: P, pendingId: q, effects: O, parentComponent: K, container: j} = E;
            let J = !1;
            E.isHydrating ? E.isHydrating = !1 : T || (J = R && P.transition && P.transition.mode === "out-in",
            J && (R.transition.afterLeave = () => {
                q === E.pendingId && (d(P, j, s === _ ? g(R) : s, 0),
                Mr(O))
            }
            ),
            R && (p(R.el) === j && (s = g(R)),
            h(R, K, E, !0)),
            J || d(P, j, s, 0)),
            qn(E, P),
            E.pendingBranch = null,
            E.isInFallback = !1;
            let H = E.parent
              , Z = !1;
            for (; H; ) {
                if (H.pendingBranch) {
                    H.effects.push(...O),
                    Z = !0;
                    break
                }
                H = H.parent
            }
            !Z && !J && Mr(O),
            E.effects = [],
            w && t && t.pendingBranch && k === t.pendingId && (t.deps--,
            t.deps === 0 && !x && t.resolve()),
            Dr(N, "onResolve")
        },
        fallback(T) {
            if (!E.pendingBranch)
                return;
            const {vnode: x, activeBranch: N, parentComponent: R, container: P, namespace: q} = E;
            Dr(x, "onFallback");
            const O = g(N)
              , K = () => {
                E.isInFallback && (f(null, T, P, O, R, null, q, a, l),
                qn(E, T))
            }
              , j = T.transition && T.transition.mode === "out-in";
            j && (N.transition.afterLeave = K),
            E.isInFallback = !0,
            h(N, R, null, !0),
            j || K()
        },
        move(T, x, N) {
            E.activeBranch && d(E.activeBranch, T, x, N),
            E.container = T
        },
        next() {
            return E.activeBranch && g(E.activeBranch)
        },
        registerDep(T, x, N) {
            const R = !!E.pendingBranch;
            R && E.deps++;
            const P = T.vnode.el;
            T.asyncDep.catch(q => {
                Mn(q, T, 0)
            }
            ).then(q => {
                if (T.isUnmounted || E.isUnmounted || E.pendingId !== T.suspenseId)
                    return;
                T.asyncResolved = !0;
                const {vnode: O} = T;
                ai(T, q, !1),
                P && (O.el = P);
                const K = !P && T.subTree.el;
                x(T, O, p(P || T.subTree.el), P ? null : g(T.subTree), E, i, N),
                K && v(K),
                cs(T, O.el),
                R && --E.deps === 0 && E.resolve()
            }
            )
        },
        unmount(T, x) {
            E.isUnmounted = !0,
            E.activeBranch && h(E.activeBranch, n, T, x),
            E.pendingBranch && h(E.pendingBranch, n, T, x)
        }
    };
    return E
}
function xm(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = Vu(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, !0)
      , c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function Cm(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = Ya(r ? n.default : n),
    e.ssFallback = r ? Ya(n.fallback) : ue(Ce)
}
function Ya(e) {
    let t;
    if (Q(e)) {
        const n = Cn && e._c;
        n && (e._d = !1,
        be()),
        e = e(),
        n && (e._d = !0,
        t = ze,
        zu())
    }
    return z(e) && (e = vm(e)),
    e = Xe(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function Wu(e, t) {
    t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Mr(e)
}
function qn(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let o = t.el;
    for (; !o && t.component; )
        t = t.component.subTree,
        o = t.el;
    n.el = o,
    r && r.subTree === n && (r.vnode.el = o,
    cs(r, o))
}
function Rm(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Pe = Symbol.for("v-fgt")
  , un = Symbol.for("v-txt")
  , Ce = Symbol.for("v-cmt")
  , xn = Symbol.for("v-stc")
  , kr = [];
let ze = null;
function be(e=!1) {
    kr.push(ze = e ? null : [])
}
function zu() {
    kr.pop(),
    ze = kr[kr.length - 1] || null
}
let Cn = 1;
function Hr(e, t=!1) {
    Cn += e,
    e < 0 && ze && t && (ze.hasOnce = !0)
}
function qu(e) {
    return e.dynamicChildren = Cn > 0 ? ze || bn : null,
    zu(),
    Cn > 0 && ze && ze.push(e),
    e
}
function Ie(e, t, n, r, o, s) {
    return qu(te(e, t, n, r, o, s, !0))
}
function Ft(e, t, n, r, o) {
    return qu(ue(e, t, n, r, o, !0))
}
function Gt(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function vt(e, t) {
    return e.type === t.type && e.key === t.key
}
function Am(e) {}
const Ku = ({key: e}) => e ?? null
  , go = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? me(e) || Re(e) || Q(e) ? {
    i: je,
    r: e,
    k: t,
    f: !!n
} : e : null);
function te(e, t=null, n=null, r=0, o=null, s=e === Pe ? 0 : 1, i=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ku(t),
        ref: t && go(t),
        scopeId: os,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: je
    };
    return a ? (la(l, n),
    s & 128 && e.normalize(l)) : n && (l.shapeFlag |= me(n) ? 8 : 16),
    Cn > 0 && !i && ze && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && ze.push(l),
    l
}
const ue = Pm;
function Pm(e, t=null, n=null, r=0, o=null, s=!1) {
    if ((!e || e === yu) && (e = Ce),
    Gt(e)) {
        const a = Et(e, t, !0);
        return n && la(a, n),
        Cn > 0 && !s && ze && (a.shapeFlag & 6 ? ze[ze.indexOf(e)] = a : ze.push(a)),
        a.patchFlag = -2,
        a
    }
    if (Hm(e) && (e = e.__vccOpts),
    t) {
        t = Gu(t);
        let {class: a, style: l} = t;
        a && !me(a) && (t.class = dn(a)),
        ge(l) && (rs(l) && !z(l) && (l = ye({}, l)),
        t.style = On(l))
    }
    const i = me(e) ? 1 : Oo(e) ? 128 : su(e) ? 64 : ge(e) ? 4 : Q(e) ? 2 : 0;
    return te(e, t, n, r, o, i, s, !0)
}
function Gu(e) {
    return e ? rs(e) || xu(e) ? ye({}, e) : e : null
}
function Et(e, t, n=!1, r=!1) {
    const {props: o, ref: s, patchFlag: i, children: a, transition: l} = e
      , u = t ? Yu(o || {}, t) : o
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Ku(u),
        ref: t && t.ref ? n && s ? z(s) ? s.concat(go(t)) : [s, go(t)] : go(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Pe ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Et(e.ssContent),
        ssFallback: e.ssFallback && Et(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Kt(c, l.clone(c)),
    c
}
function Ke(e=" ", t=0) {
    return ue(un, null, e, t)
}
function oi(e, t) {
    const n = ue(xn, null, e);
    return n.staticCount = t,
    n
}
function on(e="", t=!1) {
    return t ? (be(),
    Ft(Ce, null, e)) : ue(Ce, null, e)
}
function Xe(e) {
    return e == null || typeof e == "boolean" ? ue(Ce) : z(e) ? ue(Pe, null, e.slice()) : Gt(e) ? sn(e) : ue(un, null, String(e))
}
function sn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e)
}
function la(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (z(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            la(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !xu(t) ? t._ctx = je : o === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        Q(t) ? (t = {
            default: t,
            _ctx: je
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Ke(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Yu(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = dn([t.class, r.class]));
            else if (o === "style")
                t.style = On([t.style, r.style]);
            else if (tr(o)) {
                const s = t[o]
                  , i = r[o];
                i && s !== i && !(z(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function Qe(e, t, n, r=null) {
    ht(e, t, 7, [n, r])
}
const Om = ku();
let Mm = 0;
function Ju(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || Om
      , s = {
        uid: Mm++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Hi(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ru(r, o),
        emitsOptions: Uu(r, o),
        emit: null,
        emitted: null,
        propsDefaults: re,
        inheritAttrs: r.inheritAttrs,
        ctx: re,
        data: re,
        props: re,
        attrs: re,
        slots: re,
        refs: re,
        setupState: re,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = t ? t.root : s,
    s.emit = ym.bind(null, s),
    e.ce && e.ce(s),
    s
}
let $e = null;
const Ae = () => $e || je;
let Mo, si;
{
    const e = Br()
      , t = (n, r) => {
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(r),
        s => {
            o.length > 1 ? o.forEach(i => i(s)) : o[0](s)
        }
    }
    ;
    Mo = t("__VUE_INSTANCE_SETTERS__", n => $e = n),
    si = t("__VUE_SSR_SETTERS__", n => Yn = n)
}
const Rn = e => {
    const t = $e;
    return Mo(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Mo(t)
    }
}
  , ii = () => {
    $e && $e.scope.off(),
    Mo(null)
}
;
function Qu(e) {
    return e.vnode.shapeFlag & 4
}
let Yn = !1;
function Xu(e, t=!1, n=!1) {
    t && si(t);
    const {props: r, children: o} = e.vnode
      , s = Qu(e);
    am(e, r, s, t),
    fm(e, o, n || t);
    const i = s ? Lm(e, t) : void 0;
    return t && si(!1),
    i
}
function Lm(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Zs);
    const {setup: r} = n;
    if (r) {
        zt();
        const o = e.setupContext = r.length > 1 ? ef(e) : null
          , s = Rn(e)
          , i = sr(r, e, 0, [e.props, o])
          , a = Jo(i);
        if (qt(),
        s(),
        (a || e.sp) && !cn(e) && Ki(e),
        a) {
            if (i.then(ii, ii),
            t)
                return i.then(l => {
                    ai(e, l, t)
                }
                ).catch(l => {
                    Mn(l, e, 0)
                }
                );
            e.asyncDep = i
        } else
            ai(e, i, t)
    } else
        Zu(e, t)
}
function ai(e, t, n) {
    Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Ui(t)),
    Zu(e, n)
}
let Lo, li;
function Im(e) {
    Lo = e,
    li = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,Bp))
    }
}
const Nm = () => !Lo;
function Zu(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Lo && !r.render) {
            const o = r.template || na(e).template;
            if (o) {
                const {isCustomElement: s, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = ye(ye({
                    isCustomElement: s,
                    delimiters: a
                }, i), l);
                r.render = Lo(o, u)
            }
        }
        e.render = r.render || nt,
        li && li(e)
    }
    {
        const o = Rn(e);
        zt();
        try {
            em(e)
        } finally {
            qt(),
            o()
        }
    }
}
const Dm = {
    get(e, t) {
        return Ve(e, "get", ""),
        e[t]
    }
};
function ef(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Dm),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Kr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ui(Yc(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Er)
                return Er[n](e)
        },
        has(t, n) {
            return n in t || n in Er
        }
    })) : e.proxy
}
function ci(e, t=!0) {
    return Q(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Hm(e) {
    return Q(e) && "__vccOpts" in e
}
const le = (e, t) => tp(e, t, Yn);
function Ne(e, t, n) {
    const r = (s, i, a) => {
        Hr(-1);
        try {
            return ue(s, i, a)
        } finally {
            Hr(1)
        }
    }
      , o = arguments.length;
    return o === 2 ? ge(t) && !z(t) ? Gt(t) ? r(e, null, [t]) : r(e, t) : r(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gt(n) && (n = [n]),
    r(e, t, n))
}
function $m() {}
function jm(e, t, n, r) {
    const o = n[r];
    if (o && tf(o, e))
        return o;
    const s = t();
    return s.memo = e.slice(),
    s.cacheIndex = r,
    n[r] = s
}
function tf(e, t) {
    const n = e.memo;
    if (n.length != t.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (Ue(n[r], t[r]))
            return !1;
    return Cn > 0 && ze && ze.push(e),
    !0
}
const nf = "3.5.21"
  , Fm = nt
  , Bm = up
  , Um = $n
  , Vm = ru
  , Wm = {
    createComponentInstance: Ju,
    setupComponent: Xu,
    renderComponentRoot: mo,
    setCurrentRenderingInstance: Ir,
    isVNode: Gt,
    normalizeVNode: Xe,
    getComponentPublicInstance: Kr,
    ensureValidVNode: ta,
    pushWarningContext: ip,
    popWarningContext: ap
}
  , zm = Wm
  , qm = null
  , Km = null
  , Gm = null;
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ui;
const Ja = typeof window < "u" && window.trustedTypes;
if (Ja)
    try {
        ui = Ja.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const rf = ui ? e => ui.createHTML(e) : e => e
  , Ym = "http://www.w3.org/2000/svg"
  , Jm = "http://www.w3.org/1998/Math/MathML"
  , Dt = typeof document < "u" ? document : null
  , Qa = Dt && Dt.createElement("template")
  , Qm = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const o = t === "svg" ? Dt.createElementNS(Ym, e) : t === "mathml" ? Dt.createElementNS(Jm, e) : n ? Dt.createElement(e, {
            is: n
        }) : Dt.createElement(e);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e => Dt.createTextNode(e),
    createComment: e => Dt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Dt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, s) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === s || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling)); )
                ;
        else {
            Qa.innerHTML = rf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const a = Qa.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Zt = "transition"
  , fr = "animation"
  , Jn = Symbol("_vtc")
  , of = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , sf = ye({}, qi, of)
  , Xm = e => (e.displayName = "Transition",
e.props = sf,
e)
  , af = Xm( (e, {slots: t}) => Ne(uu, lf(e), t))
  , gn = (e, t=[]) => {
    z(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Xa = e => e ? z(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function lf(e) {
    const t = {};
    for (const O in e)
        O in of || (t[O] = e[O]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: s=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=s, appearActiveClass: u=i, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , g = Zm(o)
      , p = g && g[0]
      , v = g && g[1]
      , {onBeforeEnter: k, onEnter: w, onEnterCancelled: m, onLeave: _, onLeaveCancelled: E, onBeforeAppear: T=k, onAppear: x=w, onAppearCancelled: N=m} = t
      , R = (O, K, j, J) => {
        O._enterCancelled = J,
        tn(O, K ? c : a),
        tn(O, K ? u : i),
        j && j()
    }
      , P = (O, K) => {
        O._isLeaving = !1,
        tn(O, f),
        tn(O, h),
        tn(O, d),
        K && K()
    }
      , q = O => (K, j) => {
        const J = O ? x : w
          , H = () => R(K, O, j);
        gn(J, [K, H]),
        Za( () => {
            tn(K, O ? l : s),
            Ct(K, O ? c : a),
            Xa(J) || el(K, r, p, H)
        }
        )
    }
    ;
    return ye(t, {
        onBeforeEnter(O) {
            gn(k, [O]),
            Ct(O, s),
            Ct(O, i)
        },
        onBeforeAppear(O) {
            gn(T, [O]),
            Ct(O, l),
            Ct(O, u)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(O, K) {
            O._isLeaving = !0;
            const j = () => P(O, K);
            Ct(O, f),
            O._enterCancelled ? (Ct(O, d),
            fi()) : (fi(),
            Ct(O, d)),
            Za( () => {
                O._isLeaving && (tn(O, f),
                Ct(O, h),
                Xa(_) || el(O, r, v, j))
            }
            ),
            gn(_, [O, j])
        },
        onEnterCancelled(O) {
            R(O, !1, void 0, !0),
            gn(m, [O])
        },
        onAppearCancelled(O) {
            R(O, !0, void 0, !0),
            gn(N, [O])
        },
        onLeaveCancelled(O) {
            P(O),
            gn(E, [O])
        }
    })
}
function Zm(e) {
    if (e == null)
        return null;
    if (ge(e))
        return [Ps(e.enter), Ps(e.leave)];
    {
        const t = Ps(e);
        return [t, t]
    }
}
function Ps(e) {
    return Rr(e)
}
function Ct(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Jn] || (e[Jn] = new Set)).add(t)
}
function tn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Jn];
    n && (n.delete(t),
    n.size || (e[Jn] = void 0))
}
function Za(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let e0 = 0;
function el(e, t, n, r) {
    const o = e._endId = ++e0
      , s = () => {
        o === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(s, n);
    const {type: i, timeout: a, propCount: l} = cf(e, t);
    if (!i)
        return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
        e.removeEventListener(u, d),
        s()
    }
      , d = h => {
        h.target === e && ++c >= l && f()
    }
    ;
    setTimeout( () => {
        c < l && f()
    }
    , a + 1),
    e.addEventListener(u, d)
}
function cf(e, t) {
    const n = window.getComputedStyle(e)
      , r = g => (n[g] || "").split(", ")
      , o = r(`${Zt}Delay`)
      , s = r(`${Zt}Duration`)
      , i = tl(o, s)
      , a = r(`${fr}Delay`)
      , l = r(`${fr}Duration`)
      , u = tl(a, l);
    let c = null
      , f = 0
      , d = 0;
    t === Zt ? i > 0 && (c = Zt,
    f = i,
    d = s.length) : t === fr ? u > 0 && (c = fr,
    f = u,
    d = l.length) : (f = Math.max(i, u),
    c = f > 0 ? i > u ? Zt : fr : null,
    d = c ? c === Zt ? s.length : l.length : 0);
    const h = c === Zt && /\b(?:transform|all)(?:,|$)/.test(r(`${Zt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}
function tl(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => nl(n) + nl(e[r])))
}
function nl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function fi() {
    return document.body.offsetHeight
}
function t0(e, t, n) {
    const r = e[Jn];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Io = Symbol("_vod")
  , uf = Symbol("_vsh")
  , ff = {
    name: "show",
    beforeMount(e, {value: t}, {transition: n}) {
        e[Io] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : dr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        dr(e, !0),
        r.enter(e)) : r.leave(e, () => {
            dr(e, !1)
        }
        ) : dr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        dr(e, t)
    }
};
function dr(e, t) {
    e.style.display = t ? e[Io] : "none",
    e[uf] = !t
}
function n0() {
    ff.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            }
    }
}
const df = Symbol("");
function r0(e) {
    const t = Ae();
    if (!t)
        return;
    const n = t.ut = (o=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s => No(s, o))
    }
      , r = () => {
        const o = e(t.proxy);
        t.ce ? No(t.ce, o) : di(t.subTree, o),
        n(o)
    }
    ;
    Qi( () => {
        Mr(r)
    }
    ),
    it( () => {
        Se(r, nt, {
            flush: "post"
        });
        const o = new MutationObserver(r);
        o.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        ir( () => o.disconnect())
    }
    )
}
function di(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            di(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        No(e.el, t);
    else if (e.type === Pe)
        e.children.forEach(n => di(n, t));
    else if (e.type === xn) {
        let {el: n, anchor: r} = e;
        for (; n && (No(n, t),
        n !== r); )
            n = n.nextSibling
    }
}
function No(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const o in t) {
            const s = Mc(t[o]);
            n.setProperty(`--${o}`, s),
            r += `--${o}: ${s};`
        }
        n[df] = r
    }
}
const o0 = /(?:^|;)\s*display\s*:/;
function s0(e, t, n) {
    const r = e.style
      , o = me(n);
    let s = !1;
    if (n && !o) {
        if (t)
            if (me(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && yo(r, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && yo(r, i, "");
        for (const i in n)
            i === "display" && (s = !0),
            yo(r, i, n[i])
    } else if (o) {
        if (t !== n) {
            const i = r[df];
            i && (n += ";" + i),
            r.cssText = n,
            s = o0.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Io in e && (e[Io] = s ? r.display : "",
    e[uf] && (r.display = "none"))
}
const rl = /\s*!important$/;
function yo(e, t, n) {
    if (z(n))
        n.forEach(r => yo(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = i0(e, t);
        rl.test(n) ? e.setProperty(We(r), n.replace(rl, ""), "important") : e[r] = n
    }
}
const ol = ["Webkit", "Moz", "ms"]
  , Os = {};
function i0(e, t) {
    const n = Os[t];
    if (n)
        return n;
    let r = De(t);
    if (r !== "filter" && r in e)
        return Os[t] = r;
    r = rr(r);
    for (let o = 0; o < ol.length; o++) {
        const s = ol[o] + r;
        if (s in e)
            return Os[t] = s
    }
    return t
}
const sl = "http://www.w3.org/1999/xlink";
function il(e, t, n, r, o, s=Rc(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sl, t.slice(6, t.length)) : e.setAttributeNS(sl, t, n) : n == null || s && !Di(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : dt(n) ? String(n) : n)
}
function al(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? rf(n) : n);
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Di(n) : n == null && a === "string" ? (n = "",
        i = !0) : a === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(o || t)
}
function Bt(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function a0(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const ll = Symbol("_vei");
function l0(e, t, n, r, o=null) {
    const s = e[ll] || (e[ll] = {})
      , i = s[t];
    if (r && i)
        i.value = r;
    else {
        const [a,l] = c0(t);
        if (r) {
            const u = s[t] = d0(r, o);
            Bt(e, a, u, l)
        } else
            i && (a0(e, a, i, l),
            s[t] = void 0)
    }
}
const cl = /(?:Once|Passive|Capture)$/;
function c0(e) {
    let t;
    if (cl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(cl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : We(e.slice(2)), t]
}
let Ms = 0;
const u0 = Promise.resolve()
  , f0 = () => Ms || (u0.then( () => Ms = 0),
Ms = Date.now());
function d0(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        ht(h0(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = f0(),
    n
}
function h0(e, t) {
    if (z(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => o => !o._stopped && r && r(o))
    } else
        return t
}
const ul = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , p0 = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? t0(e, r, i) : t === "style" ? s0(e, n, r) : tr(t) ? Go(t) || l0(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : m0(e, t, r, i)) ? (al(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && il(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !me(r)) ? al(e, De(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    il(e, t, r, i))
}
;
function m0(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && ul(t) && Q(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return ul(t) && me(n) ? !1 : t in e
}
const fl = {};
function hf(e, t, n) {
    let r = st(e, t);
    nr(r) && (r = ye({}, r, t));
    class o extends us {
        constructor(i) {
            super(r, i, n)
        }
    }
    return o.def = r,
    o
}
const g0 = ( (e, t) => hf(e, t, fa))
  , y0 = typeof HTMLElement < "u" ? HTMLElement : class {
}
;
class us extends y0 {
    constructor(t, n={}, r=$o) {
        super(),
        this._def = t,
        this._props = n,
        this._createApp = r,
        this._isVueCE = !0,
        this._instance = null,
        this._app = null,
        this._nonce = this._def.nonce,
        this._connected = !1,
        this._resolved = !1,
        this._numberProps = null,
        this._styleChildren = new WeakSet,
        this._ob = null,
        this.shadowRoot && r !== $o ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({
            mode: "open"
        }),
        this._root = this.shadowRoot) : this._root = this
    }
    connectedCallback() {
        if (!this.isConnected)
            return;
        !this.shadowRoot && !this._resolved && this._parseSlots(),
        this._connected = !0;
        let t = this;
        for (; t = t && (t.parentNode || t.host); )
            if (t instanceof us) {
                this._parent = t;
                break
            }
        this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then( () => {
            this._pendingResolve = void 0,
            this._resolveDef()
        }
        ) : this._resolveDef())
    }
    _setParent(t=this._parent) {
        t && (this._instance.parent = t._instance,
        this._inheritParentContext(t))
    }
    _inheritParentContext(t=this._parent) {
        t && this._app && Object.setPrototypeOf(this._app._context.provides, t._instance.provides)
    }
    disconnectedCallback() {
        this._connected = !1,
        pt( () => {
            this._connected || (this._ob && (this._ob.disconnect(),
            this._ob = null),
            this._app && this._app.unmount(),
            this._instance && (this._instance.ce = void 0),
            this._app = this._instance = null)
        }
        )
    }
    _resolveDef() {
        if (this._pendingResolve)
            return;
        for (let r = 0; r < this.attributes.length; r++)
            this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(r => {
            for (const o of r)
                this._setAttr(o.attributeName)
        }
        ),
        this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, o=!1) => {
            this._resolved = !0,
            this._pendingResolve = void 0;
            const {props: s, styles: i} = r;
            let a;
            if (s && !z(s))
                for (const l in s) {
                    const u = s[l];
                    (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = Rr(this._props[l])),
                    (a || (a = Object.create(null)))[De(l)] = !0)
                }
            this._numberProps = a,
            this._resolveProps(r),
            this.shadowRoot && this._applyStyles(i),
            this._mount(r)
        }
          , n = this._def.__asyncLoader;
        n ? this._pendingResolve = n().then(r => {
            r.configureApp = this._def.configureApp,
            t(this._def = r, !0)
        }
        ) : t(this._def)
    }
    _mount(t) {
        this._app = this._createApp(t),
        this._inheritParentContext(),
        t.configureApp && t.configureApp(this._app),
        this._app._ceVNode = this._createVNode(),
        this._app.mount(this._root);
        const n = this._instance && this._instance.exposed;
        if (n)
            for (const r in n)
                ce(this, r) || Object.defineProperty(this, r, {
                    get: () => ie(n[r])
                })
    }
    _resolveProps(t) {
        const {props: n} = t
          , r = z(n) ? n : Object.keys(n || {});
        for (const o of Object.keys(this))
            o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
        for (const o of r.map(De))
            Object.defineProperty(this, o, {
                get() {
                    return this._getProp(o)
                },
                set(s) {
                    this._setProp(o, s, !0, !0)
                }
            })
    }
    _setAttr(t) {
        if (t.startsWith("data-v-"))
            return;
        const n = this.hasAttribute(t);
        let r = n ? this.getAttribute(t) : fl;
        const o = De(t);
        n && this._numberProps && this._numberProps[o] && (r = Rr(r)),
        this._setProp(o, r, !1, !0)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r=!0, o=!1) {
        if (n !== this._props[t] && (n === fl ? delete this._props[t] : (this._props[t] = n,
        t === "key" && this._app && (this._app._ceVNode.key = n)),
        o && this._instance && this._update(),
        r)) {
            const s = this._ob;
            s && s.disconnect(),
            n === !0 ? this.setAttribute(We(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(We(t), n + "") : n || this.removeAttribute(We(t)),
            s && s.observe(this, {
                attributes: !0
            })
        }
    }
    _update() {
        const t = this._createVNode();
        this._app && (t.appContext = this._app._context),
        Tf(t, this._root)
    }
    _createVNode() {
        const t = {};
        this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
        const n = ue(this._def, ye(t, this._props));
        return this._instance || (n.ce = r => {
            this._instance = r,
            r.ce = this,
            r.isCE = !0;
            const o = (s, i) => {
                this.dispatchEvent(new CustomEvent(s,nr(i[0]) ? ye({
                    detail: i
                }, i[0]) : {
                    detail: i
                }))
            }
            ;
            r.emit = (s, ...i) => {
                o(s, i),
                We(s) !== s && o(We(s), i)
            }
            ,
            this._setParent()
        }
        ),
        n
    }
    _applyStyles(t, n) {
        if (!t)
            return;
        if (n) {
            if (n === this._def || this._styleChildren.has(n))
                return;
            this._styleChildren.add(n)
        }
        const r = this._nonce;
        for (let o = t.length - 1; o >= 0; o--) {
            const s = document.createElement("style");
            r && s.setAttribute("nonce", r),
            s.textContent = t[o],
            this.shadowRoot.prepend(s)
        }
    }
    _parseSlots() {
        const t = this._slots = {};
        let n;
        for (; n = this.firstChild; ) {
            const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
            (t[r] || (t[r] = [])).push(n),
            this.removeChild(n)
        }
    }
    _renderSlots() {
        const t = (this._teleportTarget || this).querySelectorAll("slot")
          , n = this._instance.type.__scopeId;
        for (let r = 0; r < t.length; r++) {
            const o = t[r]
              , s = o.getAttribute("name") || "default"
              , i = this._slots[s]
              , a = o.parentNode;
            if (i)
                for (const l of i) {
                    if (n && l.nodeType === 1) {
                        const u = n + "-s"
                          , c = document.createTreeWalker(l, 1);
                        l.setAttribute(u, "");
                        let f;
                        for (; f = c.nextNode(); )
                            f.setAttribute(u, "")
                    }
                    a.insertBefore(l, o)
                }
            else
                for (; o.firstChild; )
                    a.insertBefore(o.firstChild, o);
            a.removeChild(o)
        }
    }
    _injectChildStyle(t) {
        this._applyStyles(t.styles, t)
    }
    _removeChildStyle(t) {}
}
function pf(e) {
    const t = Ae()
      , n = t && t.ce;
    return n || null
}
function _0() {
    const e = pf();
    return e && e.shadowRoot
}
function v0(e="$style") {
    {
        const t = Ae();
        if (!t)
            return re;
        const n = t.type.__cssModules;
        if (!n)
            return re;
        const r = n[e];
        return r || re
    }
}
const mf = new WeakMap
  , gf = new WeakMap
  , Do = Symbol("_moveCb")
  , dl = Symbol("_enterCb")
  , b0 = e => (delete e.props.mode,
e)
  , w0 = b0({
    name: "TransitionGroup",
    props: ye({}, sf, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Ae()
          , r = zi();
        let o, s;
        return as( () => {
            if (!o.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!x0(o[0].el, n.vnode.el, i)) {
                o = [];
                return
            }
            o.forEach(k0),
            o.forEach(T0);
            const a = o.filter(S0);
            fi(),
            a.forEach(l => {
                const u = l.el
                  , c = u.style;
                Ct(u, i),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const f = u[Do] = d => {
                    d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f),
                    u[Do] = null,
                    tn(u, i))
                }
                ;
                u.addEventListener("transitionend", f)
            }
            ),
            o = []
        }
        ),
        () => {
            const i = se(e)
              , a = lf(i);
            let l = i.tag || Pe;
            if (o = [],
            s)
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    c.el && c.el instanceof Element && (o.push(c),
                    Kt(c, Gn(c, a, r, n)),
                    mf.set(c, c.el.getBoundingClientRect()))
                }
            s = t.default ? ss(t.default()) : [];
            for (let u = 0; u < s.length; u++) {
                const c = s[u];
                c.key != null && Kt(c, Gn(c, a, r, n))
            }
            return ue(l, null, s)
        }
    }
})
  , E0 = w0;
function k0(e) {
    const t = e.el;
    t[Do] && t[Do](),
    t[dl] && t[dl]()
}
function T0(e) {
    gf.set(e, e.el.getBoundingClientRect())
}
function S0(e) {
    const t = mf.get(e)
      , n = gf.get(e)
      , r = t.left - n.left
      , o = t.top - n.top;
    if (r || o) {
        const s = e.el.style;
        return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`,
        s.transitionDuration = "0s",
        e
    }
}
function x0(e, t, n) {
    const r = e.cloneNode()
      , o = e[Jn];
    o && o.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const {hasTransform: i} = cf(r);
    return s.removeChild(r),
    i
}
const hn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return z(t) ? n => kn(t, n) : t
}
;
function C0(e) {
    e.target.composing = !0
}
function hl(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const ft = Symbol("_assign")
  , Ho = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e[ft] = hn(o);
        const s = r || o.props && o.props.type === "number";
        Bt(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            s && (a = Cr(a)),
            e[ft](a)
        }
        ),
        n && Bt(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Bt(e, "compositionstart", C0),
        Bt(e, "compositionend", hl),
        Bt(e, "change", hl))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: o, number: s}}, i) {
        if (e[ft] = hn(i),
        e.composing)
            return;
        const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value
          , l = t ?? "";
        a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l))
    }
}
  , ca = {
    deep: !0,
    created(e, t, n) {
        e[ft] = hn(n),
        Bt(e, "change", () => {
            const r = e._modelValue
              , o = Qn(e)
              , s = e.checked
              , i = e[ft];
            if (z(r)) {
                const a = Ur(r, o)
                  , l = a !== -1;
                if (s && !l)
                    i(r.concat(o));
                else if (!s && l) {
                    const u = [...r];
                    u.splice(a, 1),
                    i(u)
                }
            } else if (pn(r)) {
                const a = new Set(r);
                s ? a.add(o) : a.delete(o),
                i(a)
            } else
                i(_f(e, s))
        }
        )
    },
    mounted: pl,
    beforeUpdate(e, t, n) {
        e[ft] = hn(n),
        pl(e, t, n)
    }
};
function pl(e, {value: t, oldValue: n}, r) {
    e._modelValue = t;
    let o;
    if (z(t))
        o = Ur(t, r.props.value) > -1;
    else if (pn(t))
        o = t.has(r.props.value);
    else {
        if (t === n)
            return;
        o = Wt(t, _f(e, !0))
    }
    e.checked !== o && (e.checked = o)
}
const ua = {
    created(e, {value: t}, n) {
        e.checked = Wt(t, n.props.value),
        e[ft] = hn(n),
        Bt(e, "change", () => {
            e[ft](Qn(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[ft] = hn(r),
        t !== n && (e.checked = Wt(t, r.props.value))
    }
}
  , yf = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const o = pn(t);
        Bt(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? Cr(Qn(i)) : Qn(i));
            e[ft](e.multiple ? o ? new Set(s) : s : s[0]),
            e._assigning = !0,
            pt( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[ft] = hn(r)
    },
    mounted(e, {value: t}) {
        ml(e, t)
    },
    beforeUpdate(e, t, n) {
        e[ft] = hn(n)
    },
    updated(e, {value: t}) {
        e._assigning || ml(e, t)
    }
};
function ml(e, t) {
    const n = e.multiple
      , r = z(t);
    if (!(n && !r && !pn(t))) {
        for (let o = 0, s = e.options.length; o < s; o++) {
            const i = e.options[o]
              , a = Qn(i);
            if (n)
                if (r) {
                    const l = typeof a;
                    l === "string" || l === "number" ? i.selected = t.some(u => String(u) === String(a)) : i.selected = Ur(t, a) > -1
                } else
                    i.selected = t.has(a);
            else if (Wt(Qn(i), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Qn(e) {
    return "_value" in e ? e._value : e.value
}
function _f(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const vf = {
    created(e, t, n) {
        oo(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        oo(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        oo(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        oo(e, t, n, r, "updated")
    }
};
function bf(e, t) {
    switch (e) {
    case "SELECT":
        return yf;
    case "TEXTAREA":
        return Ho;
    default:
        switch (t) {
        case "checkbox":
            return ca;
        case "radio":
            return ua;
        default:
            return Ho
        }
    }
}
function oo(e, t, n, r, o) {
    const i = bf(e.tagName, n.props && n.props.type)[o];
    i && i(e, t, n, r)
}
function R0() {
    Ho.getSSRProps = ({value: e}) => ({
        value: e
    }),
    ua.getSSRProps = ({value: e}, t) => {
        if (t.props && Wt(t.props.value, e))
            return {
                checked: !0
            }
    }
    ,
    ca.getSSRProps = ({value: e}, t) => {
        if (z(e)) {
            if (t.props && Ur(e, t.props.value) > -1)
                return {
                    checked: !0
                }
        } else if (pn(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                }
        } else if (e)
            return {
                checked: !0
            }
    }
    ,
    vf.getSSRProps = (e, t) => {
        if (typeof t.type != "string")
            return;
        const n = bf(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps)
            return n.getSSRProps(e, t)
    }
}
const A0 = ["ctrl", "shift", "alt", "meta"]
  , P0 = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => A0.some(n => e[`${n}Key`] && !t.includes(n))
}
  , O0 = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = ( (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
            const a = P0[t[i]];
            if (a && a(o, t))
                return
        }
        return e(o, ...s)
    }
    ))
}
  , M0 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , L0 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = (o => {
        if (!("key" in o))
            return;
        const s = We(o.key);
        if (t.some(i => i === s || M0[i] === s))
            return e(o)
    }
    ))
}
  , wf = ye({
    patchProp: p0
}, Qm);
let Tr, gl = !1;
function Ef() {
    return Tr || (Tr = Mu(wf))
}
function kf() {
    return Tr = gl ? Tr : Lu(wf),
    gl = !0,
    Tr
}
const Tf = ( (...e) => {
    Ef().render(...e)
}
)
  , I0 = ( (...e) => {
    kf().hydrate(...e)
}
)
  , $o = ( (...e) => {
    const t = Ef().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = xf(r);
        if (!o)
            return;
        const s = t._component;
        !Q(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
        const i = n(o, !1, Sf(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
)
  , fa = ( (...e) => {
    const t = kf().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = xf(r);
        if (o)
            return n(o, !0, Sf(o))
    }
    ,
    t
}
);
function Sf(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function xf(e) {
    return me(e) ? document.querySelector(e) : e
}
let yl = !1;
const N0 = () => {
    yl || (yl = !0,
    R0(),
    n0())
}
  , Qw = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: uu,
    BaseTransitionPropsValidators: qi,
    Comment: Ce,
    DeprecationTypes: Gm,
    EffectScope: Hi,
    ErrorCodes: cp,
    ErrorTypeStrings: Bm,
    Fragment: Pe,
    KeepAlive: du,
    ReactiveEffect: Ar,
    Static: xn,
    Suspense: aa,
    Teleport: _p,
    Text: un,
    TrackOpTypes: np,
    Transition: af,
    TransitionGroup: E0,
    TriggerOpTypes: rp,
    VueElement: us,
    assertNumber: lp,
    callWithAsyncErrorHandling: ht,
    callWithErrorHandling: sr,
    camelize: De,
    capitalize: rr,
    cloneVNode: Et,
    compatUtils: Km,
    computed: le,
    createApp: $o,
    createBlock: Ft,
    createCommentVNode: on,
    createElementBlock: Ie,
    createElementVNode: te,
    createHydrationRenderer: Lu,
    createPropsRestProxy: Zp,
    createRenderer: Mu,
    createSSRApp: fa,
    createSlots: $p,
    createStaticVNode: oi,
    createTextVNode: Ke,
    createVNode: ue,
    customRef: Vi,
    defineAsyncComponent: Ee,
    defineComponent: st,
    defineCustomElement: hf,
    defineEmits: Vp,
    defineExpose: Wp,
    defineModel: Kp,
    defineOptions: zp,
    defineProps: Up,
    defineSSRCustomElement: g0,
    defineSlots: qp,
    devtools: Um,
    effect: xh,
    effectScope: Lc,
    getCurrentInstance: Ae,
    getCurrentScope: Vr,
    getCurrentWatcher: op,
    getTransitionRawChildren: ss,
    guardReactiveProps: Gu,
    h: Ne,
    handleError: Mn,
    hasInjectionContext: In,
    hydrate: I0,
    hydrateOnIdle: Rp,
    hydrateOnInteraction: Mp,
    hydrateOnMediaQuery: Op,
    hydrateOnVisible: Pp,
    initCustomFormatter: $m,
    initDirectivesForSSR: N0,
    inject: Me,
    isMemoSame: tf,
    isProxy: rs,
    isReactive: ln,
    isReadonly: Mt,
    isRef: Re,
    isRuntimeOnly: Nm,
    isShallow: rt,
    isVNode: Gt,
    markRaw: Yc,
    mergeDefaults: Qp,
    mergeModels: Xp,
    mergeProps: Yu,
    nextTick: pt,
    normalizeClass: dn,
    normalizeProps: xc,
    normalizeStyle: On,
    onActivated: Gi,
    onBeforeMount: Ji,
    onBeforeUnmount: Ln,
    onBeforeUpdate: Qi,
    onDeactivated: Yi,
    onErrorCaptured: Xi,
    onMounted: it,
    onRenderTracked: gu,
    onRenderTriggered: mu,
    onScopeDispose: $i,
    onServerPrefetch: pu,
    onUnmounted: ir,
    onUpdated: as,
    onWatcherCleanup: Xc,
    openBlock: be,
    popScopeId: pp,
    provide: Ot,
    proxyRefs: Ui,
    pushScopeId: hp,
    queuePostFlushCb: Mr,
    reactive: ot,
    readonly: or,
    ref: he,
    registerRuntimeCompiler: Im,
    render: Tf,
    renderList: vu,
    renderSlot: jp,
    resolveComponent: Qs,
    resolveDirective: Hp,
    resolveDynamicComponent: _u,
    resolveFilter: qm,
    resolveTransitionHooks: Gn,
    setBlockTracking: Hr,
    setDevtoolsHook: Vm,
    setTransitionHooks: Kt,
    shallowReactive: Pt,
    shallowReadonly: qh,
    shallowRef: xe,
    ssrContextKey: Hu,
    ssrUtils: zm,
    stop: Ch,
    toDisplayString: Ut,
    toHandlerKey: Vn,
    toHandlers: Fp,
    toRaw: se,
    toRef: Wr,
    toRefs: Qh,
    toValue: ae,
    transformVNodeArgs: Am,
    triggerRef: Gh,
    unref: ie,
    useAttrs: Jp,
    useCssModule: v0,
    useCssVars: r0,
    useHost: pf,
    useId: bp,
    useModel: gm,
    useSSRContext: $u,
    useShadowRoot: _0,
    useSlots: Yp,
    useTemplateRef: wp,
    useTransitionState: zi,
    vModelCheckbox: ca,
    vModelDynamic: vf,
    vModelRadio: ua,
    vModelSelect: yf,
    vModelText: Ho,
    vShow: ff,
    version: nf,
    warn: Fm,
    watch: Se,
    watchEffect: ia,
    watchPostEffect: pm,
    watchSyncEffect: ju,
    withAsyncContext: wu,
    withCtx: _t,
    withDefaults: Gp,
    withDirectives: gp,
    withKeys: L0,
    withMemo: jm,
    withModifiers: O0,
    withScopeId: mp
}, Symbol.toStringTag, {
    value: "Module"
}))
  , D0 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , H0 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , $0 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function j0(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        F0(e);
        return
    }
    return t
}
function F0(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function jo(e, t={}) {
    if (typeof e != "string")
        return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
        return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9)
        switch (n.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
        }
    if (!$0.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (D0.test(e) || H0.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, j0)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
const B0 = /#/g
  , U0 = /&/g
  , V0 = /\//g
  , W0 = /=/g
  , da = /\+/g
  , z0 = /%5e/gi
  , q0 = /%60/gi
  , K0 = /%7c/gi
  , G0 = /%20/gi;
function Y0(e) {
    return encodeURI("" + e).replace(K0, "|")
}
function hi(e) {
    return Y0(typeof e == "string" ? e : JSON.stringify(e)).replace(da, "%2B").replace(G0, "+").replace(B0, "%23").replace(U0, "%26").replace(q0, "`").replace(z0, "^").replace(V0, "%2F")
}
function Ls(e) {
    return hi(e).replace(W0, "%3D")
}
function Fo(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function J0(e) {
    return Fo(e.replace(da, " "))
}
function Q0(e) {
    return Fo(e.replace(da, " "))
}
function ha(e="") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const o = J0(r[1]);
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = Q0(r[2] || "");
        t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
    }
    return t
}
function X0(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n => `${Ls(e)}=${hi(n)}`).join("&") : `${Ls(e)}=${hi(t)}` : Ls(e)
}
function Z0(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => X0(t, e[t])).filter(Boolean).join("&")
}
const eg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , tg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , ng = /^([/\\]\s*){2,}[^/\\]/
  , rg = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , og = /\/$|\/\?|\/#/
  , sg = /^\.?\//;
function Qt(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? eg.test(e) : tg.test(e) || (t.acceptRelative ? ng.test(e) : !1)
}
function ig(e) {
    return !!e && rg.test(e)
}
function pi(e="", t) {
    return t ? og.test(e) : e.endsWith("/")
}
function Xn(e="", t) {
    if (!t)
        return (pi(e) ? e.slice(0, -1) : e) || "/";
    if (!pi(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o),
    r = e.slice(o));
    const [s,...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function Cf(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (pi(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o),
    r = e.slice(o),
    !n))
        return r;
    const [s,...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function ag(e="") {
    return e.startsWith("/")
}
function Xw(e="") {
    return ag(e) ? e : "/" + e
}
function lg(e, t) {
    if (Af(t) || Qt(e))
        return e;
    const n = Xn(t);
    return e.startsWith(n) ? e : fs(n, e)
}
function _l(e, t) {
    if (Af(t))
        return e;
    const n = Xn(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function Rf(e, t) {
    const n = Mf(e)
      , r = {
        ...ha(n.search),
        ...t
    };
    return n.search = Z0(r),
    fg(n)
}
function Af(e) {
    return !e || e === "/"
}
function cg(e) {
    return e && e !== "/"
}
function fs(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => cg(o)))
        if (n) {
            const o = r.replace(sg, "");
            n = Cf(n) + o
        } else
            n = r;
    return n
}
function Pf(...e) {
    const t = /\/(?!\/)/
      , n = e.filter(Boolean)
      , r = [];
    let o = 0;
    for (const i of n)
        if (!(!i || i === "/")) {
            for (const [a,l] of i.split(t).entries())
                if (!(!l || l === ".")) {
                    if (l === "..") {
                        if (r.length === 1 && Qt(r[0]))
                            continue;
                        r.pop(),
                        o--;
                        continue
                    }
                    if (a === 1 && r[r.length - 1]?.endsWith(":/")) {
                        r[r.length - 1] += "/" + l;
                        continue
                    }
                    r.push(l),
                    o++
                }
        }
    let s = r.join("/");
    return o >= 0 ? n[0]?.startsWith("/") && !s.startsWith("/") ? s = "/" + s : n[0]?.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s,
    n[n.length - 1]?.endsWith("/") && !s.endsWith("/") && (s += "/"),
    s
}
function ug(e, t) {
    return Fo(Xn(e)) === Fo(Xn(t))
}
const Of = Symbol.for("ufo:protocolRelative");
function Mf(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!Qt(e, {
        acceptRelative: !0
    }))
        return vl(e);
    const [,r="",o,s=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let[,i="",a=""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {pathname: l, search: u, hash: c} = vl(a);
    return {
        protocol: r.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: i,
        pathname: l,
        search: u,
        hash: c,
        [Of]: !r
    }
}
function vl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function fg(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , o = e.auth ? e.auth + "@" : ""
      , s = e.host || "";
    return (e.protocol || e[Of] ? (e.protocol || "") + "//" : "") + o + s + t + n + r
}
class dg extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n?.cause && !this.cause && (this.cause = n.cause)
    }
}
function hg(e) {
    const t = e.error?.message || e.error?.toString() || ""
      , n = e.request?.method || e.options?.method || "GET"
      , r = e.request?.url || String(e.request) || "/"
      , o = `[${n}] ${JSON.stringify(r)}`
      , s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , i = `${o}: ${s}${t ? ` ${t}` : ""}`
      , a = new dg(i,e.error ? {
        cause: e.error
    } : void 0);
    for (const l of ["request", "options", "response"])
        Object.defineProperty(a, l, {
            get() {
                return e[l]
            }
        });
    for (const [l,u] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, l, {
            get() {
                return e.response && e.response[u]
            }
        });
    return a
}
const pg = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function bl(e="GET") {
    return pg.has(e.toUpperCase())
}
function mg(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const gg = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , yg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function _g(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return yg.test(t) ? "json" : gg.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function vg(e, t, n, r) {
    const o = bg(t?.headers ?? e?.headers, n?.headers, r);
    let s;
    return (n?.query || n?.params || t?.params || t?.query) && (s = {
        ...n?.params,
        ...n?.query,
        ...t?.params,
        ...t?.query
    }),
    {
        ...n,
        ...t,
        query: s,
        params: s,
        headers: o
    }
}
function bg(e, t, n) {
    if (!t)
        return new n(e);
    const r = new n(t);
    if (e)
        for (const [o,s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e))
            r.set(o, s);
    return r
}
async function so(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t)
                await n(e);
        else
            await t(e)
}
const wg = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Eg = new Set([101, 204, 205, 304]);
function Lf(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function o(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = bl(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : wg.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)),
                s(a.request, {
                    ...a.options,
                    retry: c - 1
                })
            }
        }
        const u = hg(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, s),
        u
    }
    const s = async function(l, u={}) {
        const c = {
            request: l,
            options: vg(l, u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        c.options.method && (c.options.method = c.options.method.toUpperCase()),
        c.options.onRequest && await so(c, c.options.onRequest),
        typeof c.request == "string" && (c.options.baseURL && (c.request = lg(c.request, c.options.baseURL)),
        c.options.query && (c.request = Rf(c.request, c.options.query),
        delete c.options.query),
        "query" in c.options && delete c.options.query,
        "params" in c.options && delete c.options.params),
        c.options.body && bl(c.options.method) && (mg(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new n(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
        let f;
        if (!c.options.signal && c.options.timeout) {
            const h = new r;
            f = setTimeout( () => {
                const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
                g.name = "TimeoutError",
                g.code = 23,
                h.abort(g)
            }
            , c.options.timeout),
            c.options.signal = h.signal
        }
        try {
            c.response = await t(c.request, c.options)
        } catch (h) {
            return c.error = h,
            c.options.onRequestError && await so(c, c.options.onRequestError),
            await o(c)
        } finally {
            f && clearTimeout(f)
        }
        if ((c.response.body || c.response._bodyInit) && !Eg.has(c.response.status) && c.options.method !== "HEAD") {
            const h = (c.options.parseResponse ? "json" : c.options.responseType) || _g(c.response.headers.get("content-type") || "");
            switch (h) {
            case "json":
                {
                    const g = await c.response.text()
                      , p = c.options.parseResponse || jo;
                    c.response._data = p(g);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body || c.response._bodyInit;
                    break
                }
            default:
                c.response._data = await c.response[h]()
            }
        }
        return c.options.onResponse && await so(c, c.options.onResponse),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await so(c, c.options.onResponseError),
        await o(c)) : c.response
    }
      , i = async function(l, u) {
        return (await s(l, u))._data
    };
    return i.raw = s,
    i.native = (...a) => t(...a),
    i.create = (a={}, l={}) => Lf({
        ...e,
        ...l,
        defaults: {
            ...e.defaults,
            ...l.defaults,
            ...a
        }
    }),
    i
}
const Bo = (function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
)()
  , kg = Bo.fetch ? (...e) => Bo.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))
  , Tg = Bo.Headers
  , Sg = Bo.AbortController
  , xg = Lf({
    fetch: kg,
    Headers: Tg,
    AbortController: Sg
})
  , Cg = xg
  , Rg = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config
  , pa = () => Rg().app
  , Ag = () => pa().baseURL
  , Pg = () => pa().buildAssetsDir
  , ma = (...e) => Pf(ga(), Pg(), ...e)
  , ga = (...e) => {
    const t = pa()
      , n = t.cdnURL || t.baseURL;
    return e.length ? Pf(n, ...e) : n
}
;
globalThis.__buildAssetsURL = ma,
globalThis.__publicAssetsURL = ga;
globalThis.$fetch || (globalThis.$fetch = Cg.create({
    baseURL: Ag()
}));
"global" in globalThis || (globalThis.global = globalThis);
function mi(e, t={}, n) {
    for (const r in e) {
        const o = e[r]
          , s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? mi(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}
const Og = {
    run: e => e()
}
  , Mg = () => Og
  , If = typeof console.createTask < "u" ? console.createTask : Mg;
function Lg(e, t) {
    const n = t.shift()
      , r = If(n);
    return e.reduce( (o, s) => o.then( () => r.run( () => s(...t))), Promise.resolve())
}
function Ig(e, t) {
    const n = t.shift()
      , r = If(n);
    return Promise.all(e.map(o => r.run( () => o(...t))))
}
function Is(e, t) {
    for (const n of [...e])
        n(t)
}
class Ng {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const o = t;
        let s;
        for (; this._deprecatedHooks[t]; )
            s = this._deprecatedHooks[t],
            t = s.to;
        if (s && !r.allowDeprecated) {
            let i = s.message;
            i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(),
        r = void 0,
        o = void 0,
        n(...s));
        return r = this.hook(t, o),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r)
            this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = mi(t)
          , r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length))
                o()
        }
    }
    removeHooks(t) {
        const n = mi(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Lg, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Ig, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Is(this._before, o);
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally( () => {
            this._after && o && Is(this._after, o)
        }
        ) : (this._after && o && Is(this._after, o),
        s)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Nf() {
    return new Ng
}
function Dg(e={}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i)
            throw new Error("Context conflict")
    }
    ;
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (o) {
            const i = o.getStore();
            if (i !== void 0)
                return i
        }
        return t
    }
    ;
    return {
        use: () => {
            const i = s();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => s(),
        set: (i, a) => {
            a || r(i),
            t = i,
            n = !0
        }
        ,
        unset: () => {
            t = void 0,
            n = !1
        }
        ,
        call: (i, a) => {
            r(i),
            t = i;
            try {
                return o ? o.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(i, a) {
            t = i;
            const l = () => {
                t = i
            }
              , u = () => t === i ? l : void 0;
            gi.add(u);
            try {
                const c = o ? o.run(i, a) : a();
                return n || (t = void 0),
                await c
            } finally {
                gi.delete(u)
            }
        }
    }
}
function Hg(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = Dg({
                ...e,
                ...r
            })),
            t[n]
        }
    }
}
const Uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , wl = "__unctx__"
  , $g = Uo[wl] || (Uo[wl] = Hg())
  , jg = (e, t={}) => $g.get(e, t)
  , El = "__unctx_async_handlers__"
  , gi = Uo[El] || (Uo[El] = new Set);
function Kn(e) {
    const t = [];
    for (const o of gi) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t)
            o()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(o => {
        throw n(),
        o
    }
    )),
    [r, n]
}
const kl = !1
  , Fg = !1
  , Tl = {
    id: "__nuxt-loader"
}
  , Bg = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
        visibility: !0
    }
}
  , Ug = {
    deep: !1
}
  , Vg = {}
  , Wg = "#__nuxt"
  , Df = "nuxt-app"
  , Sl = 36e5
  , zg = "vite:preloadError";
function Hf(e=Df) {
    return jg(e, {
        asyncContext: !1
    })
}
const qg = "__nuxt_plugin";
function Kg(e) {
    let t = 0;
    const n = {
        _id: e.id || Df || "nuxt-app",
        _scope: Lc(),
        provide: void 0,
        versions: {
            get nuxt() {
                return "4.1.0"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Pt({
            ...e.ssrContext?.payload || {},
            data: Pt({}),
            state: ot({}),
            once: new Set,
            _errors: Pt({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return n._scope.active && !Vr() ? n._scope.run( () => xl(n, o)) : xl(n, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: Pt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const o = window.__NUXT__;
        if (o)
            for (const s in o)
                switch (s) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[s], o[s]);
                    break;
                default:
                    n.payload[s] = o[s]
                }
    }
    n.hooks = Nf(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (o, s) => {
        const i = "$" + o;
        io(n, i, s),
        io(n.vueApp.config.globalProperties, i, s)
    }
    ,
    io(n.vueApp, "$nuxt", n),
    io(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener(zg, s => {
            n.callHook("app:chunkError", {
                error: s.payload
            }),
            s.payload.message.includes("Unable to preload CSS") && s.preventDefault()
        }
        ),
        window.useNuxtApp ||= we;
        const o = n.hook("app:error", (...s) => {
            console.error("[nuxt] error caught during app initialization", ...s)
        }
        );
        n.hook("app:mounted", o)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
function Gg(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function Yg(e, t) {
    if (typeof t == "function") {
        const {provide: n} = await e.runWithContext( () => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function Jg(e, t) {
    const n = new Set
      , r = []
      , o = [];
    let s, i = 0;
    async function a(l) {
        const u = l.dependsOn?.filter(c => t.some(f => f._name === c) && !n.has(c)) ?? [];
        if (u.length > 0)
            r.push([new Set(u), l]);
        else {
            const c = Yg(e, l).then(async () => {
                l._name && (n.add(l._name),
                await Promise.all(r.map(async ([f,d]) => {
                    f.has(l._name) && (f.delete(l._name),
                    f.size === 0 && (i++,
                    await a(d)))
                }
                )))
            }
            ).catch(f => {
                if (!l.parallel && !e.payload.error)
                    throw f;
                s ||= f
            }
            );
            l.parallel ? o.push(c) : await c
        }
    }
    for (const l of t)
        Gg(e, l);
    for (const l of t)
        await a(l);
    if (await Promise.all(o),
    i)
        for (let l = 0; l < i; l++)
            await Promise.all(o);
    if (s)
        throw e.payload.error || s
}
function mt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || ( () => {}
    ), e, {
        [qg]: !0,
        _name: t
    })
}
function xl(e, t, n) {
    const r = () => t();
    return Hf(e._id).set(e),
    e.vueApp.runWithContext(r)
}
function Qg(e) {
    let t;
    return In() && (t = Ae()?.appContext.app.$nuxt),
    t ||= Hf(e).tryUse(),
    t || null
}
function we(e) {
    const t = Qg(e);
    if (!t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function ar(e) {
    return we().$config
}
function io(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
function Xg(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => jf(n, e)
    }
}
function $f(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map( ([r,o]) => [r, $f(o)])) : new Map(Object.entries(e[n]));
    return t
}
function Zg(e) {
    return Xg($f(e))
}
function jf(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s,i] of Cl(t.wildcard))
        (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s,i] of Cl(t.dynamic))
        if (e.startsWith(s + "/")) {
            const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
            r.push(...jf(a, i))
        }
    const o = t.static.get(e);
    return o && r.push(o),
    r.filter(Boolean)
}
function Cl(e) {
    return [...e.entries()].sort( (t, n) => t[0].length - n[0].length)
}
function Ns(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function yi(e, t, n=".", r) {
    if (!Ns(t))
        return yi(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor")
            continue;
        const i = e[s];
        i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Ns(i) && Ns(o[s]) ? o[s] = yi(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i))
    }
    return o
}
function Ff(e) {
    return (...t) => t.reduce( (n, r) => yi(n, r, "", e), {})
}
const Bf = Ff()
  , ey = Ff( (e, t, n) => {
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function ty(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class Rl extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, n={}) {
        super(t, n),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: _i(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Uf(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
function ny(e) {
    if (typeof e == "string")
        return new Rl(e);
    if (ry(e))
        return e;
    const t = new Rl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (ty(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = _i(e.statusCode, t.statusCode) : e.status && (t.statusCode = _i(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Uf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function ry(e) {
    return e?.constructor?.__h3_error__ === !0
}
const oy = /[^\u0009\u0020-\u007E]/g;
function Uf(e="") {
    return e.replace(oy, "")
}
function _i(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const sy = Symbol("layout-meta")
  , ds = Symbol("route")
  , Ye = () => we()?.$router
  , ya = () => In() ? Me(ds, we()._route) : we()._route;
const iy = () => {
    try {
        if (we()._processingMiddleware)
            return !0
    } catch {
        return !1
    }
    return !1
}
  , ay = (e, t) => {
    e ||= "/";
    const n = typeof e == "string" ? e : "path" in e ? vi(e) : Ye().resolve(e).href;
    if (t?.open) {
        const {target: l="_blank", windowFeatures: u={}} = t.open
          , c = Object.entries(u).filter( ([f,d]) => d !== void 0).map( ([f,d]) => `${f.toLowerCase()}=${d}`).join(", ");
        return open(n, l, c),
        Promise.resolve()
    }
    const r = Qt(n, {
        acceptRelative: !0
    })
      , o = t?.external || r;
    if (o) {
        if (!t?.external)
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const {protocol: l} = new URL(n,window.location.href);
        if (l && ig(l))
            throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const s = iy();
    if (!o && s) {
        if (t?.replace) {
            if (typeof e == "string") {
                const {pathname: l, search: u, hash: c} = Mf(e);
                return {
                    path: l,
                    ...u && {
                        query: ha(u)
                    },
                    ...c && {
                        hash: c
                    },
                    replace: !0
                }
            }
            return {
                ...e,
                replace: !0
            }
        }
        return e
    }
    const i = Ye()
      , a = we();
    return o ? (a._scope.stop(),
    t?.replace ? location.replace(n) : location.href = n,
    s ? a.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : t?.replace ? i.replace(e) : i.push(e)
}
;
function vi(e) {
    return Rf(e.path || "", e.query || {}) + (e.hash || "")
}
const Vf = "__nuxt_error"
  , hs = () => Wr(we().payload, "error")
  , vn = e => {
    const t = fn(e);
    try {
        const n = we()
          , r = hs();
        n.hooks.callHook("app:error", t),
        r.value ||= t
    } catch {
        throw t
    }
    return t
}
  , ly = async (e={}) => {
    const t = we()
      , n = hs();
    t.callHook("app:error:cleared", e),
    e.redirect && await Ye().replace(e.redirect),
    n.value = void 0
}
  , Wf = e => !!e && typeof e == "object" && Vf in e
  , fn = e => {
    const t = ny(e);
    return Object.defineProperty(t, Vf, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
;
function cy(e) {
    const t = fy(e)
      , n = new ArrayBuffer(t.length)
      , r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++)
        r.setUint8(o, t.charCodeAt(o));
    return n
}
const uy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function fy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = ""
      , n = 0
      , r = 0;
    for (let o = 0; o < e.length; o++)
        n <<= 6,
        n |= uy.indexOf(e[o]),
        r += 6,
        r === 24 && (t += String.fromCharCode((n & 16711680) >> 16),
        t += String.fromCharCode((n & 65280) >> 8),
        t += String.fromCharCode(n & 255),
        n = r = 0);
    return r === 12 ? (n >>= 4,
    t += String.fromCharCode(n)) : r === 18 && (n >>= 2,
    t += String.fromCharCode((n & 65280) >> 8),
    t += String.fromCharCode(n & 255)),
    t
}
const dy = -1
  , hy = -2
  , py = -3
  , my = -4
  , gy = -5
  , yy = -6;
function _y(e, t) {
    return vy(JSON.parse(e), t)
}
function vy(e, t) {
    if (typeof e == "number")
        return o(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function o(s, i=!1) {
        if (s === dy)
            return;
        if (s === py)
            return NaN;
        if (s === my)
            return 1 / 0;
        if (s === gy)
            return -1 / 0;
        if (s === yy)
            return -0;
        if (i || typeof s != "number")
            throw new Error("Invalid input");
        if (s in r)
            return r[s];
        const a = n[s];
        if (!a || typeof a != "object")
            r[s] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , u = t?.[l];
                if (u)
                    return r[s] = u(o(a[1]));
                switch (l) {
                case "Date":
                    r[s] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[s] = c;
                    for (let h = 1; h < a.length; h += 1)
                        c.add(o(a[h]));
                    break;
                case "Map":
                    const f = new Map;
                    r[s] = f;
                    for (let h = 1; h < a.length; h += 2)
                        f.set(o(a[h]), o(a[h + 1]));
                    break;
                case "RegExp":
                    r[s] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[s] = Object(a[1]);
                    break;
                case "BigInt":
                    r[s] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[s] = d;
                    for (let h = 1; h < a.length; h += 2)
                        d[a[h]] = o(a[h + 1]);
                    break;
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float32Array":
                case "Float64Array":
                case "BigInt64Array":
                case "BigUint64Array":
                    {
                        const h = globalThis[l]
                          , g = new h(o(a[1]));
                        r[s] = a[2] !== void 0 ? g.subarray(a[2], a[3]) : g;
                        break
                    }
                case "ArrayBuffer":
                    {
                        const h = a[1]
                          , g = cy(h);
                        r[s] = g;
                        break
                    }
                case "Temporal.Duration":
                case "Temporal.Instant":
                case "Temporal.PlainDate":
                case "Temporal.PlainTime":
                case "Temporal.PlainDateTime":
                case "Temporal.PlainMonthDay":
                case "Temporal.PlainYearMonth":
                case "Temporal.ZonedDateTime":
                    {
                        const h = l.slice(9);
                        r[s] = Temporal[h].from(a[1]);
                        break
                    }
                case "URL":
                    {
                        const h = new URL(a[1]);
                        r[s] = h;
                        break
                    }
                case "URLSearchParams":
                    {
                        const h = new URLSearchParams(a[1]);
                        r[s] = h;
                        break
                    }
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[s] = l;
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== hy && (l[u] = o(c))
                }
            }
        else {
            const l = {};
            r[s] = l;
            for (const u in a) {
                if (u === "__proto__")
                    throw new Error("Cannot parse an object with a `__proto__` property");
                const c = a[u];
                l[u] = o(c)
            }
        }
        return r[s]
    }
    return o(0)
}
const by = new Set(["link", "style", "script", "noscript"])
  , wy = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , Al = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , Ey = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , ky = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , Ty = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"])
  , Sy = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , xy = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"])
  , Cy = ["name", "property", "http-equiv"]
  , Ry = new Set(["viewport", "description", "keywords", "robots"]);
function zf(e) {
    const t = e.split(":");
    return t.length ? xy.has(t[1]) : !1
}
function bi(e) {
    const {props: t, tag: n} = e;
    if (ky.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    if (e.tag === "meta") {
        for (const r of Cy)
            if (t[r] !== void 0) {
                const o = t[r]
                  , s = o.includes(":")
                  , i = Ry.has(o)
                  , l = !(s || i) && e.key ? `:key:${e.key}` : "";
                return `${n}:${o}${l}`
            }
    }
    if (e.key)
        return `${n}:key:${e.key}`;
    if (t.id)
        return `${n}:id:${t.id}`;
    if (wy.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r)
            return `${n}:content:${r}`
    }
}
function Pl(e) {
    const t = e._h || e._d;
    if (t)
        return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map( ([r,o]) => `${r}:${String(o)}`).join(",")}`
}
function Vo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)),
    Array.isArray(o))
        return o.map(s => Vo(s, t));
    if (o?.constructor === Object) {
        const s = {};
        for (const i of Object.keys(o))
            s[i] = Vo(o[i], t, i);
        return s
    }
    return o
}
function Ay(e, t) {
    const n = e === "style" ? new Map : new Set;
    function r(o) {
        const s = o.trim();
        if (s)
            if (e === "style") {
                const [i,...a] = s.split(":").map(l => l.trim());
                i && a.length && n.set(i, a.join(":"))
            } else
                s.split(" ").filter(Boolean).forEach(i => n.add(i))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(o => r(o)) : t && typeof t == "object" && Object.entries(t).forEach( ([o,s]) => {
        s && s !== "false" && (e === "style" ? n.set(o.trim(), s) : r(o))
    }
    ),
    n
}
function qf(e, t) {
    return e.props = e.props || {},
    t ? e.tag === "templateParams" ? (e.props = t,
    e) : (Object.entries(t).forEach( ([n,r]) => {
        if (r === null) {
            e.props[n] = null;
            return
        }
        if (n === "class" || n === "style") {
            e.props[n] = Ay(n, r);
            return
        }
        if (Ty.has(n)) {
            if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
                let i = t.type;
                if (t.type || (i = "application/json"),
                !i?.endsWith("json") && i !== "speculationrules")
                    return;
                t.type = i,
                e.props.type = i,
                e[n] = JSON.stringify(r)
            } else
                e[n] = r;
            return
        }
        const o = String(r)
          , s = n.startsWith("data-");
        o === "true" || o === "" ? e.props[n] = s ? o : !0 : !r && s && o === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r)
    }
    ),
    e) : e
}
function Py(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }
      , r = qf({
        tag: e,
        props: {}
    }, n);
    return r.key && by.has(r.tag) && (r.props["data-hid"] = r._h = r.key),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(o => ({
        ...r,
        props: {
            ...r.props,
            content: o
        }
    })) : r
}
function Oy(e, t) {
    if (!e)
        return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
        for (let i = 0; i < t.length; i++)
            s = t[i](o, s);
        return s
    }
    ;
    e = n(void 0, e);
    const r = [];
    return e = Vo(e, n),
    Object.entries(e || {}).forEach( ([o,s]) => {
        if (s !== void 0)
            for (const i of Array.isArray(s) ? s : [s])
                r.push(Py(o, i))
    }
    ),
    r.flat()
}
const Ol = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w
  , Ml = {
    base: -10,
    title: 10
}
  , My = {
    critical: -8,
    high: -1,
    low: 2
}
  , Ll = {
    meta: {
        "content-security-policy": -30,
        charset: -20,
        viewport: -15
    },
    link: {
        preconnect: 20,
        stylesheet: 60,
        preload: 70,
        modulepreload: 70,
        prefetch: 90,
        "dns-prefetch": 90,
        prerender: 90
    },
    script: {
        async: 30,
        defer: 80,
        sync: 50
    },
    style: {
        imported: 40,
        sync: 60
    }
}
  , Ly = /@import/
  , hr = e => e === "" || e === !0;
function Iy(e, t) {
    if (typeof t.tagPriority == "number")
        return t.tagPriority;
    let n = 100;
    const r = My[t.tagPriority] || 0
      , o = e.resolvedOptions.disableCapoSorting ? {
        link: {},
        script: {},
        style: {}
    } : Ll;
    if (t.tag in Ml)
        n = Ml[t.tag];
    else if (t.tag === "meta") {
        const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        s && (n = Ll.meta[s])
    } else
        t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? hr(t.props.async) ? n = o.script.async : t.props.src && !hr(t.props.defer) && !hr(t.props.async) && t.props.type !== "module" && !t.props.type?.endsWith("json") ? n = o.script.sync : hr(t.props.defer) && t.props.src && !hr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Ly.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r
}
function Il(e, t) {
    const n = typeof t == "function" ? t(e) : t
      , r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n),
    e.hooks.addHooks(n.hooks || {}))
}
function Ny(e={}) {
    const t = Nf();
    t.addHooks(e.hooks || {});
    const n = !e.document
      , r = new Map
      , o = new Map
      , s = new Set
      , i = {
        _entryCount: 1,
        plugins: o,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        ssr: n,
        entries: r,
        headEntries() {
            return [...r.values()]
        },
        use: a => Il(i, a),
        push(a, l) {
            const u = {
                ...l || {}
            };
            delete u.head;
            const c = u._index ?? i._entryCount++
              , f = {
                _i: c,
                input: a,
                options: u
            }
              , d = {
                _poll(h=!1) {
                    i.dirty = !0,
                    !h && s.add(c),
                    t.callHook("entries:updated", i)
                },
                dispose() {
                    r.delete(c) && i.invalidate()
                },
                patch(h) {
                    (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (f.input = h,
                    r.set(c, f),
                    d._poll())
                }
            };
            return d.patch(a),
            d
        },
        async resolveTags() {
            const a = {
                tagMap: new Map,
                tags: [],
                entries: [...i.entries.values()]
            };
            for (await t.callHook("entries:resolve", a); s.size; ) {
                const d = s.values().next().value;
                s.delete(d);
                const h = r.get(d);
                if (h) {
                    const g = {
                        tags: Oy(h.input, e.propResolvers || []).map(p => Object.assign(p, h.options)),
                        entry: h
                    };
                    await t.callHook("entries:normalize", g),
                    h._tags = g.tags.map( (p, v) => (p._w = Iy(i, p),
                    p._p = (h._i << 10) + v,
                    p._d = bi(p),
                    p))
                }
            }
            let l = !1;
            a.entries.flatMap(d => (d._tags || []).map(h => ({
                ...h,
                props: {
                    ...h.props
                }
            }))).sort(Ol).reduce( (d, h) => {
                const g = String(h._d || h._p);
                if (!d.has(g))
                    return d.set(g, h);
                const p = d.get(g);
                if ((h?.tagDuplicateStrategy || (Sy.has(h.tag) ? "merge" : null) || (h.key && h.key === p.key ? "merge" : null)) === "merge") {
                    const k = {
                        ...p.props
                    };
                    Object.entries(h.props).forEach( ([w,m]) => k[w] = w === "style" ? new Map([...p.props.style || new Map, ...m]) : w === "class" ? new Set([...p.props.class || new Set, ...m]) : m),
                    d.set(g, {
                        ...h,
                        props: k
                    })
                } else
                    h._p >> 10 === p._p >> 10 && h.tag === "meta" && zf(g) ? (d.set(g, Object.assign([...Array.isArray(p) ? p : [p], h], h)),
                    l = !0) : (h._w === p._w ? h._p > p._p : h?._w < p?._w) && d.set(g, h);
                return d
            }
            , a.tagMap);
            const u = a.tagMap.get("title")
              , c = a.tagMap.get("titleTemplate");
            if (i._title = u?.textContent,
            c) {
                const d = c?.textContent;
                if (i._titleTemplate = d,
                d) {
                    let h = typeof d == "function" ? d(u?.textContent) : d;
                    typeof h == "string" && !i.plugins.has("template-params") && (h = h.replace("%s", u?.textContent || "")),
                    u ? h === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
                        ...u,
                        textContent: h
                    }) : (c.tag = "title",
                    c.textContent = h)
                }
            }
            a.tags = Array.from(a.tagMap.values()),
            l && (a.tags = a.tags.flat().sort(Ol)),
            await t.callHook("tags:beforeResolve", a),
            await t.callHook("tags:resolve", a),
            await t.callHook("tags:afterResolve", a);
            const f = [];
            for (const d of a.tags) {
                const {innerHTML: h, tag: g, props: p} = d;
                if (Ey.has(g) && !(Object.keys(p).length === 0 && !d.innerHTML && !d.textContent) && !(g === "meta" && !p.content && !p["http-equiv"] && !p.charset)) {
                    if (g === "script" && h) {
                        if (p.type?.endsWith("json")) {
                            const v = typeof h == "string" ? h : JSON.stringify(h);
                            d.innerHTML = v.replace(/</g, "\\u003C")
                        } else
                            typeof h == "string" && (d.innerHTML = h.replace(new RegExp(`</${g}`,"g"), `<\\/${g}`));
                        d._d = bi(d)
                    }
                    f.push(d)
                }
            }
            return f
        },
        invalidate() {
            for (const a of r.values())
                s.add(a._i);
            i.dirty = !0,
            t.callHook("entries:updated", i)
        }
    };
    return (e?.plugins || []).forEach(a => Il(i, a)),
    i.hooks.callHook("init", i),
    e.init?.forEach(a => a && i.push(a)),
    i
}
const Dy = (e, t) => Re(t) ? ae(t) : t
  , _a = "usehead";
function Hy(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(_a, e)
        }
    }.install
}
function $y() {
    if (In()) {
        const e = Me(_a);
        if (!e)
            throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
        return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}
function jy(e, t={}) {
    const n = t.head || $y();
    return n.ssr ? n.push(e || {}, t) : Fy(n, e, t)
}
function Fy(e, t, n={}) {
    const r = he(!1);
    let o;
    return ia( () => {
        const i = r.value ? {} : Vo(t, Dy);
        o ? o.patch(i) : o = e.push(i, n)
    }
    ),
    Ae() && (Ln( () => {
        o.dispose()
    }
    ),
    Yi( () => {
        r.value = !0
    }
    ),
    Gi( () => {
        r.value = !1
    }
    )),
    o
}
function By(e) {
    const t = e || we();
    return t.ssrContext?.head || t.runWithContext( () => {
        if (In()) {
            const n = Me(_a);
            if (!n)
                throw new Error("[nuxt] [unhead] Missing Unhead instance.");
            return n
        }
    }
    )
}
function va(e, t={}) {
    const n = By(t.nuxt);
    return jy(e, {
        head: n,
        ...t
    })
}
const Uy = "modulepreload"
  , Vy = function(e, t) {
    return new URL(e,t).href
}
  , Nl = {}
  , ne = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        let u = function(c) {
            return Promise.all(c.map(f => Promise.resolve(f).then(d => ({
                status: "fulfilled",
                value: d
            }), d => ({
                status: "rejected",
                reason: d
            }))))
        };
        const i = document.getElementsByTagName("link")
          , a = document.querySelector("meta[property=csp-nonce]")
          , l = a?.nonce || a?.getAttribute("nonce");
        o = u(n.map(c => {
            if (c = Vy(c, r),
            c in Nl)
                return;
            Nl[c] = !0;
            const f = c.endsWith(".css")
              , d = f ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let p = i.length - 1; p >= 0; p--) {
                    const v = i[p];
                    if (v.href === c && (!f || v.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${c}"]${d}`))
                return;
            const g = document.createElement("link");
            if (g.rel = f ? "stylesheet" : Uy,
            f || (g.as = "script"),
            g.crossOrigin = "",
            g.href = c,
            l && g.setAttribute("nonce", l),
            document.head.appendChild(g),
            f)
                return new Promise( (p, v) => {
                    g.addEventListener("load", p),
                    g.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function s(i) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = i,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw i
    }
    return o.then(i => {
        for (const a of i || [])
            a.status === "rejected" && s(a.reason);
        return t().catch(s)
    }
    )
};
let _o, vo;
function Wy() {
    return _o = $fetch(ma(`builds/meta/${ar().app.buildId}.json`), {
        responseType: "json"
    }),
    _o.then(e => {
        vo = Zg(e.matcher)
    }
    ).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }
    ),
    _o
}
function ps() {
    return _o || Wy()
}
async function ba(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ps(),
    !vo)
        return console.error("[nuxt] Error creating app manifest matcher.", vo),
        {};
    try {
        return Bf({}, ...vo.matchAll(t).reverse())
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n),
        {}
    }
}
async function Dl(e, t={}) {
    if (!await Gf(e))
        return null;
    const r = await qy(e, t);
    return await Kf(r) || null
}
const zy = "_payload.json";
async function qy(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Qt(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = ar()
      , o = t.hash || (t.fresh ? Date.now() : r.app.buildId)
      , s = r.app.cdnURL
      , i = s && await Gf(e) ? s : r.app.baseURL;
    return fs(i, n.pathname, zy + (o ? `?${o}` : ""))
}
async function Kf(e) {
    const t = fetch(e, {
        cache: "force-cache"
    }).then(n => n.text().then(Yf));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Gf(e=ya().path) {
    const t = we();
    return e = Xn(e),
    (await ps()).prerendered.includes(e) ? !0 : t.runWithContext(async () => {
        const r = await ba({
            path: e
        });
        return !!r.prerender && !r.redirect
    }
    )
}
let yn = null;
async function Ky() {
    if (yn)
        return yn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Yf(e.textContent || "")
      , n = e.dataset.src ? await Kf(e.dataset.src) : void 0;
    return yn = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    yn.config?.public && (yn.config.public = ot(yn.config.public)),
    yn
}
async function Yf(e) {
    return await _y(e, we()._payloadRevivers)
}
function Gy(e, t) {
    we()._payloadRevivers[e] = t
}
const Yy = [["NuxtError", e => fn(e)], ["EmptyShallowRef", e => xe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : jo(e))], ["EmptyRef", e => he(e === "_" ? void 0 : e === "0n" ? BigInt(0) : jo(e))], ["ShallowRef", e => xe(e)], ["ShallowReactive", e => Pt(e)], ["Ref", e => he(e)], ["Reactive", e => ot(e)]]
  , Jy = mt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const [r,o] of Yy)
            Gy(r, o);
        Object.assign(e.payload, ([t,n] = Kn( () => e.runWithContext(Ky)),
        t = await t,
        n(),
        t)),
        delete window.__NUXT__
    }
});
async function wa(e, t={}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !!r.shouldRender)
        return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async o => {
            const s = new Map
              , i = new Promise(h => {
                e.resolveTags().then(g => {
                    h(g.map(p => {
                        const v = s.get(p._d) || 0
                          , k = {
                            tag: p,
                            id: (v ? `${p._d}:${v}` : p._d) || Pl(p),
                            shouldRender: !0
                        };
                        return p._d && zf(p._d) && s.set(p._d, v + 1),
                        k
                    }
                    ))
                }
                )
            }
            );
            let a = e._dom;
            if (!a) {
                a = {
                    title: n.title,
                    elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
                };
                for (const h of ["body", "head"]) {
                    const g = n[h]?.children;
                    for (const p of g) {
                        const v = p.tagName.toLowerCase();
                        if (!Al.has(v))
                            continue;
                        const k = qf({
                            tag: v,
                            props: {}
                        }, {
                            innerHTML: p.innerHTML,
                            ...p.getAttributeNames().reduce( (w, m) => (w[m] = p.getAttribute(m),
                            w), {}) || {}
                        });
                        if (k.key = p.getAttribute("data-hid") || void 0,
                        k._d = bi(k) || Pl(k),
                        a.elMap.has(k._d)) {
                            let w = 1
                              , m = k._d;
                            for (; a.elMap.has(m); )
                                m = `${k._d}:${w++}`;
                            a.elMap.set(m, p)
                        } else
                            a.elMap.set(k._d, p)
                    }
                }
            }
            a.pendingSideEffects = {
                ...a.sideEffects
            },
            a.sideEffects = {};
            function l(h, g, p) {
                const v = `${h}:${g}`;
                a.sideEffects[v] = p,
                delete a.pendingSideEffects[v]
            }
            function u({id: h, $el: g, tag: p}) {
                const v = p.tag.endsWith("Attrs");
                a.elMap.set(h, g),
                v || (p.textContent && p.textContent !== g.textContent && (g.textContent = p.textContent),
                p.innerHTML && p.innerHTML !== g.innerHTML && (g.innerHTML = p.innerHTML),
                l(h, "el", () => {
                    g?.remove(),
                    a.elMap.delete(h)
                }
                ));
                for (const k in p.props) {
                    if (!Object.prototype.hasOwnProperty.call(p.props, k))
                        continue;
                    const w = p.props[k];
                    if (k.startsWith("on") && typeof w == "function") {
                        const _ = g?.dataset;
                        if (_ && _[`${k}fired`]) {
                            const E = k.slice(0, -5);
                            w.call(g, new Event(E.substring(2)))
                        }
                        g.getAttribute(`data-${k}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : g).addEventListener(k.substring(2), w.bind(g)),
                        g.setAttribute(`data-${k}`, ""));
                        continue
                    }
                    const m = `attr:${k}`;
                    if (k === "class") {
                        if (!w)
                            continue;
                        for (const _ of w)
                            v && l(h, `${m}:${_}`, () => g.classList.remove(_)),
                            !g.classList.contains(_) && g.classList.add(_)
                    } else if (k === "style") {
                        if (!w)
                            continue;
                        for (const [_,E] of w)
                            l(h, `${m}:${_}`, () => {
                                g.style.removeProperty(_)
                            }
                            ),
                            g.style.setProperty(_, E)
                    } else
                        w !== !1 && w !== null && (g.getAttribute(k) !== w && g.setAttribute(k, w === !0 ? "" : String(w)),
                        v && l(h, m, () => g.removeAttribute(k)))
                }
            }
            const c = []
              , f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            }
              , d = await i;
            for (const h of d) {
                const {tag: g, shouldRender: p, id: v} = h;
                if (p) {
                    if (g.tag === "title") {
                        n.title = g.textContent,
                        l("title", "", () => n.title = a.title);
                        continue
                    }
                    h.$el = h.$el || a.elMap.get(v),
                    h.$el ? u(h) : Al.has(g.tag) && c.push(h)
                }
            }
            for (const h of c) {
                const g = h.tag.tagPosition || "head";
                h.$el = n.createElement(h.tag.tag),
                u(h),
                f[g] = f[g] || n.createDocumentFragment(),
                f[g].appendChild(h.$el)
            }
            for (const h of d)
                await e.hooks.callHook("dom:renderTag", h, n, l);
            f.head && n.head.appendChild(f.head),
            f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild),
            f.bodyClose && n.body.appendChild(f.bodyClose);
            for (const h in a.pendingSideEffects)
                a.pendingSideEffects[h]();
            e._dom = a,
            await e.hooks.callHook("dom:rendered", {
                renders: d
            }),
            o()
        }
        ).finally( () => {
            e._domUpdatePromise = void 0,
            e.dirty = !1
        }
        )),
        e._domUpdatePromise
}
function Qy(e={}) {
    const t = e.domOptions?.render || wa;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
    return Ny({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}
function Xy(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t( () => {
            n === r && e()
        }
        )
    }
}
function Zy(e={}) {
    const t = Qy({
        domOptions: {
            render: Xy( () => wa(t), n => setTimeout(n, 0))
        },
        ...e
    });
    return t.install = Hy(t),
    t
}
const e_ = {
    disableDefaults: !0
}
  , t_ = mt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = Zy(e_);
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await wa(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", o => {
                o.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            e.hooks.hook("page:finish", () => {
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const jn = typeof document < "u";
function Jf(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}
function n_(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Jf(e.default)
}
const de = Object.assign;
function Ds(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = kt(o) ? o.map(e) : e(o)
    }
    return n
}
const Sr = () => {}
  , kt = Array.isArray
  , Qf = /#/g
  , r_ = /&/g
  , o_ = /\//g
  , s_ = /=/g
  , i_ = /\?/g
  , Xf = /\+/g
  , a_ = /%5B/g
  , l_ = /%5D/g
  , Zf = /%5E/g
  , c_ = /%60/g
  , ed = /%7B/g
  , u_ = /%7C/g
  , td = /%7D/g
  , f_ = /%20/g;
function Ea(e) {
    return encodeURI("" + e).replace(u_, "|").replace(a_, "[").replace(l_, "]")
}
function d_(e) {
    return Ea(e).replace(ed, "{").replace(td, "}").replace(Zf, "^")
}
function wi(e) {
    return Ea(e).replace(Xf, "%2B").replace(f_, "+").replace(Qf, "%23").replace(r_, "%26").replace(c_, "`").replace(ed, "{").replace(td, "}").replace(Zf, "^")
}
function h_(e) {
    return wi(e).replace(s_, "%3D")
}
function p_(e) {
    return Ea(e).replace(Qf, "%23").replace(i_, "%3F")
}
function m_(e) {
    return e == null ? "" : p_(e).replace(o_, "%2F")
}
function $r(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const g_ = /\/$/
  , y_ = e => e.replace(g_, "");
function Hs(e, t, n="/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    s = t.slice(l + 1, a > -1 ? a : t.length),
    o = e(s)),
    a > -1 && (r = r || t.slice(0, a),
    i = t.slice(a, t.length)),
    r = w_(r ?? t, n),
    {
        fullPath: r + (s && "?") + s + i,
        path: r,
        query: o,
        hash: $r(i)
    }
}
function __(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Hl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function v_(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && Zn(t.matched[r], n.matched[o]) && nd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Zn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function nd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!b_(e[n], t[n]))
            return !1;
    return !0
}
function b_(e, t) {
    return kt(e) ? $l(e, t) : kt(t) ? $l(t, e) : e === t
}
function $l(e, t) {
    return kt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function w_(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                s > 1 && s--;
            else
                break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/")
}
const ut = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var jr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(jr || (jr = {}));
var xr;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(xr || (xr = {}));
function E_(e) {
    if (!e)
        if (jn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    y_(e)
}
const k_ = /^[^#]+#/;
function T_(e, t) {
    return e.replace(k_, "#") + t
}
function S_(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ms = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function x_(e) {
    let t;
    if ("el" in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = S_(o, e)
    } else
        t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function jl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ei = new Map;
function C_(e, t) {
    Ei.set(e, t)
}
function R_(e) {
    const t = Ei.get(e);
    return Ei.delete(e),
    t
}
let A_ = () => location.protocol + "//" + location.host;
function rd(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        let a = o.includes(e.slice(s)) ? e.slice(s).length : 1
          , l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Hl(l, "")
    }
    return Hl(n, e) + r + o
}
function P_(e, t, n, r) {
    let o = []
      , s = []
      , i = null;
    const a = ({state: d}) => {
        const h = rd(e, location)
          , g = n.value
          , p = t.value;
        let v = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            i && i === g) {
                i = null;
                return
            }
            v = p ? d.position - p.position : 0
        } else
            r(h);
        o.forEach(k => {
            k(n.value, g, {
                delta: v,
                type: jr.pop,
                direction: v ? v > 0 ? xr.forward : xr.back : xr.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function u(d) {
        o.push(d);
        const h = () => {
            const g = o.indexOf(d);
            g > -1 && o.splice(g, 1)
        }
        ;
        return s.push(h),
        h
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(de({}, d.state, {
            scroll: ms()
        }), "")
    }
    function f() {
        for (const d of s)
            d();
        s = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function Fl(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? ms() : null
    }
}
function O_(e) {
    const {history: t, location: n} = window
      , r = {
        value: rd(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function s(l, u, c) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : A_() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            o.value = u
        } catch (h) {
            console.error(h),
            n[c ? "replace" : "assign"](d)
        }
    }
    function i(l, u) {
        const c = de({}, t.state, Fl(o.value.back, l, o.value.forward, !0), u, {
            position: o.value.position
        });
        s(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = de({}, o.value, t.state, {
            forward: l,
            scroll: ms()
        });
        s(c.current, c, !0);
        const f = de({}, Fl(r.value, l, null), {
            position: c.position + 1
        }, u);
        s(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: i
    }
}
function M_(e) {
    e = E_(e);
    const t = O_(e)
      , n = P_(e, t.state, t.location, t.replace);
    function r(s, i=!0) {
        i || n.pauseListeners(),
        history.go(s)
    }
    const o = de({
        location: "",
        base: e,
        go: r,
        createHref: T_.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function L_(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function od(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const sd = Symbol("");
var Bl;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Bl || (Bl = {}));
function er(e, t) {
    return de(new Error, {
        type: e,
        [sd]: !0
    }, t)
}
function It(e, t) {
    return e instanceof Error && sd in e && (t == null || !!(e.type & t))
}
const Ul = "[^/]+?"
  , I_ = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , N_ = /[.+*?^${}()[\]/\\]/g;
function D_(e, t) {
    const n = de({}, I_, t)
      , r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (o += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (o += "/"),
                o += d.value.replace(N_, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: g, repeatable: p, optional: v, regexp: k} = d;
                s.push({
                    name: g,
                    repeatable: p,
                    optional: v
                });
                const w = k || Ul;
                if (w !== Ul) {
                    h += 10;
                    try {
                        new RegExp(`(${w})`)
                    } catch (_) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${w}): ` + _.message)
                    }
                }
                let m = p ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
                f || (m = v && u.length < 2 ? `(?:/${m})` : "/" + m),
                v && (m += "?"),
                o += m,
                h += 20,
                v && (h += -8),
                p && (h += -20),
                w === ".*" && (h += -50)
            }
            c.push(h)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(i)
          , f = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || ""
              , g = s[d - 1];
            f[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const d of e) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    c += h.value;
                else if (h.type === 1) {
                    const {value: g, repeatable: p, optional: v} = h
                      , k = g in u ? u[g] : "";
                    if (kt(k) && !p)
                        throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                    const w = kt(k) ? k.join("/") : k;
                    if (!w)
                        if (v)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${g}"`);
                    c += w
                }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: s,
        parse: a,
        stringify: l
    }
}
function H_(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function id(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const s = H_(r[n], o[n]);
        if (s)
            return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Vl(r))
            return 1;
        if (Vl(o))
            return -1
    }
    return o.length - r.length
}
function Vl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const $_ = {
    type: 0,
    value: ""
}
  , j_ = /[a-zA-Z0-9_]/;
function F_(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[$_]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${u}": ${h}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let s;
    function i() {
        s && o.push(s),
        s = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (n === 0 ? s.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && f(),
            i()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : j_.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    o
}
function B_(e, t, n) {
    const r = D_(F_(e.path), n)
      , o = de(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function U_(e, t) {
    const n = []
      , r = new Map;
    t = Kl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(f) {
        return r.get(f)
    }
    function s(f, d, h) {
        const g = !h
          , p = zl(f);
        p.aliasOf = h && h.record;
        const v = Kl(t, f)
          , k = [p];
        if ("alias" in f) {
            const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const E of _)
                k.push(zl(de({}, p, {
                    components: h ? h.record.components : p.components,
                    path: E,
                    aliasOf: h ? h.record : p
                })))
        }
        let w, m;
        for (const _ of k) {
            const {path: E} = _;
            if (d && E[0] !== "/") {
                const T = d.record.path
                  , x = T[T.length - 1] === "/" ? "" : "/";
                _.path = d.record.path + (E && x + E)
            }
            if (w = B_(_, d, v),
            h ? h.alias.push(w) : (m = m || w,
            m !== w && m.alias.push(w),
            g && f.name && !ql(w) && i(f.name)),
            ad(w) && l(w),
            p.children) {
                const T = p.children;
                for (let x = 0; x < T.length; x++)
                    s(T[x], w, h && h.children[x])
            }
            h = h || w
        }
        return m ? () => {
            i(m)
        }
        : Sr
    }
    function i(f) {
        if (od(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(i),
            d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(i),
            f.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function l(f) {
        const d = z_(f, n);
        n.splice(d, 0, f),
        f.record.name && !ql(f) && r.set(f.record.name, f)
    }
    function u(f, d) {
        let h, g = {}, p, v;
        if ("name" in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw er(1, {
                    location: f
                });
            v = h.record.name,
            g = de(Wl(d.params, h.keys.filter(m => !m.optional).concat(h.parent ? h.parent.keys.filter(m => m.optional) : []).map(m => m.name)), f.params && Wl(f.params, h.keys.map(m => m.name))),
            p = h.stringify(g)
        } else if (f.path != null)
            p = f.path,
            h = n.find(m => m.re.test(p)),
            h && (g = h.parse(p),
            v = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(m => m.re.test(d.path)),
            !h)
                throw er(1, {
                    location: f,
                    currentLocation: d
                });
            v = h.record.name,
            g = de({}, d.params, f.params),
            p = h.stringify(g)
        }
        const k = [];
        let w = h;
        for (; w; )
            k.unshift(w.record),
            w = w.parent;
        return {
            name: v,
            path: p,
            params: g,
            matched: k,
            meta: W_(k)
        }
    }
    e.forEach(f => s(f));
    function c() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: s,
        resolve: u,
        removeRoute: i,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function Wl(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function zl(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: V_(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function V_(e) {
    const t = {}
      , n = e.props || !1;
    if ("component" in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function ql(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function W_(e) {
    return e.reduce( (t, n) => de(t, n.meta), {})
}
function Kl(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function z_(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const s = n + r >> 1;
        id(e, t[s]) < 0 ? r = s : n = s + 1
    }
    const o = q_(e);
    return o && (r = t.lastIndexOf(o, r - 1)),
    r
}
function q_(e) {
    let t = e;
    for (; t = t.parent; )
        if (ad(t) && id(e, t) === 0)
            return t
}
function ad({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function K_(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(Xf, " ")
          , i = s.indexOf("=")
          , a = $r(i < 0 ? s : s.slice(0, i))
          , l = i < 0 ? null : $r(s.slice(i + 1));
        if (a in t) {
            let u = t[a];
            kt(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function Gl(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = h_(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (kt(r) ? r.map(s => s && wi(s)) : [r && wi(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n,
            s != null && (t += "=" + s))
        }
        )
    }
    return t
}
function G_(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = kt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const Y_ = Symbol("")
  , Yl = Symbol("")
  , gs = Symbol("")
  , ka = Symbol("")
  , ki = Symbol("");
function pr() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function an(e, t, n, r, o, s=i => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (a, l) => {
        const u = d => {
            d === !1 ? l(er(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : L_(d) ? l(er(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d),
            a())
        }
          , c = s( () => e.call(r && r.instances[o], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)),
        f.catch(d => l(d))
    }
    )
}
function $s(e, t, n, r, o=s => s()) {
    const s = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (Jf(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && s.push(an(c, n, r, i, a, o))
                } else {
                    let u = l();
                    s.push( () => u.then(c => {
                        if (!c)
                            throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                        const f = n_(c) ? c.default : c;
                        i.mods[a] = c,
                        i.components[a] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && an(h, n, r, i, a, o)()
                    }
                    ))
                }
        }
    return s
}
function Jl(e) {
    const t = Me(gs)
      , n = Me(ka)
      , r = le( () => {
        const l = ie(e.to);
        return t.resolve(l)
    }
    )
      , o = le( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(Zn.bind(null, c));
        if (d > -1)
            return d;
        const h = Ql(l[u - 2]);
        return u > 1 && Ql(c) === h && f[f.length - 1].path !== h ? f.findIndex(Zn.bind(null, l[u - 2])) : d
    }
    )
      , s = le( () => o.value > -1 && ev(n.params, r.value.params))
      , i = le( () => o.value > -1 && o.value === n.matched.length - 1 && nd(n.params, r.value.params));
    function a(l={}) {
        if (Z_(l)) {
            const u = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Sr);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition( () => u),
            u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: le( () => r.value.href),
        isActive: s,
        isExactActive: i,
        navigate: a
    }
}
function J_(e) {
    return e.length === 1 ? e[0] : e
}
const Q_ = st({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: Jl,
    setup(e, {slots: t}) {
        const n = ot(Jl(e))
          , {options: r} = Me(gs)
          , o = le( () => ({
            [Xl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Xl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const s = t.default && J_(t.default(n));
            return e.custom ? s : Ne("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, s)
        }
    }
})
  , X_ = Q_;
function Z_(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function ev(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!kt(o) || o.length !== r.length || r.some( (s, i) => s !== o[i]))
            return !1
    }
    return !0
}
function Ql(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Xl = (e, t, n) => e ?? t ?? n
  , tv = st({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = Me(ki)
          , o = le( () => e.route || r.value)
          , s = Me(Yl, 0)
          , i = le( () => {
            let u = ie(s);
            const {matched: c} = o.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = le( () => o.value.matched[i.value]);
        Ot(Yl, le( () => i.value + 1)),
        Ot(Y_, a),
        Ot(ki, o);
        const l = he();
        return Se( () => [l.value, a.value, e.name], ([u,c,f], [d,h,g]) => {
            c && (c.instances[f] = u,
            h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
            c.updateGuards.size || (c.updateGuards = h.updateGuards))),
            u && c && (!h || !Zn(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(p => p(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = o.value
              , c = e.name
              , f = a.value
              , d = f && f.components[c];
            if (!d)
                return Zl(n.default, {
                    Component: d,
                    route: u
                });
            const h = f.props[c]
              , g = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null
              , v = Ne(d, de({}, g, t, {
                onVnodeUnmounted: k => {
                    k.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return Zl(n.default, {
                Component: v,
                route: u
            }) || v
        }
    }
});
function Zl(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ld = tv;
function nv(e) {
    const t = U_(e.routes, e)
      , n = e.parseQuery || K_
      , r = e.stringifyQuery || Gl
      , o = e.history
      , s = pr()
      , i = pr()
      , a = pr()
      , l = xe(ut);
    let u = ut;
    jn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ds.bind(null, A => "" + A)
      , f = Ds.bind(null, m_)
      , d = Ds.bind(null, $r);
    function h(A, V) {
        let B, G;
        return od(A) ? (B = t.getRecordMatcher(A),
        G = V) : G = A,
        t.addRoute(G, B)
    }
    function g(A) {
        const V = t.getRecordMatcher(A);
        V && t.removeRoute(V)
    }
    function p() {
        return t.getRoutes().map(A => A.record)
    }
    function v(A) {
        return !!t.getRecordMatcher(A)
    }
    function k(A, V) {
        if (V = de({}, V || l.value),
        typeof A == "string") {
            const b = Hs(n, A, V.path)
              , S = t.resolve({
                path: b.path
            }, V)
              , M = o.createHref(b.fullPath);
            return de(b, S, {
                params: d(S.params),
                hash: $r(b.hash),
                redirectedFrom: void 0,
                href: M
            })
        }
        let B;
        if (A.path != null)
            B = de({}, A, {
                path: Hs(n, A.path, V.path).path
            });
        else {
            const b = de({}, A.params);
            for (const S in b)
                b[S] == null && delete b[S];
            B = de({}, A, {
                params: f(b)
            }),
            V.params = f(V.params)
        }
        const G = t.resolve(B, V)
          , fe = A.hash || "";
        G.params = c(d(G.params));
        const Te = __(r, de({}, A, {
            hash: d_(fe),
            path: G.path
        }))
          , y = o.createHref(Te);
        return de({
            fullPath: Te,
            hash: fe,
            query: r === Gl ? G_(A.query) : A.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: y
        })
    }
    function w(A) {
        return typeof A == "string" ? Hs(n, A, l.value.path) : de({}, A)
    }
    function m(A, V) {
        if (u !== A)
            return er(8, {
                from: V,
                to: A
            })
    }
    function _(A) {
        return x(A)
    }
    function E(A) {
        return _(de(w(A), {
            replace: !0
        }))
    }
    function T(A) {
        const V = A.matched[A.matched.length - 1];
        if (V && V.redirect) {
            const {redirect: B} = V;
            let G = typeof B == "function" ? B(A) : B;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = w(G) : {
                path: G
            },
            G.params = {}),
            de({
                query: A.query,
                hash: A.hash,
                params: G.path != null ? {} : A.params
            }, G)
        }
    }
    function x(A, V) {
        const B = u = k(A)
          , G = l.value
          , fe = A.state
          , Te = A.force
          , y = A.replace === !0
          , b = T(B);
        if (b)
            return x(de(w(b), {
                state: typeof b == "object" ? de({}, fe, b.state) : fe,
                force: Te,
                replace: y
            }), V || B);
        const S = B;
        S.redirectedFrom = V;
        let M;
        return !Te && v_(r, G, B) && (M = er(16, {
            to: S,
            from: G
        }),
        at(G, G, !0, !1)),
        (M ? Promise.resolve(M) : P(S, G)).catch(C => It(C) ? It(C, 2) ? C : gt(C) : W(C, S, G)).then(C => {
            if (C) {
                if (It(C, 2))
                    return x(de({
                        replace: y
                    }, w(C.to), {
                        state: typeof C.to == "object" ? de({}, fe, C.to.state) : fe,
                        force: Te
                    }), V || S)
            } else
                C = O(S, G, !0, y, fe);
            return q(S, G, C),
            C
        }
        )
    }
    function N(A, V) {
        const B = m(A, V);
        return B ? Promise.reject(B) : Promise.resolve()
    }
    function R(A) {
        const V = St.values().next().value;
        return V && typeof V.runWithContext == "function" ? V.runWithContext(A) : A()
    }
    function P(A, V) {
        let B;
        const [G,fe,Te] = rv(A, V);
        B = $s(G.reverse(), "beforeRouteLeave", A, V);
        for (const b of G)
            b.leaveGuards.forEach(S => {
                B.push(an(S, A, V))
            }
            );
        const y = N.bind(null, A, V);
        return B.push(y),
        lt(B).then( () => {
            B = [];
            for (const b of s.list())
                B.push(an(b, A, V));
            return B.push(y),
            lt(B)
        }
        ).then( () => {
            B = $s(fe, "beforeRouteUpdate", A, V);
            for (const b of fe)
                b.updateGuards.forEach(S => {
                    B.push(an(S, A, V))
                }
                );
            return B.push(y),
            lt(B)
        }
        ).then( () => {
            B = [];
            for (const b of Te)
                if (b.beforeEnter)
                    if (kt(b.beforeEnter))
                        for (const S of b.beforeEnter)
                            B.push(an(S, A, V));
                    else
                        B.push(an(b.beforeEnter, A, V));
            return B.push(y),
            lt(B)
        }
        ).then( () => (A.matched.forEach(b => b.enterCallbacks = {}),
        B = $s(Te, "beforeRouteEnter", A, V, R),
        B.push(y),
        lt(B))).then( () => {
            B = [];
            for (const b of i.list())
                B.push(an(b, A, V));
            return B.push(y),
            lt(B)
        }
        ).catch(b => It(b, 8) ? b : Promise.reject(b))
    }
    function q(A, V, B) {
        a.list().forEach(G => R( () => G(A, V, B)))
    }
    function O(A, V, B, G, fe) {
        const Te = m(A, V);
        if (Te)
            return Te;
        const y = V === ut
          , b = jn ? history.state : {};
        B && (G || y ? o.replace(A.fullPath, de({
            scroll: y && b && b.scroll
        }, fe)) : o.push(A.fullPath, fe)),
        l.value = A,
        at(A, V, B, y),
        gt()
    }
    let K;
    function j() {
        K || (K = o.listen( (A, V, B) => {
            if (!Xt.listening)
                return;
            const G = k(A)
              , fe = T(G);
            if (fe) {
                x(de(fe, {
                    replace: !0,
                    force: !0
                }), G).catch(Sr);
                return
            }
            u = G;
            const Te = l.value;
            jn && C_(jl(Te.fullPath, B.delta), ms()),
            P(G, Te).catch(y => It(y, 12) ? y : It(y, 2) ? (x(de(w(y.to), {
                force: !0
            }), G).then(b => {
                It(b, 20) && !B.delta && B.type === jr.pop && o.go(-1, !1)
            }
            ).catch(Sr),
            Promise.reject()) : (B.delta && o.go(-B.delta, !1),
            W(y, G, Te))).then(y => {
                y = y || O(G, Te, !1),
                y && (B.delta && !It(y, 8) ? o.go(-B.delta, !1) : B.type === jr.pop && It(y, 20) && o.go(-1, !1)),
                q(G, Te, y)
            }
            ).catch(Sr)
        }
        ))
    }
    let J = pr(), H = pr(), Z;
    function W(A, V, B) {
        gt(A);
        const G = H.list();
        return G.length ? G.forEach(fe => fe(A, V, B)) : console.error(A),
        Promise.reject(A)
    }
    function ke() {
        return Z && l.value !== ut ? Promise.resolve() : new Promise( (A, V) => {
            J.add([A, V])
        }
        )
    }
    function gt(A) {
        return Z || (Z = !A,
        j(),
        J.list().forEach( ([V,B]) => A ? B(A) : V()),
        J.reset()),
        A
    }
    function at(A, V, B, G) {
        const {scrollBehavior: fe} = e;
        if (!jn || !fe)
            return Promise.resolve();
        const Te = !B && R_(jl(A.fullPath, 0)) || (G || !B) && history.state && history.state.scroll || null;
        return pt().then( () => fe(A, V, Te)).then(y => y && x_(y)).catch(y => W(y, A, V))
    }
    const Le = A => o.go(A);
    let Tt;
    const St = new Set
      , Xt = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: g,
        clearRoutes: t.clearRoutes,
        hasRoute: v,
        getRoutes: p,
        resolve: k,
        options: e,
        push: _,
        replace: E,
        go: Le,
        back: () => Le(-1),
        forward: () => Le(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: H.add,
        isReady: ke,
        install(A) {
            const V = this;
            A.component("RouterLink", X_),
            A.component("RouterView", ld),
            A.config.globalProperties.$router = V,
            Object.defineProperty(A.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ie(l)
            }),
            jn && !Tt && l.value === ut && (Tt = !0,
            _(o.location).catch(fe => {}
            ));
            const B = {};
            for (const fe in ut)
                Object.defineProperty(B, fe, {
                    get: () => l.value[fe],
                    enumerable: !0
                });
            A.provide(gs, V),
            A.provide(ka, Pt(B)),
            A.provide(ki, l);
            const G = A.unmount;
            St.add(A),
            A.unmount = function() {
                St.delete(A),
                St.size < 1 && (u = ut,
                K && K(),
                K = null,
                l.value = ut,
                Tt = !1,
                Z = !1),
                G()
            }
        }
    };
    function lt(A) {
        return A.reduce( (V, B) => V.then( () => R(B)), Promise.resolve())
    }
    return Xt
}
function rv(e, t) {
    const n = []
      , r = []
      , o = []
      , s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
        const a = t.matched[i];
        a && (e.matched.find(u => Zn(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(u => Zn(u, l)) || o.push(l))
    }
    return [n, r, o]
}
function Zw() {
    return Me(gs)
}
function eE(e) {
    return Me(ka)
}
const ov = /(:\w+)\([^)]+\)/g
  , sv = /(:\w+)[?+*]/g
  , iv = /:\w+/g
  , av = (e, t) => t.path.replace(ov, "$1").replace(sv, "$1").replace(iv, n => e.params[n.slice(1)]?.toString() || "")
  , Ti = (e, t) => {
    const n = e.route.matched.find(o => o.components?.default === e.Component.type)
      , r = t ?? n?.meta.key ?? (n && av(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , lv = (e, t) => ({
    default: () => e ? Ne(du, e === !0 ? {} : e, t) : t
});
function Ta(e) {
    return Array.isArray(e) ? e : [e]
}
const js = [{
    name: "index",
    path: "/",
    component: () => ne( () => import("./C8Lexrho.js"), [], import.meta.url)
}, {
    name: "torii",
    path: "/torii",
    component: () => ne( () => import("./BE-4G615.js"), [], import.meta.url)
}, {
    name: "hive",
    path: "/hive",
    component: () => ne( () => import("./CwWu6hMO.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
}, {
    name: "ama-preview",
    path: "/ama/preview",
    component: () => ne( () => import("./CeYZhXiA.js"), [], import.meta.url)
}, {
    name: "clicker-news",
    path: "/clicker/news",
    component: () => ne( () => import("./xtGvwCe_.js"), [], import.meta.url)
}, {
    name: "clicker-chart",
    path: "/clicker/chart",
    component: () => ne( () => import("./XNCJIUnA.js"), __vite__mapDeps([4, 5]), import.meta.url)
}, {
    name: "clicker",
    path: "/clicker",
    component: () => ne( () => import("./BPuP_hXi.js"), __vite__mapDeps([6, 7, 8, 9, 5, 10, 11]), import.meta.url)
}, {
    name: "clicker-manage",
    path: "/clicker/manage",
    component: () => ne( () => import("./ROWTofcR.js"), [], import.meta.url)
}, {
    name: "clicker-search",
    path: "/clicker/search",
    component: () => ne( () => import("./KDdXfVIT.js"), __vite__mapDeps([12, 13, 2]), import.meta.url)
}, {
    name: "contracts",
    path: "/contracts",
    component: () => ne( () => import("./eINxeAT5.js"), [], import.meta.url)
}, {
    name: "clicker-tech-tree",
    path: "/clicker/tech-tree",
    component: () => ne( () => import("./XYblUQ4q.js"), [], import.meta.url)
}, {
    name: "clicker-editor-setId",
    path: "/clicker/editor/:setId()",
    component: () => ne( () => import("./B7s6GHU7.js"), __vite__mapDeps([14, 2, 13, 3, 10]), import.meta.url)
}, {
    name: "contracts-editor-contractId",
    path: "/contracts/editor/:contractId()",
    component: () => ne( () => import("./DbluH_Oc.js").then(e => e._), __vite__mapDeps([15, 7, 1, 16]), import.meta.url)
}]
  , cv = (e, t) => ({
    default: () => e ? Ne(af, e === !0 ? {} : e, t) : t.default?.()
})
  , uv = /(:\w+)\([^)]+\)/g
  , fv = /(:\w+)[?+*]/g
  , dv = /:\w+/g;
function ec(e) {
    const t = e?.meta.key ?? e.path.replace(uv, "$1").replace(fv, "$1").replace(dv, n => e.params[n.slice(1)]?.toString() || "");
    return typeof t == "function" ? t(e) : t
}
function hv(e, t) {
    return e === t || t === ut ? !1 : ec(e) !== ec(t) ? !0 : !e.matched.every( (r, o) => r.components && r.components.default === t.matched[o]?.components?.default)
}
const pv = {
    scrollBehavior(e, t, n) {
        const r = we()
          , o = Ye().options?.scrollBehaviorType ?? "auto";
        if (e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: cd(e.hash),
                behavior: o
            } : !1;
        if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1)
            return !1;
        const i = r._runningTransition ? "page:transition:finish" : "page:loading:end";
        return new Promise(a => {
            if (t === ut) {
                a(tc(e, t, n, o));
                return
            }
            r.hooks.hookOnce(i, () => {
                requestAnimationFrame( () => a(tc(e, t, n, o)))
            }
            )
        }
        )
    }
};
function cd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
function tc(e, t, n, r) {
    if (n)
        return n;
    const o = hv(e, t);
    return e.hash ? {
        el: e.hash,
        top: cd(e.hash),
        behavior: o ? r : "instant"
    } : {
        left: 0,
        top: 0
    }
}
const mv = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , en = {
    ...mv,
    ...pv
}
  , gv = async (e, t) => {
    let n, r;
    if (!e.meta?.validate)
        return;
    const o = ([n,r] = Kn( () => Promise.resolve(e.meta.validate(e))),
    n = await n,
    r(),
    n);
    if (o === !0)
        return;
    const s = fn({
        fatal: !0,
        statusCode: o && o.statusCode || 404,
        statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath),
    s
}
  , yv = async e => {
    let t, n;
    const r = ([t,n] = Kn( () => ba({
        path: e.path
    })),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return Qt(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , _v = [gv, yv]
  , Si = {};
function vv(e, t, n) {
    const {pathname: r, search: o, hash: s} = t
      , i = e.indexOf("#");
    if (i > -1) {
        const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
        let c = s.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        _l(c, "")
    }
    const a = _l(r, e)
      , l = !n || ug(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s
}
const bv = mt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        let t, n, r = ar().app.baseURL;
        const o = en.history?.(r) ?? M_(r)
          , s = en.routes ? ([t,n] = Kn( () => en.routes(js)),
        t = await t,
        n(),
        t ?? js) : js;
        let i;
        const a = nv({
            ...en,
            scrollBehavior: (v, k, w) => {
                if (k === ut) {
                    i = w;
                    return
                }
                if (en.scrollBehavior) {
                    if (a.options.scrollBehavior = en.scrollBehavior,
                    "scrollRestoration" in window.history) {
                        const m = a.beforeEach( () => {
                            m(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return en.scrollBehavior(v, ut, i || w)
                }
            }
            ,
            history: o,
            routes: s
        });
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(a);
        const l = xe(a.currentRoute.value);
        a.afterEach( (v, k) => {
            l.value = k
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const u = vv(r, window.location, e.payload.path)
          , c = xe(a.currentRoute.value)
          , f = () => {
            c.value = a.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        a.afterEach( (v, k) => {
            v.matched[v.matched.length - 1]?.components?.default === k.matched[k.matched.length - 1]?.components?.default && f()
        }
        );
        const d = {};
        for (const v in c.value)
            Object.defineProperty(d, v, {
                get: () => c.value[v],
                enumerable: !0
            });
        e._route = Pt(d),
        e._middleware ||= {
            global: [],
            named: {}
        };
        const h = hs();
        a.afterEach(async (v, k, w) => {
            delete e._processingMiddleware,
            !e.isHydrating && h.value && await e.runWithContext(ly),
            w && await e.callHook("page:loading:end")
        }
        );
        try {
            [t,n] = Kn( () => a.isReady()),
            await t,
            n()
        } catch (v) {
            [t,n] = Kn( () => e.runWithContext( () => vn(v))),
            await t,
            n()
        }
        const g = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
        f();
        const p = e.payload.state._layout;
        return a.beforeEach(async (v, k) => {
            await e.callHook("page:loading:start"),
            v.meta = ot(v.meta),
            e.isHydrating && p && !Mt(v.meta.layout) && (v.meta.layout = p),
            e._processingMiddleware = !0;
            {
                const w = new Set([..._v, ...e._middleware.global]);
                for (const m of v.matched) {
                    const _ = m.meta.middleware;
                    if (_)
                        for (const E of Ta(_))
                            w.add(E)
                }
                {
                    const m = await e.runWithContext( () => ba({
                        path: v.path
                    }));
                    if (m.appMiddleware)
                        for (const _ in m.appMiddleware)
                            m.appMiddleware[_] ? w.add(_) : w.delete(_)
                }
                for (const m of w) {
                    const _ = typeof m == "string" ? e._middleware.named[m] || await Si[m]?.().then(E => E.default || E) : m;
                    if (!_)
                        throw new Error(`Unknown route middleware: '${m}'.`);
                    try {
                        const E = await e.runWithContext( () => _(v, k));
                        if (!e.payload.serverRendered && e.isHydrating && (E === !1 || E instanceof Error)) {
                            const T = E || fn({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${u}`
                            });
                            return await e.runWithContext( () => vn(T)),
                            !1
                        }
                        if (E === !0)
                            continue;
                        if (E === !1)
                            return E;
                        if (E)
                            return Wf(E) && E.fatal && await e.runWithContext( () => vn(E)),
                            E
                    } catch (E) {
                        const T = fn(E);
                        return T.fatal && await e.runWithContext( () => vn(T)),
                        T
                    }
                }
            }
        }
        ),
        a.onError(async () => {
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        a.afterEach(v => {
            if (v.matched.length === 0)
                return e.runWithContext( () => vn(fn({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${v.fullPath}`,
                    data: {
                        path: v.fullPath
                    }
                })))
        }
        ),
        e.hooks.hookOnce("app:created", async () => {
            try {
                "name" in g && (g.name = void 0),
                await a.replace({
                    ...g,
                    force: !0
                }),
                a.options.scrollBehavior = en.scrollBehavior
            } catch (v) {
                await e.runWithContext( () => vn(v))
            }
        }
        ),
        {
            provide: {
                router: a
            }
        }
    }
})
  , xi = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout( () => {
        e(n)
    }
    , 1)
}
)
  , wv = globalThis.cancelIdleCallback || (e => {
    clearTimeout(e)
}
)
  , ys = e => {
    const t = we();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
        xi( () => e())
    }
    ) : xi( () => e())
}
  , Ev = mt({
    name: "nuxt:payload",
    setup(e) {
        const t = new Set;
        Ye().beforeResolve(async (n, r) => {
            if (n.path === r.path)
                return;
            const o = await Dl(n.path);
            if (o) {
                for (const s of t)
                    delete e.static.data[s];
                for (const s in o.data)
                    s in e.static.data || t.add(s),
                    e.static.data[s] = o.data[s]
            }
        }
        ),
        ys( () => {
            e.hooks.hook("link:prefetch", async n => {
                const {hostname: r} = new URL(n,window.location.href);
                r === window.location.hostname && await Dl(n).catch( () => {
                    console.warn("[nuxt] Error preloading payload for", n)
                }
                )
            }
            ),
            navigator.connection?.effectiveType !== "slow-2g" && setTimeout(ps, 1e3)
        }
        )
    }
})
  , kv = mt( () => {
    const e = Ye();
    ys( () => {
        e.beforeResolve(async () => {
            await new Promise(t => {
                setTimeout(t, 100),
                requestAnimationFrame( () => {
                    setTimeout(t, 0)
                }
                )
            }
            )
        }
        )
    }
    )
}
)
  , Tv = mt(e => {
    let t;
    async function n() {
        let r;
        try {
            r = await ps()
        } catch (o) {
            const s = o;
            if (!("status" in s && (s.status === 404 || s.status === 403)))
                throw s
        }
        t && clearTimeout(t),
        t = setTimeout(n, Sl);
        try {
            const o = await $fetch(ma("builds/latest.json") + `?${Date.now()}`);
            o.id !== r?.id && (e.hooks.callHook("app:manifest:update", o),
            t && clearTimeout(t))
        } catch {}
    }
    ys( () => {
        t = setTimeout(n, Sl)
    }
    )
}
);
function Sv(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = jo(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || n?.path !== t || n?.expires < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: we().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const xv = mt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Ye()
          , n = ar()
          , r = new Set;
        t.beforeEach( () => {
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: s}) => {
            r.add(s)
        }
        );
        function o(s) {
            const i = fs(n.app.baseURL, s.fullPath);
            Sv({
                path: i,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", () => {
            t.beforeResolve(o)
        }
        ),
        t.onError( (s, i) => {
            r.has(s) && o(i)
        }
        )
    }
})
  , Cv = Ee( () => ne( () => import("./s1NVb3Eb.js"), __vite__mapDeps([17, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Rv = Ee( () => ne( () => import("./CMylc2fj.js"), __vite__mapDeps([19, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Av = Ee( () => ne( () => import("./pDuR_pqH.js"), __vite__mapDeps([20, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Pv = Ee( () => ne( () => import("./CS2C5Di7.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Ov = Ee( () => ne( () => import("./xtExtWTm.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Mv = Ee( () => ne( () => import("./lPp7mbH6.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Lv = Ee( () => ne( () => import("./CcaoSEl-.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Iv = Ee( () => ne( () => import("./DPqacczD.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Nv = Ee( () => ne( () => import("./zCt05qXx.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Dv = Ee( () => ne( () => import("./DJpEn3_2.js"), __vite__mapDeps([21, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Hv = Ee( () => ne( () => import("./Cq8AIF07.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , $v = Ee( () => ne( () => import("./6bP3mW5m.js"), __vite__mapDeps([22, 18]), import.meta.url).then(e => e.default || e.default || e))
  , jv = Ee( () => ne( () => import("./D1Zt9Eax.js"), __vite__mapDeps([23, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Fv = Ee( () => ne( () => import("./CUb4ZiLZ.js"), __vite__mapDeps([24, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Bv = Ee( () => ne( () => import("./CHMaNiXP.js"), __vite__mapDeps([25, 26]), import.meta.url).then(e => e.default || e.default || e))
  , Uv = Ee( () => ne( () => import("./ChN1Zm1n.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Vv = Ee( () => ne( () => import("./DWzMaTp5.js"), __vite__mapDeps([27, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Wv = Ee( () => ne( () => import("./DUcUzu8l.js"), __vite__mapDeps([28, 18]), import.meta.url).then(e => e.default || e.default || e))
  , zv = Ee( () => ne( () => import("./BggMB-82.js"), __vite__mapDeps([29, 18]), import.meta.url).then(e => e.default || e.default || e))
  , qv = Ee( () => ne( () => import("./CXR7IpPr.js"), __vite__mapDeps([30, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Kv = Ee( () => ne( () => import("./C6Qy8QyI.js"), __vite__mapDeps([31, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Gv = Ee( () => ne( () => import("./w0UZ36yD.js"), __vite__mapDeps([32, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Yv = Ee( () => ne( () => import("./-SNeWsBY.js"), __vite__mapDeps([33, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Jv = Ee( () => ne( () => import("./BaXHbvcu.js"), __vite__mapDeps([34, 18]), import.meta.url).then(e => e.default || e.default || e))
  , Qv = Ee( () => ne( () => import("./BpxCNpq2.js"), [], import.meta.url).then(e => e.default || e.default || e))
  , Xv = [["ProseBlockquote", Cv], ["ProseCode", Rv], ["ProseEm", Av], ["ProseH1", Pv], ["ProseH2", Ov], ["ProseH3", Mv], ["ProseH4", Lv], ["ProseH5", Iv], ["ProseH6", Nv], ["ProseHr", Dv], ["ProseImg", Hv], ["ProseLi", $v], ["ProseOl", jv], ["ProseP", Fv], ["ProsePre", Bv], ["ProseScript", Uv], ["ProseStrong", Vv], ["ProseTable", Wv], ["ProseTbody", zv], ["ProseTd", qv], ["ProseTh", Kv], ["ProseThead", Gv], ["ProseTr", Yv], ["ProseUl", Jv], ["Icon", Qv]]
  , Zv = mt({
    name: "nuxt:global-components",
    setup(e) {
        for (const [t,n] of Xv)
            e.vueApp.component(t, n),
            e.vueApp.component("Lazy" + t, n)
    }
})
  , ao = {};
function eb(e) {
    if (e?.__asyncLoader && !e.__asyncResolved)
        return e.__asyncLoader()
}
async function ud(e, t=Ye()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded ||= new Set,
    t._routePreloaded.has(n)))
        return;
    const o = t._preloadPromises ||= [];
    if (o.length > 4)
        return Promise.all(o).then( () => ud(e, t));
    t._routePreloaded.add(n);
    const s = r.map(i => i.components?.default).filter(i => typeof i == "function");
    for (const i of s) {
        const a = Promise.resolve(i()).catch( () => {}
        ).finally( () => o.splice(o.indexOf(a)));
        o.push(a)
    }
    await Promise.all(o)
}
const tb = mt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Ye();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                const r = n?.meta?.layout;
                r && typeof ao[r] == "function" && await ao[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n => {
            if (Qt(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const o = r.meta.layout;
            let s = Ta(r.meta.middleware);
            s = s.filter(i => typeof i == "string");
            for (const i of s)
                typeof Si[i] == "function" && Si[i]();
            typeof o == "string" && o in ao && eb(ao[o])
        }
        )
    }
});
var lo = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
const nb = {
    ui: {
        button: {
            slots: {
                base: "border-2 border-stone-900",
                variants: {
                    primary: "text-white"
                }
            }
        },
        drawer: {
            slots: {
                overlay: "fixed inset-0 backdrop-blur-sm"
            }
        }
    }
}
  , rb = {
    nuxt: {},
    ui: {
        colors: {
            primary: "green",
            secondary: "blue",
            success: "green",
            info: "blue",
            warning: "yellow",
            error: "red",
            neutral: "slate"
        },
        icons: {
            arrowLeft: "i-lucide-arrow-left",
            arrowRight: "i-lucide-arrow-right",
            check: "i-lucide-check",
            chevronDoubleLeft: "i-lucide-chevrons-left",
            chevronDoubleRight: "i-lucide-chevrons-right",
            chevronDown: "i-lucide-chevron-down",
            chevronLeft: "i-lucide-chevron-left",
            chevronRight: "i-lucide-chevron-right",
            chevronUp: "i-lucide-chevron-up",
            close: "i-lucide-x",
            ellipsis: "i-lucide-ellipsis",
            external: "i-lucide-arrow-up-right",
            file: "i-lucide-file",
            folder: "i-lucide-folder",
            folderOpen: "i-lucide-folder-open",
            loading: "i-lucide-loader-circle",
            minus: "i-lucide-minus",
            plus: "i-lucide-plus",
            search: "i-lucide-search",
            upload: "i-lucide-upload"
        }
    },
    icon: {
        provider: "server",
        class: "",
        aliases: {},
        iconifyApiEndpoint: "https://api.iconify.design",
        localApiEndpoint: "/api/_nuxt_icon",
        fallbackToApi: !0,
        cssSelectorPrefix: "i-",
        cssWherePseudo: !0,
        cssLayer: "components",
        mode: "css",
        attrs: {
            "aria-hidden": !0
        },
        collections: ["academicons", "akar-icons", "ant-design", "arcticons", "basil", "bi", "bitcoin-icons", "bpmn", "brandico", "bx", "bxl", "bxs", "bytesize", "carbon", "catppuccin", "cbi", "charm", "ci", "cib", "cif", "cil", "circle-flags", "circum", "clarity", "codicon", "covid", "cryptocurrency", "cryptocurrency-color", "dashicons", "devicon", "devicon-plain", "ei", "el", "emojione", "emojione-monotone", "emojione-v1", "entypo", "entypo-social", "eos-icons", "ep", "et", "eva", "f7", "fa", "fa-brands", "fa-regular", "fa-solid", "fa6-brands", "fa6-regular", "fa6-solid", "fad", "fe", "feather", "file-icons", "flag", "flagpack", "flat-color-icons", "flat-ui", "flowbite", "fluent", "fluent-emoji", "fluent-emoji-flat", "fluent-emoji-high-contrast", "fluent-mdl2", "fontelico", "fontisto", "formkit", "foundation", "fxemoji", "gala", "game-icons", "geo", "gg", "gis", "gravity-ui", "gridicons", "grommet-icons", "guidance", "healthicons", "heroicons", "heroicons-outline", "heroicons-solid", "hugeicons", "humbleicons", "ic", "icomoon-free", "icon-park", "icon-park-outline", "icon-park-solid", "icon-park-twotone", "iconamoon", "iconoir", "icons8", "il", "ion", "iwwa", "jam", "la", "lets-icons", "line-md", "logos", "ls", "lucide", "lucide-lab", "mage", "majesticons", "maki", "map", "marketeq", "material-symbols", "material-symbols-light", "mdi", "mdi-light", "medical-icon", "memory", "meteocons", "mi", "mingcute", "mono-icons", "mynaui", "nimbus", "nonicons", "noto", "noto-v1", "octicon", "oi", "ooui", "openmoji", "oui", "pajamas", "pepicons", "pepicons-pencil", "pepicons-pop", "pepicons-print", "ph", "pixelarticons", "prime", "ps", "quill", "radix-icons", "raphael", "ri", "rivet-icons", "si-glyph", "simple-icons", "simple-line-icons", "skill-icons", "solar", "streamline", "streamline-emojis", "subway", "svg-spinners", "system-uicons", "tabler", "tdesign", "teenyicons", "token", "token-branded", "topcoat", "twemoji", "typcn", "uil", "uim", "uis", "uit", "uiw", "unjs", "vaadin", "vs", "vscode-icons", "websymbol", "weui", "whh", "wi", "wpf", "zmdi", "zondicons"],
        fetchTimeout: 1500
    }
}
  , ob = ey(nb, rb);
function fd() {
    const e = we();
    return e._appConfig ||= ot(ob),
    e._appConfig
}
const sb = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function ib(e, t) {
    return e in lo && typeof lo[e] == "object" && t in lo[e] ? lo[e][t] : ""
}
function ab(e, t) {
    return `${sb.map(n => `--ui-color-${e}-${n}: var(--color-${t === "neutral" ? "old-neutral" : t}-${n}, ${ib(t, n)});`).join(`
  `)}`
}
function nc(e, t) {
    return `--ui-${e}: var(--ui-color-${e}-${t});`
}
const lb = mt( () => {
    const e = fd()
      , t = we()
      , n = le( () => {
        const {neutral: o, ...s} = e.ui.colors;
        return `@layer base {
  :root {
  ${Object.entries(e.ui.colors).map( ([i,a]) => ab(i, a)).join(`
  `)}
  }
  :root, .light {
  ${Object.keys(s).map(i => nc(i, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(s).map(i => nc(i, 400)).join(`
  `)}
  }
}`
    }
    )
      , r = {
        style: [{
            innerHTML: () => n.value,
            tagPriority: -2,
            id: "nuxt-ui-colors"
        }]
    };
    if (t.isHydrating && !t.payload.serverRendered) {
        const o = document.createElement("style");
        o.innerHTML = n.value,
        o.setAttribute("data-nuxt-ui-colors", ""),
        document.head.appendChild(o),
        r.script = [{
            innerHTML: "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"
        }]
    }
    va(r)
}
)
  , cb = "__NUXT_COLOR_MODE__"
  , Fs = "nuxt-color-mode"
  , ub = "localStorage"
  , fb = "$s";
function db(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n,r] = e;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = fb + n
      , s = we()
      , i = Wr(s.payload.state, o);
    if (i.value === void 0 && r) {
        const a = r();
        if (Re(a))
            return s.payload.state[o] = a,
            a;
        i.value = a
    }
    return i
}
const Nt = window[cb] || {}
  , hb = mt(e => {
    const t = db("color-mode", () => ot({
        preference: Nt.preference,
        value: Nt.value,
        unknown: !1,
        forced: !1
    })).value;
    Ye().afterEach(s => {
        const i = s.meta.colorMode;
        i && i !== "system" ? (t.value = i,
        t.forced = !0) : (i === "system" && console.warn("You cannot force the colorMode to system at the page level."),
        t.forced = !1,
        t.value = t.preference === "system" ? Nt.getColorScheme() : t.preference)
    }
    );
    let n;
    function r() {
        n || !window.matchMedia || (n = window.matchMedia("(prefers-color-scheme: dark)"),
        n.addEventListener("change", () => {
            !t.forced && t.preference === "system" && (t.value = Nt.getColorScheme())
        }
        ))
    }
    function o(s, i) {
        switch (s) {
        case "cookie":
            window.document.cookie = Fs + "=" + i;
            break;
        case "sessionStorage":
            window.sessionStorage?.setItem(Fs, i);
            break;
        case "localStorage":
        default:
            window.localStorage?.setItem(Fs, i)
        }
    }
    Se( () => t.preference, s => {
        t.forced || (s === "system" ? (t.value = Nt.getColorScheme(),
        r()) : t.value = s,
        o(ub, s))
    }
    , {
        immediate: !0
    }),
    Se( () => t.value, (s, i) => {
        let a;
        a = window.document.createElement("style"),
        a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
        window.document.head.appendChild(a),
        Nt.removeColorScheme(i),
        Nt.addColorScheme(s),
        window.getComputedStyle(a).opacity,
        document.head.removeChild(a)
    }
    ),
    t.preference === "system" && r(),
    e.hook("app:mounted", () => {
        t.unknown && (t.preference = Nt.preference,
        t.value = Nt.value,
        t.unknown = !1)
    }
    ),
    e.provide("colorMode", t)
}
)
  , dd = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , Gr = (e, t, n, r="") => {
    const o = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (o.length < 2 || o.length > 3)
            return null;
        r = o.shift().slice(1)
    }
    if (o.length > 3 || !o.length)
        return null;
    if (o.length > 1) {
        const a = o.pop()
          , l = o.pop()
          , u = {
            provider: o.length > 0 ? o[0] : r,
            prefix: l,
            name: a
        };
        return t && !bo(u) ? null : u
    }
    const s = o[0]
      , i = s.split("-");
    if (i.length > 1) {
        const a = {
            provider: r,
            prefix: i.shift(),
            name: i.join("-")
        };
        return t && !bo(a) ? null : a
    }
    if (n && r === "") {
        const a = {
            provider: r,
            prefix: "",
            name: s
        };
        return t && !bo(a, n) ? null : a
    }
    return null
}
  , bo = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1
  , hd = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , Wo = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , lr = Object.freeze({
    ...hd,
    ...Wo
})
  , Ci = Object.freeze({
    ...lr,
    body: "",
    hidden: !1
});
function pb(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function rc(e, t) {
    const n = pb(e, t);
    for (const r in Ci)
        r in Wo ? r in e && !(r in n) && (n[r] = Wo[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}
function mb(e, t) {
    const n = e.icons
      , r = e.aliases || Object.create(null)
      , o = Object.create(null);
    function s(i) {
        if (n[i])
            return o[i] = [];
        if (!(i in o)) {
            o[i] = null;
            const a = r[i] && r[i].parent
              , l = a && s(a);
            l && (o[i] = [a].concat(l))
        }
        return o[i]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(s),
    o
}
function gb(e, t, n) {
    const r = e.icons
      , o = e.aliases || Object.create(null);
    let s = {};
    function i(a) {
        s = rc(r[a] || o[a], s)
    }
    return i(t),
    n.forEach(i),
    rc(e, s)
}
function pd(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object")
        return n;
    e.not_found instanceof Array && e.not_found.forEach(o => {
        t(o, null),
        n.push(o)
    }
    );
    const r = mb(e);
    for (const o in r) {
        const s = r[o];
        s && (t(o, gb(e, o, s)),
        n.push(o))
    }
    return n
}
const yb = {
    provider: "",
    aliases: {},
    not_found: {},
    ...hd
};
function Bs(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n])
            return !1;
    return !0
}
function md(e) {
    if (typeof e != "object" || e === null)
        return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Bs(e, yb))
        return null;
    const n = t.icons;
    for (const o in n) {
        const s = n[o];
        if (!o || typeof s.body != "string" || !Bs(s, Ci))
            return null
    }
    const r = t.aliases || Object.create(null);
    for (const o in r) {
        const s = r[o]
          , i = s.parent;
        if (!o || typeof i != "string" || !n[i] && !r[i] || !Bs(s, Ci))
            return null
    }
    return t
}
const oc = Object.create(null);
function _b(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}
function An(e, t) {
    const n = oc[e] || (oc[e] = Object.create(null));
    return n[t] || (n[t] = _b(e, t))
}
function gd(e, t) {
    return md(t) ? pd(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }
    ) : []
}
function vb(e, t, n) {
    try {
        if (typeof n.body == "string")
            return e.icons[t] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
let Fr = !1;
function yd(e) {
    return typeof e == "boolean" && (Fr = e),
    Fr
}
function Sa(e) {
    const t = typeof e == "string" ? Gr(e, !0, Fr) : e;
    if (t) {
        const n = An(t.provider, t.prefix)
          , r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function bb(e, t) {
    const n = Gr(e, !0, Fr);
    if (!n)
        return !1;
    const r = An(n.provider, n.prefix);
    return t ? vb(r, n.name, t) : (r.missing.add(n.name),
    !0)
}
function wb(e, t) {
    if (typeof e != "object")
        return !1;
    if (typeof t != "string" && (t = e.provider || ""),
    Fr && !t && !e.prefix) {
        let o = !1;
        return md(e) && (e.prefix = "",
        pd(e, (s, i) => {
            bb(s, i) && (o = !0)
        }
        )),
        o
    }
    const n = e.prefix;
    if (!bo({
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = An(t, n);
    return !!gd(r, e)
}
function tE(e) {
    const t = Sa(e);
    return t && {
        ...lr,
        ...t
    }
}
const _d = Object.freeze({
    width: null,
    height: null
})
  , vd = Object.freeze({
    ..._d,
    ...Wo
})
  , Eb = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , kb = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function sc(e, t, n) {
    if (t === 1)
        return e;
    if (n = n || 100,
    typeof e == "number")
        return Math.ceil(e * t * n) / n;
    if (typeof e != "string")
        return e;
    const r = e.split(Eb);
    if (r === null || !r.length)
        return e;
    const o = [];
    let s = r.shift()
      , i = kb.test(s);
    for (; ; ) {
        if (i) {
            const a = parseFloat(s);
            isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n)
        } else
            o.push(s);
        if (s = r.shift(),
        s === void 0)
            return o.join("");
        i = !i
    }
}
function Tb(e, t="defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0; ) {
        const o = e.indexOf(">", r)
          , s = e.indexOf("</" + t);
        if (o === -1 || s === -1)
            break;
        const i = e.indexOf(">", s);
        if (i === -1)
            break;
        n += e.slice(o + 1, s).trim(),
        e = e.slice(0, r).trim() + e.slice(i + 1)
    }
    return {
        defs: n,
        content: e
    }
}
function Sb(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}
function xb(e, t, n) {
    const r = Tb(e);
    return Sb(r.defs, t + r.content + n)
}
const Cb = e => e === "unset" || e === "undefined" || e === "none";
function Rb(e, t) {
    const n = {
        ...lr,
        ...e
    }
      , r = {
        ...vd,
        ...t
    }
      , o = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let s = n.body;
    [n, r].forEach(p => {
        const v = []
          , k = p.hFlip
          , w = p.vFlip;
        let m = p.rotate;
        k ? w ? m += 2 : (v.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"),
        v.push("scale(-1 1)"),
        o.top = o.left = 0) : w && (v.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"),
        v.push("scale(1 -1)"),
        o.top = o.left = 0);
        let _;
        switch (m < 0 && (m -= Math.floor(m / 4) * 4),
        m = m % 4,
        m) {
        case 1:
            _ = o.height / 2 + o.top,
            v.unshift("rotate(90 " + _.toString() + " " + _.toString() + ")");
            break;
        case 2:
            v.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
            break;
        case 3:
            _ = o.width / 2 + o.left,
            v.unshift("rotate(-90 " + _.toString() + " " + _.toString() + ")");
            break
        }
        m % 2 === 1 && (o.left !== o.top && (_ = o.left,
        o.left = o.top,
        o.top = _),
        o.width !== o.height && (_ = o.width,
        o.width = o.height,
        o.height = _)),
        v.length && (s = xb(s, '<g transform="' + v.join(" ") + '">', "</g>"))
    }
    );
    const i = r.width
      , a = r.height
      , l = o.width
      , u = o.height;
    let c, f;
    i === null ? (f = a === null ? "1em" : a === "auto" ? u : a,
    c = sc(f, l / u)) : (c = i === "auto" ? l : i,
    f = a === null ? sc(c, u / l) : a === "auto" ? u : a);
    const d = {}
      , h = (p, v) => {
        Cb(v) || (d[p] = v.toString())
    }
    ;
    h("width", c),
    h("height", f);
    const g = [o.left, o.top, l, u];
    return d.viewBox = g.join(" "),
    {
        attributes: d,
        viewBox: g,
        body: s
    }
}
const Ab = /\sid="(\S+)"/g
  , Pb = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Ob = 0;
function Mb(e, t=Pb) {
    const n = [];
    let r;
    for (; r = Ab.exec(e); )
        n.push(r[1]);
    if (!n.length)
        return e;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(s => {
        const i = typeof t == "function" ? t(s) : t + (Ob++).toString()
          , a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])',"g"), "$1" + i + o + "$3")
    }
    ),
    e = e.replace(new RegExp(o,"g"), ""),
    e
}
const Ri = Object.create(null);
function bd(e, t) {
    Ri[e] = t
}
function Ai(e) {
    return Ri[e] || Ri[""]
}
function xa(e) {
    let t;
    if (typeof e.resources == "string")
        t = [e.resources];
    else if (t = e.resources,
    !(t instanceof Array) || !t.length)
        return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const _s = Object.create(null)
  , mr = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , wo = [];
for (; mr.length > 0; )
    mr.length === 1 || Math.random() > .5 ? wo.push(mr.shift()) : wo.push(mr.pop());
_s[""] = xa({
    resources: ["https://api.iconify.design"].concat(wo)
});
function wd(e, t) {
    const n = xa(t);
    return n === null ? !1 : (_s[e] = n,
    !0)
}
function vs(e) {
    return _s[e]
}
function Lb() {
    return Object.keys(_s)
}
const Ib = () => {
    let e;
    try {
        if (e = fetch,
        typeof e == "function")
            return e
    } catch {}
}
;
let zo = Ib();
function Nb(e) {
    zo = e
}
function Db() {
    return zo
}
function Hb(e, t) {
    const n = vs(e);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let o = 0;
        n.resources.forEach(i => {
            o = Math.max(o, i.length)
        }
        );
        const s = t + ".json?icons=";
        r = n.maxURL - o - n.path.length - s.length
    }
    return r
}
function $b(e) {
    return e === 404
}
const jb = (e, t, n) => {
    const r = []
      , o = Hb(e, t)
      , s = "icons";
    let i = {
        type: s,
        provider: e,
        prefix: t,
        icons: []
    }
      , a = 0;
    return n.forEach( (l, u) => {
        a += l.length + 1,
        a >= o && u > 0 && (r.push(i),
        i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        },
        a = l.length),
        i.icons.push(l)
    }
    ),
    r.push(i),
    r
}
;
function Fb(e) {
    if (typeof e == "string") {
        const t = vs(e);
        if (t)
            return t.path
    }
    return "/"
}
const Bb = (e, t, n) => {
    if (!zo) {
        n("abort", 424);
        return
    }
    let r = Fb(t.provider);
    switch (t.type) {
    case "icons":
        {
            const s = t.prefix
              , a = t.icons.join(",")
              , l = new URLSearchParams({
                icons: a
            });
            r += s + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const s = t.uri;
            r += s.slice(0, 1) === "/" ? s.slice(1) : s;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let o = 503;
    zo(e + r).then(s => {
        const i = s.status;
        if (i !== 200) {
            setTimeout( () => {
                n($b(i) ? "abort" : "next", i)
            }
            );
            return
        }
        return o = 501,
        s.json()
    }
    ).then(s => {
        if (typeof s != "object" || s === null) {
            setTimeout( () => {
                s === 404 ? n("abort", s) : n("next", o)
            }
            );
            return
        }
        setTimeout( () => {
            n("success", s)
        }
        )
    }
    ).catch( () => {
        n("next", o)
    }
    )
}
  , Ub = {
    prepare: jb,
    send: Bb
};
function Vb(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    e.sort( (o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(o => {
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
            return;
        r = o;
        const s = o.provider
          , i = o.prefix
          , a = o.name
          , l = n[s] || (n[s] = Object.create(null))
          , u = l[i] || (l[i] = An(s, i));
        let c;
        a in u.icons ? c = t.loaded : i === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
        const f = {
            provider: s,
            prefix: i,
            name: a
        };
        c.push(f)
    }
    ),
    t
}
function Ed(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o => o.id !== t))
    }
    )
}
function Wb(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
    setTimeout( () => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length)
            return;
        let n = !1;
        const r = e.provider
          , o = e.prefix;
        t.forEach(s => {
            const i = s.icons
              , a = i.pending.length;
            i.pending = i.pending.filter(l => {
                if (l.prefix !== o)
                    return !0;
                const u = l.name;
                if (e.icons[u])
                    i.loaded.push({
                        provider: r,
                        prefix: o,
                        name: u
                    });
                else if (e.missing.has(u))
                    i.missing.push({
                        provider: r,
                        prefix: o,
                        name: u
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            i.pending.length !== a && (n || Ed([e], s.id),
            s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort))
        }
        )
    }
    ))
}
let zb = 0;
function qb(e, t, n) {
    const r = zb++
      , o = Ed.bind(null, n, r);
    if (!t.pending.length)
        return o;
    const s = {
        id: r,
        icons: t,
        callback: e,
        abort: o
    };
    return n.forEach(i => {
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s)
    }
    ),
    o
}
function Kb(e, t=!0, n=!1) {
    const r = [];
    return e.forEach(o => {
        const s = typeof o == "string" ? Gr(o, t, n) : o;
        s && r.push(s)
    }
    ),
    r
}
var Gb = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function Yb(e, t, n, r) {
    const o = e.resources.length
      , s = e.random ? Math.floor(Math.random() * o) : e.index;
    let i;
    if (e.random) {
        let T = e.resources.slice(0);
        for (i = []; T.length > 1; ) {
            const x = Math.floor(Math.random() * T.length);
            i.push(T[x]),
            T = T.slice(0, x).concat(T.slice(x + 1))
        }
        i = i.concat(T)
    } else
        i = e.resources.slice(s).concat(e.resources.slice(0, s));
    const a = Date.now();
    let l = "pending", u = 0, c, f = null, d = [], h = [];
    typeof r == "function" && h.push(r);
    function g() {
        f && (clearTimeout(f),
        f = null)
    }
    function p() {
        l === "pending" && (l = "aborted"),
        g(),
        d.forEach(T => {
            T.status === "pending" && (T.status = "aborted")
        }
        ),
        d = []
    }
    function v(T, x) {
        x && (h = []),
        typeof T == "function" && h.push(T)
    }
    function k() {
        return {
            startTime: a,
            payload: t,
            status: l,
            queriesSent: u,
            queriesPending: d.length,
            subscribe: v,
            abort: p
        }
    }
    function w() {
        l = "failed",
        h.forEach(T => {
            T(void 0, c)
        }
        )
    }
    function m() {
        d.forEach(T => {
            T.status === "pending" && (T.status = "aborted")
        }
        ),
        d = []
    }
    function _(T, x, N) {
        const R = x !== "success";
        switch (d = d.filter(P => P !== T),
        l) {
        case "pending":
            break;
        case "failed":
            if (R || !e.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (x === "abort") {
            c = N,
            w();
            return
        }
        if (R) {
            c = N,
            d.length || (i.length ? E() : w());
            return
        }
        if (g(),
        m(),
        !e.random) {
            const P = e.resources.indexOf(T.resource);
            P !== -1 && P !== e.index && (e.index = P)
        }
        l = "completed",
        h.forEach(P => {
            P(N)
        }
        )
    }
    function E() {
        if (l !== "pending")
            return;
        g();
        const T = i.shift();
        if (T === void 0) {
            if (d.length) {
                f = setTimeout( () => {
                    g(),
                    l === "pending" && (m(),
                    w())
                }
                , e.timeout);
                return
            }
            w();
            return
        }
        const x = {
            status: "pending",
            resource: T,
            callback: (N, R) => {
                _(x, N, R)
            }
        };
        d.push(x),
        u++,
        f = setTimeout(E, e.rotate),
        n(T, t, x.callback)
    }
    return setTimeout(E),
    k
}
function kd(e) {
    const t = {
        ...Gb,
        ...e
    };
    let n = [];
    function r() {
        n = n.filter(a => a().status === "pending")
    }
    function o(a, l, u) {
        const c = Yb(t, a, l, (f, d) => {
            r(),
            u && u(f, d)
        }
        );
        return n.push(c),
        c
    }
    function s(a) {
        return n.find(l => a(l)) || null
    }
    return {
        query: o,
        find: s,
        setIndex: a => {
            t.index = a
        }
        ,
        getIndex: () => t.index,
        cleanup: r
    }
}
function ic() {}
const Us = Object.create(null);
function Jb(e) {
    if (!Us[e]) {
        const t = vs(e);
        if (!t)
            return;
        const n = kd(t)
          , r = {
            config: t,
            redundancy: n
        };
        Us[e] = r
    }
    return Us[e]
}
function Td(e, t, n) {
    let r, o;
    if (typeof e == "string") {
        const s = Ai(e);
        if (!s)
            return n(void 0, 424),
            ic;
        o = s.send;
        const i = Jb(e);
        i && (r = i.redundancy)
    } else {
        const s = xa(e);
        if (s) {
            r = kd(s);
            const i = e.resources ? e.resources[0] : ""
              , a = Ai(i);
            a && (o = a.send)
        }
    }
    return !r || !o ? (n(void 0, 424),
    ic) : r.query(t, o, n)().abort
}
function ac() {}
function Qb(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
    setTimeout( () => {
        e.iconsLoaderFlag = !1,
        Wb(e)
    }
    ))
}
function Xb(e) {
    const t = []
      , n = [];
    return e.forEach(r => {
        (r.match(dd) ? t : n).push(r)
    }
    ),
    {
        valid: t,
        invalid: n
    }
}
function gr(e, t, n) {
    function r() {
        const o = e.pendingIcons;
        t.forEach(s => {
            o && o.delete(s),
            e.icons[s] || e.missing.add(s)
        }
        )
    }
    if (n && typeof n == "object")
        try {
            if (!gd(e, n).length) {
                r();
                return
            }
        } catch (o) {
            console.error(o)
        }
    r(),
    Qb(e)
}
function lc(e, t) {
    e instanceof Promise ? e.then(n => {
        t(n)
    }
    ).catch( () => {
        t(null)
    }
    ) : t(e)
}
function Zb(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t,
    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
    setTimeout( () => {
        e.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = e
          , o = e.iconsToLoad;
        if (delete e.iconsToLoad,
        !o || !o.length)
            return;
        const s = e.loadIcon;
        if (e.loadIcons && (o.length > 1 || !s)) {
            lc(e.loadIcons(o, r, n), c => {
                gr(e, o, c)
            }
            );
            return
        }
        if (s) {
            o.forEach(c => {
                const f = s(c, r, n);
                lc(f, d => {
                    const h = d ? {
                        prefix: r,
                        icons: {
                            [c]: d
                        }
                    } : null;
                    gr(e, [c], h)
                }
                )
            }
            );
            return
        }
        const {valid: i, invalid: a} = Xb(o);
        if (a.length && gr(e, a, null),
        !i.length)
            return;
        const l = r.match(dd) ? Ai(n) : null;
        if (!l) {
            gr(e, i, null);
            return
        }
        l.prepare(n, r, i).forEach(c => {
            Td(n, c, f => {
                gr(e, c.icons, f)
            }
            )
        }
        )
    }
    ))
}
const Sd = (e, t) => {
    const n = Kb(e, !0, yd())
      , r = Vb(n);
    if (!r.pending.length) {
        let l = !0;
        return t && setTimeout( () => {
            l && t(r.loaded, r.missing, r.pending, ac)
        }
        ),
        () => {
            l = !1
        }
    }
    const o = Object.create(null)
      , s = [];
    let i, a;
    return r.pending.forEach(l => {
        const {provider: u, prefix: c} = l;
        if (c === a && u === i)
            return;
        i = u,
        a = c,
        s.push(An(u, c));
        const f = o[u] || (o[u] = Object.create(null));
        f[c] || (f[c] = [])
    }
    ),
    r.pending.forEach(l => {
        const {provider: u, prefix: c, name: f} = l
          , d = An(u, c)
          , h = d.pendingIcons || (d.pendingIcons = new Set);
        h.has(f) || (h.add(f),
        o[u][c].push(f))
    }
    ),
    s.forEach(l => {
        const u = o[l.provider][l.prefix];
        u.length && Zb(l, u)
    }
    ),
    t ? qb(t, r, s) : ac
}
  , nE = e => new Promise( (t, n) => {
    const r = typeof e == "string" ? Gr(e, !0) : e;
    if (!r) {
        n(e);
        return
    }
    Sd([r || e], o => {
        if (o.length && r) {
            const s = Sa(r);
            if (s) {
                t({
                    ...lr,
                    ...s
                });
                return
            }
        }
        n(e)
    }
    )
}
);
function e1(e, t, n) {
    An("", t).loadIcons = e
}
function t1(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const o = t[r]
          , s = typeof o;
        r in _d ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const n1 = /[\s,]+/;
function r1(e, t) {
    t.split(n1).forEach(n => {
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    }
    )
}
function o1(e, t=0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(o) {
        for (; o < 0; )
            o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(e);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== e) {
        let o = 0;
        switch (n) {
        case "%":
            o = 25;
            break;
        case "deg":
            o = 90
        }
        if (o) {
            let s = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(s) ? 0 : (s = s / o,
            s % 1 === 0 ? r(s) : 0)
        }
    }
    return t
}
function s1(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
        n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}
function i1(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function a1(e) {
    return "data:image/svg+xml," + i1(e)
}
function l1(e) {
    return 'url("' + a1(e) + '")'
}
const cc = {
    ...vd,
    inline: !1
}
  , c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img"
}
  , u1 = {
    display: "inline-block"
}
  , Pi = {
    backgroundColor: "currentColor"
}
  , xd = {
    backgroundColor: "transparent"
}
  , uc = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , fc = {
    webkitMask: Pi,
    mask: Pi,
    background: xd
};
for (const e in fc) {
    const t = fc[e];
    for (const n in uc)
        t[e + n] = uc[n]
}
const Eo = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    Eo[e + "-flip"] = t,
    Eo[e.slice(0, 1) + "-flip"] = t,
    Eo[e + "Flip"] = t
}
);
function dc(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const hc = (e, t) => {
    const n = t1(cc, t)
      , r = {
        ...c1
    }
      , o = t.mode || "svg"
      , s = {}
      , i = t.style
      , a = typeof i == "object" && !(i instanceof Array) ? i : {};
    for (let p in t) {
        const v = t[p];
        if (v !== void 0)
            switch (p) {
            case "icon":
            case "style":
            case "onLoad":
            case "mode":
            case "ssr":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                n[p] = v === !0 || v === "true" || v === 1;
                break;
            case "flip":
                typeof v == "string" && r1(n, v);
                break;
            case "color":
                s.color = v;
                break;
            case "rotate":
                typeof v == "string" ? n[p] = o1(v) : typeof v == "number" && (n[p] = v);
                break;
            case "ariaHidden":
            case "aria-hidden":
                v !== !0 && v !== "true" && delete r["aria-hidden"];
                break;
            default:
                {
                    const k = Eo[p];
                    k ? (v === !0 || v === "true" || v === 1) && (n[k] = !0) : cc[p] === void 0 && (r[p] = v)
                }
            }
    }
    const l = Rb(e, n)
      , u = l.attributes;
    if (n.inline && (s.verticalAlign = "-0.125em"),
    o === "svg") {
        r.style = {
            ...s,
            ...a
        },
        Object.assign(r, u);
        let p = 0
          , v = t.id;
        return typeof v == "string" && (v = v.replace(/-/g, "_")),
        r.innerHTML = Mb(l.body, v ? () => v + "ID" + p++ : "iconifyVue"),
        Ne("svg", r)
    }
    const {body: c, width: f, height: d} = e
      , h = o === "mask" || (o === "bg" ? !1 : c.indexOf("currentColor") !== -1)
      , g = s1(c, {
        ...u,
        width: f + "",
        height: d + ""
    });
    return r.style = {
        ...s,
        "--svg": l1(g),
        width: dc(u.width),
        height: dc(u.height),
        ...u1,
        ...h ? Pi : xd,
        ...a
    },
    Ne("span", r)
}
;
yd(!0);
bd("", Ub);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !wb(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = t[n];
                    if (typeof o != "object" || !o || o.resources === void 0)
                        continue;
                    wd(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const f1 = {
    ...lr,
    body: ""
}
  , rE = st( (e, {emit: t}) => {
    const n = he(null);
    function r() {
        n.value && (n.value.abort?.(),
        n.value = null)
    }
    const o = he(!!e.ssr)
      , s = he("")
      , i = xe(null);
    function a() {
        const u = e.icon;
        if (typeof u == "object" && u !== null && typeof u.body == "string")
            return s.value = "",
            {
                data: u
            };
        let c;
        if (typeof u != "string" || (c = Gr(u, !1, !0)) === null)
            return null;
        let f = Sa(c);
        if (!f) {
            const g = n.value;
            return (!g || g.name !== u) && (f === null ? n.value = {
                name: u
            } : n.value = {
                name: u,
                abort: Sd([c], l)
            }),
            null
        }
        r(),
        s.value !== u && (s.value = u,
        pt( () => {
            t("load", u)
        }
        ));
        const d = e.customise;
        if (d) {
            f = Object.assign({}, f);
            const g = d(f.body, c.name, c.prefix, c.provider);
            typeof g == "string" && (f.body = g)
        }
        const h = ["iconify"];
        return c.prefix !== "" && h.push("iconify--" + c.prefix),
        c.provider !== "" && h.push("iconify--" + c.provider),
        {
            data: f,
            classes: h
        }
    }
    function l() {
        const u = a();
        u ? u.data !== i.value?.data && (i.value = u) : i.value = null
    }
    return o.value ? l() : it( () => {
        o.value = !0,
        l()
    }
    ),
    Se( () => e.icon, l),
    ir(r),
    () => {
        const u = i.value;
        if (!u)
            return hc(f1, e);
        let c = e;
        return u.classes && (c = {
            ...e,
            class: u.classes.join(" ")
        }),
        hc({
            ...lr,
            ...u.data
        }, c)
    }
}
, {
    props: ["icon", "mode", "ssr", "width", "height", "style", "color", "inline", "rotate", "hFlip", "horizontalFlip", "vFlip", "verticalFlip", "flip", "id", "ariaHidden", "customise", "title"],
    emits: ["load"]
})
  , pc = {
    getAPIConfig: vs,
    setAPIModule: bd,
    sendAPIQuery: Td,
    setFetch: Nb,
    getFetch: Db,
    listAPIProviders: Lb
}
  , d1 = mt({
    name: "@nuxt/icon",
    setup() {
        const e = ar()
          , t = fd().icon;
        pc.setFetch($fetch.native);
        const n = [];
        if (t.provider === "server") {
            const o = e.app?.baseURL?.replace(/\/$/, "") ?? "";
            n.push(o + (t.localApiEndpoint || "/api/_nuxt_icon")),
            (t.fallbackToApi === !0 || t.fallbackToApi === "client-only") && n.push(t.iconifyApiEndpoint)
        } else
            t.provider === "none" ? pc.setFetch( () => Promise.resolve(new Response)) : n.push(t.iconifyApiEndpoint);
        async function r(o, s) {
            try {
                const i = await $fetch(n[0] + "/" + s + ".json", {
                    query: {
                        icons: o.join(",")
                    }
                });
                if (!i || i.prefix !== s || !i.icons)
                    throw new Error("Invalid data" + JSON.stringify(i));
                return i
            } catch (i) {
                return console.error("Failed to load custom icons", i),
                null
            }
        }
        wd("", {
            resources: n
        });
        for (const o of t.customCollections || [])
            o && e1(r, o)
    }
})
  , h1 = [Jy, t_, bv, Ev, kv, Tv, xv, Zv, tb, lb, hb, d1];
function Ca(e) {
    return Vr() ? ($i(e),
    !0) : !1
}
const Vs = new WeakMap
  , p1 = (...e) => {
    var t;
    const n = e[0]
      , r = (t = Ae()) == null ? void 0 : t.proxy;
    if (r == null && !In())
        throw new Error("injectLocal must be called in setup");
    return r && Vs.has(r) && n in Vs.get(r) ? Vs.get(r)[n] : Me(...e)
}
  , m1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g1 = Object.prototype.toString
  , y1 = e => g1.call(e) === "[object Object]"
  , _1 = () => {}
;
function v1(...e) {
    if (e.length !== 1)
        return Wr(...e);
    const t = e[0];
    return typeof t == "function" ? or(Vi( () => ({
        get: t,
        set: _1
    }))) : he(t)
}
function b1(e, t) {
    function n(...r) {
        return new Promise( (o, s) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).catch(s)
        }
        )
    }
    return n
}
const Cd = e => e();
function w1(e=Cd, t={}) {
    const {initialState: n="active"} = t
      , r = v1(n === "active");
    function o() {
        r.value = !1
    }
    function s() {
        r.value = !0
    }
    const i = (...a) => {
        r.value && e(...a)
    }
    ;
    return {
        isActive: or(r),
        pause: o,
        resume: s,
        eventFilter: i
    }
}
function E1(e, t=!1, n="Timeout") {
    return new Promise( (r, o) => {
        setTimeout(t ? () => o(n) : r, e)
    }
    )
}
function Rd(e) {
    return e
}
function mc(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function Ws(e) {
    return Array.isArray(e) ? e : [e]
}
function k1(e) {
    return Ae()
}
function T1(e, t, n={}) {
    const {eventFilter: r=Cd, ...o} = n;
    return Se(e, b1(r, t), o)
}
function S1(e, t, n={}) {
    const {eventFilter: r, initialState: o="active", ...s} = n
      , {eventFilter: i, pause: a, resume: l, isActive: u} = w1(r, {
        initialState: o
    });
    return {
        stop: T1(e, t, {
            ...s,
            eventFilter: i
        }),
        pause: a,
        resume: l,
        isActive: u
    }
}
function Ad(e, t=!0, n) {
    k1() ? it(e, n) : t ? e() : pt(e)
}
function x1(e, t, n) {
    return Se(e, t, {
        ...n,
        immediate: !0
    })
}
const Yt = m1 ? window : void 0;
function C1(e) {
    var t;
    const n = ae(e);
    return (t = n?.$el) != null ? t : n
}
function Vt(...e) {
    const t = []
      , n = () => {
        t.forEach(a => a()),
        t.length = 0
    }
      , r = (a, l, u, c) => (a.addEventListener(l, u, c),
    () => a.removeEventListener(l, u, c))
      , o = le( () => {
        const a = Ws(ae(e[0])).filter(l => l != null);
        return a.every(l => typeof l != "string") ? a : void 0
    }
    )
      , s = x1( () => {
        var a, l;
        return [(l = (a = o.value) == null ? void 0 : a.map(u => C1(u))) != null ? l : [Yt].filter(u => u != null), Ws(ae(o.value ? e[1] : e[0])), Ws(ie(o.value ? e[2] : e[1])), ae(o.value ? e[3] : e[2])]
    }
    , ([a,l,u,c]) => {
        if (n(),
        !a?.length || !l?.length || !u?.length)
            return;
        const f = y1(c) ? {
            ...c
        } : c;
        t.push(...a.flatMap(d => l.flatMap(h => u.map(g => r(d, h, g, f)))))
    }
    , {
        flush: "post"
    })
      , i = () => {
        s(),
        n()
    }
    ;
    return Ca(n),
    i
}
function R1() {
    const e = xe(!1)
      , t = Ae();
    return t && it( () => {
        e.value = !0
    }
    , t),
    e
}
function A1(e) {
    const t = R1();
    return le( () => (t.value,
    !!e()))
}
function P1(e, t={}) {
    const {immediate: n=!0, fpsLimit: r=void 0, window: o=Yt, once: s=!1} = t
      , i = xe(!1)
      , a = le( () => r ? 1e3 / ae(r) : null);
    let l = 0
      , u = null;
    function c(h) {
        if (!i.value || !o)
            return;
        l || (l = h);
        const g = h - l;
        if (a.value && g < a.value) {
            u = o.requestAnimationFrame(c);
            return
        }
        if (l = h,
        e({
            delta: g,
            timestamp: h
        }),
        s) {
            i.value = !1,
            u = null;
            return
        }
        u = o.requestAnimationFrame(c)
    }
    function f() {
        !i.value && o && (i.value = !0,
        l = 0,
        u = o.requestAnimationFrame(c))
    }
    function d() {
        i.value = !1,
        u != null && o && (o.cancelAnimationFrame(u),
        u = null)
    }
    return n && f(),
    Ca(d),
    {
        isActive: or(i),
        pause: d,
        resume: f
    }
}
const O1 = Symbol("vueuse-ssr-width");
function M1() {
    const e = In() ? p1(O1, null) : null;
    return typeof e == "number" ? e : void 0
}
function L1(e, t={}) {
    const {window: n=Yt, ssrWidth: r=M1()} = t
      , o = A1( () => n && "matchMedia" in n && typeof n.matchMedia == "function")
      , s = xe(typeof r == "number")
      , i = xe()
      , a = xe(!1)
      , l = u => {
        a.value = u.matches
    }
    ;
    return ia( () => {
        if (s.value) {
            s.value = !o.value;
            const u = ae(e).split(",");
            a.value = u.some(c => {
                const f = c.includes("not all")
                  , d = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
                  , h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let g = !!(d || h);
                return d && g && (g = r >= mc(d[1])),
                h && g && (g = r <= mc(h[1])),
                f ? !g : g
            }
            );
            return
        }
        o.value && (i.value = n.matchMedia(ae(e)),
        a.value = i.value.matches)
    }
    ),
    Vt(i, "change", l, {
        passive: !0
    }),
    le( () => a.value)
}
const co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , uo = "__vueuse_ssr_handlers__"
  , I1 = N1();
function N1() {
    return uo in co || (co[uo] = co[uo] || {}),
    co[uo]
}
function D1(e, t) {
    return I1[e] || t
}
function H1(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const $1 = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , gc = "vueuse-storage";
function Pd(e, t, n, r={}) {
    var o;
    const {flush: s="pre", deep: i=!0, listenToStorageChanges: a=!0, writeDefaults: l=!0, mergeDefaults: u=!1, shallow: c, window: f=Yt, eventFilter: d, onError: h=j => {
        console.error(j)
    }
    , initOnMounted: g} = r
      , p = (c ? xe : he)(typeof t == "function" ? t() : t)
      , v = le( () => ae(e));
    if (!n)
        try {
            n = D1("getDefaultStorage", () => {
                var j;
                return (j = Yt) == null ? void 0 : j.localStorage
            }
            )()
        } catch (j) {
            h(j)
        }
    if (!n)
        return p;
    const k = ae(t)
      , w = H1(k)
      , m = (o = r.serializer) != null ? o : $1[w]
      , {pause: _, resume: E} = S1(p, j => P(j), {
        flush: s,
        deep: i,
        eventFilter: d
    });
    Se(v, () => O(), {
        flush: s
    });
    let T = !1;
    const x = j => {
        g && !T || O(j)
    }
      , N = j => {
        g && !T || K(j)
    }
    ;
    f && a && (n instanceof Storage ? Vt(f, "storage", x, {
        passive: !0
    }) : Vt(f, gc, N)),
    g ? Ad( () => {
        T = !0,
        O()
    }
    ) : O();
    function R(j, J) {
        if (f) {
            const H = {
                key: v.value,
                oldValue: j,
                newValue: J,
                storageArea: n
            };
            f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage",H) : new CustomEvent(gc,{
                detail: H
            }))
        }
    }
    function P(j) {
        try {
            const J = n.getItem(v.value);
            if (j == null)
                R(J, null),
                n.removeItem(v.value);
            else {
                const H = m.write(j);
                J !== H && (n.setItem(v.value, H),
                R(J, H))
            }
        } catch (J) {
            h(J)
        }
    }
    function q(j) {
        const J = j ? j.newValue : n.getItem(v.value);
        if (J == null)
            return l && k != null && n.setItem(v.value, m.write(k)),
            k;
        if (!j && u) {
            const H = m.read(J);
            return typeof u == "function" ? u(H, k) : w === "object" && !Array.isArray(H) ? {
                ...k,
                ...H
            } : H
        } else
            return typeof J != "string" ? J : m.read(J)
    }
    function O(j) {
        if (!(j && j.storageArea !== n)) {
            if (j && j.key == null) {
                p.value = k;
                return
            }
            if (!(j && j.key !== v.value)) {
                _();
                try {
                    const J = m.write(p.value);
                    (j === void 0 || j?.newValue !== J) && (p.value = q(j))
                } catch (J) {
                    h(J)
                } finally {
                    j ? pt(E) : E()
                }
            }
        }
    }
    function K(j) {
        O(j.detail)
    }
    return p
}
function oE(e, t, n={}) {
    const {window: r=Yt} = n;
    return Pd(e, t, r?.localStorage, n)
}
const j1 = {
    page: e => [e.pageX, e.pageY],
    client: e => [e.clientX, e.clientY],
    screen: e => [e.screenX, e.screenY],
    movement: e => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};
function F1(e={}) {
    const {type: t="page", touch: n=!0, resetOnTouchEnds: r=!1, initialValue: o={
        x: 0,
        y: 0
    }, window: s=Yt, target: i=s, scroll: a=!0, eventFilter: l} = e;
    let u = null
      , c = 0
      , f = 0;
    const d = xe(o.x)
      , h = xe(o.y)
      , g = xe(null)
      , p = typeof t == "function" ? t : j1[t]
      , v = x => {
        const N = p(x);
        u = x,
        N && ([d.value,h.value] = N,
        g.value = "mouse"),
        s && (c = s.scrollX,
        f = s.scrollY)
    }
      , k = x => {
        if (x.touches.length > 0) {
            const N = p(x.touches[0]);
            N && ([d.value,h.value] = N,
            g.value = "touch")
        }
    }
      , w = () => {
        if (!u || !s)
            return;
        const x = p(u);
        u instanceof MouseEvent && x && (d.value = x[0] + s.scrollX - c,
        h.value = x[1] + s.scrollY - f)
    }
      , m = () => {
        d.value = o.x,
        h.value = o.y
    }
      , _ = l ? x => l( () => v(x), {}) : x => v(x)
      , E = l ? x => l( () => k(x), {}) : x => k(x)
      , T = l ? () => l( () => w(), {}) : () => w();
    if (i) {
        const x = {
            passive: !0
        };
        Vt(i, ["mousemove", "dragover"], _, x),
        n && t !== "movement" && (Vt(i, ["touchstart", "touchmove"], E, x),
        r && Vt(i, "touchend", m, x)),
        a && t === "page" && Vt(s, "scroll", T, x)
    }
    return {
        x: d,
        y: h,
        sourceType: g
    }
}
const B1 = {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
}
  , sE = Object.assign({}, {
    linear: Rd
}, B1);
function U1([e,t,n,r]) {
    const o = (c, f) => 1 - 3 * f + 3 * c
      , s = (c, f) => 3 * f - 6 * c
      , i = c => 3 * c
      , a = (c, f, d) => ((o(f, d) * c + s(f, d)) * c + i(f)) * c
      , l = (c, f, d) => 3 * o(f, d) * c * c + 2 * s(f, d) * c + i(f)
      , u = c => {
        let f = c;
        for (let d = 0; d < 4; ++d) {
            const h = l(f, e, n);
            if (h === 0)
                return f;
            const g = a(f, e, n) - c;
            f -= g / h
        }
        return f
    }
    ;
    return c => e === t && n === r ? c : a(u(c), t, r)
}
function yc(e, t, n) {
    return e + n * (t - e)
}
function zs(e) {
    return (typeof e == "number" ? [e] : e) || []
}
function V1(e, t, n, r={}) {
    var o, s;
    const {window: i=Yt} = r
      , a = ae(t)
      , l = ae(n)
      , u = zs(a)
      , c = zs(l)
      , f = (o = ae(r.duration)) != null ? o : 1e3
      , d = Date.now()
      , h = Date.now() + f
      , g = typeof r.transition == "function" ? r.transition : (s = ae(r.transition)) != null ? s : Rd
      , p = typeof g == "function" ? g : U1(g);
    return new Promise(v => {
        e.value = a;
        const k = () => {
            var w;
            if ((w = r.abort) != null && w.call(r)) {
                v();
                return
            }
            const m = Date.now()
              , _ = p((m - d) / f)
              , E = zs(e.value).map( (T, x) => yc(u[x], c[x], _));
            Array.isArray(e.value) ? e.value = E.map( (T, x) => {
                var N, R;
                return yc((N = u[x]) != null ? N : 0, (R = c[x]) != null ? R : 0, _)
            }
            ) : typeof e.value == "number" && (e.value = E[0]),
            m < h ? i?.requestAnimationFrame(k) : (e.value = l,
            v())
        }
        ;
        k()
    }
    )
}
function iE(e, t={}) {
    let n = 0;
    const r = () => {
        const s = ae(e);
        return typeof s == "number" ? s : s.map(ae)
    }
      , o = he(r());
    return Se(r, async s => {
        var i, a;
        if (ae(t.disabled))
            return;
        const l = ++n;
        if (t.delay && await E1(ae(t.delay)),
        l !== n)
            return;
        const u = Array.isArray(s) ? s.map(ae) : ae(s);
        (i = t.onStarted) == null || i.call(t),
        await V1(o, o.value, u, {
            ...t,
            abort: () => {
                var c;
                return l !== n || ((c = t.abort) == null ? void 0 : c.call(t))
            }
        }),
        (a = t.onFinished) == null || a.call(t)
    }
    , {
        deep: !0
    }),
    Se( () => ae(t.disabled), s => {
        s && (n++,
        o.value = r())
    }
    ),
    Ca( () => {
        n++
    }
    ),
    le( () => ae(t.disabled) ? r() : o.value)
}
function W1(e={}) {
    const {window: t=Yt, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: o=!0, includeScrollbar: s=!0, type: i="inner"} = e
      , a = xe(n)
      , l = xe(r)
      , u = () => {
        if (t)
            if (i === "outer")
                a.value = t.outerWidth,
                l.value = t.outerHeight;
            else if (i === "visual" && t.visualViewport) {
                const {width: f, height: d, scale: h} = t.visualViewport;
                a.value = Math.round(f * h),
                l.value = Math.round(d * h)
            } else
                s ? (a.value = t.innerWidth,
                l.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth,
                l.value = t.document.documentElement.clientHeight)
    }
    ;
    u(),
    Ad(u);
    const c = {
        passive: !0
    };
    if (Vt("resize", u, c),
    t && i === "visual" && t.visualViewport && Vt(t.visualViewport, "resize", u, c),
    o) {
        const f = L1("(orientation: portrait)");
        Se(f, () => u())
    }
    return {
        width: a,
        height: l
    }
}
const z1 = st({
    __name: "dot-grid",
    props: {
        enabled: {
            type: Boolean,
            default: !0
        },
        dotSpacing: {
            default: 17
        },
        dotSize: {
            default: 1.5
        },
        glowRadius: {
            default: 100
        },
        dotColor: {
            default: "#44403c"
        },
        glowColor: {
            default: "#3b82f6"
        },
        bgColor: {
            default: "#0c0a09"
        },
        cooldown: {
            default: .02
        }
    },
    setup(e) {
        const t = e
          , n = he(null)
          , {x: r, y: o} = F1({
            type: "client"
        })
          , {width: s, height: i} = W1()
          , a = he(t.enabled);
        let l = new Float32Array(0)
          , u = 0
          , c = 0;
        function f(p, v) {
            if (p === u && v === c)
                return;
            const k = new Float32Array(p * v)
              , w = Math.min(p, u)
              , m = Math.min(v, c);
            for (let _ = 0; _ < w; _++)
                for (let E = 0; E < m; E++)
                    k[_ * v + E] = l[_ * c + E];
            l = k,
            u = p,
            c = v
        }
        Se([s, i], ([p,v]) => {
            const k = n.value;
            k && (k.width = p,
            k.height = v)
        }
        );
        function d(p) {
            return p * p * (3 - 2 * p)
        }
        function h(p) {
            const v = parseInt(p.replace("#", ""), 16);
            return [v >> 16 & 255, v >> 8 & 255, v & 255]
        }
        function g(p, v, k) {
            const [w,m,_] = h(p)
              , [E,T,x] = h(v)
              , N = Math.round(w + (E - w) * k)
              , R = Math.round(m + (T - m) * k)
              , P = Math.round(_ + (x - _) * k);
            return `rgb(${N},${R},${P})`
        }
        return P1( () => {
            const p = n.value;
            if (!p)
                return;
            const v = p.getContext("2d");
            if (!v)
                return;
            const {dotSpacing: k, dotSize: w, glowRadius: m, dotColor: _, glowColor: E, bgColor: T, cooldown: x} = t
              , N = p.width
              , R = p.height
              , P = w / 2
              , q = a.value ? r.value : -99999
              , O = a.value ? o.value : -99999
              , K = Math.ceil(N / k)
              , j = Math.ceil(R / k);
            f(K, j),
            v.fillStyle = T,
            v.fillRect(0, 0, N, R);
            let J = 0;
            for (let H = k / 2; H < N; H += k,
            J++) {
                let Z = 0;
                for (let W = k / 2; W < R; W += k,
                Z++) {
                    const ke = H - q
                      , gt = W - O
                      , at = Math.sqrt(ke * ke + gt * gt)
                      , Le = d(Math.max(0, 1 - at / m))
                      , Tt = J * j + Z
                      , St = l[Tt] || 0;
                    l[Tt] = Le >= St ? Le : St + (Le - St) * x;
                    const Xt = l[Tt];
                    v.fillStyle = Xt > .001 ? g(_, E, Xt) : _,
                    v.beginPath(),
                    v.arc(H, W, P + Xt * .8, 0, Math.PI * 2),
                    v.fill()
                }
            }
        }
        ),
        it( () => {
            const p = n.value;
            p.width = s.value,
            p.height = i.value
        }
        ),
        (p, v) => (be(),
        Ie("canvas", {
            ref_key: "canvasRef",
            ref: n,
            class: "fixed inset-0 pointer-events-none opacity-40",
            style: {
                "z-index": "0"
            }
        }, null, 512))
    }
})
  , q1 = Object.assign(z1, {
    __name: "DotGrid"
})
  , Od = Symbol.for("nuxt:client-only")
  , K1 = st({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {slots: t, attrs: n}) {
        const r = xe(!1);
        it( () => {
            r.value = !0
        }
        );
        const o = Ae();
        return o && (o._nuxtClientOnly = !0),
        Ot(Od, !0),
        () => {
            if (r.value) {
                const l = t.default?.();
                return l && l.length === 1 ? [Et(l[0], n)] : l
            }
            const s = t.fallback || t.placeholder;
            if (s)
                return Ne(s);
            const i = e.fallback || e.placeholder || ""
              , a = e.fallbackTag || e.placeholderTag || "span";
            return Ie(a, n, i)
        }
    }
})
  , G1 = (...e) => e.find(t => t !== void 0);
function Y1(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
        return typeof s == "string" && s.startsWith("#")
    }
    function r(s, i, a) {
        const l = a ?? e.trailingSlash;
        if (!s || l !== "append" && l !== "remove")
            return s;
        if (typeof s == "string")
            return fo(s, l);
        const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
        return {
            ...s,
            name: void 0,
            path: fo(u, l)
        }
    }
    function o(s) {
        const i = Ye()
          , a = ar()
          , l = le( () => !!s.target && s.target !== "_self")
          , u = le( () => {
            const v = s.to || s.href || "";
            return typeof v == "string" && Qt(v, {
                acceptRelative: !0
            })
        }
        )
          , c = Qs("RouterLink")
          , f = c && typeof c != "string" ? c.useLink : void 0
          , d = le( () => {
            if (s.external)
                return !0;
            const v = s.to || s.href || "";
            return typeof v == "object" ? !1 : v === "" || u.value
        }
        )
          , h = le( () => {
            const v = s.to || s.href || "";
            return d.value ? v : r(v, i.resolve, s.trailingSlash)
        }
        )
          , g = d.value ? void 0 : f?.({
            ...s,
            to: h
        })
          , p = le( () => {
            const v = s.trailingSlash ?? e.trailingSlash;
            if (!h.value || u.value || n(h.value))
                return h.value;
            if (d.value) {
                const k = typeof h.value == "object" && "path" in h.value ? vi(h.value) : h.value
                  , w = typeof k == "object" ? i.resolve(k).href : k;
                return fo(w, v)
            }
            return typeof h.value == "object" ? i.resolve(h.value)?.href ?? null : fo(fs(a.app.baseURL, h.value), v)
        }
        );
        return {
            to: h,
            hasTarget: l,
            isAbsoluteUrl: u,
            isExternal: d,
            href: p,
            isActive: g?.isActive ?? le( () => h.value === i.currentRoute.value.path),
            isExactActive: g?.isExactActive ?? le( () => h.value === i.currentRoute.value.path),
            route: g?.route ?? le( () => i.resolve(h.value)),
            async navigate(v) {
                await ay(p.value, {
                    replace: s.replace,
                    external: d.value || l.value
                })
            }
        }
    }
    return st({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            trailingSlash: {
                type: String,
                default: void 0,
                required: !1
            }
        },
        useLink: o,
        setup(s, {slots: i}) {
            const a = Ye()
              , {to: l, href: u, navigate: c, isExternal: f, hasTarget: d, isAbsoluteUrl: h} = o(s)
              , g = xe(!1)
              , p = he(null)
              , v = m => {
                p.value = s.custom ? m?.$el?.nextElementSibling : m?.$el
            }
            ;
            function k(m) {
                return !g.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : s.prefetchOn?.[m] ?? e.prefetchOn?.[m]) && (s.prefetch ?? e.prefetch) !== !1 && s.noPrefetch !== !0 && s.target !== "_blank" && !X1()
            }
            async function w(m=we()) {
                if (g.value)
                    return;
                g.value = !0;
                const _ = typeof l.value == "string" ? l.value : f.value ? vi(l.value) : a.resolve(l.value).fullPath
                  , E = f.value ? new URL(_,window.location.href).href : _;
                await Promise.all([m.hooks.callHook("link:prefetch", E).catch( () => {}
                ), !f.value && !d.value && ud(l.value, a).catch( () => {}
                )])
            }
            if (k("visibility")) {
                const m = we();
                let _, E = null;
                it( () => {
                    const T = J1();
                    ys( () => {
                        _ = xi( () => {
                            p?.value?.tagName && (E = T.observe(p.value, async () => {
                                E?.(),
                                E = null,
                                await w(m)
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                Ln( () => {
                    _ && wv(_),
                    E?.(),
                    E = null
                }
                )
            }
            return () => {
                if (!f.value && !d.value && !n(l.value)) {
                    const E = {
                        ref: v,
                        to: l.value,
                        activeClass: s.activeClass || e.activeClass,
                        exactActiveClass: s.exactActiveClass || e.exactActiveClass,
                        replace: s.replace,
                        ariaCurrentValue: s.ariaCurrentValue,
                        custom: s.custom
                    };
                    return s.custom || (k("interaction") && (E.onPointerenter = w.bind(null, void 0),
                    E.onFocus = w.bind(null, void 0)),
                    g.value && (E.class = s.prefetchedClass || e.prefetchedClass),
                    E.rel = s.rel || void 0),
                    Ne(Qs("RouterLink"), E, i.default)
                }
                const m = s.target || null
                  , _ = G1(s.noRel ? "" : s.rel, e.externalRelAttribute, h.value || d.value ? "noopener noreferrer" : "") || null;
                return s.custom ? i.default ? i.default({
                    href: u.value,
                    navigate: c,
                    prefetch: w,
                    get route() {
                        if (!u.value)
                            return;
                        const E = new URL(u.value,window.location.href);
                        return {
                            path: E.pathname,
                            fullPath: E.pathname,
                            get query() {
                                return ha(E.search)
                            },
                            hash: E.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: u.value
                        }
                    },
                    rel: _,
                    target: m,
                    isExternal: f.value || d.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : Ne("a", {
                    ref: p,
                    href: u.value || null,
                    rel: _,
                    target: m,
                    onClick: E => {
                        if (!(f.value || d.value))
                            return E.preventDefault(),
                            s.replace ? a.replace(u.value) : a.push(u.value)
                    }
                }, i.default?.())
            }
        }
    })
}
const Md = Y1(Bg);
function fo(e, t) {
    const n = t === "append" ? Cf : Xn;
    return Qt(e) && !e.startsWith("http") ? e : n(e, !0)
}
function J1() {
    const e = we();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
      , r = (s, i) => (t ||= new IntersectionObserver(a => {
        for (const l of a) {
            const u = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
        }
    }
    ),
    n.set(s, i),
    t.observe(s),
    () => {
        n.delete(s),
        t?.unobserve(s),
        n.size === 0 && (t?.disconnect(),
        t = null)
    }
    );
    return e._observer = {
        observe: r
    }
}
const Q1 = /2g/;
function X1() {
    const e = navigator.connection;
    return !!(e && (e.saveData || Q1.test(e.effectiveType)))
}
const Ld = (e="RouteProvider") => st({
    name: e,
    props: {
        route: {
            type: Object,
            required: !0
        },
        vnode: Object,
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(t) {
        const n = t.renderKey
          , r = t.route
          , o = {};
        for (const s in t.route)
            Object.defineProperty(o, s, {
                get: () => n === t.renderKey ? t.route[s] : r[s],
                enumerable: !0
            });
        return Ot(ds, Pt(o)),
        () => t.vnode ? Ne(t.vnode, {
            ref: t.vnodeRef
        }) : t.vnode
    }
})
  , Z1 = Ld()
  , _c = new WeakMap
  , ew = st({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        const o = we()
          , s = he()
          , i = Me(ds, null);
        let a;
        r({
            pageRef: s
        });
        const l = Me(sy, null);
        let u;
        const c = o.deferHydration();
        if (o.isHydrating) {
            const d = o.hooks.hookOnce("app:error", c);
            Ye().beforeEach(d)
        }
        e.pageKey && Se( () => e.pageKey, (d, h) => {
            d !== h && o.callHook("page:loading:start")
        }
        );
        let f = !1;
        {
            const d = Ye().beforeResolve( () => {
                f = !1
            }
            );
            Ln( () => {
                d()
            }
            )
        }
        return () => Ne(ld, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: d => {
                const h = nw(i, d.route, d.Component)
                  , g = i && i.matched.length === d.route.matched.length;
                if (!d.Component) {
                    if (u && !g)
                        return u;
                    c();
                    return
                }
                if (u && l && !l.isCurrent(d.route))
                    return u;
                if (h && i && (!l || l?.isCurrent(i)))
                    return g ? u : null;
                const p = Ti(d, e.pageKey)
                  , v = rw(i, d.route, d.Component);
                !o.isHydrating && a === p && !v && pt( () => {
                    f = !0,
                    o.callHook("page:loading:end")
                }
                ),
                a = p;
                const k = !!(e.transition ?? d.route.meta.pageTransition ?? kl)
                  , w = k && tw([e.transition, d.route.meta.pageTransition, kl, {
                    onAfterLeave() {
                        delete o._runningTransition,
                        o.callHook("page:transition:finish", d.Component)
                    }
                }])
                  , m = e.keepalive ?? d.route.meta.keepalive ?? Fg;
                return u = cv(k && w, lv(m, Ne(aa, {
                    suspensible: !0,
                    onPending: () => {
                        k && (o._runningTransition = !0),
                        o.callHook("page:start", d.Component)
                    }
                    ,
                    onResolve: () => {
                        pt( () => o.callHook("page:finish", d.Component).then( () => {
                            if (delete o._runningTransition,
                            !f && !v)
                                return f = !0,
                                o.callHook("page:loading:end")
                        }
                        ).finally(c))
                    }
                }, {
                    default: () => {
                        const _ = {
                            key: p || void 0,
                            vnode: n.default ? ow(n.default, d) : d.Component,
                            route: d.route,
                            renderKey: p || void 0,
                            trackRootNodes: k,
                            vnodeRef: s
                        };
                        if (!m)
                            return Ne(Z1, _);
                        const E = d.Component.type
                          , T = E;
                        let x = _c.get(T);
                        return x || (x = Ld(E.name || E.__name),
                        _c.set(T, x)),
                        Ne(x, _)
                    }
                }))).default(),
                u
            }
        })
    }
});
function tw(e) {
    const t = e.filter(Boolean).map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? Ta(n.onAfterLeave) : void 0
    }));
    return Bf(...t)
}
function nw(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(o => o.components?.default === n?.type);
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some( (o, s) => o.components?.default !== e.matched[s]?.components?.default) || n && Ti({
        route: t,
        Component: n
    }) !== Ti({
        route: e,
        Component: n
    })
}
function rw(e, t, n) {
    return e ? t.matched.findIndex(o => o.components?.default === n?.type) < t.matched.length - 1 : !1
}
function ow(e, t) {
    const n = e(t);
    return n.length === 1 ? Ne(n[0]) : Ne(Pe, void 0, n)
}
const sw = ga("/avatar.png")
  , aE = async () => bt.value ? bt.value : new Promise(e => {
    const t = Se(bt, n => {
        n && (t(),
        e(n))
    }
    )
}
)
  , bt = he(null)
  , vc = () => Ko.value = ""
  , qo = he([]);
$fetch("/api/default-flags").then(e => {
    qo.value = e.flags
}
);
window && (window.flags = qo);
const Ko = Pd("authorizationToken", "");
Se(Ko, e => {
    e ? (console.log("[AUTH] Auth token changed, getting user..."),
    fetch("https://id.tori.dog/api/auth/profile", {
        headers: {
            Authorization: `Bearer ${e}`
        }
    }).then(t => t.json()).then(t => {
        if (bt.value = {
            ...t.user,
            subscription: t.subscription || {
                isSubscribed: !1,
                subscriptionTier: "none"
            }
        },
        window) {
            const n = window;
            n.activeUser = bt
        }
        console.log(`[AUTH] Hello, ${bt?.value?.email}!`),
        $fetch("/api/flags", {
            headers: {
                Authorization: `Bearer ${e}`
            }
        }).then(n => {
            qo.value = n.flags,
            console.log(`[FLAGS] ${JSON.stringify(qo.value)}`)
        }
        )
    }
    )) : bt.value = null
}
, {
    immediate: !0
});
const lE = le( () => Ko.value ? {
    Authorization: `Bearer ${Ko.value}`,
    "X-Client": "tori-web"
} : {})
  , Id = (e, t, n) => {}
  , iw = async (e, t) => {
    {
        const n = new URLSearchParams({
            type: e
        });
        for (const i in t)
            n.append(i, t[i]);
        const {data: r, error: o, metadata: s} = await $fetch("/api/data?" + n.toString(), {
            method: "GET"
        });
        if (o)
            throw new Error(`Failed to fetch analytics data: ${o.statusMessage}`);
        return {
            success: !0,
            data: r,
            metadata: s
        }
    }
}
  , aw = async (e, t) => {
    const n = new URLSearchParams({
        type: e
    });
    for (const o in t)
        n.append(o, t[o]);
    n.append("onlyTotals", "1");
    const {metadata: r} = await $fetch("/api/data?" + n.toString(), {
        method: "GET"
    });
    return console.log(r),
    r?.totalAllTime || 0
}
;
window.analytics = {
    writeAnalytics: Id,
    getAnalytics: iw,
    getTotals: aw
};
const lw = {
    trailing: !0
};
function cw(e, t=25, n={}) {
    if (n = {
        ...lw,
        ...n
    },
    !Number.isFinite(t))
        throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (f, d) => (i = uw(e, f, d),
    i.finally( () => {
        if (i = null,
        n.trailing && a && !o) {
            const h = l(f, a);
            return a = null,
            h
        }
    }
    ),
    i)
      , u = function(...f) {
        return n.trailing && (a = f),
        i || new Promise(d => {
            const h = !o && n.leading;
            clearTimeout(o),
            o = setTimeout( () => {
                o = null;
                const g = n.leading ? r : l(this, f);
                a = null;
                for (const p of s)
                    p(g);
                s = []
            }
            , t),
            h ? (r = l(this, f),
            d(r)) : s.push(d)
        }
        )
    }
      , c = f => {
        f && (clearTimeout(f),
        o = null)
    }
    ;
    return u.isPending = () => !!o,
    u.cancel = () => {
        c(o),
        s = [],
        a = null
    }
    ,
    u.flush = () => {
        if (c(o),
        !a || i)
            return;
        const f = a;
        return a = null,
        l(this, f)
    }
    ,
    u
}
async function uw(e, t, n) {
    return await e.apply(t, n)
}
function Oi(e) {
    return typeof e == "string" ? `'${e}'` : new fw().serialize(e)
}
const fw = (function() {
    class e {
        #e = new Map;
        compare(n, r) {
            const o = typeof n
              , s = typeof r;
            return o === "string" && s === "string" ? n.localeCompare(r) : o === "number" && s === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(r, !0))
        }
        serialize(n, r) {
            if (n === null)
                return "null";
            switch (typeof n) {
            case "string":
                return r ? n : `'${n}'`;
            case "bigint":
                return `${n}n`;
            case "object":
                return this.$object(n);
            case "function":
                return this.$function(n)
            }
            return String(n)
        }
        serializeObject(n) {
            const r = Object.prototype.toString.call(n);
            if (r !== "[object Object]")
                return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n);
            const o = n.constructor
              , s = o === Object || o === void 0 ? "" : o.name;
            if (s !== "" && globalThis[s] === o)
                return this.serializeBuiltInType(s, n);
            if (typeof n.toJSON == "function") {
                const i = n.toJSON();
                return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`)
            }
            return this.serializeObjectEntries(s, Object.entries(n))
        }
        serializeBuiltInType(n, r) {
            const o = this["$" + n];
            if (o)
                return o.call(this, r);
            if (typeof r?.entries == "function")
                return this.serializeObjectEntries(n, r.entries());
            throw new Error(`Cannot serialize ${n}`)
        }
        serializeObjectEntries(n, r) {
            const o = Array.from(r).sort( (i, a) => this.compare(i[0], a[0]));
            let s = `${n}{`;
            for (let i = 0; i < o.length; i++) {
                const [a,l] = o[i];
                s += `${this.serialize(a, !0)}:${this.serialize(l)}`,
                i < o.length - 1 && (s += ",")
            }
            return s + "}"
        }
        $object(n) {
            let r = this.#e.get(n);
            return r === void 0 && (this.#e.set(n, `#${this.#e.size}`),
            r = this.serializeObject(n),
            this.#e.set(n, r)),
            r
        }
        $function(n) {
            const r = Function.prototype.toString.call(n);
            return r.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g, "")}`
        }
        $Array(n) {
            let r = "[";
            for (let o = 0; o < n.length; o++)
                r += this.serialize(n[o]),
                o < n.length - 1 && (r += ",");
            return r + "]"
        }
        $Date(n) {
            try {
                return `Date(${n.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(n) {
            return `ArrayBuffer[${new Uint8Array(n).join(",")}]`
        }
        $Set(n) {
            return `Set${this.$Array(Array.from(n).sort( (r, o) => this.compare(r, o)))}`
        }
        $Map(n) {
            return this.serializeObjectEntries("Map", n.entries())
        }
    }
    for (const t of ["Error", "RegExp", "URL"])
        e.prototype["$" + t] = function(n) {
            return `${t}(${n})`
        }
        ;
    for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"])
        e.prototype["$" + t] = function(n) {
            return `${t}[${n.join(",")}]`
        }
        ;
    for (const t of ["BigInt64Array", "BigUint64Array"])
        e.prototype["$" + t] = function(n) {
            return `${t}[${n.join("n,")}${n.length > 0 ? "n" : ""}]`
        }
        ;
    return e
}
)();
function cE(e, t) {
    return e === t || Oi(e) === Oi(t)
}
const dw = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
  , hw = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
  , pw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  , _n = [];
class mw {
    _data = new Un;
    _hash = new Un([...dw]);
    _nDataBytes = 0;
    _minBufferSize = 0;
    finalize(t) {
        t && this._append(t);
        const n = this._nDataBytes * 8
          , r = this._data.sigBytes * 8;
        return this._data.words[r >>> 5] |= 128 << 24 - r % 32,
        this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
        this._data.words[(r + 64 >>> 9 << 4) + 15] = n,
        this._data.sigBytes = this._data.words.length * 4,
        this._process(),
        this._hash
    }
    _doProcessBlock(t, n) {
        const r = this._hash.words;
        let o = r[0]
          , s = r[1]
          , i = r[2]
          , a = r[3]
          , l = r[4]
          , u = r[5]
          , c = r[6]
          , f = r[7];
        for (let d = 0; d < 64; d++) {
            if (d < 16)
                _n[d] = t[n + d] | 0;
            else {
                const m = _n[d - 15]
                  , _ = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3
                  , E = _n[d - 2]
                  , T = (E << 15 | E >>> 17) ^ (E << 13 | E >>> 19) ^ E >>> 10;
                _n[d] = _ + _n[d - 7] + T + _n[d - 16]
            }
            const h = l & u ^ ~l & c
              , g = o & s ^ o & i ^ s & i
              , p = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
              , v = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)
              , k = f + v + h + hw[d] + _n[d]
              , w = p + g;
            f = c,
            c = u,
            u = l,
            l = a + k | 0,
            a = i,
            i = s,
            s = o,
            o = k + w | 0
        }
        r[0] = r[0] + o | 0,
        r[1] = r[1] + s | 0,
        r[2] = r[2] + i | 0,
        r[3] = r[3] + a | 0,
        r[4] = r[4] + l | 0,
        r[5] = r[5] + u | 0,
        r[6] = r[6] + c | 0,
        r[7] = r[7] + f | 0
    }
    _append(t) {
        typeof t == "string" && (t = Un.fromUtf8(t)),
        this._data.concat(t),
        this._nDataBytes += t.sigBytes
    }
    _process(t) {
        let n, r = this._data.sigBytes / 64;
        t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
        const o = r * 16
          , s = Math.min(o * 4, this._data.sigBytes);
        if (o) {
            for (let i = 0; i < o; i += 16)
                this._doProcessBlock(this._data.words, i);
            n = this._data.words.splice(0, o),
            this._data.sigBytes -= s
        }
        return new Un(n,s)
    }
}
class Un {
    words;
    sigBytes;
    constructor(t, n) {
        t = this.words = t || [],
        this.sigBytes = n === void 0 ? t.length * 4 : n
    }
    static fromUtf8(t) {
        const n = unescape(encodeURIComponent(t))
          , r = n.length
          , o = [];
        for (let s = 0; s < r; s++)
            o[s >>> 2] |= (n.charCodeAt(s) & 255) << 24 - s % 4 * 8;
        return new Un(o,r)
    }
    toBase64() {
        const t = [];
        for (let n = 0; n < this.sigBytes; n += 3) {
            const r = this.words[n >>> 2] >>> 24 - n % 4 * 8 & 255
              , o = this.words[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255
              , s = this.words[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255
              , i = r << 16 | o << 8 | s;
            for (let a = 0; a < 4 && n * 8 + a * 6 < this.sigBytes * 8; a++)
                t.push(pw.charAt(i >>> 6 * (3 - a) & 63))
        }
        return t.join("")
    }
    concat(t) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4),
        this.sigBytes % 4)
            for (let n = 0; n < t.sigBytes; n++) {
                const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
            }
        else
            for (let n = 0; n < t.sigBytes; n += 4)
                this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
        this.sigBytes += t.sigBytes
    }
}
function gw(e) {
    return new mw().finalize(e).toBase64()
}
function Fn(e) {
    return gw(Oi(e))
}
function Nd(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    yw(e[0], e[1]) && e.unshift(t);
    let[n,r,o={}] = e;
    const s = le( () => ae(n));
    if (typeof s.value != "string")
        throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = we();
    o.server ??= !0,
    o.default ??= vw,
    o.getCachedData ??= Hd,
    o.lazy ??= !1,
    o.immediate ??= !0,
    o.deep ??= Ug.deep,
    o.dedupe ??= "cancel",
    o._functionName,
    i._asyncData[s.value];
    const a = {
        cause: "initial",
        dedupe: o.dedupe
    };
    i._asyncData[s.value]?._init || (a.cachedData = o.getCachedData(s.value, i, {
        cause: "initial"
    }),
    i._asyncData[s.value] = bc(i, s.value, r, o, a.cachedData));
    const l = i._asyncData[s.value];
    l._deps++;
    const u = () => i._asyncData[s.value].execute(a)
      , c = o.server !== !1 && i.payload.serverRendered;
    {
        let h = function(w) {
            const m = i._asyncData[w];
            m?._deps && (m._deps--,
            m._deps === 0 && m?._off())
        };
        const g = Ae();
        if (g && c && o.immediate && !g.sp && (g.sp = []),
        g && !g._nuxtOnBeforeMountCbs) {
            g._nuxtOnBeforeMountCbs = [];
            const w = g._nuxtOnBeforeMountCbs;
            Ji( () => {
                w.forEach(m => {
                    m()
                }
                ),
                w.splice(0, w.length)
            }
            ),
            ir( () => w.splice(0, w.length))
        }
        const p = g && (g._nuxtClientOnly || Me(Od, !1));
        c && i.isHydrating && (l.error.value || l.data.value !== void 0) ? l.status.value = l.error.value ? "error" : "success" : g && (!p && i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? g._nuxtOnBeforeMountCbs.push(u) : o.immediate && l.status.value !== "success" && u();
        const v = Vr()
          , k = Se([s, ...o.watch || []], ([w], [m]) => {
            if ((w || m) && w !== m) {
                const _ = i._asyncData[m]?.data.value !== void 0
                  , E = i._asyncDataPromises[m] !== void 0;
                m && h(m);
                const T = {
                    cause: "initial",
                    dedupe: o.dedupe
                };
                if (!i._asyncData[w]?._init) {
                    let x;
                    m && _ ? x = i._asyncData[m]?.data.value : (x = o.getCachedData(w, i, {
                        cause: "initial"
                    }),
                    T.cachedData = x),
                    i._asyncData[w] = bc(i, w, r, o, x)
                }
                i._asyncData[w]._deps++,
                (o.immediate || _ || E) && i._asyncData[w].execute(T)
            } else
                l._execute({
                    cause: "watch",
                    dedupe: o.dedupe
                })
        }
        , {
            flush: "sync"
        });
        v && $i( () => {
            k(),
            h(s.value)
        }
        )
    }
    const f = {
        data: ho( () => i._asyncData[s.value]?.data),
        pending: ho( () => i._asyncData[s.value]?.pending),
        status: ho( () => i._asyncData[s.value]?.status),
        error: ho( () => i._asyncData[s.value]?.error),
        refresh: (...h) => i._asyncData[s.value].execute(...h),
        execute: (...h) => i._asyncData[s.value].execute(...h),
        clear: () => Dd(i, s.value)
    }
      , d = Promise.resolve(i._asyncDataPromises[s.value]).then( () => f);
    return Object.assign(d, f),
    d
}
function ho(e) {
    return le({
        get() {
            return e()?.value
        },
        set(t) {
            const n = e();
            n && (n.value = t)
        }
    })
}
function yw(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function")
}
function Dd(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = void 0),
    e._asyncData[t] && (e._asyncData[t].data.value = ie(e._asyncData[t]._default()),
    e._asyncData[t].error.value = void 0,
    e._asyncData[t].status.value = "idle"),
    t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0),
    e._asyncDataPromises[t] = void 0)
}
function _w(e, t) {
    const n = {};
    for (const r of t)
        n[r] = e[r];
    return n
}
function bc(e, t, n, r, o) {
    e.payload._errors[t] ??= void 0;
    const s = r.getCachedData !== Hd
      , i = n
      , a = r.deep ? he : xe
      , l = o !== void 0
      , u = e.hook("app:data:refresh", async f => {
        (!f || f.includes(t)) && await c.execute({
            cause: "refresh:hook"
        })
    }
    )
      , c = {
        data: a(l ? o : r.default()),
        pending: le( () => c.status.value === "pending"),
        error: Wr(e.payload._errors, t),
        status: xe("idle"),
        execute: (...f) => {
            const [d,h=void 0] = f
              , g = d && h === void 0 && typeof d == "object" ? d : {};
            if (e._asyncDataPromises[t]) {
                if ((g.dedupe ?? r.dedupe) === "defer")
                    return e._asyncDataPromises[t];
                e._asyncDataPromises[t].cancelled = !0
            }
            {
                const v = "cachedData" in g ? g.cachedData : r.getCachedData(t, e, {
                    cause: g.cause ?? "refresh:manual"
                });
                if (v !== void 0)
                    return e.payload.data[t] = c.data.value = v,
                    c.error.value = void 0,
                    c.status.value = "success",
                    Promise.resolve(v)
            }
            c.status.value = "pending";
            const p = new Promise( (v, k) => {
                try {
                    v(i(e))
                } catch (w) {
                    k(w)
                }
            }
            ).then(async v => {
                if (p.cancelled)
                    return e._asyncDataPromises[t];
                let k = v;
                r.transform && (k = await r.transform(v)),
                r.pick && (k = _w(k, r.pick)),
                e.payload.data[t] = k,
                c.data.value = k,
                c.error.value = void 0,
                c.status.value = "success"
            }
            ).catch(v => {
                if (p.cancelled)
                    return e._asyncDataPromises[t];
                c.error.value = fn(v),
                c.data.value = ie(r.default()),
                c.status.value = "error"
            }
            ).finally( () => {
                p.cancelled || delete e._asyncDataPromises[t]
            }
            );
            return e._asyncDataPromises[t] = p,
            e._asyncDataPromises[t]
        }
        ,
        _execute: cw( (...f) => c.execute(...f), 0, {
            leading: !0
        }),
        _default: r.default,
        _deps: 0,
        _init: !0,
        _hash: void 0,
        _off: () => {
            u(),
            e._asyncData[t]?._init && (e._asyncData[t]._init = !1),
            s || pt( () => {
                e._asyncData[t]?._init || (Dd(e, t),
                c.execute = () => Promise.resolve())
            }
            )
        }
    };
    return c
}
const vw = () => {}
  , Hd = (e, t, n) => {
    if (t.isHydrating)
        return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook")
        return t.static.data[e]
}
;
function bw(e, t, n) {
    const [r={},o] = [{}, t]
      , s = le( () => ae(e))
      , i = le( () => ae(r.key) || "$f" + Fn([o, typeof s.value == "string" ? s.value : "", ...ww(r)]));
    if (!r.baseURL && typeof s.value == "string" && s.value[0] === "/" && s.value[1] === "/")
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {server: a, lazy: l, default: u, transform: c, pick: f, watch: d, immediate: h, getCachedData: g, deep: p, dedupe: v, ...k} = r
      , w = ot({
        ...Vg,
        ...k,
        cache: typeof r.cache == "boolean" ? void 0 : r.cache
    })
      , m = {
        server: a,
        lazy: l,
        default: u,
        transform: c,
        pick: f,
        immediate: h,
        getCachedData: g,
        deep: p,
        dedupe: v,
        watch: d === !1 ? [] : [...d || [], w]
    };
    let _;
    return Nd(d === !1 ? i.value : i, () => {
        _?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),
        _ = typeof AbortController < "u" ? new AbortController : {};
        const T = ae(r.timeout);
        let x;
        return T && (x = setTimeout( () => _.abort(new DOMException("Request aborted due to timeout.","AbortError")), T),
        _.signal.onabort = () => clearTimeout(x)),
        (r.$fetch || globalThis.$fetch)(s.value, {
            signal: _.signal,
            ...w
        }).finally( () => {
            clearTimeout(x)
        }
        )
    }
    , m)
}
function ww(e) {
    const t = [ae(e.method)?.toUpperCase() || "GET", ae(e.baseURL)];
    for (const n of [e.params || e.query]) {
        const r = ae(n);
        if (!r)
            continue;
        const o = {};
        for (const [s,i] of Object.entries(r))
            o[ae(s)] = ae(i);
        t.push(o)
    }
    if (e.body) {
        const n = ae(e.body);
        if (!n)
            t.push(Fn(n));
        else if (n instanceof ArrayBuffer)
            t.push(Fn(Object.fromEntries([...new Uint8Array(n).entries()].map( ([r,o]) => [r, o.toString()]))));
        else if (n instanceof FormData) {
            const r = {};
            for (const o of n.entries()) {
                const [s,i] = o;
                r[s] = i instanceof File ? i.name : i
            }
            t.push(Fn(r))
        } else if (nr(n))
            t.push(Fn(ot(n)));
        else
            try {
                t.push(Fn(n))
            } catch {
                console.warn("[useFetch] Failed to hash body", n)
            }
    }
    return t
}
const Ew = {
    class: "col-span-2 p-3"
}
  , kw = {
    key: 0,
    class: "tori-card space-x-3 font-medium flex flex-row"
}
  , Tw = {
    key: 0
}
  , Sw = {
    key: 1
}
  , xw = {
    key: 2
}
  , Cw = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
}
  , Rw = {
    key: 1,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
}
  , Aw = {
    key: 0,
    class: "col-span-1 z-10 relative flex flex-col-reverse md:flex-col"
}
  , Pw = {
    class: "tori-card m-3 p-3"
}
  , Ow = {
    class: "text-stone-200 font-[600] text-sm mt-1.5"
}
  , Mw = {
    class: "mt-3"
}
  , Lw = {
    class: "flex flex-row items-center text-sm text-stone-200"
}
  , Iw = ["href"]
  , Nw = {
    key: 0
}
  , Dw = {
    class: "tori-card m-3 p-3"
}
  , Hw = {
    class: "flex flex-col md:flex-row gap-3 items-center text-xs font-bold"
}
  , $w = {
    href: "https://id.tori.dog/manage",
    class: "flex flex-row items-center space-x-3",
    target: "_blank",
    rel: "noopener"
}
  , jw = ["src"]
  , Fw = {
    class: "text-primary-500"
}
  , Bw = {
    key: 1
}
  , Uw = {
    key: 0,
    class: "tori-card m-3",
    href: "https://www.patreon.com/c/rimjobdog",
    target: "_blank",
    rel: "noopener"
}
  , Vw = st({
    __name: "app",
    async setup(e) {
        let t, n;
        const r = ya()
          , o = he(r.path === "/")
          , s = he(r.path.startsWith("/ama"))
          , i = he("")
          , a = he(!0)
          , l = he(!1)
          , {data: u} = ([t,n] = wu( () => Nd("profile", () => bw("/api/profile", "$3oRWNoOsuN").then(g => g?.data?.value?.object))),
        t = await t,
        n(),
        t);
        Ot("profile", u);
        const c = he(!1)
          , f = he(!1);
        Ot("pageRequestsFullSize", c),
        Se(c, () => {
            c.value || (f.value = !1)
        }
        ),
        it( () => {
            window.innerWidth < 768 && (a.value = !1)
        }
        );
        const d = () => {
            f.value = !f.value
        }
        ;
        Se( () => r.path, g => {
            o.value = g === "/",
            i.value = {
                "": "",
                music: "music",
                toys: "toys"
            }[g?.split("/")[1]] || ""
        }
        , {
            immediate: !0
        });
        const h = {
            labs: {
                "--ui-primary": "var(--color-blue-500)",
                "--ui-color-primary-50": "var(--color-blue-50)",
                "--ui-color-primary-100": "var(--color-blue-100)",
                "--ui-color-primary-200": "var(--color-blue-200)",
                "--ui-color-primary-300": "var(--color-blue-300)",
                "--ui-color-primary-400": "var(--color-blue-400)",
                "--ui-color-primary-500": "var(--color-blue-500)",
                "--ui-color-primary-600": "var(--color-blue-600)",
                "--ui-color-primary-700": "var(--color-blue-700)",
                "--ui-color-primary-800": "var(--color-blue-800)",
                "--ui-color-primary-900": "var(--color-blue-900)",
                "--ui-color-primary-950": "var(--color-blue-950)"
            }
        };
        return va({
            title: "Queen of Rimjobs, Suki.",
            link: [{
                rel: "icon",
                type: "image/png",
                href: "/favicon.png"
            }],
            meta: [{
                name: "description",
                content: "26, She / Her, Software engineer~ <3"
            }, {
                name: "theme-color",
                content: "#3b82f6"
            }, {
                name: "twitter:card",
                content: "summary_large_image"
            }, {
                name: "twitter:image",
                content: "https://images.unsplash.com/photo-1560837616-fee1f3d8753a?q=80&w=774&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }, {
                name: "twitter:creator",
                content: "@suki_knot"
            }, {
                name: "keywords",
                content: "Cloudflare, Workers, Tutorials, Serverless, Edge Computing, JavaScript, Python, API, Form Handling, Redirects, Personalization, Static Sites"
            }, {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }]
        }),
        Se( () => r.path, async g => {
            Id("page.view", r.path)
        }
        , {
            immediate: !0
        }),
        (g, p) => {
            const v = q1
              , k = K1
              , w = Md
              , m = ew;
            return be(),
            Ie("div", {
                class: "font-[400] relative text-stone-200 min-h-screen relative",
                style: On(h.labs)
            }, [ue(k, null, {
                default: _t( () => [ue(v, {
                    "glow-radius": 145,
                    enabled: a.value
                }, null, 8, ["enabled"])]),
                _: 1
            }), p[20] || (p[20] = oi('<div class="fixed top-0 left-0 z-[1] h-screen w-full overflow-hidden" style="pointer-events:none;" id="background-portal"></div><div class="hidden"><div class="bg-red-500 text-red-500"></div><div class="bg-blue-500 text-blue-500"></div><div class="bg-amber-500 text-amber-500"></div><div class="bg-yellow-500 text-yellow-500"></div><div class="bg-lime-500 text-lime-500"></div><div class="bg-green-500 text-green-500"></div><div class="bg-emerald-500 text-emerald-500"></div><div class="bg-teal-500 text-teal-500"></div><div class="bg-cyan-500 text-cyan-500"></div><div class="bg-sky-500 text-sky-500"></div><div class="bg-blue-500 text-blue-500"></div><div class="bg-sky-500 text-sky-500"></div><div class="bg-violet-500 text-violet-500"></div><div class="bg-purple-500 text-purple-500"></div><div class="bg-fuchsia-500 text-fuchsia-500"></div><div class="bg-pink-500 text-pink-500"></div><div class="bg-rose-500 text-rose-500"></div></div><div id="audio-effect" class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-600/40 via-primary-600/20 to-transparent animate-gradient-x z-[0] pointer-none" style="opacity:0;pointer-events:none;transition:opacity 0.25s ease-out;"></div><div id="visual" class="fixed z-10 bottom-0 left-0 w-full h-[10rem] w-full pointer-none" style="pointer-events:none;"></div>', 4)), te("div", {
                class: dn(`grid ${f.value ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"} font-medium max-w-4xl mx-auto z-10 relative`),
                style: {
                    isolation: "isolate"
                }
            }, [te("div", Ew, [!o.value && !s.value ? (be(),
            Ie("div", kw, [ue(w, {
                to: "/",
                class: "text-primary-500 hover:underline flex flex-row items-center"
            }, {
                default: _t( () => [...p[1] || (p[1] = [te("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "size-6 mr-1"
                }, [te("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                })], -1), Ke(" Home ", -1)])]),
                _: 1
            }), p[6] || (p[6] = te("div", {
                class: "flex-grow"
            }, null, -1)), ie(r).path.includes("clicker") ? (be(),
            Ie("div", Tw, [ue(w, {
                class: "px-3 py-1.5 bg-primary-600 rounded-lg text-stone-200 cursor-pointer text-xs inline-block",
                to: "/clicker/search"
            }, {
                default: _t( () => [...p[2] || (p[2] = [Ke(" Search ", -1)])]),
                _: 1
            })])) : on("", !0), ie(r).path.includes("clicker") ? (be(),
            Ie("div", Sw, [ue(w, {
                class: "px-3 py-1.5 bg-primary-600 rounded-lg text-stone-200 cursor-pointer text-xs inline-block",
                to: "/clicker/manage"
            }, {
                default: _t( () => [...p[3] || (p[3] = [Ke(" Make your own~ ", -1)])]),
                _: 1
            })])) : on("", !0), c.value ? (be(),
            Ie("div", xw, [te("a", {
                class: "text-primary-500 cursor-pointer",
                onClick: d
            }, [f.value ? (be(),
            Ie("svg", Rw, [...p[5] || (p[5] = [te("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
            }, null, -1)])])) : (be(),
            Ie("svg", Cw, [...p[4] || (p[4] = [te("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            }, null, -1)])]))])])) : on("", !0)])) : on("", !0), ue(m)]), f.value ? on("", !0) : (be(),
            Ie("div", Aw, [te("div", Pw, [p[12] || (p[12] = oi('<a href="https://feralcatalyst.art/" target="_blank" rel="noopener"><img src="' + sw + '" class="mb-2 rounded-sm overflow-hidden size-32 md:size-[unset] object-cover" alt="Tori&#39;s avatar."></a><h1 class="text-4xl font-bold text-primary-500"> Suki. </h1><p class="text-xs text-stone-500 font-medium mb-1 tracking-wide"><a class="" href="https://twitter.com/seris_knot" target="_blank" rel="noopener"> @seris_knot </a></p>', 3)), te("p", Ow, [Ke(" 26, She / Her, " + Ut(ie(u).Class) + ". Join my ", 1), p[7] || (p[7] = te("a", {
                href: "https://rimjob.dog/chat",
                class: "text-primary-500"
            }, "Discord", -1)), p[8] || (p[8] = Ke()), p[9] || (p[9] = te("i", {
                class: "fa-solid fa-heart"
            }, null, -1))]), te("div", Mw, [p[11] || (p[11] = te("p", {
                class: "text-stone-500 text-sm"
            }, " Status effects ", -1)), (be(!0),
            Ie(Pe, null, vu(ie(u).Statuses, _ => (be(),
            Ie("div", null, [te("div", Lw, [te("i", {
                class: dn(`fa-solid ${_.Icon} mr-1`)
            }, null, 2), Ke(" " + Ut(_.Status) + " ", 1), p[10] || (p[10] = te("div", {
                class: "flex-grow"
            }, null, -1)), te("a", {
                class: "text-stone-600 block ml-3",
                href: `https://twitter.com/${_.Cause.split("@")[1]}`,
                target: "_blank",
                rel: "noopener"
            }, Ut(_.Cause), 9, Iw)])]))), 256))])]), ue(k, null, {
                default: _t( () => [ie(bt)?.id ? (be(),
                Ie("div", Nw, [te("div", Dw, [te("div", Hw, [te("a", $w, [te("img", {
                    src: `https://id.tori.dog/api/users/${ie(bt).id}/avatar`,
                    alt: "Your avatar",
                    class: "w-12 h-12 rounded-full border-2 border-stone-900 object-cover cursor-pointer"
                }, null, 8, jw)]), te("div", null, [p[13] || (p[13] = Ke(" Logged in as", -1)), p[14] || (p[14] = te("br", null, null, -1)), te("span", Fw, Ut(ie(bt).email), 1), p[15] || (p[15] = Ke(". ", -1)), p[16] || (p[16] = te("br", null, null, -1)), te("a", {
                    onClick: p[0] || (p[0] = (..._) => ie(vc) && ie(vc)(..._)),
                    class: "text-stone-600 cursor-pointer block mt-1"
                }, " Not you? ")])])])])) : (be(),
                Ie("div", Bw, [ue(w, {
                    to: `https://id.tori.dog/authorize?redirect=${l.value ? "http://localhost:3000" : "https://rimjob.dog"}/torii`,
                    class: "p-3 m-3 border-2 border-stone-900 rounded-lg bg-stone-950 text-sm text-stone-500 font-bold block text-center cursor-pointer hover:bg-stone-900/50"
                }, {
                    default: _t( () => [...p[17] || (p[17] = [Ke(" Log in / Sign up ", -1)])]),
                    _: 1
                }, 8, ["to"])]))]),
                _: 1
            }), ie(bt)?.subscription?.isSubscribed ? on("", !0) : (be(),
            Ie("a", Uw, [...p[18] || (p[18] = [te("div", {
                class: "flex flex-row items-center"
            }, [te("div", null, [te("p", {
                class: "text-sm text-stone-200 font-medium"
            }, [Ke(" Support me on "), te("span", {
                class: "text-primary-500"
            }, "Patreon"), Ke("! ")]), te("p", {
                class: "text-xs text-stone-500"
            }, " Get early access to new features, and help support the site! ")])], -1)])])), p[19] || (p[19] = te("div", {
                id: "sidebar-portal"
            }, null, -1))]))], 2)], 4)
        }
    }
})
  , Ww = {
    key: 0,
    class: "font-mono font-medium text-stone-200 p-12"
}
  , zw = ["src"]
  , qw = {
    class: "text-8xl font-bold"
}
  , Kw = {
    class: "text-3xl"
}
  , Gw = st({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        const t = e
          , n = he("");
        return it( () => {
            fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()).then(r => {
                n.value = r.message
            }
            )
        }
        ),
        va({
            title: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error",
            meta: [{
                name: "twitter:title",
                content: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error"
            }, {
                property: "theme-color",
                content: "#b91c1c"
            }, {
                name: "twitter:description",
                content: t.error ? `${t.error.statusCode} - ${t.error.statusMessage}` : "Error"
            }]
        }),
        (r, o) => {
            const s = Md;
            return e.error ? (be(),
            Ie("div", Ww, [ue(s, {
                to: "/",
                class: "text-primary-500 mb-6 inline-block text-xl"
            }, {
                default: _t( () => [...o[0] || (o[0] = [Ke(" Home ", -1)])]),
                _: 1
            }), te("img", {
                class: "mb-3 rounded-lg shadow-lg max-w-full h-[500px] bg-stone-800",
                src: ie(n)
            }, null, 8, zw), o[1] || (o[1] = te("b", {
                class: "text-primary-500 block mb-1 text-xl"
            }, "Error", -1)), te("h1", qw, Ut(e.error.statusCode), 1), te("p", Kw, Ut(e.error.statusMessage), 1)])) : on("", !0)
        }
    }
})
  , Yw = {
    key: 0
}
  , wc = {
    __name: "nuxt-root",
    setup(e) {
        const t = () => null
          , n = we()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const u = n.hooks.hookOnce("app:error", r);
            Ye().beforeEach(u)
        }
        const o = !1;
        Ot(ds, ya()),
        n.hooks.callHookWith(u => u.map(c => c()), "vue:setup");
        const s = hs()
          , i = !1
          , a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
        Xi( (u, c, f) => {
            if (n.hooks.callHook("vue:error", u, c, f).catch(d => console.error("[nuxt] Error in `vue:error` hook", d)),
            a.test(navigator.userAgent))
                return n.hooks.callHook("app:error", u),
                console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u),
                !1;
            if (Wf(u) && (u.fatal || u.unhandled))
                return n.runWithContext( () => vn(u)),
                !1
        }
        );
        const l = !1;
        return (u, c) => (be(),
        Ft(aa, {
            onResolve: ie(r)
        }, {
            default: _t( () => [ie(i) ? (be(),
            Ie("div", Yw)) : ie(s) ? (be(),
            Ft(ie(Gw), {
                key: 1,
                error: ie(s)
            }, null, 8, ["error"])) : ie(l) ? (be(),
            Ft(ie(t), {
                key: 2,
                context: ie(l)
            }, null, 8, ["context"])) : ie(o) ? (be(),
            Ft(_u(ie(o)), {
                key: 3
            })) : (be(),
            Ft(ie(Vw), {
                key: 4
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Ec;
{
    let e;
    Ec = async function() {
        if (e)
            return e;
        const n = !!(window.__NUXT__?.serverRendered ?? document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true")
          , r = n ? fa(wc) : $o(wc)
          , o = Kg({
            vueApp: r
        });
        async function s(i) {
            await o.callHook("app:error", i),
            o.payload.error ||= fn(i)
        }
        r.config.errorHandler = s,
        o.hook("app:suspense:resolve", () => {
            r.config.errorHandler === s && (r.config.errorHandler = void 0)
        }
        ),
        !n && Tl.id && o.hook("app:suspense:resolve", () => {
            document.getElementById(Tl.id)?.remove()
        }
        );
        try {
            await Jg(o, h1)
        } catch (i) {
            s(i)
        }
        try {
            await o.hooks.callHook("app:created", r),
            await o.hooks.callHook("app:beforeMount", r),
            r.mount(Wg),
            await o.hooks.callHook("app:mounted", r),
            await pt()
        } catch (i) {
            s(i)
        }
        return r
    }
    ,
    e = Ec().catch(t => {
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Ln as $, Qh as A, jp as B, Ft as C, _t as D, Yu as E, Pe as F, ia as G, ae as H, ot as I, ue as J, on as K, xc as L, Gu as M, O0 as N, dn as O, ya as P, oE as Q, wp as R, iE as S, _p as T, sE as U, wu as V, va as W, bt as X, ff as Y, ca as Z, K1 as _, be as a, aE as a0, lE as a1, oi as a2, Md as a3, cE as a4, L0 as a5, _u as a6, Ne as a7, Me as a8, Yc as a9, ch as aA, uh as aB, Sc as aC, Ze as aD, Xd as aE, Qw as aF, Jw as aG, yf as aH, ar as aI, Xw as aJ, Cf as aK, fs as aL, fd as aM, tE as aN, nE as aO, we as aP, bb as aQ, rE as aR, Ot as aa, Vr as ab, $i as ac, Lc as ad, xe as ae, bp as af, Ce as ag, Et as ah, Wr as ai, Gt as aj, ne as ak, $o as al, nt as am, ye as an, me as ao, Mi as ap, dt as aq, jd as ar, rr as as, re as at, ge as au, z as av, tr as aw, En as ax, ah as ay, lh as az, te as b, Ie as c, st as d, ie as e, Ke as f, vu as g, eE as h, Re as i, Pd as j, Zw as k, le as l, Se as m, On as n, it as o, Bf as p, pt as q, he as r, Ae as s, Ut as t, Ye as u, Ho as v, gp as w, Vn as x, De as y, ir as z};
>>>>>>> Stashed changes
