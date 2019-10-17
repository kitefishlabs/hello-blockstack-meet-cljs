(ns app.state
  (:require [reagent.core :refer [atom]]))

(defonce app-state (atom {:signed-in-user nil}))
