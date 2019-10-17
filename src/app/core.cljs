(ns app.core
  (:require [reagent.core :as r]
            ["dayjs" :as dayjs]
            [app.views :as views]))

(defn ^:dev/after-load start
  []
  (r/render-component [views/app]
                      (.getElementById js/document "app")))

(defn ^:export main
  []
  (println "Started!")
  (start))

; (defn main! []
;   (println "Started!")
;   (.log js/console "dayjs" (dayjs))
;   (.log js/console "bs"))
;
; (defn reload! []
;   (main!)
;   (println "Reloaded!"))
