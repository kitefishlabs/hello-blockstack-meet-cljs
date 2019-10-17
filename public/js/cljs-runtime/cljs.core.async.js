goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18981 = arguments.length;
switch (G__18981) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18982 = (function (f,blockable,meta18983){
this.f = f;
this.blockable = blockable;
this.meta18983 = meta18983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18984,meta18983__$1){
var self__ = this;
var _18984__$1 = this;
return (new cljs.core.async.t_cljs$core$async18982(self__.f,self__.blockable,meta18983__$1));
});

cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18984){
var self__ = this;
var _18984__$1 = this;
return self__.meta18983;
});

cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18983","meta18983",-436219898,null)], null);
});

cljs.core.async.t_cljs$core$async18982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18982";

cljs.core.async.t_cljs$core$async18982.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18982");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18982.
 */
cljs.core.async.__GT_t_cljs$core$async18982 = (function cljs$core$async$__GT_t_cljs$core$async18982(f__$1,blockable__$1,meta18983){
return (new cljs.core.async.t_cljs$core$async18982(f__$1,blockable__$1,meta18983));
});

}

return (new cljs.core.async.t_cljs$core$async18982(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18987 = arguments.length;
switch (G__18987) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18989 = arguments.length;
switch (G__18989) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18991 = arguments.length;
switch (G__18991) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20430 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20430) : fn1.call(null,val_20430));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20430,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20430) : fn1.call(null,val_20430));
});})(val_20430,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18993 = arguments.length;
switch (G__18993) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___20446 = n;
var x_20447 = (0);
while(true){
if((x_20447 < n__4518__auto___20446)){
(a[x_20447] = (0));

var G__20451 = (x_20447 + (1));
x_20447 = G__20451;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20454 = (i + (1));
i = G__20454;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18994 = (function (flag,meta18995){
this.flag = flag;
this.meta18995 = meta18995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18996,meta18995__$1){
var self__ = this;
var _18996__$1 = this;
return (new cljs.core.async.t_cljs$core$async18994(self__.flag,meta18995__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18996){
var self__ = this;
var _18996__$1 = this;
return self__.meta18995;
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18995","meta18995",676729897,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18994";

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18994");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18994.
 */
cljs.core.async.__GT_t_cljs$core$async18994 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18994(flag__$1,meta18995){
return (new cljs.core.async.t_cljs$core$async18994(flag__$1,meta18995));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18994(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18997 = (function (flag,cb,meta18998){
this.flag = flag;
this.cb = cb;
this.meta18998 = meta18998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18999,meta18998__$1){
var self__ = this;
var _18999__$1 = this;
return (new cljs.core.async.t_cljs$core$async18997(self__.flag,self__.cb,meta18998__$1));
});

cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18999){
var self__ = this;
var _18999__$1 = this;
return self__.meta18998;
});

cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18998","meta18998",2085132481,null)], null);
});

cljs.core.async.t_cljs$core$async18997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18997";

cljs.core.async.t_cljs$core$async18997.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18997");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18997.
 */
cljs.core.async.__GT_t_cljs$core$async18997 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18997(flag__$1,cb__$1,meta18998){
return (new cljs.core.async.t_cljs$core$async18997(flag__$1,cb__$1,meta18998));
});

}

return (new cljs.core.async.t_cljs$core$async18997(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19000_SHARP_){
var G__19002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19000_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19002) : fret.call(null,G__19002));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19001_SHARP_){
var G__19003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19001_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19003) : fret.call(null,G__19003));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20485 = (i + (1));
i = G__20485;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20491 = arguments.length;
var i__4642__auto___20492 = (0);
while(true){
if((i__4642__auto___20492 < len__4641__auto___20491)){
args__4647__auto__.push((arguments[i__4642__auto___20492]));

var G__20493 = (i__4642__auto___20492 + (1));
i__4642__auto___20492 = G__20493;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19006){
var map__19007 = p__19006;
var map__19007__$1 = (((((!((map__19007 == null))))?(((((map__19007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19007):map__19007);
var opts = map__19007__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19004){
var G__19005 = cljs.core.first(seq19004);
var seq19004__$1 = cljs.core.next(seq19004);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19005,seq19004__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__19010 = arguments.length;
switch (G__19010) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18921__auto___20510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20510){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20510){
return (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19036_20512 = state_19034__$1;
(statearr_19036_20512[(2)] = inst_19030);

(statearr_19036_20512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (1))){
var state_19034__$1 = state_19034;
var statearr_19037_20513 = state_19034__$1;
(statearr_19037_20513[(2)] = null);

(statearr_19037_20513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (4))){
var inst_19013 = (state_19034[(7)]);
var inst_19013__$1 = (state_19034[(2)]);
var inst_19014 = (inst_19013__$1 == null);
var state_19034__$1 = (function (){var statearr_19038 = state_19034;
(statearr_19038[(7)] = inst_19013__$1);

return statearr_19038;
})();
if(cljs.core.truth_(inst_19014)){
var statearr_19039_20516 = state_19034__$1;
(statearr_19039_20516[(1)] = (5));

} else {
var statearr_19040_20519 = state_19034__$1;
(statearr_19040_20519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (13))){
var state_19034__$1 = state_19034;
var statearr_19041_20520 = state_19034__$1;
(statearr_19041_20520[(2)] = null);

(statearr_19041_20520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (6))){
var inst_19013 = (state_19034[(7)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19034__$1,(11),to,inst_19013);
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (12))){
var state_19034__$1 = state_19034;
var statearr_19042_20523 = state_19034__$1;
(statearr_19042_20523[(2)] = null);

(statearr_19042_20523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (2))){
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19034__$1,(4),from);
} else {
if((state_val_19035 === (11))){
var inst_19023 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19023)){
var statearr_19043_20524 = state_19034__$1;
(statearr_19043_20524[(1)] = (12));

} else {
var statearr_19044_20525 = state_19034__$1;
(statearr_19044_20525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (9))){
var state_19034__$1 = state_19034;
var statearr_19045_20526 = state_19034__$1;
(statearr_19045_20526[(2)] = null);

(statearr_19045_20526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (5))){
var state_19034__$1 = state_19034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19046_20527 = state_19034__$1;
(statearr_19046_20527[(1)] = (8));

} else {
var statearr_19047_20528 = state_19034__$1;
(statearr_19047_20528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (14))){
var inst_19028 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19048_20529 = state_19034__$1;
(statearr_19048_20529[(2)] = inst_19028);

(statearr_19048_20529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (10))){
var inst_19020 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19049_20530 = state_19034__$1;
(statearr_19049_20530[(2)] = inst_19020);

(statearr_19049_20530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (8))){
var inst_19017 = cljs.core.async.close_BANG_(to);
var state_19034__$1 = state_19034;
var statearr_19050_20531 = state_19034__$1;
(statearr_19050_20531[(2)] = inst_19017);

(statearr_19050_20531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20510))
;
return ((function (switch__18820__auto__,c__18921__auto___20510){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_19051 = [null,null,null,null,null,null,null,null];
(statearr_19051[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_19051[(1)] = (1));

return statearr_19051;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_19034){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19034);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19052){if((e19052 instanceof Object)){
var ex__18824__auto__ = e19052;
var statearr_19053_20532 = state_19034;
(statearr_19053_20532[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20537 = state_19034;
state_19034 = G__20537;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20510))
})();
var state__18923__auto__ = (function (){var statearr_19054 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19054[(6)] = c__18921__auto___20510);

return statearr_19054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20510))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__19055){
var vec__19056 = p__19055;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(1),null);
var job = vec__19056;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18921__auto___20541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results){
return (function (state_19063){
var state_val_19064 = (state_19063[(1)]);
if((state_val_19064 === (1))){
var state_19063__$1 = state_19063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19063__$1,(2),res,v);
} else {
if((state_val_19064 === (2))){
var inst_19060 = (state_19063[(2)]);
var inst_19061 = cljs.core.async.close_BANG_(res);
var state_19063__$1 = (function (){var statearr_19065 = state_19063;
(statearr_19065[(7)] = inst_19060);

return statearr_19065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19063__$1,inst_19061);
} else {
return null;
}
}
});})(c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results))
;
return ((function (switch__18820__auto__,c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_19066 = [null,null,null,null,null,null,null,null];
(statearr_19066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__);

(statearr_19066[(1)] = (1));

return statearr_19066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1 = (function (state_19063){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19063);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19067){if((e19067 instanceof Object)){
var ex__18824__auto__ = e19067;
var statearr_19068_20544 = state_19063;
(statearr_19068_20544[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20548 = state_19063;
state_19063 = G__20548;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = function(state_19063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1.call(this,state_19063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results))
})();
var state__18923__auto__ = (function (){var statearr_19069 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19069[(6)] = c__18921__auto___20541);

return statearr_19069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20541,res,vec__19056,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19070){
var vec__19071 = p__19070;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19071,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19071,(1),null);
var job = vec__19071;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___20550 = n;
var __20551 = (0);
while(true){
if((__20551 < n__4518__auto___20550)){
var G__19074_20552 = type;
var G__19074_20553__$1 = (((G__19074_20552 instanceof cljs.core.Keyword))?G__19074_20552.fqn:null);
switch (G__19074_20553__$1) {
case "compute":
var c__18921__auto___20557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20551,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (__20551,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function (state_19087){
var state_val_19088 = (state_19087[(1)]);
if((state_val_19088 === (1))){
var state_19087__$1 = state_19087;
var statearr_19089_20559 = state_19087__$1;
(statearr_19089_20559[(2)] = null);

(statearr_19089_20559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (2))){
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19087__$1,(4),jobs);
} else {
if((state_val_19088 === (3))){
var inst_19085 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19087__$1,inst_19085);
} else {
if((state_val_19088 === (4))){
var inst_19077 = (state_19087[(2)]);
var inst_19078 = process(inst_19077);
var state_19087__$1 = state_19087;
if(cljs.core.truth_(inst_19078)){
var statearr_19090_20560 = state_19087__$1;
(statearr_19090_20560[(1)] = (5));

} else {
var statearr_19091_20561 = state_19087__$1;
(statearr_19091_20561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (5))){
var state_19087__$1 = state_19087;
var statearr_19092_20562 = state_19087__$1;
(statearr_19092_20562[(2)] = null);

(statearr_19092_20562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (6))){
var state_19087__$1 = state_19087;
var statearr_19093_20563 = state_19087__$1;
(statearr_19093_20563[(2)] = null);

(statearr_19093_20563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (7))){
var inst_19083 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
var statearr_19094_20564 = state_19087__$1;
(statearr_19094_20564[(2)] = inst_19083);

(statearr_19094_20564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20551,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
;
return ((function (__20551,switch__18820__auto__,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_19095 = [null,null,null,null,null,null,null];
(statearr_19095[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__);

(statearr_19095[(1)] = (1));

return statearr_19095;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1 = (function (state_19087){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19087);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19096){if((e19096 instanceof Object)){
var ex__18824__auto__ = e19096;
var statearr_19097_20566 = state_19087;
(statearr_19097_20566[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20567 = state_19087;
state_19087 = G__20567;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = function(state_19087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1.call(this,state_19087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__;
})()
;})(__20551,switch__18820__auto__,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
})();
var state__18923__auto__ = (function (){var statearr_19098 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19098[(6)] = c__18921__auto___20557);

return statearr_19098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(__20551,c__18921__auto___20557,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
);


break;
case "async":
var c__18921__auto___20570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20551,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (__20551,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function (state_19111){
var state_val_19112 = (state_19111[(1)]);
if((state_val_19112 === (1))){
var state_19111__$1 = state_19111;
var statearr_19113_20571 = state_19111__$1;
(statearr_19113_20571[(2)] = null);

(statearr_19113_20571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (2))){
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19111__$1,(4),jobs);
} else {
if((state_val_19112 === (3))){
var inst_19109 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19111__$1,inst_19109);
} else {
if((state_val_19112 === (4))){
var inst_19101 = (state_19111[(2)]);
var inst_19102 = async(inst_19101);
var state_19111__$1 = state_19111;
if(cljs.core.truth_(inst_19102)){
var statearr_19114_20574 = state_19111__$1;
(statearr_19114_20574[(1)] = (5));

} else {
var statearr_19115_20575 = state_19111__$1;
(statearr_19115_20575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (5))){
var state_19111__$1 = state_19111;
var statearr_19116_20576 = state_19111__$1;
(statearr_19116_20576[(2)] = null);

(statearr_19116_20576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (6))){
var state_19111__$1 = state_19111;
var statearr_19117_20577 = state_19111__$1;
(statearr_19117_20577[(2)] = null);

(statearr_19117_20577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (7))){
var inst_19107 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19118_20580 = state_19111__$1;
(statearr_19118_20580[(2)] = inst_19107);

(statearr_19118_20580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20551,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
;
return ((function (__20551,switch__18820__auto__,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_19119 = [null,null,null,null,null,null,null];
(statearr_19119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__);

(statearr_19119[(1)] = (1));

return statearr_19119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1 = (function (state_19111){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19111);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19120){if((e19120 instanceof Object)){
var ex__18824__auto__ = e19120;
var statearr_19121_20581 = state_19111;
(statearr_19121_20581[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20583 = state_19111;
state_19111 = G__20583;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = function(state_19111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1.call(this,state_19111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__;
})()
;})(__20551,switch__18820__auto__,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
})();
var state__18923__auto__ = (function (){var statearr_19122 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19122[(6)] = c__18921__auto___20570);

return statearr_19122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(__20551,c__18921__auto___20570,G__19074_20552,G__19074_20553__$1,n__4518__auto___20550,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19074_20553__$1)].join('')));

}

var G__20585 = (__20551 + (1));
__20551 = G__20585;
continue;
} else {
}
break;
}

var c__18921__auto___20586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20586,jobs,results,process,async){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20586,jobs,results,process,async){
return (function (state_19144){
var state_val_19145 = (state_19144[(1)]);
if((state_val_19145 === (1))){
var state_19144__$1 = state_19144;
var statearr_19146_20587 = state_19144__$1;
(statearr_19146_20587[(2)] = null);

(statearr_19146_20587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19145 === (2))){
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19144__$1,(4),from);
} else {
if((state_val_19145 === (3))){
var inst_19142 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19144__$1,inst_19142);
} else {
if((state_val_19145 === (4))){
var inst_19125 = (state_19144[(7)]);
var inst_19125__$1 = (state_19144[(2)]);
var inst_19126 = (inst_19125__$1 == null);
var state_19144__$1 = (function (){var statearr_19147 = state_19144;
(statearr_19147[(7)] = inst_19125__$1);

return statearr_19147;
})();
if(cljs.core.truth_(inst_19126)){
var statearr_19148_20589 = state_19144__$1;
(statearr_19148_20589[(1)] = (5));

} else {
var statearr_19149_20590 = state_19144__$1;
(statearr_19149_20590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19145 === (5))){
var inst_19128 = cljs.core.async.close_BANG_(jobs);
var state_19144__$1 = state_19144;
var statearr_19150_20592 = state_19144__$1;
(statearr_19150_20592[(2)] = inst_19128);

(statearr_19150_20592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19145 === (6))){
var inst_19130 = (state_19144[(8)]);
var inst_19125 = (state_19144[(7)]);
var inst_19130__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19132 = [inst_19125,inst_19130__$1];
var inst_19133 = (new cljs.core.PersistentVector(null,2,(5),inst_19131,inst_19132,null));
var state_19144__$1 = (function (){var statearr_19151 = state_19144;
(statearr_19151[(8)] = inst_19130__$1);

return statearr_19151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19144__$1,(8),jobs,inst_19133);
} else {
if((state_val_19145 === (7))){
var inst_19140 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19152_20593 = state_19144__$1;
(statearr_19152_20593[(2)] = inst_19140);

(statearr_19152_20593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19145 === (8))){
var inst_19130 = (state_19144[(8)]);
var inst_19135 = (state_19144[(2)]);
var state_19144__$1 = (function (){var statearr_19153 = state_19144;
(statearr_19153[(9)] = inst_19135);

return statearr_19153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19144__$1,(9),results,inst_19130);
} else {
if((state_val_19145 === (9))){
var inst_19137 = (state_19144[(2)]);
var state_19144__$1 = (function (){var statearr_19154 = state_19144;
(statearr_19154[(10)] = inst_19137);

return statearr_19154;
})();
var statearr_19155_20598 = state_19144__$1;
(statearr_19155_20598[(2)] = null);

(statearr_19155_20598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20586,jobs,results,process,async))
;
return ((function (switch__18820__auto__,c__18921__auto___20586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_19156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__);

(statearr_19156[(1)] = (1));

return statearr_19156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1 = (function (state_19144){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19144);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19157){if((e19157 instanceof Object)){
var ex__18824__auto__ = e19157;
var statearr_19158_20603 = state_19144;
(statearr_19158_20603[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20604 = state_19144;
state_19144 = G__20604;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = function(state_19144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1.call(this,state_19144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20586,jobs,results,process,async))
})();
var state__18923__auto__ = (function (){var statearr_19159 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19159[(6)] = c__18921__auto___20586);

return statearr_19159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20586,jobs,results,process,async))
);


var c__18921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto__,jobs,results,process,async){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto__,jobs,results,process,async){
return (function (state_19197){
var state_val_19198 = (state_19197[(1)]);
if((state_val_19198 === (7))){
var inst_19193 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
var statearr_19199_20609 = state_19197__$1;
(statearr_19199_20609[(2)] = inst_19193);

(statearr_19199_20609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (20))){
var state_19197__$1 = state_19197;
var statearr_19200_20610 = state_19197__$1;
(statearr_19200_20610[(2)] = null);

(statearr_19200_20610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (1))){
var state_19197__$1 = state_19197;
var statearr_19201_20611 = state_19197__$1;
(statearr_19201_20611[(2)] = null);

(statearr_19201_20611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (4))){
var inst_19162 = (state_19197[(7)]);
var inst_19162__$1 = (state_19197[(2)]);
var inst_19163 = (inst_19162__$1 == null);
var state_19197__$1 = (function (){var statearr_19202 = state_19197;
(statearr_19202[(7)] = inst_19162__$1);

return statearr_19202;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19203_20613 = state_19197__$1;
(statearr_19203_20613[(1)] = (5));

} else {
var statearr_19204_20614 = state_19197__$1;
(statearr_19204_20614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (15))){
var inst_19175 = (state_19197[(8)]);
var state_19197__$1 = state_19197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19197__$1,(18),to,inst_19175);
} else {
if((state_val_19198 === (21))){
var inst_19188 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
var statearr_19205_20615 = state_19197__$1;
(statearr_19205_20615[(2)] = inst_19188);

(statearr_19205_20615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (13))){
var inst_19190 = (state_19197[(2)]);
var state_19197__$1 = (function (){var statearr_19206 = state_19197;
(statearr_19206[(9)] = inst_19190);

return statearr_19206;
})();
var statearr_19207_20616 = state_19197__$1;
(statearr_19207_20616[(2)] = null);

(statearr_19207_20616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (6))){
var inst_19162 = (state_19197[(7)]);
var state_19197__$1 = state_19197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19197__$1,(11),inst_19162);
} else {
if((state_val_19198 === (17))){
var inst_19183 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
if(cljs.core.truth_(inst_19183)){
var statearr_19208_20621 = state_19197__$1;
(statearr_19208_20621[(1)] = (19));

} else {
var statearr_19209_20622 = state_19197__$1;
(statearr_19209_20622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (3))){
var inst_19195 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19197__$1,inst_19195);
} else {
if((state_val_19198 === (12))){
var inst_19172 = (state_19197[(10)]);
var state_19197__$1 = state_19197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19197__$1,(14),inst_19172);
} else {
if((state_val_19198 === (2))){
var state_19197__$1 = state_19197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19197__$1,(4),results);
} else {
if((state_val_19198 === (19))){
var state_19197__$1 = state_19197;
var statearr_19210_20626 = state_19197__$1;
(statearr_19210_20626[(2)] = null);

(statearr_19210_20626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (11))){
var inst_19172 = (state_19197[(2)]);
var state_19197__$1 = (function (){var statearr_19211 = state_19197;
(statearr_19211[(10)] = inst_19172);

return statearr_19211;
})();
var statearr_19212_20627 = state_19197__$1;
(statearr_19212_20627[(2)] = null);

(statearr_19212_20627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (9))){
var state_19197__$1 = state_19197;
var statearr_19213_20631 = state_19197__$1;
(statearr_19213_20631[(2)] = null);

(statearr_19213_20631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (5))){
var state_19197__$1 = state_19197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19214_20632 = state_19197__$1;
(statearr_19214_20632[(1)] = (8));

} else {
var statearr_19215_20633 = state_19197__$1;
(statearr_19215_20633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (14))){
var inst_19175 = (state_19197[(8)]);
var inst_19177 = (state_19197[(11)]);
var inst_19175__$1 = (state_19197[(2)]);
var inst_19176 = (inst_19175__$1 == null);
var inst_19177__$1 = cljs.core.not(inst_19176);
var state_19197__$1 = (function (){var statearr_19216 = state_19197;
(statearr_19216[(8)] = inst_19175__$1);

(statearr_19216[(11)] = inst_19177__$1);

return statearr_19216;
})();
if(inst_19177__$1){
var statearr_19217_20636 = state_19197__$1;
(statearr_19217_20636[(1)] = (15));

} else {
var statearr_19218_20637 = state_19197__$1;
(statearr_19218_20637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (16))){
var inst_19177 = (state_19197[(11)]);
var state_19197__$1 = state_19197;
var statearr_19219_20638 = state_19197__$1;
(statearr_19219_20638[(2)] = inst_19177);

(statearr_19219_20638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (10))){
var inst_19169 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
var statearr_19220_20639 = state_19197__$1;
(statearr_19220_20639[(2)] = inst_19169);

(statearr_19220_20639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (18))){
var inst_19180 = (state_19197[(2)]);
var state_19197__$1 = state_19197;
var statearr_19221_20640 = state_19197__$1;
(statearr_19221_20640[(2)] = inst_19180);

(statearr_19221_20640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19198 === (8))){
var inst_19166 = cljs.core.async.close_BANG_(to);
var state_19197__$1 = state_19197;
var statearr_19222_20644 = state_19197__$1;
(statearr_19222_20644[(2)] = inst_19166);

(statearr_19222_20644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto__,jobs,results,process,async))
;
return ((function (switch__18820__auto__,c__18921__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_19223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__);

(statearr_19223[(1)] = (1));

return statearr_19223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1 = (function (state_19197){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19197);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19224){if((e19224 instanceof Object)){
var ex__18824__auto__ = e19224;
var statearr_19225_20648 = state_19197;
(statearr_19225_20648[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20649 = state_19197;
state_19197 = G__20649;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__ = function(state_19197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1.call(this,state_19197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto__,jobs,results,process,async))
})();
var state__18923__auto__ = (function (){var statearr_19226 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19226[(6)] = c__18921__auto__);

return statearr_19226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto__,jobs,results,process,async))
);

return c__18921__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19228 = arguments.length;
switch (G__19228) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19230 = arguments.length;
switch (G__19230) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19232 = arguments.length;
switch (G__19232) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18921__auto___20667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20667,tc,fc){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20667,tc,fc){
return (function (state_19258){
var state_val_19259 = (state_19258[(1)]);
if((state_val_19259 === (7))){
var inst_19254 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19260_20674 = state_19258__$1;
(statearr_19260_20674[(2)] = inst_19254);

(statearr_19260_20674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (1))){
var state_19258__$1 = state_19258;
var statearr_19261_20675 = state_19258__$1;
(statearr_19261_20675[(2)] = null);

(statearr_19261_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (4))){
var inst_19235 = (state_19258[(7)]);
var inst_19235__$1 = (state_19258[(2)]);
var inst_19236 = (inst_19235__$1 == null);
var state_19258__$1 = (function (){var statearr_19262 = state_19258;
(statearr_19262[(7)] = inst_19235__$1);

return statearr_19262;
})();
if(cljs.core.truth_(inst_19236)){
var statearr_19263_20676 = state_19258__$1;
(statearr_19263_20676[(1)] = (5));

} else {
var statearr_19264_20677 = state_19258__$1;
(statearr_19264_20677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (13))){
var state_19258__$1 = state_19258;
var statearr_19265_20681 = state_19258__$1;
(statearr_19265_20681[(2)] = null);

(statearr_19265_20681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (6))){
var inst_19235 = (state_19258[(7)]);
var inst_19241 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19235) : p.call(null,inst_19235));
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19241)){
var statearr_19266_20685 = state_19258__$1;
(statearr_19266_20685[(1)] = (9));

} else {
var statearr_19267_20686 = state_19258__$1;
(statearr_19267_20686[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19258__$1,inst_19256);
} else {
if((state_val_19259 === (12))){
var state_19258__$1 = state_19258;
var statearr_19268_20687 = state_19258__$1;
(statearr_19268_20687[(2)] = null);

(statearr_19268_20687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (2))){
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19258__$1,(4),ch);
} else {
if((state_val_19259 === (11))){
var inst_19235 = (state_19258[(7)]);
var inst_19245 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19258__$1,(8),inst_19245,inst_19235);
} else {
if((state_val_19259 === (9))){
var state_19258__$1 = state_19258;
var statearr_19269_20689 = state_19258__$1;
(statearr_19269_20689[(2)] = tc);

(statearr_19269_20689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (5))){
var inst_19238 = cljs.core.async.close_BANG_(tc);
var inst_19239 = cljs.core.async.close_BANG_(fc);
var state_19258__$1 = (function (){var statearr_19270 = state_19258;
(statearr_19270[(8)] = inst_19238);

return statearr_19270;
})();
var statearr_19271_20690 = state_19258__$1;
(statearr_19271_20690[(2)] = inst_19239);

(statearr_19271_20690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (14))){
var inst_19252 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19272_20691 = state_19258__$1;
(statearr_19272_20691[(2)] = inst_19252);

(statearr_19272_20691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (10))){
var state_19258__$1 = state_19258;
var statearr_19273_20692 = state_19258__$1;
(statearr_19273_20692[(2)] = fc);

(statearr_19273_20692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (8))){
var inst_19247 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19247)){
var statearr_19274_20693 = state_19258__$1;
(statearr_19274_20693[(1)] = (12));

} else {
var statearr_19275_20694 = state_19258__$1;
(statearr_19275_20694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20667,tc,fc))
;
return ((function (switch__18820__auto__,c__18921__auto___20667,tc,fc){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_19276 = [null,null,null,null,null,null,null,null,null];
(statearr_19276[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_19276[(1)] = (1));

return statearr_19276;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_19258){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19258);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19277){if((e19277 instanceof Object)){
var ex__18824__auto__ = e19277;
var statearr_19278_20695 = state_19258;
(statearr_19278_20695[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20696 = state_19258;
state_19258 = G__20696;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20667,tc,fc))
})();
var state__18923__auto__ = (function (){var statearr_19279 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19279[(6)] = c__18921__auto___20667);

return statearr_19279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20667,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto__){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto__){
return (function (state_19300){
var state_val_19301 = (state_19300[(1)]);
if((state_val_19301 === (7))){
var inst_19296 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19302_20699 = state_19300__$1;
(statearr_19302_20699[(2)] = inst_19296);

(statearr_19302_20699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (1))){
var inst_19280 = init;
var state_19300__$1 = (function (){var statearr_19303 = state_19300;
(statearr_19303[(7)] = inst_19280);

return statearr_19303;
})();
var statearr_19304_20700 = state_19300__$1;
(statearr_19304_20700[(2)] = null);

(statearr_19304_20700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (4))){
var inst_19283 = (state_19300[(8)]);
var inst_19283__$1 = (state_19300[(2)]);
var inst_19284 = (inst_19283__$1 == null);
var state_19300__$1 = (function (){var statearr_19305 = state_19300;
(statearr_19305[(8)] = inst_19283__$1);

return statearr_19305;
})();
if(cljs.core.truth_(inst_19284)){
var statearr_19306_20701 = state_19300__$1;
(statearr_19306_20701[(1)] = (5));

} else {
var statearr_19307_20702 = state_19300__$1;
(statearr_19307_20702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (6))){
var inst_19287 = (state_19300[(9)]);
var inst_19280 = (state_19300[(7)]);
var inst_19283 = (state_19300[(8)]);
var inst_19287__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19280,inst_19283) : f.call(null,inst_19280,inst_19283));
var inst_19288 = cljs.core.reduced_QMARK_(inst_19287__$1);
var state_19300__$1 = (function (){var statearr_19308 = state_19300;
(statearr_19308[(9)] = inst_19287__$1);

return statearr_19308;
})();
if(inst_19288){
var statearr_19309_20703 = state_19300__$1;
(statearr_19309_20703[(1)] = (8));

} else {
var statearr_19310_20704 = state_19300__$1;
(statearr_19310_20704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (3))){
var inst_19298 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19300__$1,inst_19298);
} else {
if((state_val_19301 === (2))){
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19300__$1,(4),ch);
} else {
if((state_val_19301 === (9))){
var inst_19287 = (state_19300[(9)]);
var inst_19280 = inst_19287;
var state_19300__$1 = (function (){var statearr_19311 = state_19300;
(statearr_19311[(7)] = inst_19280);

return statearr_19311;
})();
var statearr_19312_20705 = state_19300__$1;
(statearr_19312_20705[(2)] = null);

(statearr_19312_20705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (5))){
var inst_19280 = (state_19300[(7)]);
var state_19300__$1 = state_19300;
var statearr_19313_20706 = state_19300__$1;
(statearr_19313_20706[(2)] = inst_19280);

(statearr_19313_20706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (10))){
var inst_19294 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19314_20708 = state_19300__$1;
(statearr_19314_20708[(2)] = inst_19294);

(statearr_19314_20708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (8))){
var inst_19287 = (state_19300[(9)]);
var inst_19290 = cljs.core.deref(inst_19287);
var state_19300__$1 = state_19300;
var statearr_19315_20711 = state_19300__$1;
(statearr_19315_20711[(2)] = inst_19290);

(statearr_19315_20711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto__))
;
return ((function (switch__18820__auto__,c__18921__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18821__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18821__auto____0 = (function (){
var statearr_19316 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19316[(0)] = cljs$core$async$reduce_$_state_machine__18821__auto__);

(statearr_19316[(1)] = (1));

return statearr_19316;
});
var cljs$core$async$reduce_$_state_machine__18821__auto____1 = (function (state_19300){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19300);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19317){if((e19317 instanceof Object)){
var ex__18824__auto__ = e19317;
var statearr_19318_20712 = state_19300;
(statearr_19318_20712[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20716 = state_19300;
state_19300 = G__20716;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18821__auto__ = function(state_19300){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18821__auto____1.call(this,state_19300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18821__auto____0;
cljs$core$async$reduce_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18821__auto____1;
return cljs$core$async$reduce_$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto__))
})();
var state__18923__auto__ = (function (){var statearr_19319 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19319[(6)] = c__18921__auto__);

return statearr_19319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto__))
);

return c__18921__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto__,f__$1){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto__,f__$1){
return (function (state_19325){
var state_val_19326 = (state_19325[(1)]);
if((state_val_19326 === (1))){
var inst_19320 = cljs.core.async.reduce(f__$1,init,ch);
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19325__$1,(2),inst_19320);
} else {
if((state_val_19326 === (2))){
var inst_19322 = (state_19325[(2)]);
var inst_19323 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19322) : f__$1.call(null,inst_19322));
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19325__$1,inst_19323);
} else {
return null;
}
}
});})(c__18921__auto__,f__$1))
;
return ((function (switch__18820__auto__,c__18921__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18821__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18821__auto____0 = (function (){
var statearr_19327 = [null,null,null,null,null,null,null];
(statearr_19327[(0)] = cljs$core$async$transduce_$_state_machine__18821__auto__);

(statearr_19327[(1)] = (1));

return statearr_19327;
});
var cljs$core$async$transduce_$_state_machine__18821__auto____1 = (function (state_19325){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19325);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19328){if((e19328 instanceof Object)){
var ex__18824__auto__ = e19328;
var statearr_19329_20720 = state_19325;
(statearr_19329_20720[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20721 = state_19325;
state_19325 = G__20721;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18821__auto__ = function(state_19325){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18821__auto____1.call(this,state_19325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18821__auto____0;
cljs$core$async$transduce_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18821__auto____1;
return cljs$core$async$transduce_$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto__,f__$1))
})();
var state__18923__auto__ = (function (){var statearr_19330 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19330[(6)] = c__18921__auto__);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto__,f__$1))
);

return c__18921__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19332 = arguments.length;
switch (G__19332) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto__){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto__){
return (function (state_19357){
var state_val_19358 = (state_19357[(1)]);
if((state_val_19358 === (7))){
var inst_19339 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19359_20724 = state_19357__$1;
(statearr_19359_20724[(2)] = inst_19339);

(statearr_19359_20724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (1))){
var inst_19333 = cljs.core.seq(coll);
var inst_19334 = inst_19333;
var state_19357__$1 = (function (){var statearr_19360 = state_19357;
(statearr_19360[(7)] = inst_19334);

return statearr_19360;
})();
var statearr_19361_20728 = state_19357__$1;
(statearr_19361_20728[(2)] = null);

(statearr_19361_20728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (4))){
var inst_19334 = (state_19357[(7)]);
var inst_19337 = cljs.core.first(inst_19334);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19357__$1,(7),ch,inst_19337);
} else {
if((state_val_19358 === (13))){
var inst_19351 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19362_20731 = state_19357__$1;
(statearr_19362_20731[(2)] = inst_19351);

(statearr_19362_20731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (6))){
var inst_19342 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
if(cljs.core.truth_(inst_19342)){
var statearr_19363_20732 = state_19357__$1;
(statearr_19363_20732[(1)] = (8));

} else {
var statearr_19364_20735 = state_19357__$1;
(statearr_19364_20735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (3))){
var inst_19355 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19357__$1,inst_19355);
} else {
if((state_val_19358 === (12))){
var state_19357__$1 = state_19357;
var statearr_19365_20736 = state_19357__$1;
(statearr_19365_20736[(2)] = null);

(statearr_19365_20736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (2))){
var inst_19334 = (state_19357[(7)]);
var state_19357__$1 = state_19357;
if(cljs.core.truth_(inst_19334)){
var statearr_19366_20737 = state_19357__$1;
(statearr_19366_20737[(1)] = (4));

} else {
var statearr_19367_20738 = state_19357__$1;
(statearr_19367_20738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (11))){
var inst_19348 = cljs.core.async.close_BANG_(ch);
var state_19357__$1 = state_19357;
var statearr_19368_20742 = state_19357__$1;
(statearr_19368_20742[(2)] = inst_19348);

(statearr_19368_20742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (9))){
var state_19357__$1 = state_19357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19369_20747 = state_19357__$1;
(statearr_19369_20747[(1)] = (11));

} else {
var statearr_19370_20748 = state_19357__$1;
(statearr_19370_20748[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (5))){
var inst_19334 = (state_19357[(7)]);
var state_19357__$1 = state_19357;
var statearr_19371_20755 = state_19357__$1;
(statearr_19371_20755[(2)] = inst_19334);

(statearr_19371_20755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (10))){
var inst_19353 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19372_20756 = state_19357__$1;
(statearr_19372_20756[(2)] = inst_19353);

(statearr_19372_20756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (8))){
var inst_19334 = (state_19357[(7)]);
var inst_19344 = cljs.core.next(inst_19334);
var inst_19334__$1 = inst_19344;
var state_19357__$1 = (function (){var statearr_19373 = state_19357;
(statearr_19373[(7)] = inst_19334__$1);

return statearr_19373;
})();
var statearr_19374_20757 = state_19357__$1;
(statearr_19374_20757[(2)] = null);

(statearr_19374_20757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto__))
;
return ((function (switch__18820__auto__,c__18921__auto__){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_19357){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19357);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19376){if((e19376 instanceof Object)){
var ex__18824__auto__ = e19376;
var statearr_19377_20758 = state_19357;
(statearr_19377_20758[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20759 = state_19357;
state_19357 = G__20759;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_19357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_19357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto__))
})();
var state__18923__auto__ = (function (){var statearr_19378 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19378[(6)] = c__18921__auto__);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto__))
);

return c__18921__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19379 = (function (ch,cs,meta19380){
this.ch = ch;
this.cs = cs;
this.meta19380 = meta19380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19381,meta19380__$1){
var self__ = this;
var _19381__$1 = this;
return (new cljs.core.async.t_cljs$core$async19379(self__.ch,self__.cs,meta19380__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19381){
var self__ = this;
var _19381__$1 = this;
return self__.meta19380;
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19380","meta19380",1920474153,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19379";

cljs.core.async.t_cljs$core$async19379.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19379");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19379.
 */
cljs.core.async.__GT_t_cljs$core$async19379 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19379(ch__$1,cs__$1,meta19380){
return (new cljs.core.async.t_cljs$core$async19379(ch__$1,cs__$1,meta19380));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19379(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18921__auto___20775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20775,cs,m,dchan,dctr,done){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20775,cs,m,dchan,dctr,done){
return (function (state_19516){
var state_val_19517 = (state_19516[(1)]);
if((state_val_19517 === (7))){
var inst_19512 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19518_20777 = state_19516__$1;
(statearr_19518_20777[(2)] = inst_19512);

(statearr_19518_20777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (20))){
var inst_19415 = (state_19516[(7)]);
var inst_19427 = cljs.core.first(inst_19415);
var inst_19428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19427,(0),null);
var inst_19429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19427,(1),null);
var state_19516__$1 = (function (){var statearr_19519 = state_19516;
(statearr_19519[(8)] = inst_19428);

return statearr_19519;
})();
if(cljs.core.truth_(inst_19429)){
var statearr_19520_20778 = state_19516__$1;
(statearr_19520_20778[(1)] = (22));

} else {
var statearr_19521_20779 = state_19516__$1;
(statearr_19521_20779[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (27))){
var inst_19459 = (state_19516[(9)]);
var inst_19457 = (state_19516[(10)]);
var inst_19464 = (state_19516[(11)]);
var inst_19384 = (state_19516[(12)]);
var inst_19464__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19457,inst_19459);
var inst_19465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19464__$1,inst_19384,done);
var state_19516__$1 = (function (){var statearr_19522 = state_19516;
(statearr_19522[(11)] = inst_19464__$1);

return statearr_19522;
})();
if(cljs.core.truth_(inst_19465)){
var statearr_19523_20782 = state_19516__$1;
(statearr_19523_20782[(1)] = (30));

} else {
var statearr_19524_20783 = state_19516__$1;
(statearr_19524_20783[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (1))){
var state_19516__$1 = state_19516;
var statearr_19525_20784 = state_19516__$1;
(statearr_19525_20784[(2)] = null);

(statearr_19525_20784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (24))){
var inst_19415 = (state_19516[(7)]);
var inst_19434 = (state_19516[(2)]);
var inst_19435 = cljs.core.next(inst_19415);
var inst_19393 = inst_19435;
var inst_19394 = null;
var inst_19395 = (0);
var inst_19396 = (0);
var state_19516__$1 = (function (){var statearr_19526 = state_19516;
(statearr_19526[(13)] = inst_19395);

(statearr_19526[(14)] = inst_19394);

(statearr_19526[(15)] = inst_19434);

(statearr_19526[(16)] = inst_19396);

(statearr_19526[(17)] = inst_19393);

return statearr_19526;
})();
var statearr_19527_20785 = state_19516__$1;
(statearr_19527_20785[(2)] = null);

(statearr_19527_20785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (39))){
var state_19516__$1 = state_19516;
var statearr_19531_20786 = state_19516__$1;
(statearr_19531_20786[(2)] = null);

(statearr_19531_20786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (4))){
var inst_19384 = (state_19516[(12)]);
var inst_19384__$1 = (state_19516[(2)]);
var inst_19385 = (inst_19384__$1 == null);
var state_19516__$1 = (function (){var statearr_19532 = state_19516;
(statearr_19532[(12)] = inst_19384__$1);

return statearr_19532;
})();
if(cljs.core.truth_(inst_19385)){
var statearr_19533_20787 = state_19516__$1;
(statearr_19533_20787[(1)] = (5));

} else {
var statearr_19534_20788 = state_19516__$1;
(statearr_19534_20788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (15))){
var inst_19395 = (state_19516[(13)]);
var inst_19394 = (state_19516[(14)]);
var inst_19396 = (state_19516[(16)]);
var inst_19393 = (state_19516[(17)]);
var inst_19411 = (state_19516[(2)]);
var inst_19412 = (inst_19396 + (1));
var tmp19528 = inst_19395;
var tmp19529 = inst_19394;
var tmp19530 = inst_19393;
var inst_19393__$1 = tmp19530;
var inst_19394__$1 = tmp19529;
var inst_19395__$1 = tmp19528;
var inst_19396__$1 = inst_19412;
var state_19516__$1 = (function (){var statearr_19535 = state_19516;
(statearr_19535[(13)] = inst_19395__$1);

(statearr_19535[(14)] = inst_19394__$1);

(statearr_19535[(18)] = inst_19411);

(statearr_19535[(16)] = inst_19396__$1);

(statearr_19535[(17)] = inst_19393__$1);

return statearr_19535;
})();
var statearr_19536_20789 = state_19516__$1;
(statearr_19536_20789[(2)] = null);

(statearr_19536_20789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (21))){
var inst_19438 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19540_20790 = state_19516__$1;
(statearr_19540_20790[(2)] = inst_19438);

(statearr_19540_20790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (31))){
var inst_19464 = (state_19516[(11)]);
var inst_19468 = done(null);
var inst_19469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19464);
var state_19516__$1 = (function (){var statearr_19541 = state_19516;
(statearr_19541[(19)] = inst_19468);

return statearr_19541;
})();
var statearr_19542_20791 = state_19516__$1;
(statearr_19542_20791[(2)] = inst_19469);

(statearr_19542_20791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (32))){
var inst_19459 = (state_19516[(9)]);
var inst_19456 = (state_19516[(20)]);
var inst_19457 = (state_19516[(10)]);
var inst_19458 = (state_19516[(21)]);
var inst_19471 = (state_19516[(2)]);
var inst_19472 = (inst_19459 + (1));
var tmp19537 = inst_19456;
var tmp19538 = inst_19457;
var tmp19539 = inst_19458;
var inst_19456__$1 = tmp19537;
var inst_19457__$1 = tmp19538;
var inst_19458__$1 = tmp19539;
var inst_19459__$1 = inst_19472;
var state_19516__$1 = (function (){var statearr_19543 = state_19516;
(statearr_19543[(9)] = inst_19459__$1);

(statearr_19543[(20)] = inst_19456__$1);

(statearr_19543[(10)] = inst_19457__$1);

(statearr_19543[(21)] = inst_19458__$1);

(statearr_19543[(22)] = inst_19471);

return statearr_19543;
})();
var statearr_19544_20793 = state_19516__$1;
(statearr_19544_20793[(2)] = null);

(statearr_19544_20793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (40))){
var inst_19484 = (state_19516[(23)]);
var inst_19488 = done(null);
var inst_19489 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19484);
var state_19516__$1 = (function (){var statearr_19545 = state_19516;
(statearr_19545[(24)] = inst_19488);

return statearr_19545;
})();
var statearr_19546_20795 = state_19516__$1;
(statearr_19546_20795[(2)] = inst_19489);

(statearr_19546_20795[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (33))){
var inst_19475 = (state_19516[(25)]);
var inst_19477 = cljs.core.chunked_seq_QMARK_(inst_19475);
var state_19516__$1 = state_19516;
if(inst_19477){
var statearr_19547_20796 = state_19516__$1;
(statearr_19547_20796[(1)] = (36));

} else {
var statearr_19548_20797 = state_19516__$1;
(statearr_19548_20797[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (13))){
var inst_19405 = (state_19516[(26)]);
var inst_19408 = cljs.core.async.close_BANG_(inst_19405);
var state_19516__$1 = state_19516;
var statearr_19549_20798 = state_19516__$1;
(statearr_19549_20798[(2)] = inst_19408);

(statearr_19549_20798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (22))){
var inst_19428 = (state_19516[(8)]);
var inst_19431 = cljs.core.async.close_BANG_(inst_19428);
var state_19516__$1 = state_19516;
var statearr_19550_20799 = state_19516__$1;
(statearr_19550_20799[(2)] = inst_19431);

(statearr_19550_20799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (36))){
var inst_19475 = (state_19516[(25)]);
var inst_19479 = cljs.core.chunk_first(inst_19475);
var inst_19480 = cljs.core.chunk_rest(inst_19475);
var inst_19481 = cljs.core.count(inst_19479);
var inst_19456 = inst_19480;
var inst_19457 = inst_19479;
var inst_19458 = inst_19481;
var inst_19459 = (0);
var state_19516__$1 = (function (){var statearr_19551 = state_19516;
(statearr_19551[(9)] = inst_19459);

(statearr_19551[(20)] = inst_19456);

(statearr_19551[(10)] = inst_19457);

(statearr_19551[(21)] = inst_19458);

return statearr_19551;
})();
var statearr_19552_20800 = state_19516__$1;
(statearr_19552_20800[(2)] = null);

(statearr_19552_20800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (41))){
var inst_19475 = (state_19516[(25)]);
var inst_19491 = (state_19516[(2)]);
var inst_19492 = cljs.core.next(inst_19475);
var inst_19456 = inst_19492;
var inst_19457 = null;
var inst_19458 = (0);
var inst_19459 = (0);
var state_19516__$1 = (function (){var statearr_19553 = state_19516;
(statearr_19553[(9)] = inst_19459);

(statearr_19553[(20)] = inst_19456);

(statearr_19553[(10)] = inst_19457);

(statearr_19553[(21)] = inst_19458);

(statearr_19553[(27)] = inst_19491);

return statearr_19553;
})();
var statearr_19554_20801 = state_19516__$1;
(statearr_19554_20801[(2)] = null);

(statearr_19554_20801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (43))){
var state_19516__$1 = state_19516;
var statearr_19555_20802 = state_19516__$1;
(statearr_19555_20802[(2)] = null);

(statearr_19555_20802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (29))){
var inst_19500 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19556_20803 = state_19516__$1;
(statearr_19556_20803[(2)] = inst_19500);

(statearr_19556_20803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (44))){
var inst_19509 = (state_19516[(2)]);
var state_19516__$1 = (function (){var statearr_19557 = state_19516;
(statearr_19557[(28)] = inst_19509);

return statearr_19557;
})();
var statearr_19558_20804 = state_19516__$1;
(statearr_19558_20804[(2)] = null);

(statearr_19558_20804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (6))){
var inst_19448 = (state_19516[(29)]);
var inst_19447 = cljs.core.deref(cs);
var inst_19448__$1 = cljs.core.keys(inst_19447);
var inst_19449 = cljs.core.count(inst_19448__$1);
var inst_19450 = cljs.core.reset_BANG_(dctr,inst_19449);
var inst_19455 = cljs.core.seq(inst_19448__$1);
var inst_19456 = inst_19455;
var inst_19457 = null;
var inst_19458 = (0);
var inst_19459 = (0);
var state_19516__$1 = (function (){var statearr_19559 = state_19516;
(statearr_19559[(9)] = inst_19459);

(statearr_19559[(30)] = inst_19450);

(statearr_19559[(20)] = inst_19456);

(statearr_19559[(10)] = inst_19457);

(statearr_19559[(21)] = inst_19458);

(statearr_19559[(29)] = inst_19448__$1);

return statearr_19559;
})();
var statearr_19560_20805 = state_19516__$1;
(statearr_19560_20805[(2)] = null);

(statearr_19560_20805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (28))){
var inst_19456 = (state_19516[(20)]);
var inst_19475 = (state_19516[(25)]);
var inst_19475__$1 = cljs.core.seq(inst_19456);
var state_19516__$1 = (function (){var statearr_19561 = state_19516;
(statearr_19561[(25)] = inst_19475__$1);

return statearr_19561;
})();
if(inst_19475__$1){
var statearr_19562_20806 = state_19516__$1;
(statearr_19562_20806[(1)] = (33));

} else {
var statearr_19563_20808 = state_19516__$1;
(statearr_19563_20808[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (25))){
var inst_19459 = (state_19516[(9)]);
var inst_19458 = (state_19516[(21)]);
var inst_19461 = (inst_19459 < inst_19458);
var inst_19462 = inst_19461;
var state_19516__$1 = state_19516;
if(cljs.core.truth_(inst_19462)){
var statearr_19564_20809 = state_19516__$1;
(statearr_19564_20809[(1)] = (27));

} else {
var statearr_19565_20810 = state_19516__$1;
(statearr_19565_20810[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (34))){
var state_19516__$1 = state_19516;
var statearr_19566_20811 = state_19516__$1;
(statearr_19566_20811[(2)] = null);

(statearr_19566_20811[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (17))){
var state_19516__$1 = state_19516;
var statearr_19567_20812 = state_19516__$1;
(statearr_19567_20812[(2)] = null);

(statearr_19567_20812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (3))){
var inst_19514 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19516__$1,inst_19514);
} else {
if((state_val_19517 === (12))){
var inst_19443 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19568_20817 = state_19516__$1;
(statearr_19568_20817[(2)] = inst_19443);

(statearr_19568_20817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (2))){
var state_19516__$1 = state_19516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19516__$1,(4),ch);
} else {
if((state_val_19517 === (23))){
var state_19516__$1 = state_19516;
var statearr_19569_20818 = state_19516__$1;
(statearr_19569_20818[(2)] = null);

(statearr_19569_20818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (35))){
var inst_19498 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19570_20819 = state_19516__$1;
(statearr_19570_20819[(2)] = inst_19498);

(statearr_19570_20819[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (19))){
var inst_19415 = (state_19516[(7)]);
var inst_19419 = cljs.core.chunk_first(inst_19415);
var inst_19420 = cljs.core.chunk_rest(inst_19415);
var inst_19421 = cljs.core.count(inst_19419);
var inst_19393 = inst_19420;
var inst_19394 = inst_19419;
var inst_19395 = inst_19421;
var inst_19396 = (0);
var state_19516__$1 = (function (){var statearr_19571 = state_19516;
(statearr_19571[(13)] = inst_19395);

(statearr_19571[(14)] = inst_19394);

(statearr_19571[(16)] = inst_19396);

(statearr_19571[(17)] = inst_19393);

return statearr_19571;
})();
var statearr_19572_20820 = state_19516__$1;
(statearr_19572_20820[(2)] = null);

(statearr_19572_20820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (11))){
var inst_19415 = (state_19516[(7)]);
var inst_19393 = (state_19516[(17)]);
var inst_19415__$1 = cljs.core.seq(inst_19393);
var state_19516__$1 = (function (){var statearr_19573 = state_19516;
(statearr_19573[(7)] = inst_19415__$1);

return statearr_19573;
})();
if(inst_19415__$1){
var statearr_19574_20821 = state_19516__$1;
(statearr_19574_20821[(1)] = (16));

} else {
var statearr_19575_20822 = state_19516__$1;
(statearr_19575_20822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (9))){
var inst_19445 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19576_20823 = state_19516__$1;
(statearr_19576_20823[(2)] = inst_19445);

(statearr_19576_20823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (5))){
var inst_19391 = cljs.core.deref(cs);
var inst_19392 = cljs.core.seq(inst_19391);
var inst_19393 = inst_19392;
var inst_19394 = null;
var inst_19395 = (0);
var inst_19396 = (0);
var state_19516__$1 = (function (){var statearr_19577 = state_19516;
(statearr_19577[(13)] = inst_19395);

(statearr_19577[(14)] = inst_19394);

(statearr_19577[(16)] = inst_19396);

(statearr_19577[(17)] = inst_19393);

return statearr_19577;
})();
var statearr_19578_20824 = state_19516__$1;
(statearr_19578_20824[(2)] = null);

(statearr_19578_20824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (14))){
var state_19516__$1 = state_19516;
var statearr_19579_20825 = state_19516__$1;
(statearr_19579_20825[(2)] = null);

(statearr_19579_20825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (45))){
var inst_19506 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19580_20830 = state_19516__$1;
(statearr_19580_20830[(2)] = inst_19506);

(statearr_19580_20830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (26))){
var inst_19448 = (state_19516[(29)]);
var inst_19502 = (state_19516[(2)]);
var inst_19503 = cljs.core.seq(inst_19448);
var state_19516__$1 = (function (){var statearr_19581 = state_19516;
(statearr_19581[(31)] = inst_19502);

return statearr_19581;
})();
if(inst_19503){
var statearr_19582_20834 = state_19516__$1;
(statearr_19582_20834[(1)] = (42));

} else {
var statearr_19583_20835 = state_19516__$1;
(statearr_19583_20835[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (16))){
var inst_19415 = (state_19516[(7)]);
var inst_19417 = cljs.core.chunked_seq_QMARK_(inst_19415);
var state_19516__$1 = state_19516;
if(inst_19417){
var statearr_19584_20836 = state_19516__$1;
(statearr_19584_20836[(1)] = (19));

} else {
var statearr_19585_20837 = state_19516__$1;
(statearr_19585_20837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (38))){
var inst_19495 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19586_20838 = state_19516__$1;
(statearr_19586_20838[(2)] = inst_19495);

(statearr_19586_20838[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (30))){
var state_19516__$1 = state_19516;
var statearr_19587_20839 = state_19516__$1;
(statearr_19587_20839[(2)] = null);

(statearr_19587_20839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (10))){
var inst_19394 = (state_19516[(14)]);
var inst_19396 = (state_19516[(16)]);
var inst_19404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19394,inst_19396);
var inst_19405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19404,(0),null);
var inst_19406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19404,(1),null);
var state_19516__$1 = (function (){var statearr_19588 = state_19516;
(statearr_19588[(26)] = inst_19405);

return statearr_19588;
})();
if(cljs.core.truth_(inst_19406)){
var statearr_19589_20843 = state_19516__$1;
(statearr_19589_20843[(1)] = (13));

} else {
var statearr_19590_20844 = state_19516__$1;
(statearr_19590_20844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (18))){
var inst_19441 = (state_19516[(2)]);
var state_19516__$1 = state_19516;
var statearr_19591_20846 = state_19516__$1;
(statearr_19591_20846[(2)] = inst_19441);

(statearr_19591_20846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (42))){
var state_19516__$1 = state_19516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19516__$1,(45),dchan);
} else {
if((state_val_19517 === (37))){
var inst_19475 = (state_19516[(25)]);
var inst_19384 = (state_19516[(12)]);
var inst_19484 = (state_19516[(23)]);
var inst_19484__$1 = cljs.core.first(inst_19475);
var inst_19485 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19484__$1,inst_19384,done);
var state_19516__$1 = (function (){var statearr_19592 = state_19516;
(statearr_19592[(23)] = inst_19484__$1);

return statearr_19592;
})();
if(cljs.core.truth_(inst_19485)){
var statearr_19593_20850 = state_19516__$1;
(statearr_19593_20850[(1)] = (39));

} else {
var statearr_19594_20851 = state_19516__$1;
(statearr_19594_20851[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19517 === (8))){
var inst_19395 = (state_19516[(13)]);
var inst_19396 = (state_19516[(16)]);
var inst_19398 = (inst_19396 < inst_19395);
var inst_19399 = inst_19398;
var state_19516__$1 = state_19516;
if(cljs.core.truth_(inst_19399)){
var statearr_19595_20852 = state_19516__$1;
(statearr_19595_20852[(1)] = (10));

} else {
var statearr_19596_20853 = state_19516__$1;
(statearr_19596_20853[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20775,cs,m,dchan,dctr,done))
;
return ((function (switch__18820__auto__,c__18921__auto___20775,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18821__auto__ = null;
var cljs$core$async$mult_$_state_machine__18821__auto____0 = (function (){
var statearr_19597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19597[(0)] = cljs$core$async$mult_$_state_machine__18821__auto__);

(statearr_19597[(1)] = (1));

return statearr_19597;
});
var cljs$core$async$mult_$_state_machine__18821__auto____1 = (function (state_19516){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19516);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19598){if((e19598 instanceof Object)){
var ex__18824__auto__ = e19598;
var statearr_19599_20856 = state_19516;
(statearr_19599_20856[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20858 = state_19516;
state_19516 = G__20858;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18821__auto__ = function(state_19516){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18821__auto____1.call(this,state_19516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18821__auto____0;
cljs$core$async$mult_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18821__auto____1;
return cljs$core$async$mult_$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20775,cs,m,dchan,dctr,done))
})();
var state__18923__auto__ = (function (){var statearr_19600 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19600[(6)] = c__18921__auto___20775);

return statearr_19600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20775,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19602 = arguments.length;
switch (G__19602) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20877 = arguments.length;
var i__4642__auto___20878 = (0);
while(true){
if((i__4642__auto___20878 < len__4641__auto___20877)){
args__4647__auto__.push((arguments[i__4642__auto___20878]));

var G__20880 = (i__4642__auto___20878 + (1));
i__4642__auto___20878 = G__20880;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19607){
var map__19608 = p__19607;
var map__19608__$1 = (((((!((map__19608 == null))))?(((((map__19608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19608):map__19608);
var opts = map__19608__$1;
var statearr_19610_20881 = state;
(statearr_19610_20881[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__19608,map__19608__$1,opts){
return (function (val){
var statearr_19611_20882 = state;
(statearr_19611_20882[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19608,map__19608__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19612_20883 = state;
(statearr_19612_20883[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19603){
var G__19604 = cljs.core.first(seq19603);
var seq19603__$1 = cljs.core.next(seq19603);
var G__19605 = cljs.core.first(seq19603__$1);
var seq19603__$2 = cljs.core.next(seq19603__$1);
var G__19606 = cljs.core.first(seq19603__$2);
var seq19603__$3 = cljs.core.next(seq19603__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19604,G__19605,G__19606,seq19603__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19613 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19614){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19614 = meta19614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19615,meta19614__$1){
var self__ = this;
var _19615__$1 = this;
return (new cljs.core.async.t_cljs$core$async19613(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19614__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19615){
var self__ = this;
var _19615__$1 = this;
return self__.meta19614;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19614","meta19614",391996691,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19613";

cljs.core.async.t_cljs$core$async19613.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19613");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19613.
 */
cljs.core.async.__GT_t_cljs$core$async19613 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19613(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19614){
return (new cljs.core.async.t_cljs$core$async19613(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19614));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19613(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18921__auto___20898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19717){
var state_val_19718 = (state_19717[(1)]);
if((state_val_19718 === (7))){
var inst_19632 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
var statearr_19719_20900 = state_19717__$1;
(statearr_19719_20900[(2)] = inst_19632);

(statearr_19719_20900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (20))){
var inst_19644 = (state_19717[(7)]);
var state_19717__$1 = state_19717;
var statearr_19720_20902 = state_19717__$1;
(statearr_19720_20902[(2)] = inst_19644);

(statearr_19720_20902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (27))){
var state_19717__$1 = state_19717;
var statearr_19721_20903 = state_19717__$1;
(statearr_19721_20903[(2)] = null);

(statearr_19721_20903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (1))){
var inst_19619 = (state_19717[(8)]);
var inst_19619__$1 = calc_state();
var inst_19621 = (inst_19619__$1 == null);
var inst_19622 = cljs.core.not(inst_19621);
var state_19717__$1 = (function (){var statearr_19722 = state_19717;
(statearr_19722[(8)] = inst_19619__$1);

return statearr_19722;
})();
if(inst_19622){
var statearr_19723_20909 = state_19717__$1;
(statearr_19723_20909[(1)] = (2));

} else {
var statearr_19724_20910 = state_19717__$1;
(statearr_19724_20910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (24))){
var inst_19668 = (state_19717[(9)]);
var inst_19691 = (state_19717[(10)]);
var inst_19677 = (state_19717[(11)]);
var inst_19691__$1 = (inst_19668.cljs$core$IFn$_invoke$arity$1 ? inst_19668.cljs$core$IFn$_invoke$arity$1(inst_19677) : inst_19668.call(null,inst_19677));
var state_19717__$1 = (function (){var statearr_19725 = state_19717;
(statearr_19725[(10)] = inst_19691__$1);

return statearr_19725;
})();
if(cljs.core.truth_(inst_19691__$1)){
var statearr_19726_20912 = state_19717__$1;
(statearr_19726_20912[(1)] = (29));

} else {
var statearr_19727_20913 = state_19717__$1;
(statearr_19727_20913[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (4))){
var inst_19635 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19635)){
var statearr_19728_20914 = state_19717__$1;
(statearr_19728_20914[(1)] = (8));

} else {
var statearr_19729_20915 = state_19717__$1;
(statearr_19729_20915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (15))){
var inst_19662 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19662)){
var statearr_19730_20916 = state_19717__$1;
(statearr_19730_20916[(1)] = (19));

} else {
var statearr_19731_20917 = state_19717__$1;
(statearr_19731_20917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (21))){
var inst_19667 = (state_19717[(12)]);
var inst_19667__$1 = (state_19717[(2)]);
var inst_19668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19667__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19667__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19667__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19717__$1 = (function (){var statearr_19732 = state_19717;
(statearr_19732[(9)] = inst_19668);

(statearr_19732[(12)] = inst_19667__$1);

(statearr_19732[(13)] = inst_19669);

return statearr_19732;
})();
return cljs.core.async.ioc_alts_BANG_(state_19717__$1,(22),inst_19670);
} else {
if((state_val_19718 === (31))){
var inst_19699 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19699)){
var statearr_19733_20919 = state_19717__$1;
(statearr_19733_20919[(1)] = (32));

} else {
var statearr_19734_20920 = state_19717__$1;
(statearr_19734_20920[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (32))){
var inst_19676 = (state_19717[(14)]);
var state_19717__$1 = state_19717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19717__$1,(35),out,inst_19676);
} else {
if((state_val_19718 === (33))){
var inst_19667 = (state_19717[(12)]);
var inst_19644 = inst_19667;
var state_19717__$1 = (function (){var statearr_19735 = state_19717;
(statearr_19735[(7)] = inst_19644);

return statearr_19735;
})();
var statearr_19736_20921 = state_19717__$1;
(statearr_19736_20921[(2)] = null);

(statearr_19736_20921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (13))){
var inst_19644 = (state_19717[(7)]);
var inst_19651 = inst_19644.cljs$lang$protocol_mask$partition0$;
var inst_19652 = (inst_19651 & (64));
var inst_19653 = inst_19644.cljs$core$ISeq$;
var inst_19654 = (cljs.core.PROTOCOL_SENTINEL === inst_19653);
var inst_19655 = ((inst_19652) || (inst_19654));
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19655)){
var statearr_19737_20926 = state_19717__$1;
(statearr_19737_20926[(1)] = (16));

} else {
var statearr_19738_20927 = state_19717__$1;
(statearr_19738_20927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (22))){
var inst_19676 = (state_19717[(14)]);
var inst_19677 = (state_19717[(11)]);
var inst_19675 = (state_19717[(2)]);
var inst_19676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19675,(0),null);
var inst_19677__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19675,(1),null);
var inst_19678 = (inst_19676__$1 == null);
var inst_19679 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19677__$1,change);
var inst_19680 = ((inst_19678) || (inst_19679));
var state_19717__$1 = (function (){var statearr_19739 = state_19717;
(statearr_19739[(14)] = inst_19676__$1);

(statearr_19739[(11)] = inst_19677__$1);

return statearr_19739;
})();
if(cljs.core.truth_(inst_19680)){
var statearr_19740_20928 = state_19717__$1;
(statearr_19740_20928[(1)] = (23));

} else {
var statearr_19741_20929 = state_19717__$1;
(statearr_19741_20929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (36))){
var inst_19667 = (state_19717[(12)]);
var inst_19644 = inst_19667;
var state_19717__$1 = (function (){var statearr_19742 = state_19717;
(statearr_19742[(7)] = inst_19644);

return statearr_19742;
})();
var statearr_19743_20930 = state_19717__$1;
(statearr_19743_20930[(2)] = null);

(statearr_19743_20930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (29))){
var inst_19691 = (state_19717[(10)]);
var state_19717__$1 = state_19717;
var statearr_19744_20931 = state_19717__$1;
(statearr_19744_20931[(2)] = inst_19691);

(statearr_19744_20931[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (6))){
var state_19717__$1 = state_19717;
var statearr_19745_20932 = state_19717__$1;
(statearr_19745_20932[(2)] = false);

(statearr_19745_20932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (28))){
var inst_19687 = (state_19717[(2)]);
var inst_19688 = calc_state();
var inst_19644 = inst_19688;
var state_19717__$1 = (function (){var statearr_19746 = state_19717;
(statearr_19746[(7)] = inst_19644);

(statearr_19746[(15)] = inst_19687);

return statearr_19746;
})();
var statearr_19747_20933 = state_19717__$1;
(statearr_19747_20933[(2)] = null);

(statearr_19747_20933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (25))){
var inst_19713 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
var statearr_19748_20934 = state_19717__$1;
(statearr_19748_20934[(2)] = inst_19713);

(statearr_19748_20934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (34))){
var inst_19711 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
var statearr_19749_20935 = state_19717__$1;
(statearr_19749_20935[(2)] = inst_19711);

(statearr_19749_20935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (17))){
var state_19717__$1 = state_19717;
var statearr_19750_20936 = state_19717__$1;
(statearr_19750_20936[(2)] = false);

(statearr_19750_20936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (3))){
var state_19717__$1 = state_19717;
var statearr_19751_20937 = state_19717__$1;
(statearr_19751_20937[(2)] = false);

(statearr_19751_20937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (12))){
var inst_19715 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19717__$1,inst_19715);
} else {
if((state_val_19718 === (2))){
var inst_19619 = (state_19717[(8)]);
var inst_19624 = inst_19619.cljs$lang$protocol_mask$partition0$;
var inst_19625 = (inst_19624 & (64));
var inst_19626 = inst_19619.cljs$core$ISeq$;
var inst_19627 = (cljs.core.PROTOCOL_SENTINEL === inst_19626);
var inst_19628 = ((inst_19625) || (inst_19627));
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19628)){
var statearr_19752_20939 = state_19717__$1;
(statearr_19752_20939[(1)] = (5));

} else {
var statearr_19753_20940 = state_19717__$1;
(statearr_19753_20940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (23))){
var inst_19676 = (state_19717[(14)]);
var inst_19682 = (inst_19676 == null);
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19682)){
var statearr_19754_20941 = state_19717__$1;
(statearr_19754_20941[(1)] = (26));

} else {
var statearr_19755_20942 = state_19717__$1;
(statearr_19755_20942[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (35))){
var inst_19702 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
if(cljs.core.truth_(inst_19702)){
var statearr_19756_20943 = state_19717__$1;
(statearr_19756_20943[(1)] = (36));

} else {
var statearr_19757_20944 = state_19717__$1;
(statearr_19757_20944[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (19))){
var inst_19644 = (state_19717[(7)]);
var inst_19664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19644);
var state_19717__$1 = state_19717;
var statearr_19758_20945 = state_19717__$1;
(statearr_19758_20945[(2)] = inst_19664);

(statearr_19758_20945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (11))){
var inst_19644 = (state_19717[(7)]);
var inst_19648 = (inst_19644 == null);
var inst_19649 = cljs.core.not(inst_19648);
var state_19717__$1 = state_19717;
if(inst_19649){
var statearr_19759_20946 = state_19717__$1;
(statearr_19759_20946[(1)] = (13));

} else {
var statearr_19760_20947 = state_19717__$1;
(statearr_19760_20947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (9))){
var inst_19619 = (state_19717[(8)]);
var state_19717__$1 = state_19717;
var statearr_19761_20948 = state_19717__$1;
(statearr_19761_20948[(2)] = inst_19619);

(statearr_19761_20948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (5))){
var state_19717__$1 = state_19717;
var statearr_19762_20949 = state_19717__$1;
(statearr_19762_20949[(2)] = true);

(statearr_19762_20949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (14))){
var state_19717__$1 = state_19717;
var statearr_19763_20950 = state_19717__$1;
(statearr_19763_20950[(2)] = false);

(statearr_19763_20950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (26))){
var inst_19677 = (state_19717[(11)]);
var inst_19684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19677);
var state_19717__$1 = state_19717;
var statearr_19764_20951 = state_19717__$1;
(statearr_19764_20951[(2)] = inst_19684);

(statearr_19764_20951[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (16))){
var state_19717__$1 = state_19717;
var statearr_19765_20952 = state_19717__$1;
(statearr_19765_20952[(2)] = true);

(statearr_19765_20952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (38))){
var inst_19707 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
var statearr_19766_20956 = state_19717__$1;
(statearr_19766_20956[(2)] = inst_19707);

(statearr_19766_20956[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (30))){
var inst_19668 = (state_19717[(9)]);
var inst_19669 = (state_19717[(13)]);
var inst_19677 = (state_19717[(11)]);
var inst_19694 = cljs.core.empty_QMARK_(inst_19668);
var inst_19695 = (inst_19669.cljs$core$IFn$_invoke$arity$1 ? inst_19669.cljs$core$IFn$_invoke$arity$1(inst_19677) : inst_19669.call(null,inst_19677));
var inst_19696 = cljs.core.not(inst_19695);
var inst_19697 = ((inst_19694) && (inst_19696));
var state_19717__$1 = state_19717;
var statearr_19767_20961 = state_19717__$1;
(statearr_19767_20961[(2)] = inst_19697);

(statearr_19767_20961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (10))){
var inst_19619 = (state_19717[(8)]);
var inst_19640 = (state_19717[(2)]);
var inst_19641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19640,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19640,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19640,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19644 = inst_19619;
var state_19717__$1 = (function (){var statearr_19768 = state_19717;
(statearr_19768[(16)] = inst_19643);

(statearr_19768[(7)] = inst_19644);

(statearr_19768[(17)] = inst_19642);

(statearr_19768[(18)] = inst_19641);

return statearr_19768;
})();
var statearr_19769_20962 = state_19717__$1;
(statearr_19769_20962[(2)] = null);

(statearr_19769_20962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (18))){
var inst_19659 = (state_19717[(2)]);
var state_19717__$1 = state_19717;
var statearr_19770_20963 = state_19717__$1;
(statearr_19770_20963[(2)] = inst_19659);

(statearr_19770_20963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (37))){
var state_19717__$1 = state_19717;
var statearr_19771_20964 = state_19717__$1;
(statearr_19771_20964[(2)] = null);

(statearr_19771_20964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19718 === (8))){
var inst_19619 = (state_19717[(8)]);
var inst_19637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19619);
var state_19717__$1 = state_19717;
var statearr_19772_20966 = state_19717__$1;
(statearr_19772_20966[(2)] = inst_19637);

(statearr_19772_20966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18820__auto__,c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18821__auto__ = null;
var cljs$core$async$mix_$_state_machine__18821__auto____0 = (function (){
var statearr_19773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19773[(0)] = cljs$core$async$mix_$_state_machine__18821__auto__);

(statearr_19773[(1)] = (1));

return statearr_19773;
});
var cljs$core$async$mix_$_state_machine__18821__auto____1 = (function (state_19717){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19717);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19774){if((e19774 instanceof Object)){
var ex__18824__auto__ = e19774;
var statearr_19775_20968 = state_19717;
(statearr_19775_20968[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20969 = state_19717;
state_19717 = G__20969;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18821__auto__ = function(state_19717){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18821__auto____1.call(this,state_19717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18821__auto____0;
cljs$core$async$mix_$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18821__auto____1;
return cljs$core$async$mix_$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18923__auto__ = (function (){var statearr_19776 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19776[(6)] = c__18921__auto___20898);

return statearr_19776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19778 = arguments.length;
switch (G__19778) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19781 = arguments.length;
switch (G__19781) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__19779_SHARP_){
if(cljs.core.truth_((p1__19779_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19779_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19779_SHARP_.call(null,topic)))){
return p1__19779_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19779_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19782 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19783){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19783 = meta19783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19784,meta19783__$1){
var self__ = this;
var _19784__$1 = this;
return (new cljs.core.async.t_cljs$core$async19782(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19783__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19784){
var self__ = this;
var _19784__$1 = this;
return self__.meta19783;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19783","meta19783",2112497033,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19782";

cljs.core.async.t_cljs$core$async19782.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async19782");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19782.
 */
cljs.core.async.__GT_t_cljs$core$async19782 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19782(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19783){
return (new cljs.core.async.t_cljs$core$async19782(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19783));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19782(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18921__auto___20983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___20983,mults,ensure_mult,p){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___20983,mults,ensure_mult,p){
return (function (state_19856){
var state_val_19857 = (state_19856[(1)]);
if((state_val_19857 === (7))){
var inst_19852 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19858_20984 = state_19856__$1;
(statearr_19858_20984[(2)] = inst_19852);

(statearr_19858_20984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (20))){
var state_19856__$1 = state_19856;
var statearr_19859_20986 = state_19856__$1;
(statearr_19859_20986[(2)] = null);

(statearr_19859_20986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (1))){
var state_19856__$1 = state_19856;
var statearr_19860_20987 = state_19856__$1;
(statearr_19860_20987[(2)] = null);

(statearr_19860_20987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (24))){
var inst_19835 = (state_19856[(7)]);
var inst_19844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19835);
var state_19856__$1 = state_19856;
var statearr_19861_20988 = state_19856__$1;
(statearr_19861_20988[(2)] = inst_19844);

(statearr_19861_20988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (4))){
var inst_19787 = (state_19856[(8)]);
var inst_19787__$1 = (state_19856[(2)]);
var inst_19788 = (inst_19787__$1 == null);
var state_19856__$1 = (function (){var statearr_19862 = state_19856;
(statearr_19862[(8)] = inst_19787__$1);

return statearr_19862;
})();
if(cljs.core.truth_(inst_19788)){
var statearr_19863_20990 = state_19856__$1;
(statearr_19863_20990[(1)] = (5));

} else {
var statearr_19864_20991 = state_19856__$1;
(statearr_19864_20991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (15))){
var inst_19829 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19865_20992 = state_19856__$1;
(statearr_19865_20992[(2)] = inst_19829);

(statearr_19865_20992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (21))){
var inst_19849 = (state_19856[(2)]);
var state_19856__$1 = (function (){var statearr_19866 = state_19856;
(statearr_19866[(9)] = inst_19849);

return statearr_19866;
})();
var statearr_19867_20993 = state_19856__$1;
(statearr_19867_20993[(2)] = null);

(statearr_19867_20993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (13))){
var inst_19811 = (state_19856[(10)]);
var inst_19813 = cljs.core.chunked_seq_QMARK_(inst_19811);
var state_19856__$1 = state_19856;
if(inst_19813){
var statearr_19868_20994 = state_19856__$1;
(statearr_19868_20994[(1)] = (16));

} else {
var statearr_19869_20995 = state_19856__$1;
(statearr_19869_20995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (22))){
var inst_19841 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
if(cljs.core.truth_(inst_19841)){
var statearr_19870_20996 = state_19856__$1;
(statearr_19870_20996[(1)] = (23));

} else {
var statearr_19871_20997 = state_19856__$1;
(statearr_19871_20997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (6))){
var inst_19787 = (state_19856[(8)]);
var inst_19835 = (state_19856[(7)]);
var inst_19837 = (state_19856[(11)]);
var inst_19835__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19787) : topic_fn.call(null,inst_19787));
var inst_19836 = cljs.core.deref(mults);
var inst_19837__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19836,inst_19835__$1);
var state_19856__$1 = (function (){var statearr_19872 = state_19856;
(statearr_19872[(7)] = inst_19835__$1);

(statearr_19872[(11)] = inst_19837__$1);

return statearr_19872;
})();
if(cljs.core.truth_(inst_19837__$1)){
var statearr_19873_21005 = state_19856__$1;
(statearr_19873_21005[(1)] = (19));

} else {
var statearr_19874_21006 = state_19856__$1;
(statearr_19874_21006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (25))){
var inst_19846 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19875_21007 = state_19856__$1;
(statearr_19875_21007[(2)] = inst_19846);

(statearr_19875_21007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (17))){
var inst_19811 = (state_19856[(10)]);
var inst_19820 = cljs.core.first(inst_19811);
var inst_19821 = cljs.core.async.muxch_STAR_(inst_19820);
var inst_19822 = cljs.core.async.close_BANG_(inst_19821);
var inst_19823 = cljs.core.next(inst_19811);
var inst_19797 = inst_19823;
var inst_19798 = null;
var inst_19799 = (0);
var inst_19800 = (0);
var state_19856__$1 = (function (){var statearr_19876 = state_19856;
(statearr_19876[(12)] = inst_19799);

(statearr_19876[(13)] = inst_19822);

(statearr_19876[(14)] = inst_19800);

(statearr_19876[(15)] = inst_19797);

(statearr_19876[(16)] = inst_19798);

return statearr_19876;
})();
var statearr_19877_21011 = state_19856__$1;
(statearr_19877_21011[(2)] = null);

(statearr_19877_21011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (3))){
var inst_19854 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19856__$1,inst_19854);
} else {
if((state_val_19857 === (12))){
var inst_19831 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19878_21012 = state_19856__$1;
(statearr_19878_21012[(2)] = inst_19831);

(statearr_19878_21012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (2))){
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19856__$1,(4),ch);
} else {
if((state_val_19857 === (23))){
var state_19856__$1 = state_19856;
var statearr_19879_21016 = state_19856__$1;
(statearr_19879_21016[(2)] = null);

(statearr_19879_21016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (19))){
var inst_19787 = (state_19856[(8)]);
var inst_19837 = (state_19856[(11)]);
var inst_19839 = cljs.core.async.muxch_STAR_(inst_19837);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19856__$1,(22),inst_19839,inst_19787);
} else {
if((state_val_19857 === (11))){
var inst_19797 = (state_19856[(15)]);
var inst_19811 = (state_19856[(10)]);
var inst_19811__$1 = cljs.core.seq(inst_19797);
var state_19856__$1 = (function (){var statearr_19880 = state_19856;
(statearr_19880[(10)] = inst_19811__$1);

return statearr_19880;
})();
if(inst_19811__$1){
var statearr_19881_21017 = state_19856__$1;
(statearr_19881_21017[(1)] = (13));

} else {
var statearr_19882_21018 = state_19856__$1;
(statearr_19882_21018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (9))){
var inst_19833 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19883_21020 = state_19856__$1;
(statearr_19883_21020[(2)] = inst_19833);

(statearr_19883_21020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (5))){
var inst_19794 = cljs.core.deref(mults);
var inst_19795 = cljs.core.vals(inst_19794);
var inst_19796 = cljs.core.seq(inst_19795);
var inst_19797 = inst_19796;
var inst_19798 = null;
var inst_19799 = (0);
var inst_19800 = (0);
var state_19856__$1 = (function (){var statearr_19884 = state_19856;
(statearr_19884[(12)] = inst_19799);

(statearr_19884[(14)] = inst_19800);

(statearr_19884[(15)] = inst_19797);

(statearr_19884[(16)] = inst_19798);

return statearr_19884;
})();
var statearr_19885_21021 = state_19856__$1;
(statearr_19885_21021[(2)] = null);

(statearr_19885_21021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (14))){
var state_19856__$1 = state_19856;
var statearr_19889_21022 = state_19856__$1;
(statearr_19889_21022[(2)] = null);

(statearr_19889_21022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (16))){
var inst_19811 = (state_19856[(10)]);
var inst_19815 = cljs.core.chunk_first(inst_19811);
var inst_19816 = cljs.core.chunk_rest(inst_19811);
var inst_19817 = cljs.core.count(inst_19815);
var inst_19797 = inst_19816;
var inst_19798 = inst_19815;
var inst_19799 = inst_19817;
var inst_19800 = (0);
var state_19856__$1 = (function (){var statearr_19890 = state_19856;
(statearr_19890[(12)] = inst_19799);

(statearr_19890[(14)] = inst_19800);

(statearr_19890[(15)] = inst_19797);

(statearr_19890[(16)] = inst_19798);

return statearr_19890;
})();
var statearr_19891_21026 = state_19856__$1;
(statearr_19891_21026[(2)] = null);

(statearr_19891_21026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (10))){
var inst_19799 = (state_19856[(12)]);
var inst_19800 = (state_19856[(14)]);
var inst_19797 = (state_19856[(15)]);
var inst_19798 = (state_19856[(16)]);
var inst_19805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19798,inst_19800);
var inst_19806 = cljs.core.async.muxch_STAR_(inst_19805);
var inst_19807 = cljs.core.async.close_BANG_(inst_19806);
var inst_19808 = (inst_19800 + (1));
var tmp19886 = inst_19799;
var tmp19887 = inst_19797;
var tmp19888 = inst_19798;
var inst_19797__$1 = tmp19887;
var inst_19798__$1 = tmp19888;
var inst_19799__$1 = tmp19886;
var inst_19800__$1 = inst_19808;
var state_19856__$1 = (function (){var statearr_19892 = state_19856;
(statearr_19892[(12)] = inst_19799__$1);

(statearr_19892[(14)] = inst_19800__$1);

(statearr_19892[(17)] = inst_19807);

(statearr_19892[(15)] = inst_19797__$1);

(statearr_19892[(16)] = inst_19798__$1);

return statearr_19892;
})();
var statearr_19893_21039 = state_19856__$1;
(statearr_19893_21039[(2)] = null);

(statearr_19893_21039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (18))){
var inst_19826 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19894_21040 = state_19856__$1;
(statearr_19894_21040[(2)] = inst_19826);

(statearr_19894_21040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (8))){
var inst_19799 = (state_19856[(12)]);
var inst_19800 = (state_19856[(14)]);
var inst_19802 = (inst_19800 < inst_19799);
var inst_19803 = inst_19802;
var state_19856__$1 = state_19856;
if(cljs.core.truth_(inst_19803)){
var statearr_19895_21041 = state_19856__$1;
(statearr_19895_21041[(1)] = (10));

} else {
var statearr_19896_21042 = state_19856__$1;
(statearr_19896_21042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___20983,mults,ensure_mult,p))
;
return ((function (switch__18820__auto__,c__18921__auto___20983,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_19897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19897[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_19897[(1)] = (1));

return statearr_19897;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_19856){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19856);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19898){if((e19898 instanceof Object)){
var ex__18824__auto__ = e19898;
var statearr_19899_21049 = state_19856;
(statearr_19899_21049[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21050 = state_19856;
state_19856 = G__21050;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_19856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_19856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___20983,mults,ensure_mult,p))
})();
var state__18923__auto__ = (function (){var statearr_19900 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19900[(6)] = c__18921__auto___20983);

return statearr_19900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___20983,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19902 = arguments.length;
switch (G__19902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19904 = arguments.length;
switch (G__19904) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19906 = arguments.length;
switch (G__19906) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18921__auto___21060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19945){
var state_val_19946 = (state_19945[(1)]);
if((state_val_19946 === (7))){
var state_19945__$1 = state_19945;
var statearr_19947_21063 = state_19945__$1;
(statearr_19947_21063[(2)] = null);

(statearr_19947_21063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (1))){
var state_19945__$1 = state_19945;
var statearr_19948_21064 = state_19945__$1;
(statearr_19948_21064[(2)] = null);

(statearr_19948_21064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (4))){
var inst_19909 = (state_19945[(7)]);
var inst_19911 = (inst_19909 < cnt);
var state_19945__$1 = state_19945;
if(cljs.core.truth_(inst_19911)){
var statearr_19949_21065 = state_19945__$1;
(statearr_19949_21065[(1)] = (6));

} else {
var statearr_19950_21066 = state_19945__$1;
(statearr_19950_21066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (15))){
var inst_19941 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
var statearr_19951_21067 = state_19945__$1;
(statearr_19951_21067[(2)] = inst_19941);

(statearr_19951_21067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (13))){
var inst_19934 = cljs.core.async.close_BANG_(out);
var state_19945__$1 = state_19945;
var statearr_19952_21068 = state_19945__$1;
(statearr_19952_21068[(2)] = inst_19934);

(statearr_19952_21068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (6))){
var state_19945__$1 = state_19945;
var statearr_19953_21069 = state_19945__$1;
(statearr_19953_21069[(2)] = null);

(statearr_19953_21069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (3))){
var inst_19943 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19945__$1,inst_19943);
} else {
if((state_val_19946 === (12))){
var inst_19931 = (state_19945[(8)]);
var inst_19931__$1 = (state_19945[(2)]);
var inst_19932 = cljs.core.some(cljs.core.nil_QMARK_,inst_19931__$1);
var state_19945__$1 = (function (){var statearr_19954 = state_19945;
(statearr_19954[(8)] = inst_19931__$1);

return statearr_19954;
})();
if(cljs.core.truth_(inst_19932)){
var statearr_19955_21072 = state_19945__$1;
(statearr_19955_21072[(1)] = (13));

} else {
var statearr_19956_21073 = state_19945__$1;
(statearr_19956_21073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (2))){
var inst_19908 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19909 = (0);
var state_19945__$1 = (function (){var statearr_19957 = state_19945;
(statearr_19957[(9)] = inst_19908);

(statearr_19957[(7)] = inst_19909);

return statearr_19957;
})();
var statearr_19958_21074 = state_19945__$1;
(statearr_19958_21074[(2)] = null);

(statearr_19958_21074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (11))){
var inst_19909 = (state_19945[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19945,(10),Object,null,(9));
var inst_19918 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19909) : chs__$1.call(null,inst_19909));
var inst_19919 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19909) : done.call(null,inst_19909));
var inst_19920 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19918,inst_19919);
var state_19945__$1 = state_19945;
var statearr_19959_21075 = state_19945__$1;
(statearr_19959_21075[(2)] = inst_19920);


cljs.core.async.impl.ioc_helpers.process_exception(state_19945__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (9))){
var inst_19909 = (state_19945[(7)]);
var inst_19922 = (state_19945[(2)]);
var inst_19923 = (inst_19909 + (1));
var inst_19909__$1 = inst_19923;
var state_19945__$1 = (function (){var statearr_19960 = state_19945;
(statearr_19960[(10)] = inst_19922);

(statearr_19960[(7)] = inst_19909__$1);

return statearr_19960;
})();
var statearr_19961_21079 = state_19945__$1;
(statearr_19961_21079[(2)] = null);

(statearr_19961_21079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (5))){
var inst_19929 = (state_19945[(2)]);
var state_19945__$1 = (function (){var statearr_19962 = state_19945;
(statearr_19962[(11)] = inst_19929);

return statearr_19962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19945__$1,(12),dchan);
} else {
if((state_val_19946 === (14))){
var inst_19931 = (state_19945[(8)]);
var inst_19936 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19931);
var state_19945__$1 = state_19945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19945__$1,(16),out,inst_19936);
} else {
if((state_val_19946 === (16))){
var inst_19938 = (state_19945[(2)]);
var state_19945__$1 = (function (){var statearr_19963 = state_19945;
(statearr_19963[(12)] = inst_19938);

return statearr_19963;
})();
var statearr_19964_21086 = state_19945__$1;
(statearr_19964_21086[(2)] = null);

(statearr_19964_21086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (10))){
var inst_19913 = (state_19945[(2)]);
var inst_19914 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19945__$1 = (function (){var statearr_19965 = state_19945;
(statearr_19965[(13)] = inst_19913);

return statearr_19965;
})();
var statearr_19966_21087 = state_19945__$1;
(statearr_19966_21087[(2)] = inst_19914);


cljs.core.async.impl.ioc_helpers.process_exception(state_19945__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19946 === (8))){
var inst_19927 = (state_19945[(2)]);
var state_19945__$1 = state_19945;
var statearr_19967_21089 = state_19945__$1;
(statearr_19967_21089[(2)] = inst_19927);

(statearr_19967_21089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18820__auto__,c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_19968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19968[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_19968[(1)] = (1));

return statearr_19968;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_19945){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_19945);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e19969){if((e19969 instanceof Object)){
var ex__18824__auto__ = e19969;
var statearr_19970_21093 = state_19945;
(statearr_19970_21093[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21095 = state_19945;
state_19945 = G__21095;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_19945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_19945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18923__auto__ = (function (){var statearr_19971 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_19971[(6)] = c__18921__auto___21060);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21060,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19974 = arguments.length;
switch (G__19974) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21097,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21097,out){
return (function (state_20006){
var state_val_20007 = (state_20006[(1)]);
if((state_val_20007 === (7))){
var inst_19985 = (state_20006[(7)]);
var inst_19986 = (state_20006[(8)]);
var inst_19985__$1 = (state_20006[(2)]);
var inst_19986__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19985__$1,(0),null);
var inst_19987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19985__$1,(1),null);
var inst_19988 = (inst_19986__$1 == null);
var state_20006__$1 = (function (){var statearr_20008 = state_20006;
(statearr_20008[(7)] = inst_19985__$1);

(statearr_20008[(9)] = inst_19987);

(statearr_20008[(8)] = inst_19986__$1);

return statearr_20008;
})();
if(cljs.core.truth_(inst_19988)){
var statearr_20009_21098 = state_20006__$1;
(statearr_20009_21098[(1)] = (8));

} else {
var statearr_20010_21099 = state_20006__$1;
(statearr_20010_21099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (1))){
var inst_19975 = cljs.core.vec(chs);
var inst_19976 = inst_19975;
var state_20006__$1 = (function (){var statearr_20011 = state_20006;
(statearr_20011[(10)] = inst_19976);

return statearr_20011;
})();
var statearr_20012_21100 = state_20006__$1;
(statearr_20012_21100[(2)] = null);

(statearr_20012_21100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (4))){
var inst_19976 = (state_20006[(10)]);
var state_20006__$1 = state_20006;
return cljs.core.async.ioc_alts_BANG_(state_20006__$1,(7),inst_19976);
} else {
if((state_val_20007 === (6))){
var inst_20002 = (state_20006[(2)]);
var state_20006__$1 = state_20006;
var statearr_20013_21101 = state_20006__$1;
(statearr_20013_21101[(2)] = inst_20002);

(statearr_20013_21101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (3))){
var inst_20004 = (state_20006[(2)]);
var state_20006__$1 = state_20006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20006__$1,inst_20004);
} else {
if((state_val_20007 === (2))){
var inst_19976 = (state_20006[(10)]);
var inst_19978 = cljs.core.count(inst_19976);
var inst_19979 = (inst_19978 > (0));
var state_20006__$1 = state_20006;
if(cljs.core.truth_(inst_19979)){
var statearr_20015_21103 = state_20006__$1;
(statearr_20015_21103[(1)] = (4));

} else {
var statearr_20016_21104 = state_20006__$1;
(statearr_20016_21104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (11))){
var inst_19976 = (state_20006[(10)]);
var inst_19995 = (state_20006[(2)]);
var tmp20014 = inst_19976;
var inst_19976__$1 = tmp20014;
var state_20006__$1 = (function (){var statearr_20017 = state_20006;
(statearr_20017[(11)] = inst_19995);

(statearr_20017[(10)] = inst_19976__$1);

return statearr_20017;
})();
var statearr_20018_21106 = state_20006__$1;
(statearr_20018_21106[(2)] = null);

(statearr_20018_21106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (9))){
var inst_19986 = (state_20006[(8)]);
var state_20006__$1 = state_20006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20006__$1,(11),out,inst_19986);
} else {
if((state_val_20007 === (5))){
var inst_20000 = cljs.core.async.close_BANG_(out);
var state_20006__$1 = state_20006;
var statearr_20019_21108 = state_20006__$1;
(statearr_20019_21108[(2)] = inst_20000);

(statearr_20019_21108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (10))){
var inst_19998 = (state_20006[(2)]);
var state_20006__$1 = state_20006;
var statearr_20020_21109 = state_20006__$1;
(statearr_20020_21109[(2)] = inst_19998);

(statearr_20020_21109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20007 === (8))){
var inst_19985 = (state_20006[(7)]);
var inst_19987 = (state_20006[(9)]);
var inst_19986 = (state_20006[(8)]);
var inst_19976 = (state_20006[(10)]);
var inst_19990 = (function (){var cs = inst_19976;
var vec__19981 = inst_19985;
var v = inst_19986;
var c = inst_19987;
return ((function (cs,vec__19981,v,c,inst_19985,inst_19987,inst_19986,inst_19976,state_val_20007,c__18921__auto___21097,out){
return (function (p1__19972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19972_SHARP_);
});
;})(cs,vec__19981,v,c,inst_19985,inst_19987,inst_19986,inst_19976,state_val_20007,c__18921__auto___21097,out))
})();
var inst_19991 = cljs.core.filterv(inst_19990,inst_19976);
var inst_19976__$1 = inst_19991;
var state_20006__$1 = (function (){var statearr_20021 = state_20006;
(statearr_20021[(10)] = inst_19976__$1);

return statearr_20021;
})();
var statearr_20022_21111 = state_20006__$1;
(statearr_20022_21111[(2)] = null);

(statearr_20022_21111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21097,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21097,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20023[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20023[(1)] = (1));

return statearr_20023;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20006){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20006);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20024){if((e20024 instanceof Object)){
var ex__18824__auto__ = e20024;
var statearr_20025_21113 = state_20006;
(statearr_20025_21113[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21114 = state_20006;
state_20006 = G__21114;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21097,out))
})();
var state__18923__auto__ = (function (){var statearr_20026 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20026[(6)] = c__18921__auto___21097);

return statearr_20026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20028 = arguments.length;
switch (G__20028) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21117,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21117,out){
return (function (state_20052){
var state_val_20053 = (state_20052[(1)]);
if((state_val_20053 === (7))){
var inst_20034 = (state_20052[(7)]);
var inst_20034__$1 = (state_20052[(2)]);
var inst_20035 = (inst_20034__$1 == null);
var inst_20036 = cljs.core.not(inst_20035);
var state_20052__$1 = (function (){var statearr_20054 = state_20052;
(statearr_20054[(7)] = inst_20034__$1);

return statearr_20054;
})();
if(inst_20036){
var statearr_20055_21118 = state_20052__$1;
(statearr_20055_21118[(1)] = (8));

} else {
var statearr_20056_21119 = state_20052__$1;
(statearr_20056_21119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (1))){
var inst_20029 = (0);
var state_20052__$1 = (function (){var statearr_20057 = state_20052;
(statearr_20057[(8)] = inst_20029);

return statearr_20057;
})();
var statearr_20058_21120 = state_20052__$1;
(statearr_20058_21120[(2)] = null);

(statearr_20058_21120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (4))){
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20052__$1,(7),ch);
} else {
if((state_val_20053 === (6))){
var inst_20047 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20059_21121 = state_20052__$1;
(statearr_20059_21121[(2)] = inst_20047);

(statearr_20059_21121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (3))){
var inst_20049 = (state_20052[(2)]);
var inst_20050 = cljs.core.async.close_BANG_(out);
var state_20052__$1 = (function (){var statearr_20060 = state_20052;
(statearr_20060[(9)] = inst_20049);

return statearr_20060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20052__$1,inst_20050);
} else {
if((state_val_20053 === (2))){
var inst_20029 = (state_20052[(8)]);
var inst_20031 = (inst_20029 < n);
var state_20052__$1 = state_20052;
if(cljs.core.truth_(inst_20031)){
var statearr_20061_21130 = state_20052__$1;
(statearr_20061_21130[(1)] = (4));

} else {
var statearr_20062_21131 = state_20052__$1;
(statearr_20062_21131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (11))){
var inst_20029 = (state_20052[(8)]);
var inst_20039 = (state_20052[(2)]);
var inst_20040 = (inst_20029 + (1));
var inst_20029__$1 = inst_20040;
var state_20052__$1 = (function (){var statearr_20063 = state_20052;
(statearr_20063[(8)] = inst_20029__$1);

(statearr_20063[(10)] = inst_20039);

return statearr_20063;
})();
var statearr_20064_21137 = state_20052__$1;
(statearr_20064_21137[(2)] = null);

(statearr_20064_21137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (9))){
var state_20052__$1 = state_20052;
var statearr_20065_21141 = state_20052__$1;
(statearr_20065_21141[(2)] = null);

(statearr_20065_21141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (5))){
var state_20052__$1 = state_20052;
var statearr_20066_21146 = state_20052__$1;
(statearr_20066_21146[(2)] = null);

(statearr_20066_21146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (10))){
var inst_20044 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20067_21148 = state_20052__$1;
(statearr_20067_21148[(2)] = inst_20044);

(statearr_20067_21148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (8))){
var inst_20034 = (state_20052[(7)]);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20052__$1,(11),out,inst_20034);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21117,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21117,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20068[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20068[(1)] = (1));

return statearr_20068;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20052){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20052);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20069){if((e20069 instanceof Object)){
var ex__18824__auto__ = e20069;
var statearr_20070_21149 = state_20052;
(statearr_20070_21149[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21150 = state_20052;
state_20052 = G__21150;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21117,out))
})();
var state__18923__auto__ = (function (){var statearr_20071 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20071[(6)] = c__18921__auto___21117);

return statearr_20071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20073 = (function (f,ch,meta20074){
this.f = f;
this.ch = ch;
this.meta20074 = meta20074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20075,meta20074__$1){
var self__ = this;
var _20075__$1 = this;
return (new cljs.core.async.t_cljs$core$async20073(self__.f,self__.ch,meta20074__$1));
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20075){
var self__ = this;
var _20075__$1 = this;
return self__.meta20074;
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20076 = (function (f,ch,meta20074,_,fn1,meta20077){
this.f = f;
this.ch = ch;
this.meta20074 = meta20074;
this._ = _;
this.fn1 = fn1;
this.meta20077 = meta20077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20078,meta20077__$1){
var self__ = this;
var _20078__$1 = this;
return (new cljs.core.async.t_cljs$core$async20076(self__.f,self__.ch,self__.meta20074,self__._,self__.fn1,meta20077__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20078){
var self__ = this;
var _20078__$1 = this;
return self__.meta20077;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20072_SHARP_){
var G__20079 = (((p1__20072_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20072_SHARP_) : self__.f.call(null,p1__20072_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20079) : f1.call(null,G__20079));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20074","meta20074",-1798614013,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20073","cljs.core.async/t_cljs$core$async20073",-1997007832,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20077","meta20077",-2054428680,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20076";

cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async20076");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20076.
 */
cljs.core.async.__GT_t_cljs$core$async20076 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20076(f__$1,ch__$1,meta20074__$1,___$2,fn1__$1,meta20077){
return (new cljs.core.async.t_cljs$core$async20076(f__$1,ch__$1,meta20074__$1,___$2,fn1__$1,meta20077));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20076(self__.f,self__.ch,self__.meta20074,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20080 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20080) : self__.f.call(null,G__20080));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20074","meta20074",-1798614013,null)], null);
});

cljs.core.async.t_cljs$core$async20073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20073";

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async20073");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20073.
 */
cljs.core.async.__GT_t_cljs$core$async20073 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20073(f__$1,ch__$1,meta20074){
return (new cljs.core.async.t_cljs$core$async20073(f__$1,ch__$1,meta20074));
});

}

return (new cljs.core.async.t_cljs$core$async20073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20081 = (function (f,ch,meta20082){
this.f = f;
this.ch = ch;
this.meta20082 = meta20082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20083,meta20082__$1){
var self__ = this;
var _20083__$1 = this;
return (new cljs.core.async.t_cljs$core$async20081(self__.f,self__.ch,meta20082__$1));
});

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20083){
var self__ = this;
var _20083__$1 = this;
return self__.meta20082;
});

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20082","meta20082",290181422,null)], null);
});

cljs.core.async.t_cljs$core$async20081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20081";

cljs.core.async.t_cljs$core$async20081.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async20081");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20081.
 */
cljs.core.async.__GT_t_cljs$core$async20081 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20081(f__$1,ch__$1,meta20082){
return (new cljs.core.async.t_cljs$core$async20081(f__$1,ch__$1,meta20082));
});

}

return (new cljs.core.async.t_cljs$core$async20081(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20084 = (function (p,ch,meta20085){
this.p = p;
this.ch = ch;
this.meta20085 = meta20085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20086,meta20085__$1){
var self__ = this;
var _20086__$1 = this;
return (new cljs.core.async.t_cljs$core$async20084(self__.p,self__.ch,meta20085__$1));
});

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20086){
var self__ = this;
var _20086__$1 = this;
return self__.meta20085;
});

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20085","meta20085",-334047007,null)], null);
});

cljs.core.async.t_cljs$core$async20084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20084";

cljs.core.async.t_cljs$core$async20084.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async20084");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20084.
 */
cljs.core.async.__GT_t_cljs$core$async20084 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20084(p__$1,ch__$1,meta20085){
return (new cljs.core.async.t_cljs$core$async20084(p__$1,ch__$1,meta20085));
});

}

return (new cljs.core.async.t_cljs$core$async20084(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20088 = arguments.length;
switch (G__20088) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21197,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21197,out){
return (function (state_20109){
var state_val_20110 = (state_20109[(1)]);
if((state_val_20110 === (7))){
var inst_20105 = (state_20109[(2)]);
var state_20109__$1 = state_20109;
var statearr_20111_21198 = state_20109__$1;
(statearr_20111_21198[(2)] = inst_20105);

(statearr_20111_21198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (1))){
var state_20109__$1 = state_20109;
var statearr_20112_21199 = state_20109__$1;
(statearr_20112_21199[(2)] = null);

(statearr_20112_21199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (4))){
var inst_20091 = (state_20109[(7)]);
var inst_20091__$1 = (state_20109[(2)]);
var inst_20092 = (inst_20091__$1 == null);
var state_20109__$1 = (function (){var statearr_20113 = state_20109;
(statearr_20113[(7)] = inst_20091__$1);

return statearr_20113;
})();
if(cljs.core.truth_(inst_20092)){
var statearr_20114_21202 = state_20109__$1;
(statearr_20114_21202[(1)] = (5));

} else {
var statearr_20115_21208 = state_20109__$1;
(statearr_20115_21208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (6))){
var inst_20091 = (state_20109[(7)]);
var inst_20096 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20091) : p.call(null,inst_20091));
var state_20109__$1 = state_20109;
if(cljs.core.truth_(inst_20096)){
var statearr_20116_21215 = state_20109__$1;
(statearr_20116_21215[(1)] = (8));

} else {
var statearr_20117_21216 = state_20109__$1;
(statearr_20117_21216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (3))){
var inst_20107 = (state_20109[(2)]);
var state_20109__$1 = state_20109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20109__$1,inst_20107);
} else {
if((state_val_20110 === (2))){
var state_20109__$1 = state_20109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20109__$1,(4),ch);
} else {
if((state_val_20110 === (11))){
var inst_20099 = (state_20109[(2)]);
var state_20109__$1 = state_20109;
var statearr_20118_21229 = state_20109__$1;
(statearr_20118_21229[(2)] = inst_20099);

(statearr_20118_21229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (9))){
var state_20109__$1 = state_20109;
var statearr_20119_21237 = state_20109__$1;
(statearr_20119_21237[(2)] = null);

(statearr_20119_21237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (5))){
var inst_20094 = cljs.core.async.close_BANG_(out);
var state_20109__$1 = state_20109;
var statearr_20120_21239 = state_20109__$1;
(statearr_20120_21239[(2)] = inst_20094);

(statearr_20120_21239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (10))){
var inst_20102 = (state_20109[(2)]);
var state_20109__$1 = (function (){var statearr_20121 = state_20109;
(statearr_20121[(8)] = inst_20102);

return statearr_20121;
})();
var statearr_20122_21240 = state_20109__$1;
(statearr_20122_21240[(2)] = null);

(statearr_20122_21240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20110 === (8))){
var inst_20091 = (state_20109[(7)]);
var state_20109__$1 = state_20109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20109__$1,(11),out,inst_20091);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21197,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21197,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20123 = [null,null,null,null,null,null,null,null,null];
(statearr_20123[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20123[(1)] = (1));

return statearr_20123;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20109){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20109);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20124){if((e20124 instanceof Object)){
var ex__18824__auto__ = e20124;
var statearr_20125_21261 = state_20109;
(statearr_20125_21261[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21267 = state_20109;
state_20109 = G__21267;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21197,out))
})();
var state__18923__auto__ = (function (){var statearr_20126 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20126[(6)] = c__18921__auto___21197);

return statearr_20126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21197,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20128 = arguments.length;
switch (G__20128) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto__){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto__){
return (function (state_20190){
var state_val_20191 = (state_20190[(1)]);
if((state_val_20191 === (7))){
var inst_20186 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20192_21305 = state_20190__$1;
(statearr_20192_21305[(2)] = inst_20186);

(statearr_20192_21305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (20))){
var inst_20156 = (state_20190[(7)]);
var inst_20167 = (state_20190[(2)]);
var inst_20168 = cljs.core.next(inst_20156);
var inst_20142 = inst_20168;
var inst_20143 = null;
var inst_20144 = (0);
var inst_20145 = (0);
var state_20190__$1 = (function (){var statearr_20193 = state_20190;
(statearr_20193[(8)] = inst_20143);

(statearr_20193[(9)] = inst_20145);

(statearr_20193[(10)] = inst_20167);

(statearr_20193[(11)] = inst_20142);

(statearr_20193[(12)] = inst_20144);

return statearr_20193;
})();
var statearr_20194_21310 = state_20190__$1;
(statearr_20194_21310[(2)] = null);

(statearr_20194_21310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (1))){
var state_20190__$1 = state_20190;
var statearr_20195_21311 = state_20190__$1;
(statearr_20195_21311[(2)] = null);

(statearr_20195_21311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (4))){
var inst_20131 = (state_20190[(13)]);
var inst_20131__$1 = (state_20190[(2)]);
var inst_20132 = (inst_20131__$1 == null);
var state_20190__$1 = (function (){var statearr_20196 = state_20190;
(statearr_20196[(13)] = inst_20131__$1);

return statearr_20196;
})();
if(cljs.core.truth_(inst_20132)){
var statearr_20197_21316 = state_20190__$1;
(statearr_20197_21316[(1)] = (5));

} else {
var statearr_20198_21317 = state_20190__$1;
(statearr_20198_21317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (15))){
var state_20190__$1 = state_20190;
var statearr_20202_21318 = state_20190__$1;
(statearr_20202_21318[(2)] = null);

(statearr_20202_21318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (21))){
var state_20190__$1 = state_20190;
var statearr_20203_21323 = state_20190__$1;
(statearr_20203_21323[(2)] = null);

(statearr_20203_21323[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (13))){
var inst_20143 = (state_20190[(8)]);
var inst_20145 = (state_20190[(9)]);
var inst_20142 = (state_20190[(11)]);
var inst_20144 = (state_20190[(12)]);
var inst_20152 = (state_20190[(2)]);
var inst_20153 = (inst_20145 + (1));
var tmp20199 = inst_20143;
var tmp20200 = inst_20142;
var tmp20201 = inst_20144;
var inst_20142__$1 = tmp20200;
var inst_20143__$1 = tmp20199;
var inst_20144__$1 = tmp20201;
var inst_20145__$1 = inst_20153;
var state_20190__$1 = (function (){var statearr_20204 = state_20190;
(statearr_20204[(14)] = inst_20152);

(statearr_20204[(8)] = inst_20143__$1);

(statearr_20204[(9)] = inst_20145__$1);

(statearr_20204[(11)] = inst_20142__$1);

(statearr_20204[(12)] = inst_20144__$1);

return statearr_20204;
})();
var statearr_20205_21332 = state_20190__$1;
(statearr_20205_21332[(2)] = null);

(statearr_20205_21332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (22))){
var state_20190__$1 = state_20190;
var statearr_20206_21334 = state_20190__$1;
(statearr_20206_21334[(2)] = null);

(statearr_20206_21334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (6))){
var inst_20131 = (state_20190[(13)]);
var inst_20140 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20131) : f.call(null,inst_20131));
var inst_20141 = cljs.core.seq(inst_20140);
var inst_20142 = inst_20141;
var inst_20143 = null;
var inst_20144 = (0);
var inst_20145 = (0);
var state_20190__$1 = (function (){var statearr_20207 = state_20190;
(statearr_20207[(8)] = inst_20143);

(statearr_20207[(9)] = inst_20145);

(statearr_20207[(11)] = inst_20142);

(statearr_20207[(12)] = inst_20144);

return statearr_20207;
})();
var statearr_20208_21335 = state_20190__$1;
(statearr_20208_21335[(2)] = null);

(statearr_20208_21335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (17))){
var inst_20156 = (state_20190[(7)]);
var inst_20160 = cljs.core.chunk_first(inst_20156);
var inst_20161 = cljs.core.chunk_rest(inst_20156);
var inst_20162 = cljs.core.count(inst_20160);
var inst_20142 = inst_20161;
var inst_20143 = inst_20160;
var inst_20144 = inst_20162;
var inst_20145 = (0);
var state_20190__$1 = (function (){var statearr_20209 = state_20190;
(statearr_20209[(8)] = inst_20143);

(statearr_20209[(9)] = inst_20145);

(statearr_20209[(11)] = inst_20142);

(statearr_20209[(12)] = inst_20144);

return statearr_20209;
})();
var statearr_20210_21340 = state_20190__$1;
(statearr_20210_21340[(2)] = null);

(statearr_20210_21340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (3))){
var inst_20188 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20190__$1,inst_20188);
} else {
if((state_val_20191 === (12))){
var inst_20176 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20211_21341 = state_20190__$1;
(statearr_20211_21341[(2)] = inst_20176);

(statearr_20211_21341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (2))){
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20190__$1,(4),in$);
} else {
if((state_val_20191 === (23))){
var inst_20184 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20212_21342 = state_20190__$1;
(statearr_20212_21342[(2)] = inst_20184);

(statearr_20212_21342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (19))){
var inst_20171 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20213_21343 = state_20190__$1;
(statearr_20213_21343[(2)] = inst_20171);

(statearr_20213_21343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (11))){
var inst_20156 = (state_20190[(7)]);
var inst_20142 = (state_20190[(11)]);
var inst_20156__$1 = cljs.core.seq(inst_20142);
var state_20190__$1 = (function (){var statearr_20214 = state_20190;
(statearr_20214[(7)] = inst_20156__$1);

return statearr_20214;
})();
if(inst_20156__$1){
var statearr_20215_21344 = state_20190__$1;
(statearr_20215_21344[(1)] = (14));

} else {
var statearr_20216_21348 = state_20190__$1;
(statearr_20216_21348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (9))){
var inst_20178 = (state_20190[(2)]);
var inst_20179 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20190__$1 = (function (){var statearr_20217 = state_20190;
(statearr_20217[(15)] = inst_20178);

return statearr_20217;
})();
if(cljs.core.truth_(inst_20179)){
var statearr_20218_21352 = state_20190__$1;
(statearr_20218_21352[(1)] = (21));

} else {
var statearr_20219_21353 = state_20190__$1;
(statearr_20219_21353[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (5))){
var inst_20134 = cljs.core.async.close_BANG_(out);
var state_20190__$1 = state_20190;
var statearr_20220_21354 = state_20190__$1;
(statearr_20220_21354[(2)] = inst_20134);

(statearr_20220_21354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (14))){
var inst_20156 = (state_20190[(7)]);
var inst_20158 = cljs.core.chunked_seq_QMARK_(inst_20156);
var state_20190__$1 = state_20190;
if(inst_20158){
var statearr_20221_21360 = state_20190__$1;
(statearr_20221_21360[(1)] = (17));

} else {
var statearr_20222_21365 = state_20190__$1;
(statearr_20222_21365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (16))){
var inst_20174 = (state_20190[(2)]);
var state_20190__$1 = state_20190;
var statearr_20223_21368 = state_20190__$1;
(statearr_20223_21368[(2)] = inst_20174);

(statearr_20223_21368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20191 === (10))){
var inst_20143 = (state_20190[(8)]);
var inst_20145 = (state_20190[(9)]);
var inst_20150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20143,inst_20145);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20190__$1,(13),out,inst_20150);
} else {
if((state_val_20191 === (18))){
var inst_20156 = (state_20190[(7)]);
var inst_20165 = cljs.core.first(inst_20156);
var state_20190__$1 = state_20190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20190__$1,(20),out,inst_20165);
} else {
if((state_val_20191 === (8))){
var inst_20145 = (state_20190[(9)]);
var inst_20144 = (state_20190[(12)]);
var inst_20147 = (inst_20145 < inst_20144);
var inst_20148 = inst_20147;
var state_20190__$1 = state_20190;
if(cljs.core.truth_(inst_20148)){
var statearr_20224_21379 = state_20190__$1;
(statearr_20224_21379[(1)] = (10));

} else {
var statearr_20225_21380 = state_20190__$1;
(statearr_20225_21380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto__))
;
return ((function (switch__18820__auto__,c__18921__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____0 = (function (){
var statearr_20226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20226[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__);

(statearr_20226[(1)] = (1));

return statearr_20226;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____1 = (function (state_20190){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20190);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20227){if((e20227 instanceof Object)){
var ex__18824__auto__ = e20227;
var statearr_20228_21394 = state_20190;
(statearr_20228_21394[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21405 = state_20190;
state_20190 = G__21405;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__ = function(state_20190){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____1.call(this,state_20190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18821__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto__))
})();
var state__18923__auto__ = (function (){var statearr_20229 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20229[(6)] = c__18921__auto__);

return statearr_20229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto__))
);

return c__18921__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20231 = arguments.length;
switch (G__20231) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20233 = arguments.length;
switch (G__20233) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20235 = arguments.length;
switch (G__20235) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21429,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21429,out){
return (function (state_20259){
var state_val_20260 = (state_20259[(1)]);
if((state_val_20260 === (7))){
var inst_20254 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
var statearr_20261_21431 = state_20259__$1;
(statearr_20261_21431[(2)] = inst_20254);

(statearr_20261_21431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (1))){
var inst_20236 = null;
var state_20259__$1 = (function (){var statearr_20262 = state_20259;
(statearr_20262[(7)] = inst_20236);

return statearr_20262;
})();
var statearr_20263_21435 = state_20259__$1;
(statearr_20263_21435[(2)] = null);

(statearr_20263_21435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (4))){
var inst_20239 = (state_20259[(8)]);
var inst_20239__$1 = (state_20259[(2)]);
var inst_20240 = (inst_20239__$1 == null);
var inst_20241 = cljs.core.not(inst_20240);
var state_20259__$1 = (function (){var statearr_20264 = state_20259;
(statearr_20264[(8)] = inst_20239__$1);

return statearr_20264;
})();
if(inst_20241){
var statearr_20265_21447 = state_20259__$1;
(statearr_20265_21447[(1)] = (5));

} else {
var statearr_20266_21448 = state_20259__$1;
(statearr_20266_21448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (6))){
var state_20259__$1 = state_20259;
var statearr_20267_21453 = state_20259__$1;
(statearr_20267_21453[(2)] = null);

(statearr_20267_21453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (3))){
var inst_20256 = (state_20259[(2)]);
var inst_20257 = cljs.core.async.close_BANG_(out);
var state_20259__$1 = (function (){var statearr_20268 = state_20259;
(statearr_20268[(9)] = inst_20256);

return statearr_20268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20259__$1,inst_20257);
} else {
if((state_val_20260 === (2))){
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20259__$1,(4),ch);
} else {
if((state_val_20260 === (11))){
var inst_20239 = (state_20259[(8)]);
var inst_20248 = (state_20259[(2)]);
var inst_20236 = inst_20239;
var state_20259__$1 = (function (){var statearr_20269 = state_20259;
(statearr_20269[(10)] = inst_20248);

(statearr_20269[(7)] = inst_20236);

return statearr_20269;
})();
var statearr_20270_21455 = state_20259__$1;
(statearr_20270_21455[(2)] = null);

(statearr_20270_21455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (9))){
var inst_20239 = (state_20259[(8)]);
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20259__$1,(11),out,inst_20239);
} else {
if((state_val_20260 === (5))){
var inst_20236 = (state_20259[(7)]);
var inst_20239 = (state_20259[(8)]);
var inst_20243 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20239,inst_20236);
var state_20259__$1 = state_20259;
if(inst_20243){
var statearr_20272_21461 = state_20259__$1;
(statearr_20272_21461[(1)] = (8));

} else {
var statearr_20273_21462 = state_20259__$1;
(statearr_20273_21462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (10))){
var inst_20251 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
var statearr_20274_21463 = state_20259__$1;
(statearr_20274_21463[(2)] = inst_20251);

(statearr_20274_21463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (8))){
var inst_20236 = (state_20259[(7)]);
var tmp20271 = inst_20236;
var inst_20236__$1 = tmp20271;
var state_20259__$1 = (function (){var statearr_20275 = state_20259;
(statearr_20275[(7)] = inst_20236__$1);

return statearr_20275;
})();
var statearr_20276_21464 = state_20259__$1;
(statearr_20276_21464[(2)] = null);

(statearr_20276_21464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21429,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21429,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20277[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20277[(1)] = (1));

return statearr_20277;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20259){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20259);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20278){if((e20278 instanceof Object)){
var ex__18824__auto__ = e20278;
var statearr_20279_21470 = state_20259;
(statearr_20279_21470[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21473 = state_20259;
state_20259 = G__21473;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21429,out))
})();
var state__18923__auto__ = (function (){var statearr_20280 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20280[(6)] = c__18921__auto___21429);

return statearr_20280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21429,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20282 = arguments.length;
switch (G__20282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21478,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21478,out){
return (function (state_20320){
var state_val_20321 = (state_20320[(1)]);
if((state_val_20321 === (7))){
var inst_20316 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20322_21479 = state_20320__$1;
(statearr_20322_21479[(2)] = inst_20316);

(statearr_20322_21479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (1))){
var inst_20283 = (new Array(n));
var inst_20284 = inst_20283;
var inst_20285 = (0);
var state_20320__$1 = (function (){var statearr_20323 = state_20320;
(statearr_20323[(7)] = inst_20285);

(statearr_20323[(8)] = inst_20284);

return statearr_20323;
})();
var statearr_20324_21484 = state_20320__$1;
(statearr_20324_21484[(2)] = null);

(statearr_20324_21484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (4))){
var inst_20288 = (state_20320[(9)]);
var inst_20288__$1 = (state_20320[(2)]);
var inst_20289 = (inst_20288__$1 == null);
var inst_20290 = cljs.core.not(inst_20289);
var state_20320__$1 = (function (){var statearr_20325 = state_20320;
(statearr_20325[(9)] = inst_20288__$1);

return statearr_20325;
})();
if(inst_20290){
var statearr_20326_21485 = state_20320__$1;
(statearr_20326_21485[(1)] = (5));

} else {
var statearr_20327_21488 = state_20320__$1;
(statearr_20327_21488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (15))){
var inst_20310 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20328_21490 = state_20320__$1;
(statearr_20328_21490[(2)] = inst_20310);

(statearr_20328_21490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (13))){
var state_20320__$1 = state_20320;
var statearr_20329_21491 = state_20320__$1;
(statearr_20329_21491[(2)] = null);

(statearr_20329_21491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (6))){
var inst_20285 = (state_20320[(7)]);
var inst_20306 = (inst_20285 > (0));
var state_20320__$1 = state_20320;
if(cljs.core.truth_(inst_20306)){
var statearr_20330_21494 = state_20320__$1;
(statearr_20330_21494[(1)] = (12));

} else {
var statearr_20331_21495 = state_20320__$1;
(statearr_20331_21495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (3))){
var inst_20318 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20320__$1,inst_20318);
} else {
if((state_val_20321 === (12))){
var inst_20284 = (state_20320[(8)]);
var inst_20308 = cljs.core.vec(inst_20284);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20320__$1,(15),out,inst_20308);
} else {
if((state_val_20321 === (2))){
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20320__$1,(4),ch);
} else {
if((state_val_20321 === (11))){
var inst_20300 = (state_20320[(2)]);
var inst_20301 = (new Array(n));
var inst_20284 = inst_20301;
var inst_20285 = (0);
var state_20320__$1 = (function (){var statearr_20332 = state_20320;
(statearr_20332[(7)] = inst_20285);

(statearr_20332[(8)] = inst_20284);

(statearr_20332[(10)] = inst_20300);

return statearr_20332;
})();
var statearr_20333_21502 = state_20320__$1;
(statearr_20333_21502[(2)] = null);

(statearr_20333_21502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (9))){
var inst_20284 = (state_20320[(8)]);
var inst_20298 = cljs.core.vec(inst_20284);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20320__$1,(11),out,inst_20298);
} else {
if((state_val_20321 === (5))){
var inst_20285 = (state_20320[(7)]);
var inst_20284 = (state_20320[(8)]);
var inst_20288 = (state_20320[(9)]);
var inst_20293 = (state_20320[(11)]);
var inst_20292 = (inst_20284[inst_20285] = inst_20288);
var inst_20293__$1 = (inst_20285 + (1));
var inst_20294 = (inst_20293__$1 < n);
var state_20320__$1 = (function (){var statearr_20334 = state_20320;
(statearr_20334[(12)] = inst_20292);

(statearr_20334[(11)] = inst_20293__$1);

return statearr_20334;
})();
if(cljs.core.truth_(inst_20294)){
var statearr_20335_21507 = state_20320__$1;
(statearr_20335_21507[(1)] = (8));

} else {
var statearr_20336_21508 = state_20320__$1;
(statearr_20336_21508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (14))){
var inst_20313 = (state_20320[(2)]);
var inst_20314 = cljs.core.async.close_BANG_(out);
var state_20320__$1 = (function (){var statearr_20338 = state_20320;
(statearr_20338[(13)] = inst_20313);

return statearr_20338;
})();
var statearr_20339_21511 = state_20320__$1;
(statearr_20339_21511[(2)] = inst_20314);

(statearr_20339_21511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (10))){
var inst_20304 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20340_21515 = state_20320__$1;
(statearr_20340_21515[(2)] = inst_20304);

(statearr_20340_21515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (8))){
var inst_20284 = (state_20320[(8)]);
var inst_20293 = (state_20320[(11)]);
var tmp20337 = inst_20284;
var inst_20284__$1 = tmp20337;
var inst_20285 = inst_20293;
var state_20320__$1 = (function (){var statearr_20341 = state_20320;
(statearr_20341[(7)] = inst_20285);

(statearr_20341[(8)] = inst_20284__$1);

return statearr_20341;
})();
var statearr_20342_21518 = state_20320__$1;
(statearr_20342_21518[(2)] = null);

(statearr_20342_21518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21478,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21478,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20343[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20343[(1)] = (1));

return statearr_20343;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20320){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20320);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20344){if((e20344 instanceof Object)){
var ex__18824__auto__ = e20344;
var statearr_20345_21521 = state_20320;
(statearr_20345_21521[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21524 = state_20320;
state_20320 = G__21524;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21478,out))
})();
var state__18923__auto__ = (function (){var statearr_20346 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20346[(6)] = c__18921__auto___21478);

return statearr_20346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21478,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20348 = arguments.length;
switch (G__20348) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18921__auto___21538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18921__auto___21538,out){
return (function (){
var f__18922__auto__ = (function (){var switch__18820__auto__ = ((function (c__18921__auto___21538,out){
return (function (state_20390){
var state_val_20391 = (state_20390[(1)]);
if((state_val_20391 === (7))){
var inst_20386 = (state_20390[(2)]);
var state_20390__$1 = state_20390;
var statearr_20392_21541 = state_20390__$1;
(statearr_20392_21541[(2)] = inst_20386);

(statearr_20392_21541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (1))){
var inst_20349 = [];
var inst_20350 = inst_20349;
var inst_20351 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20390__$1 = (function (){var statearr_20393 = state_20390;
(statearr_20393[(7)] = inst_20350);

(statearr_20393[(8)] = inst_20351);

return statearr_20393;
})();
var statearr_20394_21543 = state_20390__$1;
(statearr_20394_21543[(2)] = null);

(statearr_20394_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (4))){
var inst_20354 = (state_20390[(9)]);
var inst_20354__$1 = (state_20390[(2)]);
var inst_20355 = (inst_20354__$1 == null);
var inst_20356 = cljs.core.not(inst_20355);
var state_20390__$1 = (function (){var statearr_20395 = state_20390;
(statearr_20395[(9)] = inst_20354__$1);

return statearr_20395;
})();
if(inst_20356){
var statearr_20396_21544 = state_20390__$1;
(statearr_20396_21544[(1)] = (5));

} else {
var statearr_20397_21545 = state_20390__$1;
(statearr_20397_21545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (15))){
var inst_20380 = (state_20390[(2)]);
var state_20390__$1 = state_20390;
var statearr_20398_21546 = state_20390__$1;
(statearr_20398_21546[(2)] = inst_20380);

(statearr_20398_21546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (13))){
var state_20390__$1 = state_20390;
var statearr_20399_21548 = state_20390__$1;
(statearr_20399_21548[(2)] = null);

(statearr_20399_21548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (6))){
var inst_20350 = (state_20390[(7)]);
var inst_20375 = inst_20350.length;
var inst_20376 = (inst_20375 > (0));
var state_20390__$1 = state_20390;
if(cljs.core.truth_(inst_20376)){
var statearr_20400_21549 = state_20390__$1;
(statearr_20400_21549[(1)] = (12));

} else {
var statearr_20401_21551 = state_20390__$1;
(statearr_20401_21551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (3))){
var inst_20388 = (state_20390[(2)]);
var state_20390__$1 = state_20390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20390__$1,inst_20388);
} else {
if((state_val_20391 === (12))){
var inst_20350 = (state_20390[(7)]);
var inst_20378 = cljs.core.vec(inst_20350);
var state_20390__$1 = state_20390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20390__$1,(15),out,inst_20378);
} else {
if((state_val_20391 === (2))){
var state_20390__$1 = state_20390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20390__$1,(4),ch);
} else {
if((state_val_20391 === (11))){
var inst_20358 = (state_20390[(10)]);
var inst_20354 = (state_20390[(9)]);
var inst_20368 = (state_20390[(2)]);
var inst_20369 = [];
var inst_20370 = inst_20369.push(inst_20354);
var inst_20350 = inst_20369;
var inst_20351 = inst_20358;
var state_20390__$1 = (function (){var statearr_20402 = state_20390;
(statearr_20402[(7)] = inst_20350);

(statearr_20402[(11)] = inst_20370);

(statearr_20402[(12)] = inst_20368);

(statearr_20402[(8)] = inst_20351);

return statearr_20402;
})();
var statearr_20403_21561 = state_20390__$1;
(statearr_20403_21561[(2)] = null);

(statearr_20403_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (9))){
var inst_20350 = (state_20390[(7)]);
var inst_20366 = cljs.core.vec(inst_20350);
var state_20390__$1 = state_20390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20390__$1,(11),out,inst_20366);
} else {
if((state_val_20391 === (5))){
var inst_20358 = (state_20390[(10)]);
var inst_20354 = (state_20390[(9)]);
var inst_20351 = (state_20390[(8)]);
var inst_20358__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20354) : f.call(null,inst_20354));
var inst_20359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20358__$1,inst_20351);
var inst_20360 = cljs.core.keyword_identical_QMARK_(inst_20351,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20361 = ((inst_20359) || (inst_20360));
var state_20390__$1 = (function (){var statearr_20404 = state_20390;
(statearr_20404[(10)] = inst_20358__$1);

return statearr_20404;
})();
if(cljs.core.truth_(inst_20361)){
var statearr_20405_21562 = state_20390__$1;
(statearr_20405_21562[(1)] = (8));

} else {
var statearr_20406_21563 = state_20390__$1;
(statearr_20406_21563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (14))){
var inst_20383 = (state_20390[(2)]);
var inst_20384 = cljs.core.async.close_BANG_(out);
var state_20390__$1 = (function (){var statearr_20408 = state_20390;
(statearr_20408[(13)] = inst_20383);

return statearr_20408;
})();
var statearr_20409_21564 = state_20390__$1;
(statearr_20409_21564[(2)] = inst_20384);

(statearr_20409_21564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (10))){
var inst_20373 = (state_20390[(2)]);
var state_20390__$1 = state_20390;
var statearr_20410_21566 = state_20390__$1;
(statearr_20410_21566[(2)] = inst_20373);

(statearr_20410_21566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20391 === (8))){
var inst_20350 = (state_20390[(7)]);
var inst_20358 = (state_20390[(10)]);
var inst_20354 = (state_20390[(9)]);
var inst_20363 = inst_20350.push(inst_20354);
var tmp20407 = inst_20350;
var inst_20350__$1 = tmp20407;
var inst_20351 = inst_20358;
var state_20390__$1 = (function (){var statearr_20411 = state_20390;
(statearr_20411[(7)] = inst_20350__$1);

(statearr_20411[(14)] = inst_20363);

(statearr_20411[(8)] = inst_20351);

return statearr_20411;
})();
var statearr_20412_21567 = state_20390__$1;
(statearr_20412_21567[(2)] = null);

(statearr_20412_21567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18921__auto___21538,out))
;
return ((function (switch__18820__auto__,c__18921__auto___21538,out){
return (function() {
var cljs$core$async$state_machine__18821__auto__ = null;
var cljs$core$async$state_machine__18821__auto____0 = (function (){
var statearr_20413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20413[(0)] = cljs$core$async$state_machine__18821__auto__);

(statearr_20413[(1)] = (1));

return statearr_20413;
});
var cljs$core$async$state_machine__18821__auto____1 = (function (state_20390){
while(true){
var ret_value__18822__auto__ = (function (){try{while(true){
var result__18823__auto__ = switch__18820__auto__(state_20390);
if(cljs.core.keyword_identical_QMARK_(result__18823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18823__auto__;
}
break;
}
}catch (e20414){if((e20414 instanceof Object)){
var ex__18824__auto__ = e20414;
var statearr_20415_21575 = state_20390;
(statearr_20415_21575[(5)] = ex__18824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21579 = state_20390;
state_20390 = G__21579;
continue;
} else {
return ret_value__18822__auto__;
}
break;
}
});
cljs$core$async$state_machine__18821__auto__ = function(state_20390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18821__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18821__auto____1.call(this,state_20390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18821__auto____0;
cljs$core$async$state_machine__18821__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18821__auto____1;
return cljs$core$async$state_machine__18821__auto__;
})()
;})(switch__18820__auto__,c__18921__auto___21538,out))
})();
var state__18923__auto__ = (function (){var statearr_20416 = (f__18922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18922__auto__.cljs$core$IFn$_invoke$arity$0() : f__18922__auto__.call(null));
(statearr_20416[(6)] = c__18921__auto___21538);

return statearr_20416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18923__auto__);
});})(c__18921__auto___21538,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
