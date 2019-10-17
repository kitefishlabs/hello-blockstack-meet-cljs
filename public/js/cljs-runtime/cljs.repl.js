goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17087){
var map__17089 = p__17087;
var map__17089__$1 = (((((!((map__17089 == null))))?(((((map__17089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17089):map__17089);
var m = map__17089__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17089__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17095_17180 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17096_17181 = null;
var count__17097_17182 = (0);
var i__17098_17183 = (0);
while(true){
if((i__17098_17183 < count__17097_17182)){
var f_17184 = chunk__17096_17181.cljs$core$IIndexed$_nth$arity$2(null,i__17098_17183);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17184], 0));


var G__17185 = seq__17095_17180;
var G__17186 = chunk__17096_17181;
var G__17187 = count__17097_17182;
var G__17188 = (i__17098_17183 + (1));
seq__17095_17180 = G__17185;
chunk__17096_17181 = G__17186;
count__17097_17182 = G__17187;
i__17098_17183 = G__17188;
continue;
} else {
var temp__5457__auto___17189 = cljs.core.seq(seq__17095_17180);
if(temp__5457__auto___17189){
var seq__17095_17190__$1 = temp__5457__auto___17189;
if(cljs.core.chunked_seq_QMARK_(seq__17095_17190__$1)){
var c__4461__auto___17191 = cljs.core.chunk_first(seq__17095_17190__$1);
var G__17192 = cljs.core.chunk_rest(seq__17095_17190__$1);
var G__17193 = c__4461__auto___17191;
var G__17194 = cljs.core.count(c__4461__auto___17191);
var G__17195 = (0);
seq__17095_17180 = G__17192;
chunk__17096_17181 = G__17193;
count__17097_17182 = G__17194;
i__17098_17183 = G__17195;
continue;
} else {
var f_17198 = cljs.core.first(seq__17095_17190__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17198], 0));


var G__17202 = cljs.core.next(seq__17095_17190__$1);
var G__17203 = null;
var G__17204 = (0);
var G__17205 = (0);
seq__17095_17180 = G__17202;
chunk__17096_17181 = G__17203;
count__17097_17182 = G__17204;
i__17098_17183 = G__17205;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17207], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17207)))?cljs.core.second(arglists_17207):arglists_17207)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17106_17217 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17107_17218 = null;
var count__17108_17219 = (0);
var i__17109_17220 = (0);
while(true){
if((i__17109_17220 < count__17108_17219)){
var vec__17114_17221 = chunk__17107_17218.cljs$core$IIndexed$_nth$arity$2(null,i__17109_17220);
var name_17222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114_17221,(0),null);
var map__17117_17223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114_17221,(1),null);
var map__17117_17224__$1 = (((((!((map__17117_17223 == null))))?(((((map__17117_17223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17117_17223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17117_17223):map__17117_17223);
var doc_17225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17117_17224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17117_17224__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17222], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17226], 0));

if(cljs.core.truth_(doc_17225)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17225], 0));
} else {
}


var G__17231 = seq__17106_17217;
var G__17232 = chunk__17107_17218;
var G__17233 = count__17108_17219;
var G__17234 = (i__17109_17220 + (1));
seq__17106_17217 = G__17231;
chunk__17107_17218 = G__17232;
count__17108_17219 = G__17233;
i__17109_17220 = G__17234;
continue;
} else {
var temp__5457__auto___17235 = cljs.core.seq(seq__17106_17217);
if(temp__5457__auto___17235){
var seq__17106_17236__$1 = temp__5457__auto___17235;
if(cljs.core.chunked_seq_QMARK_(seq__17106_17236__$1)){
var c__4461__auto___17237 = cljs.core.chunk_first(seq__17106_17236__$1);
var G__17238 = cljs.core.chunk_rest(seq__17106_17236__$1);
var G__17239 = c__4461__auto___17237;
var G__17240 = cljs.core.count(c__4461__auto___17237);
var G__17241 = (0);
seq__17106_17217 = G__17238;
chunk__17107_17218 = G__17239;
count__17108_17219 = G__17240;
i__17109_17220 = G__17241;
continue;
} else {
var vec__17127_17242 = cljs.core.first(seq__17106_17236__$1);
var name_17243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17127_17242,(0),null);
var map__17130_17244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17127_17242,(1),null);
var map__17130_17245__$1 = (((((!((map__17130_17244 == null))))?(((((map__17130_17244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17130_17244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17130_17244):map__17130_17244);
var doc_17246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17130_17245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17130_17245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17243], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17247], 0));

if(cljs.core.truth_(doc_17246)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17246], 0));
} else {
}


var G__17255 = cljs.core.next(seq__17106_17236__$1);
var G__17256 = null;
var G__17257 = (0);
var G__17258 = (0);
seq__17106_17217 = G__17255;
chunk__17107_17218 = G__17256;
count__17108_17219 = G__17257;
i__17109_17220 = G__17258;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17141 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17142 = null;
var count__17143 = (0);
var i__17144 = (0);
while(true){
if((i__17144 < count__17143)){
var role = chunk__17142.cljs$core$IIndexed$_nth$arity$2(null,i__17144);
var temp__5457__auto___17260__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17260__$1)){
var spec_17261 = temp__5457__auto___17260__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17261)], 0));
} else {
}


var G__17262 = seq__17141;
var G__17263 = chunk__17142;
var G__17264 = count__17143;
var G__17265 = (i__17144 + (1));
seq__17141 = G__17262;
chunk__17142 = G__17263;
count__17143 = G__17264;
i__17144 = G__17265;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__17141);
if(temp__5457__auto____$1){
var seq__17141__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17141__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17141__$1);
var G__17266 = cljs.core.chunk_rest(seq__17141__$1);
var G__17267 = c__4461__auto__;
var G__17268 = cljs.core.count(c__4461__auto__);
var G__17269 = (0);
seq__17141 = G__17266;
chunk__17142 = G__17267;
count__17143 = G__17268;
i__17144 = G__17269;
continue;
} else {
var role = cljs.core.first(seq__17141__$1);
var temp__5457__auto___17270__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17270__$2)){
var spec_17271 = temp__5457__auto___17270__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17271)], 0));
} else {
}


var G__17272 = cljs.core.next(seq__17141__$1);
var G__17273 = null;
var G__17274 = (0);
var G__17275 = (0);
seq__17141 = G__17272;
chunk__17142 = G__17273;
count__17143 = G__17274;
i__17144 = G__17275;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
