package main

import (
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/Andreworoh27/farebook/database"
	"github.com/Andreworoh27/farebook/graph"
	"github.com/Andreworoh27/farebook/helper"
)

const defaultPort = "8080"

func main() {
	port := helper.GoDotEnvVariable("PORT")
	if port == "" {
		port = defaultPort
	}

	database.MigrateTable()

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		DB: database.GetInstance(),
	}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
