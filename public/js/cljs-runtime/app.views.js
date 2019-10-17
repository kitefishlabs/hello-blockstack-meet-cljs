goog.provide('app.views');
goog.require('cljs.core');
goog.require('app.state');
goog.require('app.events');
var module$node_modules$blockstack$lib$index=shadow.js.require("module$node_modules$blockstack$lib$index", {});
app.views.header = (function app$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"An example reagent/blockstack app"], null)], null);
});
app.views.signin = (function app$views$signin(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(module$node_modules$blockstack$lib$index.isUserSignedIn())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__11864_SHARP_){
return app.events.sign_out_user(p1__11864_SHARP_);
})], null),"Sign out"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__11865_SHARP_){
return app.events.sign_in_user(p1__11865_SHARP_);
})], null),"Sign in"], null))], null);
});
app.views.user_info = (function app$views$user_info(){
if(cljs.core.truth_(module$node_modules$blockstack$lib$index.isUserSignedIn())){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$blockstack$lib$index.loadUserData(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(data));
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Hello ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),". "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)], null)], null);
} else {
return null;
}
});
app.views.app = (function app$views$app(){
if(cljs.core.truth_(module$node_modules$blockstack$lib$index.isSignInPending())){
module$node_modules$blockstack$lib$index.handlePendingSignIn().then((function (_){
return window.location = window.location.origin;
}));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.user_info], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.signin], null)], null);
});

//# sourceMappingURL=app.views.js.map
