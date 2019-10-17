goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$dayjs$dayjs_min=shadow.js.require("module$node_modules$dayjs$dayjs_min", {});
goog.require('app.views');
app.core.start = (function app$core$start(){
var G__11866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app], null);
var G__11867 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11866,G__11867) : reagent.core.render_component.call(null,G__11866,G__11867));
});
app.core.main = (function app$core$main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Started!"], 0));

return app.core.start();
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=app.core.js.map
