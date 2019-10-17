goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21672__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21677__i = 0, G__21677__a = new Array(arguments.length -  0);
while (G__21677__i < G__21677__a.length) {G__21677__a[G__21677__i] = arguments[G__21677__i + 0]; ++G__21677__i;}
  args = new cljs.core.IndexedSeq(G__21677__a,0,null);
} 
return G__21672__delegate.call(this,args);};
G__21672.cljs$lang$maxFixedArity = 0;
G__21672.cljs$lang$applyTo = (function (arglist__21682){
var args = cljs.core.seq(arglist__21682);
return G__21672__delegate(args);
});
G__21672.cljs$core$IFn$_invoke$arity$variadic = G__21672__delegate;
return G__21672;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21683__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21687__i = 0, G__21687__a = new Array(arguments.length -  0);
while (G__21687__i < G__21687__a.length) {G__21687__a[G__21687__i] = arguments[G__21687__i + 0]; ++G__21687__i;}
  args = new cljs.core.IndexedSeq(G__21687__a,0,null);
} 
return G__21683__delegate.call(this,args);};
G__21683.cljs$lang$maxFixedArity = 0;
G__21683.cljs$lang$applyTo = (function (arglist__21692){
var args = cljs.core.seq(arglist__21692);
return G__21683__delegate(args);
});
G__21683.cljs$core$IFn$_invoke$arity$variadic = G__21683__delegate;
return G__21683;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
