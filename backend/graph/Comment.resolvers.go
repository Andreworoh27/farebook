package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"

	"github.com/Andreworoh27/farebook/graph/model"
)

// CreateComment is the resolver for the createComment field.
func (r *mutationResolver) CreateComment(ctx context.Context, inputComment model.NewComment) (*model.Comment, error) {
	panic(fmt.Errorf("not implemented: CreateComment - createComment"))
}

// UpdateComment is the resolver for the updateComment field.
func (r *mutationResolver) UpdateComment(ctx context.Context, commentID string, inputComment model.NewComment) (*model.Comment, error) {
	panic(fmt.Errorf("not implemented: UpdateComment - updateComment"))
}

// DeleteComment is the resolver for the deleteComment field.
func (r *mutationResolver) DeleteComment(ctx context.Context, commentID string) (*model.Comment, error) {
	panic(fmt.Errorf("not implemented: DeleteComment - deleteComment"))
}

// GetPostComment is the resolver for the getPostComment field.
func (r *queryResolver) GetPostComment(ctx context.Context, postID string) ([]*model.Comment, error) {
	panic(fmt.Errorf("not implemented: GetPostComment - getPostComment"))
}

// GetCommentByID is the resolver for the getCommentById field.
func (r *queryResolver) GetCommentByID(ctx context.Context, commentID *string) (*model.Comment, error) {
	panic(fmt.Errorf("not implemented: GetCommentByID - getCommentById"))
}

// GetAllComment is the resolver for the getAllComment field.
func (r *queryResolver) GetAllComment(ctx context.Context) ([]*model.Comment, error) {
	panic(fmt.Errorf("not implemented: GetAllComment - getAllComment"))
}
