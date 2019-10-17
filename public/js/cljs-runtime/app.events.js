goog.provide('app.events');
goog.require('cljs.core');
goog.require('app.state');
var module$node_modules$blockstack$lib$index=shadow.js.require("module$node_modules$blockstack$lib$index", {});
app.events.sign_in_user = (function app$events$sign_in_user(event){
event.preventDefault();

return module$node_modules$blockstack$lib$index.redirectToSignIn();
});
app.events.sign_out_user = (function app$events$sign_out_user(event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

event.preventDefault();

var fexpr__11923 = module$node_modules$blockstack$lib$index.signUserOut(window.location.origin);
return (fexpr__11923.cljs$core$IFn$_invoke$arity$0 ? fexpr__11923.cljs$core$IFn$_invoke$arity$0() : fexpr__11923.call(null));
});

//# sourceMappingURL=app.events.js.map
