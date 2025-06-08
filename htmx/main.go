package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	tmpl := template.Must(template.ParseGlob("/*.html"))

	// Serves the static files
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "index.html", nil)
	})

	// Serving root page
	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	tmpl := template.Must(template.ParseFiles("index.html"))
	// 	tmpl.Execute(w, nil)
	// })

	// Serve HTMX partials
	http.HandleFunc("/page", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, `
			<ul>
				<li>Buy milk</li>
				<li>Walk the dog</li>
				<li>Call grandma</li>
			</ul>	
		`)
	})

	log.Fatal(http.ListenAndServe(":8000", nil))
}
