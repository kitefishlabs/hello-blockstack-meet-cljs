(ns app.events
  (:require [app.state :refer [app-state]]
            ["blockstack" :as blockstack]))

(defn sign-in-user
  [event]
  (.preventDefault event)
  (.redirectToSignIn blockstack))
  ; (swap! app-state assoc :signed-in-user "Tom"))

(defn sign-out-user
  [event]
  (println event)
  (.preventDefault event)
  ((.signUserOut blockstack (.. js/window -location -origin))))
  ; (swap! app-state assoc :signed-in-user nil))
