goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20539 = coll;
var G__20540 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20539,G__20540) : shadow.dom.lazy_native_coll_seq.call(null,G__20539,G__20540));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20569 = arguments.length;
switch (G__20569) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20573 = arguments.length;
switch (G__20573) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20579 = arguments.length;
switch (G__20579) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20584 = arguments.length;
switch (G__20584) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20591 = arguments.length;
switch (G__20591) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__20594 = document;
var G__20595 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20594,G__20595);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__20596 = shadow.dom.dom_node(parent);
var G__20597 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20596,G__20597);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__20599 = shadow.dom.dom_node(el);
var G__20600 = cls;
return goog.dom.classlist.add(G__20599,G__20600);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__20601 = shadow.dom.dom_node(el);
var G__20602 = cls;
return goog.dom.classlist.remove(G__20601,G__20602);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20606 = arguments.length;
switch (G__20606) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__20607 = shadow.dom.dom_node(el);
var G__20608 = cls;
return goog.dom.classlist.toggle(G__20607,G__20608);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20612){if((e20612 instanceof Object)){
var e = e20612;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20612;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20617 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20618 = null;
var count__20619 = (0);
var i__20620 = (0);
while(true){
if((i__20620 < count__20619)){
var el = chunk__20618.cljs$core$IIndexed$_nth$arity$2(null,i__20620);
var handler_21122__$1 = ((function (seq__20617,chunk__20618,count__20619,i__20620,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20617,chunk__20618,count__20619,i__20620,el))
;
var G__20623_21123 = el;
var G__20624_21124 = cljs.core.name(ev);
var G__20625_21125 = handler_21122__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20623_21123,G__20624_21124,G__20625_21125) : shadow.dom.dom_listen.call(null,G__20623_21123,G__20624_21124,G__20625_21125));


var G__21126 = seq__20617;
var G__21127 = chunk__20618;
var G__21128 = count__20619;
var G__21129 = (i__20620 + (1));
seq__20617 = G__21126;
chunk__20618 = G__21127;
count__20619 = G__21128;
i__20620 = G__21129;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20617);
if(temp__5457__auto__){
var seq__20617__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20617__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20617__$1);
var G__21132 = cljs.core.chunk_rest(seq__20617__$1);
var G__21133 = c__4461__auto__;
var G__21134 = cljs.core.count(c__4461__auto__);
var G__21135 = (0);
seq__20617 = G__21132;
chunk__20618 = G__21133;
count__20619 = G__21134;
i__20620 = G__21135;
continue;
} else {
var el = cljs.core.first(seq__20617__$1);
var handler_21136__$1 = ((function (seq__20617,chunk__20618,count__20619,i__20620,el,seq__20617__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20617,chunk__20618,count__20619,i__20620,el,seq__20617__$1,temp__5457__auto__))
;
var G__20628_21138 = el;
var G__20629_21139 = cljs.core.name(ev);
var G__20630_21140 = handler_21136__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20628_21138,G__20629_21139,G__20630_21140) : shadow.dom.dom_listen.call(null,G__20628_21138,G__20629_21139,G__20630_21140));


var G__21142 = cljs.core.next(seq__20617__$1);
var G__21143 = null;
var G__21144 = (0);
var G__21145 = (0);
seq__20617 = G__21142;
chunk__20618 = G__21143;
count__20619 = G__21144;
i__20620 = G__21145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20635 = arguments.length;
switch (G__20635) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__20641 = shadow.dom.dom_node(el);
var G__20642 = cljs.core.name(ev);
var G__20643 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20641,G__20642,G__20643) : shadow.dom.dom_listen.call(null,G__20641,G__20642,G__20643));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__20645 = shadow.dom.dom_node(el);
var G__20646 = cljs.core.name(ev);
var G__20647 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__20645,G__20646,G__20647) : shadow.dom.dom_listen_remove.call(null,G__20645,G__20646,G__20647));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20652 = cljs.core.seq(events);
var chunk__20653 = null;
var count__20654 = (0);
var i__20655 = (0);
while(true){
if((i__20655 < count__20654)){
var vec__20656 = chunk__20653.cljs$core$IIndexed$_nth$arity$2(null,i__20655);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21151 = seq__20652;
var G__21152 = chunk__20653;
var G__21153 = count__20654;
var G__21154 = (i__20655 + (1));
seq__20652 = G__21151;
chunk__20653 = G__21152;
count__20654 = G__21153;
i__20655 = G__21154;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20652);
if(temp__5457__auto__){
var seq__20652__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20652__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20652__$1);
var G__21157 = cljs.core.chunk_rest(seq__20652__$1);
var G__21158 = c__4461__auto__;
var G__21159 = cljs.core.count(c__4461__auto__);
var G__21160 = (0);
seq__20652 = G__21157;
chunk__20653 = G__21158;
count__20654 = G__21159;
i__20655 = G__21160;
continue;
} else {
var vec__20660 = cljs.core.first(seq__20652__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21161 = cljs.core.next(seq__20652__$1);
var G__21162 = null;
var G__21163 = (0);
var G__21164 = (0);
seq__20652 = G__21161;
chunk__20653 = G__21162;
count__20654 = G__21163;
i__20655 = G__21164;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20663 = cljs.core.seq(styles);
var chunk__20664 = null;
var count__20665 = (0);
var i__20666 = (0);
while(true){
if((i__20666 < count__20665)){
var vec__20668 = chunk__20664.cljs$core$IIndexed$_nth$arity$2(null,i__20666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(1),null);
var G__20671_21165 = dom;
var G__20672_21166 = cljs.core.name(k);
var G__20673_21167 = (((v == null))?"":v);
goog.style.setStyle(G__20671_21165,G__20672_21166,G__20673_21167);


var G__21168 = seq__20663;
var G__21169 = chunk__20664;
var G__21170 = count__20665;
var G__21171 = (i__20666 + (1));
seq__20663 = G__21168;
chunk__20664 = G__21169;
count__20665 = G__21170;
i__20666 = G__21171;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20663);
if(temp__5457__auto__){
var seq__20663__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20663__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20663__$1);
var G__21172 = cljs.core.chunk_rest(seq__20663__$1);
var G__21173 = c__4461__auto__;
var G__21174 = cljs.core.count(c__4461__auto__);
var G__21175 = (0);
seq__20663 = G__21172;
chunk__20664 = G__21173;
count__20665 = G__21174;
i__20666 = G__21175;
continue;
} else {
var vec__20678 = cljs.core.first(seq__20663__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20678,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20678,(1),null);
var G__20682_21176 = dom;
var G__20683_21177 = cljs.core.name(k);
var G__20684_21178 = (((v == null))?"":v);
goog.style.setStyle(G__20682_21176,G__20683_21177,G__20684_21178);


var G__21179 = cljs.core.next(seq__20663__$1);
var G__21180 = null;
var G__21181 = (0);
var G__21182 = (0);
seq__20663 = G__21179;
chunk__20664 = G__21180;
count__20665 = G__21181;
i__20666 = G__21182;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20688_21183 = key;
var G__20688_21184__$1 = (((G__20688_21183 instanceof cljs.core.Keyword))?G__20688_21183.fqn:null);
switch (G__20688_21184__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21187 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_21187,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_21187,"aria-");
}
})())){
el.setAttribute(ks_21187,value);
} else {
(el[ks_21187] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__20697 = shadow.dom.dom_node(el);
var G__20698 = cls;
return goog.dom.classlist.contains(G__20697,G__20698);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20707){
var map__20709 = p__20707;
var map__20709__$1 = (((((!((map__20709 == null))))?(((((map__20709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20709):map__20709);
var props = map__20709__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20709__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20713 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20713,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20713,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20713,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20717 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20717,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20717;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20719 = arguments.length;
switch (G__20719) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20723){
var vec__20725 = p__20723;
var seq__20726 = cljs.core.seq(vec__20725);
var first__20727 = cljs.core.first(seq__20726);
var seq__20726__$1 = cljs.core.next(seq__20726);
var nn = first__20727;
var first__20727__$1 = cljs.core.first(seq__20726__$1);
var seq__20726__$2 = cljs.core.next(seq__20726__$1);
var np = first__20727__$1;
var nc = seq__20726__$2;
var node = vec__20725;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20729 = nn;
var G__20730 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20729,G__20730) : create_fn.call(null,G__20729,G__20730));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20733 = nn;
var G__20734 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20733,G__20734) : create_fn.call(null,G__20733,G__20734));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20739 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20739,(1),null);
var seq__20743_21204 = cljs.core.seq(node_children);
var chunk__20744_21205 = null;
var count__20745_21206 = (0);
var i__20746_21207 = (0);
while(true){
if((i__20746_21207 < count__20745_21206)){
var child_struct_21209 = chunk__20744_21205.cljs$core$IIndexed$_nth$arity$2(null,i__20746_21207);
var children_21210 = shadow.dom.dom_node(child_struct_21209);
if(cljs.core.seq_QMARK_(children_21210)){
var seq__20749_21211 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21210));
var chunk__20751_21212 = null;
var count__20752_21213 = (0);
var i__20753_21214 = (0);
while(true){
if((i__20753_21214 < count__20752_21213)){
var child_21217 = chunk__20751_21212.cljs$core$IIndexed$_nth$arity$2(null,i__20753_21214);
if(cljs.core.truth_(child_21217)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21217);


var G__21219 = seq__20749_21211;
var G__21220 = chunk__20751_21212;
var G__21221 = count__20752_21213;
var G__21222 = (i__20753_21214 + (1));
seq__20749_21211 = G__21219;
chunk__20751_21212 = G__21220;
count__20752_21213 = G__21221;
i__20753_21214 = G__21222;
continue;
} else {
var G__21223 = seq__20749_21211;
var G__21224 = chunk__20751_21212;
var G__21225 = count__20752_21213;
var G__21226 = (i__20753_21214 + (1));
seq__20749_21211 = G__21223;
chunk__20751_21212 = G__21224;
count__20752_21213 = G__21225;
i__20753_21214 = G__21226;
continue;
}
} else {
var temp__5457__auto___21227 = cljs.core.seq(seq__20749_21211);
if(temp__5457__auto___21227){
var seq__20749_21230__$1 = temp__5457__auto___21227;
if(cljs.core.chunked_seq_QMARK_(seq__20749_21230__$1)){
var c__4461__auto___21231 = cljs.core.chunk_first(seq__20749_21230__$1);
var G__21232 = cljs.core.chunk_rest(seq__20749_21230__$1);
var G__21233 = c__4461__auto___21231;
var G__21234 = cljs.core.count(c__4461__auto___21231);
var G__21235 = (0);
seq__20749_21211 = G__21232;
chunk__20751_21212 = G__21233;
count__20752_21213 = G__21234;
i__20753_21214 = G__21235;
continue;
} else {
var child_21238 = cljs.core.first(seq__20749_21230__$1);
if(cljs.core.truth_(child_21238)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21238);


var G__21241 = cljs.core.next(seq__20749_21230__$1);
var G__21242 = null;
var G__21243 = (0);
var G__21244 = (0);
seq__20749_21211 = G__21241;
chunk__20751_21212 = G__21242;
count__20752_21213 = G__21243;
i__20753_21214 = G__21244;
continue;
} else {
var G__21245 = cljs.core.next(seq__20749_21230__$1);
var G__21246 = null;
var G__21247 = (0);
var G__21248 = (0);
seq__20749_21211 = G__21245;
chunk__20751_21212 = G__21246;
count__20752_21213 = G__21247;
i__20753_21214 = G__21248;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21210);
}


var G__21249 = seq__20743_21204;
var G__21250 = chunk__20744_21205;
var G__21251 = count__20745_21206;
var G__21252 = (i__20746_21207 + (1));
seq__20743_21204 = G__21249;
chunk__20744_21205 = G__21250;
count__20745_21206 = G__21251;
i__20746_21207 = G__21252;
continue;
} else {
var temp__5457__auto___21253 = cljs.core.seq(seq__20743_21204);
if(temp__5457__auto___21253){
var seq__20743_21254__$1 = temp__5457__auto___21253;
if(cljs.core.chunked_seq_QMARK_(seq__20743_21254__$1)){
var c__4461__auto___21255 = cljs.core.chunk_first(seq__20743_21254__$1);
var G__21256 = cljs.core.chunk_rest(seq__20743_21254__$1);
var G__21257 = c__4461__auto___21255;
var G__21258 = cljs.core.count(c__4461__auto___21255);
var G__21259 = (0);
seq__20743_21204 = G__21256;
chunk__20744_21205 = G__21257;
count__20745_21206 = G__21258;
i__20746_21207 = G__21259;
continue;
} else {
var child_struct_21260 = cljs.core.first(seq__20743_21254__$1);
var children_21262 = shadow.dom.dom_node(child_struct_21260);
if(cljs.core.seq_QMARK_(children_21262)){
var seq__20760_21263 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21262));
var chunk__20762_21264 = null;
var count__20763_21265 = (0);
var i__20764_21266 = (0);
while(true){
if((i__20764_21266 < count__20763_21265)){
var child_21268 = chunk__20762_21264.cljs$core$IIndexed$_nth$arity$2(null,i__20764_21266);
if(cljs.core.truth_(child_21268)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21268);


var G__21269 = seq__20760_21263;
var G__21270 = chunk__20762_21264;
var G__21271 = count__20763_21265;
var G__21272 = (i__20764_21266 + (1));
seq__20760_21263 = G__21269;
chunk__20762_21264 = G__21270;
count__20763_21265 = G__21271;
i__20764_21266 = G__21272;
continue;
} else {
var G__21273 = seq__20760_21263;
var G__21274 = chunk__20762_21264;
var G__21275 = count__20763_21265;
var G__21276 = (i__20764_21266 + (1));
seq__20760_21263 = G__21273;
chunk__20762_21264 = G__21274;
count__20763_21265 = G__21275;
i__20764_21266 = G__21276;
continue;
}
} else {
var temp__5457__auto___21280__$1 = cljs.core.seq(seq__20760_21263);
if(temp__5457__auto___21280__$1){
var seq__20760_21281__$1 = temp__5457__auto___21280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20760_21281__$1)){
var c__4461__auto___21282 = cljs.core.chunk_first(seq__20760_21281__$1);
var G__21284 = cljs.core.chunk_rest(seq__20760_21281__$1);
var G__21285 = c__4461__auto___21282;
var G__21286 = cljs.core.count(c__4461__auto___21282);
var G__21287 = (0);
seq__20760_21263 = G__21284;
chunk__20762_21264 = G__21285;
count__20763_21265 = G__21286;
i__20764_21266 = G__21287;
continue;
} else {
var child_21288 = cljs.core.first(seq__20760_21281__$1);
if(cljs.core.truth_(child_21288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21288);


var G__21289 = cljs.core.next(seq__20760_21281__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__20760_21263 = G__21289;
chunk__20762_21264 = G__21290;
count__20763_21265 = G__21291;
i__20764_21266 = G__21292;
continue;
} else {
var G__21293 = cljs.core.next(seq__20760_21281__$1);
var G__21294 = null;
var G__21295 = (0);
var G__21296 = (0);
seq__20760_21263 = G__21293;
chunk__20762_21264 = G__21294;
count__20763_21265 = G__21295;
i__20764_21266 = G__21296;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21262);
}


var G__21301 = cljs.core.next(seq__20743_21254__$1);
var G__21302 = null;
var G__21303 = (0);
var G__21304 = (0);
seq__20743_21204 = G__21301;
chunk__20744_21205 = G__21302;
count__20745_21206 = G__21303;
i__20746_21207 = G__21304;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__20766 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__20766);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20768 = cljs.core.seq(node);
var chunk__20769 = null;
var count__20770 = (0);
var i__20771 = (0);
while(true){
if((i__20771 < count__20770)){
var n = chunk__20769.cljs$core$IIndexed$_nth$arity$2(null,i__20771);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21312 = seq__20768;
var G__21313 = chunk__20769;
var G__21314 = count__20770;
var G__21315 = (i__20771 + (1));
seq__20768 = G__21312;
chunk__20769 = G__21313;
count__20770 = G__21314;
i__20771 = G__21315;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20768);
if(temp__5457__auto__){
var seq__20768__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20768__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20768__$1);
var G__21319 = cljs.core.chunk_rest(seq__20768__$1);
var G__21320 = c__4461__auto__;
var G__21321 = cljs.core.count(c__4461__auto__);
var G__21322 = (0);
seq__20768 = G__21319;
chunk__20769 = G__21320;
count__20770 = G__21321;
i__20771 = G__21322;
continue;
} else {
var n = cljs.core.first(seq__20768__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21327 = cljs.core.next(seq__20768__$1);
var G__21328 = null;
var G__21329 = (0);
var G__21330 = (0);
seq__20768 = G__21327;
chunk__20769 = G__21328;
count__20770 = G__21329;
i__20771 = G__21330;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__20772 = shadow.dom.dom_node(new$);
var G__20773 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__20772,G__20773);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20776 = arguments.length;
switch (G__20776) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20781 = arguments.length;
switch (G__20781) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20794 = arguments.length;
switch (G__20794) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___21349 = arguments.length;
var i__4642__auto___21350 = (0);
while(true){
if((i__4642__auto___21350 < len__4641__auto___21349)){
args__4647__auto__.push((arguments[i__4642__auto___21350]));

var G__21351 = (i__4642__auto___21350 + (1));
i__4642__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20813_21355 = cljs.core.seq(nodes);
var chunk__20814_21356 = null;
var count__20815_21357 = (0);
var i__20816_21358 = (0);
while(true){
if((i__20816_21358 < count__20815_21357)){
var node_21359 = chunk__20814_21356.cljs$core$IIndexed$_nth$arity$2(null,i__20816_21358);
fragment.appendChild(shadow.dom._to_dom(node_21359));


var G__21361 = seq__20813_21355;
var G__21362 = chunk__20814_21356;
var G__21363 = count__20815_21357;
var G__21364 = (i__20816_21358 + (1));
seq__20813_21355 = G__21361;
chunk__20814_21356 = G__21362;
count__20815_21357 = G__21363;
i__20816_21358 = G__21364;
continue;
} else {
var temp__5457__auto___21366 = cljs.core.seq(seq__20813_21355);
if(temp__5457__auto___21366){
var seq__20813_21367__$1 = temp__5457__auto___21366;
if(cljs.core.chunked_seq_QMARK_(seq__20813_21367__$1)){
var c__4461__auto___21369 = cljs.core.chunk_first(seq__20813_21367__$1);
var G__21370 = cljs.core.chunk_rest(seq__20813_21367__$1);
var G__21371 = c__4461__auto___21369;
var G__21372 = cljs.core.count(c__4461__auto___21369);
var G__21373 = (0);
seq__20813_21355 = G__21370;
chunk__20814_21356 = G__21371;
count__20815_21357 = G__21372;
i__20816_21358 = G__21373;
continue;
} else {
var node_21374 = cljs.core.first(seq__20813_21367__$1);
fragment.appendChild(shadow.dom._to_dom(node_21374));


var G__21375 = cljs.core.next(seq__20813_21367__$1);
var G__21376 = null;
var G__21377 = (0);
var G__21378 = (0);
seq__20813_21355 = G__21375;
chunk__20814_21356 = G__21376;
count__20815_21357 = G__21377;
i__20816_21358 = G__21378;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq20807){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20807));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20826_21381 = cljs.core.seq(scripts);
var chunk__20827_21382 = null;
var count__20828_21383 = (0);
var i__20829_21384 = (0);
while(true){
if((i__20829_21384 < count__20828_21383)){
var vec__20831_21385 = chunk__20827_21382.cljs$core$IIndexed$_nth$arity$2(null,i__20829_21384);
var script_tag_21386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20831_21385,(0),null);
var script_body_21387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20831_21385,(1),null);
eval(script_body_21387);


var G__21388 = seq__20826_21381;
var G__21389 = chunk__20827_21382;
var G__21390 = count__20828_21383;
var G__21391 = (i__20829_21384 + (1));
seq__20826_21381 = G__21388;
chunk__20827_21382 = G__21389;
count__20828_21383 = G__21390;
i__20829_21384 = G__21391;
continue;
} else {
var temp__5457__auto___21392 = cljs.core.seq(seq__20826_21381);
if(temp__5457__auto___21392){
var seq__20826_21393__$1 = temp__5457__auto___21392;
if(cljs.core.chunked_seq_QMARK_(seq__20826_21393__$1)){
var c__4461__auto___21395 = cljs.core.chunk_first(seq__20826_21393__$1);
var G__21396 = cljs.core.chunk_rest(seq__20826_21393__$1);
var G__21397 = c__4461__auto___21395;
var G__21398 = cljs.core.count(c__4461__auto___21395);
var G__21399 = (0);
seq__20826_21381 = G__21396;
chunk__20827_21382 = G__21397;
count__20828_21383 = G__21398;
i__20829_21384 = G__21399;
continue;
} else {
var vec__20840_21402 = cljs.core.first(seq__20826_21393__$1);
var script_tag_21403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840_21402,(0),null);
var script_body_21404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840_21402,(1),null);
eval(script_body_21404);


var G__21406 = cljs.core.next(seq__20826_21393__$1);
var G__21407 = null;
var G__21408 = (0);
var G__21409 = (0);
seq__20826_21381 = G__21406;
chunk__20827_21382 = G__21407;
count__20828_21383 = G__21408;
i__20829_21384 = G__21409;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__20845){
var vec__20847 = p__20845;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__20854 = shadow.dom.dom_node(el);
var G__20855 = cls;
return goog.dom.getAncestorByClass(G__20854,G__20855);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20859 = arguments.length;
switch (G__20859) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__20860 = shadow.dom.dom_node(el);
var G__20861 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__20860,G__20861);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__20863 = shadow.dom.dom_node(el);
var G__20864 = cljs.core.name(tag);
var G__20865 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__20863,G__20864,G__20865);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__20866 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__20866);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__20867 = shadow.dom.dom_node(dom);
var G__20868 = value;
return goog.dom.forms.setValue(G__20867,G__20868);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20869 = cljs.core.seq(style_keys);
var chunk__20870 = null;
var count__20871 = (0);
var i__20872 = (0);
while(true){
if((i__20872 < count__20871)){
var it = chunk__20870.cljs$core$IIndexed$_nth$arity$2(null,i__20872);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21436 = seq__20869;
var G__21437 = chunk__20870;
var G__21438 = count__20871;
var G__21439 = (i__20872 + (1));
seq__20869 = G__21436;
chunk__20870 = G__21437;
count__20871 = G__21438;
i__20872 = G__21439;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20869);
if(temp__5457__auto__){
var seq__20869__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20869__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20869__$1);
var G__21443 = cljs.core.chunk_rest(seq__20869__$1);
var G__21444 = c__4461__auto__;
var G__21445 = cljs.core.count(c__4461__auto__);
var G__21446 = (0);
seq__20869 = G__21443;
chunk__20870 = G__21444;
count__20871 = G__21445;
i__20872 = G__21446;
continue;
} else {
var it = cljs.core.first(seq__20869__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21449 = cljs.core.next(seq__20869__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__20869 = G__21449;
chunk__20870 = G__21450;
count__20871 = G__21451;
i__20872 = G__21452;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k20874,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__20884 = k20874;
var G__20884__$1 = (((G__20884 instanceof cljs.core.Keyword))?G__20884.fqn:null);
switch (G__20884__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20874,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__20885){
var vec__20886 = p__20885;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20886,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20886,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20873){
var self__ = this;
var G__20873__$1 = this;
return (new cljs.core.RecordIter((0),G__20873__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__20889 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__20889(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20875,other20876){
var self__ = this;
var this20875__$1 = this;
return (((!((other20876 == null)))) && ((this20875__$1.constructor === other20876.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20875__$1.x,other20876.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20875__$1.y,other20876.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20875__$1.__extmap,other20876.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__20873){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__20890 = cljs.core.keyword_identical_QMARK_;
var expr__20891 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__20893 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__20894 = expr__20891;
return (pred__20890.cljs$core$IFn$_invoke$arity$2 ? pred__20890.cljs$core$IFn$_invoke$arity$2(G__20893,G__20894) : pred__20890.call(null,G__20893,G__20894));
})())){
return (new shadow.dom.Coordinate(G__20873,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20895 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__20896 = expr__20891;
return (pred__20890.cljs$core$IFn$_invoke$arity$2 ? pred__20890.cljs$core$IFn$_invoke$arity$2(G__20895,G__20896) : pred__20890.call(null,G__20895,G__20896));
})())){
return (new shadow.dom.Coordinate(self__.x,G__20873,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__20873),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__20873){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20873,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20879){
var extmap__4340__auto__ = (function (){var G__20897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20879,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20897);
} else {
return G__20897;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20879),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20879),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__20899 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__20899);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__20901 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__20901);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__20904 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__20904);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k20906,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__20918 = k20906;
var G__20918__$1 = (((G__20918 instanceof cljs.core.Keyword))?G__20918.fqn:null);
switch (G__20918__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20906,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__20922){
var vec__20923 = p__20922;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20905){
var self__ = this;
var G__20905__$1 = this;
return (new cljs.core.RecordIter((0),G__20905__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__20938 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__20938(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20907,other20908){
var self__ = this;
var this20907__$1 = this;
return (((!((other20908 == null)))) && ((this20907__$1.constructor === other20908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20907__$1.w,other20908.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20907__$1.h,other20908.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20907__$1.__extmap,other20908.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__20905){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__20953 = cljs.core.keyword_identical_QMARK_;
var expr__20954 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__20957 = new cljs.core.Keyword(null,"w","w",354169001);
var G__20958 = expr__20954;
return (pred__20953.cljs$core$IFn$_invoke$arity$2 ? pred__20953.cljs$core$IFn$_invoke$arity$2(G__20957,G__20958) : pred__20953.call(null,G__20957,G__20958));
})())){
return (new shadow.dom.Size(G__20905,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20959 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__20960 = expr__20954;
return (pred__20953.cljs$core$IFn$_invoke$arity$2 ? pred__20953.cljs$core$IFn$_invoke$arity$2(G__20959,G__20960) : pred__20953.call(null,G__20959,G__20960));
})())){
return (new shadow.dom.Size(self__.w,G__20905,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__20905),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__20905){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20905,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20911){
var extmap__4340__auto__ = (function (){var G__20965 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20911,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20965);
} else {
return G__20965;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20911),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20911),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__20967 = shadow.dom.dom_node(el);
return goog.style.getSize(G__20967);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__21559 = (i + (1));
var G__21560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21559;
ret = G__21560;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20970){
var vec__20972 = p__20970;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20972,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20976 = arguments.length;
switch (G__20976) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__20978_21573 = new_node;
var G__20979_21574 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__20978_21573,G__20979_21574);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__20980_21577 = new_node;
var G__20981_21578 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__20980_21577,G__20981_21578);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21585 = ps;
var G__21586 = (i + (1));
el__$1 = G__21585;
i = G__21586;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__20982 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__20982);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__20985 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__20985);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__20989 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__20989);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20998 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21001_21605 = cljs.core.seq(props);
var chunk__21002_21606 = null;
var count__21003_21607 = (0);
var i__21004_21608 = (0);
while(true){
if((i__21004_21608 < count__21003_21607)){
var vec__21008_21609 = chunk__21002_21606.cljs$core$IIndexed$_nth$arity$2(null,i__21004_21608);
var k_21610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21008_21609,(0),null);
var v_21611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21008_21609,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_21610);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21610),v_21611);


var G__21617 = seq__21001_21605;
var G__21618 = chunk__21002_21606;
var G__21619 = count__21003_21607;
var G__21620 = (i__21004_21608 + (1));
seq__21001_21605 = G__21617;
chunk__21002_21606 = G__21618;
count__21003_21607 = G__21619;
i__21004_21608 = G__21620;
continue;
} else {
var temp__5457__auto___21621 = cljs.core.seq(seq__21001_21605);
if(temp__5457__auto___21621){
var seq__21001_21622__$1 = temp__5457__auto___21621;
if(cljs.core.chunked_seq_QMARK_(seq__21001_21622__$1)){
var c__4461__auto___21623 = cljs.core.chunk_first(seq__21001_21622__$1);
var G__21624 = cljs.core.chunk_rest(seq__21001_21622__$1);
var G__21625 = c__4461__auto___21623;
var G__21626 = cljs.core.count(c__4461__auto___21623);
var G__21627 = (0);
seq__21001_21605 = G__21624;
chunk__21002_21606 = G__21625;
count__21003_21607 = G__21626;
i__21004_21608 = G__21627;
continue;
} else {
var vec__21013_21628 = cljs.core.first(seq__21001_21622__$1);
var k_21629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21013_21628,(0),null);
var v_21630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21013_21628,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_21629);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21629),v_21630);


var G__21632 = cljs.core.next(seq__21001_21622__$1);
var G__21633 = null;
var G__21634 = (0);
var G__21635 = (0);
seq__21001_21605 = G__21632;
chunk__21002_21606 = G__21633;
count__21003_21607 = G__21634;
i__21004_21608 = G__21635;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__21023 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21023,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21023,(1),null);
var seq__21027_21636 = cljs.core.seq(node_children);
var chunk__21029_21637 = null;
var count__21030_21638 = (0);
var i__21031_21639 = (0);
while(true){
if((i__21031_21639 < count__21030_21638)){
var child_struct_21640 = chunk__21029_21637.cljs$core$IIndexed$_nth$arity$2(null,i__21031_21639);
if((!((child_struct_21640 == null)))){
if(typeof child_struct_21640 === 'string'){
var text_21641 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21641),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21640)].join(''));
} else {
var children_21642 = shadow.dom.svg_node(child_struct_21640);
if(cljs.core.seq_QMARK_(children_21642)){
var seq__21033_21643 = cljs.core.seq(children_21642);
var chunk__21035_21644 = null;
var count__21036_21645 = (0);
var i__21037_21646 = (0);
while(true){
if((i__21037_21646 < count__21036_21645)){
var child_21647 = chunk__21035_21644.cljs$core$IIndexed$_nth$arity$2(null,i__21037_21646);
if(cljs.core.truth_(child_21647)){
node.appendChild(child_21647);


var G__21648 = seq__21033_21643;
var G__21649 = chunk__21035_21644;
var G__21650 = count__21036_21645;
var G__21651 = (i__21037_21646 + (1));
seq__21033_21643 = G__21648;
chunk__21035_21644 = G__21649;
count__21036_21645 = G__21650;
i__21037_21646 = G__21651;
continue;
} else {
var G__21652 = seq__21033_21643;
var G__21653 = chunk__21035_21644;
var G__21654 = count__21036_21645;
var G__21655 = (i__21037_21646 + (1));
seq__21033_21643 = G__21652;
chunk__21035_21644 = G__21653;
count__21036_21645 = G__21654;
i__21037_21646 = G__21655;
continue;
}
} else {
var temp__5457__auto___21656 = cljs.core.seq(seq__21033_21643);
if(temp__5457__auto___21656){
var seq__21033_21657__$1 = temp__5457__auto___21656;
if(cljs.core.chunked_seq_QMARK_(seq__21033_21657__$1)){
var c__4461__auto___21658 = cljs.core.chunk_first(seq__21033_21657__$1);
var G__21659 = cljs.core.chunk_rest(seq__21033_21657__$1);
var G__21660 = c__4461__auto___21658;
var G__21661 = cljs.core.count(c__4461__auto___21658);
var G__21662 = (0);
seq__21033_21643 = G__21659;
chunk__21035_21644 = G__21660;
count__21036_21645 = G__21661;
i__21037_21646 = G__21662;
continue;
} else {
var child_21663 = cljs.core.first(seq__21033_21657__$1);
if(cljs.core.truth_(child_21663)){
node.appendChild(child_21663);


var G__21664 = cljs.core.next(seq__21033_21657__$1);
var G__21665 = null;
var G__21666 = (0);
var G__21667 = (0);
seq__21033_21643 = G__21664;
chunk__21035_21644 = G__21665;
count__21036_21645 = G__21666;
i__21037_21646 = G__21667;
continue;
} else {
var G__21668 = cljs.core.next(seq__21033_21657__$1);
var G__21669 = null;
var G__21670 = (0);
var G__21671 = (0);
seq__21033_21643 = G__21668;
chunk__21035_21644 = G__21669;
count__21036_21645 = G__21670;
i__21037_21646 = G__21671;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21642);
}
}


var G__21673 = seq__21027_21636;
var G__21674 = chunk__21029_21637;
var G__21675 = count__21030_21638;
var G__21676 = (i__21031_21639 + (1));
seq__21027_21636 = G__21673;
chunk__21029_21637 = G__21674;
count__21030_21638 = G__21675;
i__21031_21639 = G__21676;
continue;
} else {
var G__21678 = seq__21027_21636;
var G__21679 = chunk__21029_21637;
var G__21680 = count__21030_21638;
var G__21681 = (i__21031_21639 + (1));
seq__21027_21636 = G__21678;
chunk__21029_21637 = G__21679;
count__21030_21638 = G__21680;
i__21031_21639 = G__21681;
continue;
}
} else {
var temp__5457__auto___21684 = cljs.core.seq(seq__21027_21636);
if(temp__5457__auto___21684){
var seq__21027_21685__$1 = temp__5457__auto___21684;
if(cljs.core.chunked_seq_QMARK_(seq__21027_21685__$1)){
var c__4461__auto___21686 = cljs.core.chunk_first(seq__21027_21685__$1);
var G__21688 = cljs.core.chunk_rest(seq__21027_21685__$1);
var G__21689 = c__4461__auto___21686;
var G__21690 = cljs.core.count(c__4461__auto___21686);
var G__21691 = (0);
seq__21027_21636 = G__21688;
chunk__21029_21637 = G__21689;
count__21030_21638 = G__21690;
i__21031_21639 = G__21691;
continue;
} else {
var child_struct_21693 = cljs.core.first(seq__21027_21685__$1);
if((!((child_struct_21693 == null)))){
if(typeof child_struct_21693 === 'string'){
var text_21694 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21694),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21693)].join(''));
} else {
var children_21695 = shadow.dom.svg_node(child_struct_21693);
if(cljs.core.seq_QMARK_(children_21695)){
var seq__21043_21696 = cljs.core.seq(children_21695);
var chunk__21045_21697 = null;
var count__21046_21698 = (0);
var i__21047_21699 = (0);
while(true){
if((i__21047_21699 < count__21046_21698)){
var child_21700 = chunk__21045_21697.cljs$core$IIndexed$_nth$arity$2(null,i__21047_21699);
if(cljs.core.truth_(child_21700)){
node.appendChild(child_21700);


var G__21701 = seq__21043_21696;
var G__21702 = chunk__21045_21697;
var G__21703 = count__21046_21698;
var G__21704 = (i__21047_21699 + (1));
seq__21043_21696 = G__21701;
chunk__21045_21697 = G__21702;
count__21046_21698 = G__21703;
i__21047_21699 = G__21704;
continue;
} else {
var G__21705 = seq__21043_21696;
var G__21706 = chunk__21045_21697;
var G__21707 = count__21046_21698;
var G__21708 = (i__21047_21699 + (1));
seq__21043_21696 = G__21705;
chunk__21045_21697 = G__21706;
count__21046_21698 = G__21707;
i__21047_21699 = G__21708;
continue;
}
} else {
var temp__5457__auto___21709__$1 = cljs.core.seq(seq__21043_21696);
if(temp__5457__auto___21709__$1){
var seq__21043_21710__$1 = temp__5457__auto___21709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21043_21710__$1)){
var c__4461__auto___21711 = cljs.core.chunk_first(seq__21043_21710__$1);
var G__21712 = cljs.core.chunk_rest(seq__21043_21710__$1);
var G__21713 = c__4461__auto___21711;
var G__21714 = cljs.core.count(c__4461__auto___21711);
var G__21715 = (0);
seq__21043_21696 = G__21712;
chunk__21045_21697 = G__21713;
count__21046_21698 = G__21714;
i__21047_21699 = G__21715;
continue;
} else {
var child_21716 = cljs.core.first(seq__21043_21710__$1);
if(cljs.core.truth_(child_21716)){
node.appendChild(child_21716);


var G__21717 = cljs.core.next(seq__21043_21710__$1);
var G__21718 = null;
var G__21719 = (0);
var G__21720 = (0);
seq__21043_21696 = G__21717;
chunk__21045_21697 = G__21718;
count__21046_21698 = G__21719;
i__21047_21699 = G__21720;
continue;
} else {
var G__21721 = cljs.core.next(seq__21043_21710__$1);
var G__21722 = null;
var G__21723 = (0);
var G__21724 = (0);
seq__21043_21696 = G__21721;
chunk__21045_21697 = G__21722;
count__21046_21698 = G__21723;
i__21047_21699 = G__21724;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21695);
}
}


var G__21725 = cljs.core.next(seq__21027_21685__$1);
var G__21726 = null;
var G__21727 = (0);
var G__21728 = (0);
seq__21027_21636 = G__21725;
chunk__21029_21637 = G__21726;
count__21030_21638 = G__21727;
i__21031_21639 = G__21728;
continue;
} else {
var G__21729 = cljs.core.next(seq__21027_21685__$1);
var G__21730 = null;
var G__21731 = (0);
var G__21732 = (0);
seq__21027_21636 = G__21729;
chunk__21029_21637 = G__21730;
count__21030_21638 = G__21731;
i__21031_21639 = G__21732;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__21052_21737 = shadow.dom._to_svg;
var G__21053_21738 = "string";
var G__21054_21739 = ((function (G__21052_21737,G__21053_21738){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__21052_21737,G__21053_21738))
;
goog.object.set(G__21052_21737,G__21053_21738,G__21054_21739);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__21057_21744 = shadow.dom._to_svg;
var G__21058_21745 = "null";
var G__21059_21746 = ((function (G__21057_21744,G__21058_21745){
return (function (_){
return null;
});})(G__21057_21744,G__21058_21745))
;
goog.object.set(G__21057_21744,G__21058_21745,G__21059_21746);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___21747 = arguments.length;
var i__4642__auto___21748 = (0);
while(true){
if((i__4642__auto___21748 < len__4641__auto___21747)){
args__4647__auto__.push((arguments[i__4642__auto___21748]));

var G__21753 = (i__4642__auto___21748 + (1));
i__4642__auto___21748 = G__21753;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq21061){
var G__21062 = cljs.core.first(seq21061);
var seq21061__$1 = cljs.core.next(seq21061);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21062,seq21061__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21071 = arguments.length;
switch (G__21071) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__21076_21755 = shadow.dom.dom_node(el);
var G__21077_21756 = cljs.core.name(event);
var G__21078_21757 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__21076_21755,G__21077_21756,G__21078_21757) : shadow.dom.dom_listen.call(null,G__21076_21755,G__21077_21756,G__21078_21757));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__18921__auto___21759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21759,buf,chan,event_fn){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21759,buf,chan,event_fn){
return (function (state_21084){
var state_val_21085 = (state_21084[(1)]);
if((state_val_21085 === (1))){
var state_21084__$1 = state_21084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21084__$1,(2),once_or_cleanup);
} else {
if((state_val_21085 === (2))){
var inst_21081 = (state_21084[(2)]);
var inst_21082 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21084__$1 = (function (){var statearr_21088 = state_21084;
(statearr_21088[(7)] = inst_21081);

return statearr_21088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21084__$1,inst_21082);
} else {
return null;
}
}
});})(c__18921__auto___21759,buf,chan,event_fn))
;
return ((function (switch__18820__auto__,c__18921__auto___21759,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__18821__auto__ = null;
var shadow$dom$state_machine__18821__auto____0 = (function (){
var statearr_21090 = [null,null,null,null,null,null,null,null];
(statearr_21090[(0)] = shadow$dom$state_machine__18821__auto__);

(statearr_21090[(1)] = (1));

return statearr_21090;
});
var shadow$dom$state_machine__18821__auto____1 = (function (state_21084){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_21084);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e21091){if((e21091 instanceof Object)){
var ex__18824__auto__ = e21091;
var statearr_21092_21761 = state_21084;
(statearr_21092_21761[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21763 = state_21084;
state_21084 = G__21763;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
shadow$dom$state_machine__18821__auto__ = function(state_21084){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__18821__auto____0.call(this);
case 1:
return shadow$dom$state_machine__18821__auto____1.call(this,state_21084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__18821__auto____0;
shadow$dom$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__18821__auto____1;
return shadow$dom$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21759,buf,chan,event_fn))
})();
var state__18923__auto__ = (function (){var statearr_21094 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_21094[(6)] = c__18921__auto___21759);

return statearr_21094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21759,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
