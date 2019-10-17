goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22732 = arguments.length;
var i__4642__auto___22733 = (0);
while(true){
if((i__4642__auto___22733 < len__4641__auto___22732)){
args__4647__auto__.push((arguments[i__4642__auto___22733]));

var G__22734 = (i__4642__auto___22733 + (1));
i__4642__auto___22733 = G__22734;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22567){
var G__22568 = cljs.core.first(seq22567);
var seq22567__$1 = cljs.core.next(seq22567);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22568,seq22567__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__22580){
var map__22581 = p__22580;
var map__22581__$1 = (((((!((map__22581 == null))))?(((((map__22581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22581):map__22581);
var src = map__22581__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22581__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22581__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22583 = cljs.core.seq(sources);
var chunk__22584 = null;
var count__22585 = (0);
var i__22586 = (0);
while(true){
if((i__22586 < count__22585)){
var map__22587 = chunk__22584.cljs$core$IIndexed$_nth$arity$2(null,i__22586);
var map__22587__$1 = (((((!((map__22587 == null))))?(((((map__22587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22587):map__22587);
var src = map__22587__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22742 = seq__22583;
var G__22743 = chunk__22584;
var G__22744 = count__22585;
var G__22745 = (i__22586 + (1));
seq__22583 = G__22742;
chunk__22584 = G__22743;
count__22585 = G__22744;
i__22586 = G__22745;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22583);
if(temp__5457__auto__){
var seq__22583__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22583__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22583__$1);
var G__22746 = cljs.core.chunk_rest(seq__22583__$1);
var G__22747 = c__4461__auto__;
var G__22748 = cljs.core.count(c__4461__auto__);
var G__22749 = (0);
seq__22583 = G__22746;
chunk__22584 = G__22747;
count__22585 = G__22748;
i__22586 = G__22749;
continue;
} else {
var map__22589 = cljs.core.first(seq__22583__$1);
var map__22589__$1 = (((((!((map__22589 == null))))?(((((map__22589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22589):map__22589);
var src = map__22589__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22750 = cljs.core.next(seq__22583__$1);
var G__22751 = null;
var G__22752 = (0);
var G__22753 = (0);
seq__22583 = G__22750;
chunk__22584 = G__22751;
count__22585 = G__22752;
i__22586 = G__22753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22593 = cljs.core.seq(js_requires);
var chunk__22594 = null;
var count__22595 = (0);
var i__22596 = (0);
while(true){
if((i__22596 < count__22595)){
var js_ns = chunk__22594.cljs$core$IIndexed$_nth$arity$2(null,i__22596);
var require_str_22755 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22755);


var G__22756 = seq__22593;
var G__22757 = chunk__22594;
var G__22758 = count__22595;
var G__22759 = (i__22596 + (1));
seq__22593 = G__22756;
chunk__22594 = G__22757;
count__22595 = G__22758;
i__22596 = G__22759;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22593);
if(temp__5457__auto__){
var seq__22593__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22593__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22593__$1);
var G__22760 = cljs.core.chunk_rest(seq__22593__$1);
var G__22761 = c__4461__auto__;
var G__22762 = cljs.core.count(c__4461__auto__);
var G__22763 = (0);
seq__22593 = G__22760;
chunk__22594 = G__22761;
count__22595 = G__22762;
i__22596 = G__22763;
continue;
} else {
var js_ns = cljs.core.first(seq__22593__$1);
var require_str_22764 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22764);


var G__22765 = cljs.core.next(seq__22593__$1);
var G__22766 = null;
var G__22767 = (0);
var G__22768 = (0);
seq__22593 = G__22765;
chunk__22594 = G__22766;
count__22595 = G__22767;
i__22596 = G__22768;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__22598 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__22598) : callback.call(null,G__22598));
} else {
var G__22602 = shadow.cljs.devtools.client.env.files_url();
var G__22603 = ((function (G__22602){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__22602))
;
var G__22604 = "POST";
var G__22605 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__22606 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22602,G__22603,G__22604,G__22605,G__22606);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__22613){
var map__22614 = p__22613;
var map__22614__$1 = (((((!((map__22614 == null))))?(((((map__22614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22614):map__22614);
var msg = map__22614__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__22616 = info;
var map__22616__$1 = (((((!((map__22616 == null))))?(((((map__22616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22616):map__22616);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22618(s__22619){
return (new cljs.core.LazySeq(null,((function (map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info){
return (function (){
var s__22619__$1 = s__22619;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22619__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22624 = cljs.core.first(xs__6012__auto__);
var map__22624__$1 = (((((!((map__22624 == null))))?(((((map__22624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22624):map__22624);
var src = map__22624__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22624__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__22619__$1,map__22624,map__22624__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22618_$_iter__22620(s__22621){
return (new cljs.core.LazySeq(null,((function (s__22619__$1,map__22624,map__22624__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info){
return (function (){
var s__22621__$1 = s__22621;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22621__$1);
if(temp__5457__auto____$1){
var s__22621__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22621__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__22621__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__22623 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__22622 = (0);
while(true){
if((i__22622 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__22622);
cljs.core.chunk_append(b__22623,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22775 = (i__22622 + (1));
i__22622 = G__22775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22623),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22618_$_iter__22620(cljs.core.chunk_rest(s__22621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22623),null);
}
} else {
var warning = cljs.core.first(s__22621__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22618_$_iter__22620(cljs.core.rest(s__22621__$2)));
}
} else {
return null;
}
break;
}
});})(s__22619__$1,map__22624,map__22624__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info))
,null,null));
});})(s__22619__$1,map__22624,map__22624__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22618(cljs.core.rest(s__22619__$1)));
} else {
var G__22776 = cljs.core.rest(s__22619__$1);
s__22619__$1 = G__22776;
continue;
}
} else {
var G__22777 = cljs.core.rest(s__22619__$1);
s__22619__$1 = G__22777;
continue;
}
} else {
return null;
}
break;
}
});})(map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info))
,null,null));
});})(map__22616,map__22616__$1,sources,compiled,map__22614,map__22614__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__22629_22778 = cljs.core.seq(warnings);
var chunk__22630_22779 = null;
var count__22631_22780 = (0);
var i__22632_22781 = (0);
while(true){
if((i__22632_22781 < count__22631_22780)){
var map__22633_22782 = chunk__22630_22779.cljs$core$IIndexed$_nth$arity$2(null,i__22632_22781);
var map__22633_22783__$1 = (((((!((map__22633_22782 == null))))?(((((map__22633_22782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22633_22782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22633_22782):map__22633_22782);
var w_22784 = map__22633_22783__$1;
var msg_22785__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633_22783__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633_22783__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633_22783__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633_22783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22788)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22786),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22787),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22785__$1)].join(''));


var G__22791 = seq__22629_22778;
var G__22792 = chunk__22630_22779;
var G__22793 = count__22631_22780;
var G__22794 = (i__22632_22781 + (1));
seq__22629_22778 = G__22791;
chunk__22630_22779 = G__22792;
count__22631_22780 = G__22793;
i__22632_22781 = G__22794;
continue;
} else {
var temp__5457__auto___22795 = cljs.core.seq(seq__22629_22778);
if(temp__5457__auto___22795){
var seq__22629_22796__$1 = temp__5457__auto___22795;
if(cljs.core.chunked_seq_QMARK_(seq__22629_22796__$1)){
var c__4461__auto___22797 = cljs.core.chunk_first(seq__22629_22796__$1);
var G__22798 = cljs.core.chunk_rest(seq__22629_22796__$1);
var G__22799 = c__4461__auto___22797;
var G__22800 = cljs.core.count(c__4461__auto___22797);
var G__22801 = (0);
seq__22629_22778 = G__22798;
chunk__22630_22779 = G__22799;
count__22631_22780 = G__22800;
i__22632_22781 = G__22801;
continue;
} else {
var map__22635_22802 = cljs.core.first(seq__22629_22796__$1);
var map__22635_22803__$1 = (((((!((map__22635_22802 == null))))?(((((map__22635_22802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22635_22802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22635_22802):map__22635_22802);
var w_22804 = map__22635_22803__$1;
var msg_22805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635_22803__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635_22803__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635_22803__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635_22803__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22808)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22806),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22807),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22805__$1)].join(''));


var G__22812 = cljs.core.next(seq__22629_22796__$1);
var G__22813 = null;
var G__22814 = (0);
var G__22815 = (0);
seq__22629_22778 = G__22812;
chunk__22630_22779 = G__22813;
count__22631_22780 = G__22814;
i__22632_22781 = G__22815;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info){
return (function (p__22637){
var map__22638 = p__22637;
var map__22638__$1 = (((((!((map__22638 == null))))?(((((map__22638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22638):map__22638);
var src = map__22638__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info){
return (function (p__22640){
var map__22641 = p__22640;
var map__22641__$1 = (((((!((map__22641 == null))))?(((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22641):map__22641);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info){
return (function (p__22652){
var map__22653 = p__22652;
var map__22653__$1 = (((((!((map__22653 == null))))?(((((map__22653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22653):map__22653);
var rc = map__22653__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info){
return (function (p1__22612_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22612_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__22616,map__22616__$1,sources,compiled,warnings,map__22614,map__22614__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__22657){
var map__22658 = p__22657;
var map__22658__$1 = (((((!((map__22658 == null))))?(((((map__22658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22658):map__22658);
var msg = map__22658__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__22660 = cljs.core.seq(updates);
var chunk__22662 = null;
var count__22663 = (0);
var i__22664 = (0);
while(true){
if((i__22664 < count__22663)){
var path = chunk__22662.cljs$core$IIndexed$_nth$arity$2(null,i__22664);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22666_22818 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22669_22819 = null;
var count__22670_22820 = (0);
var i__22671_22821 = (0);
while(true){
if((i__22671_22821 < count__22670_22820)){
var node_22822 = chunk__22669_22819.cljs$core$IIndexed$_nth$arity$2(null,i__22671_22821);
var path_match_22823 = shadow.cljs.devtools.client.browser.match_paths(node_22822.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22823)){
var new_link_22824 = (function (){var G__22675 = node_22822.cloneNode(true);
G__22675.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22823),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22675;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22823], 0));

goog.dom.insertSiblingAfter(new_link_22824,node_22822);

goog.dom.removeNode(node_22822);


var G__22825 = seq__22666_22818;
var G__22826 = chunk__22669_22819;
var G__22827 = count__22670_22820;
var G__22828 = (i__22671_22821 + (1));
seq__22666_22818 = G__22825;
chunk__22669_22819 = G__22826;
count__22670_22820 = G__22827;
i__22671_22821 = G__22828;
continue;
} else {
var G__22829 = seq__22666_22818;
var G__22830 = chunk__22669_22819;
var G__22831 = count__22670_22820;
var G__22832 = (i__22671_22821 + (1));
seq__22666_22818 = G__22829;
chunk__22669_22819 = G__22830;
count__22670_22820 = G__22831;
i__22671_22821 = G__22832;
continue;
}
} else {
var temp__5457__auto___22833 = cljs.core.seq(seq__22666_22818);
if(temp__5457__auto___22833){
var seq__22666_22834__$1 = temp__5457__auto___22833;
if(cljs.core.chunked_seq_QMARK_(seq__22666_22834__$1)){
var c__4461__auto___22835 = cljs.core.chunk_first(seq__22666_22834__$1);
var G__22836 = cljs.core.chunk_rest(seq__22666_22834__$1);
var G__22837 = c__4461__auto___22835;
var G__22838 = cljs.core.count(c__4461__auto___22835);
var G__22839 = (0);
seq__22666_22818 = G__22836;
chunk__22669_22819 = G__22837;
count__22670_22820 = G__22838;
i__22671_22821 = G__22839;
continue;
} else {
var node_22840 = cljs.core.first(seq__22666_22834__$1);
var path_match_22841 = shadow.cljs.devtools.client.browser.match_paths(node_22840.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22841)){
var new_link_22842 = (function (){var G__22676 = node_22840.cloneNode(true);
G__22676.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22841),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22676;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22841], 0));

goog.dom.insertSiblingAfter(new_link_22842,node_22840);

goog.dom.removeNode(node_22840);


var G__22843 = cljs.core.next(seq__22666_22834__$1);
var G__22844 = null;
var G__22845 = (0);
var G__22846 = (0);
seq__22666_22818 = G__22843;
chunk__22669_22819 = G__22844;
count__22670_22820 = G__22845;
i__22671_22821 = G__22846;
continue;
} else {
var G__22847 = cljs.core.next(seq__22666_22834__$1);
var G__22848 = null;
var G__22849 = (0);
var G__22850 = (0);
seq__22666_22818 = G__22847;
chunk__22669_22819 = G__22848;
count__22670_22820 = G__22849;
i__22671_22821 = G__22850;
continue;
}
}
} else {
}
}
break;
}


var G__22851 = seq__22660;
var G__22852 = chunk__22662;
var G__22853 = count__22663;
var G__22854 = (i__22664 + (1));
seq__22660 = G__22851;
chunk__22662 = G__22852;
count__22663 = G__22853;
i__22664 = G__22854;
continue;
} else {
var G__22855 = seq__22660;
var G__22856 = chunk__22662;
var G__22857 = count__22663;
var G__22858 = (i__22664 + (1));
seq__22660 = G__22855;
chunk__22662 = G__22856;
count__22663 = G__22857;
i__22664 = G__22858;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22660);
if(temp__5457__auto__){
var seq__22660__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22660__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22660__$1);
var G__22859 = cljs.core.chunk_rest(seq__22660__$1);
var G__22860 = c__4461__auto__;
var G__22861 = cljs.core.count(c__4461__auto__);
var G__22862 = (0);
seq__22660 = G__22859;
chunk__22662 = G__22860;
count__22663 = G__22861;
i__22664 = G__22862;
continue;
} else {
var path = cljs.core.first(seq__22660__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22678_22863 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22681_22864 = null;
var count__22682_22865 = (0);
var i__22683_22866 = (0);
while(true){
if((i__22683_22866 < count__22682_22865)){
var node_22867 = chunk__22681_22864.cljs$core$IIndexed$_nth$arity$2(null,i__22683_22866);
var path_match_22868 = shadow.cljs.devtools.client.browser.match_paths(node_22867.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22868)){
var new_link_22869 = (function (){var G__22688 = node_22867.cloneNode(true);
G__22688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22868),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22688;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22868], 0));

goog.dom.insertSiblingAfter(new_link_22869,node_22867);

goog.dom.removeNode(node_22867);


var G__22870 = seq__22678_22863;
var G__22871 = chunk__22681_22864;
var G__22872 = count__22682_22865;
var G__22873 = (i__22683_22866 + (1));
seq__22678_22863 = G__22870;
chunk__22681_22864 = G__22871;
count__22682_22865 = G__22872;
i__22683_22866 = G__22873;
continue;
} else {
var G__22874 = seq__22678_22863;
var G__22875 = chunk__22681_22864;
var G__22876 = count__22682_22865;
var G__22877 = (i__22683_22866 + (1));
seq__22678_22863 = G__22874;
chunk__22681_22864 = G__22875;
count__22682_22865 = G__22876;
i__22683_22866 = G__22877;
continue;
}
} else {
var temp__5457__auto___22878__$1 = cljs.core.seq(seq__22678_22863);
if(temp__5457__auto___22878__$1){
var seq__22678_22879__$1 = temp__5457__auto___22878__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22678_22879__$1)){
var c__4461__auto___22880 = cljs.core.chunk_first(seq__22678_22879__$1);
var G__22881 = cljs.core.chunk_rest(seq__22678_22879__$1);
var G__22882 = c__4461__auto___22880;
var G__22883 = cljs.core.count(c__4461__auto___22880);
var G__22884 = (0);
seq__22678_22863 = G__22881;
chunk__22681_22864 = G__22882;
count__22682_22865 = G__22883;
i__22683_22866 = G__22884;
continue;
} else {
var node_22885 = cljs.core.first(seq__22678_22879__$1);
var path_match_22886 = shadow.cljs.devtools.client.browser.match_paths(node_22885.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22886)){
var new_link_22887 = (function (){var G__22692 = node_22885.cloneNode(true);
G__22692.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22886),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22692;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22886], 0));

goog.dom.insertSiblingAfter(new_link_22887,node_22885);

goog.dom.removeNode(node_22885);


var G__22888 = cljs.core.next(seq__22678_22879__$1);
var G__22889 = null;
var G__22890 = (0);
var G__22891 = (0);
seq__22678_22863 = G__22888;
chunk__22681_22864 = G__22889;
count__22682_22865 = G__22890;
i__22683_22866 = G__22891;
continue;
} else {
var G__22892 = cljs.core.next(seq__22678_22879__$1);
var G__22893 = null;
var G__22894 = (0);
var G__22895 = (0);
seq__22678_22863 = G__22892;
chunk__22681_22864 = G__22893;
count__22682_22865 = G__22894;
i__22683_22866 = G__22895;
continue;
}
}
} else {
}
}
break;
}


var G__22896 = cljs.core.next(seq__22660__$1);
var G__22897 = null;
var G__22898 = (0);
var G__22899 = (0);
seq__22660 = G__22896;
chunk__22662 = G__22897;
count__22663 = G__22898;
i__22664 = G__22899;
continue;
} else {
var G__22900 = cljs.core.next(seq__22660__$1);
var G__22901 = null;
var G__22902 = (0);
var G__22903 = (0);
seq__22660 = G__22900;
chunk__22662 = G__22901;
count__22663 = G__22902;
i__22664 = G__22903;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__22694){
var map__22695 = p__22694;
var map__22695__$1 = (((((!((map__22695 == null))))?(((((map__22695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22695):map__22695);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__22695,map__22695__$1,id,js){
return (function (){
return eval(js);
});})(map__22695,map__22695__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__22698){
var map__22699 = p__22698;
var map__22699__$1 = (((((!((map__22699 == null))))?(((((map__22699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22699):map__22699);
var msg = map__22699__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22699,map__22699__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__22702){
var map__22703 = p__22702;
var map__22703__$1 = (((((!((map__22703 == null))))?(((((map__22703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22703):map__22703);
var src = map__22703__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22703__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__22699,map__22699__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__22699,map__22699__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__22699,map__22699__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__22705){
var map__22706 = p__22705;
var map__22706__$1 = (((((!((map__22706 == null))))?(((((map__22706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22706):map__22706);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__22706,map__22706__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__22706,map__22706__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__22708){
var map__22709 = p__22708;
var map__22709__$1 = (((((!((map__22709 == null))))?(((((map__22709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22709):map__22709);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__22711){
var map__22712 = p__22711;
var map__22712__$1 = (((((!((map__22712 == null))))?(((((map__22712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22712):map__22712);
var msg = map__22712__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22712__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__22714 = type;
var G__22714__$1 = (((G__22714 instanceof cljs.core.Keyword))?G__22714.fqn:null);
switch (G__22714__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__22715 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__22716 = ((function (G__22715){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__22715))
;
var G__22717 = "POST";
var G__22718 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__22719 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22715,G__22716,G__22717,G__22718,G__22719);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e22720){var e = e22720;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___22914 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___22914)){
var s_22916 = temp__5457__auto___22914;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_22916.onclose = ((function (s_22916,temp__5457__auto___22914){
return (function (e){
return null;
});})(s_22916,temp__5457__auto___22914))
;

s_22916.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4036__auto__ = document;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4036__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
