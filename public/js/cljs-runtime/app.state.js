goog.provide('app.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state.app_state !== 'undefined')){
} else {
app.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"signed-in-user","signed-in-user",1264094965),null], null));
}

//# sourceMappingURL=app.state.js.map
