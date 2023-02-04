package main

import (
	"log"
	"net/http"
	"os"
	"path"
	"strings"
	"sync"

	"go.uber.org/zap"
)

func main() {

	// create a new controller
	c := &Controller{}
	// look for a local NKN wallet
	// if one is not found, create one
	// and save it to the local file system
	// for future use.

	// create a new sugard logger
	http.HandleFunc("/", c.RootHandler)
	log.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)

}

type Controller struct {
	rootHandler http.Handler

	Log *zap.Logger
}

var once sync.Once

func (c *Controller) RootHandler(w http.ResponseWriter, r *http.Request) {
	once.Do(func() {
		kdp := path.Join(os.Getenv("KO_DATA_PATH"))
		if kdp == "" {
			kdp = "kodata"
		}

		if !strings.HasSuffix(kdp, "/") {
			kdp = kdp + "/"
		}
		c.rootHandler = http.FileServer(http.Dir(kdp))
	})

	c.rootHandler.ServeHTTP(w, r)
}
