(ns app.views
  (:require [app.state :refer [app-state]]
            [app.events :refer [sign-in-user sign-out-user]]
            ["blockstack" :as blockstack]))

(defn header
  []
  [:div
   [:h1 "An example reagent/blockstack app"]])

(defn signin
  []
  [:div
   (if (.isUserSignedIn blockstack)
    [:button.btn {:on-click #(sign-out-user %)} "Sign out"]
    [:button.btn {:on-click #(sign-in-user %)} "Sign in"])])

(defn user-info
  []
  (if (.isUserSignedIn blockstack)
    (let [data (js->clj (.loadUserData blockstack) :keywordize-keys true)
          name (:name (:profile data))
          username (:username data)]
     [:div
      [:h1 (str "Hello " name ". ")]
      [:h2 (str username)]])))

(defn app []
  (if (.isSignInPending blockstack)
   (->
    (.handlePendingSignIn blockstack) ;(.. js/window -location -origin)))
    (.then (fn [_] (set! (.. js/window -location) (.. js/window -location -origin))))))
  [:div
   [header]
   [user-info]
   [signin]])
