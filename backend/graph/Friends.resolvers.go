package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"

	"github.com/Andreworoh27/farebook/graph/model"
)

// CreateFriend is the resolver for the createFriend field.
func (r *mutationResolver) CreateFriend(ctx context.Context, inputFriend model.NewFriend) (*model.Friend, error) {
	panic(fmt.Errorf("not implemented: CreateFriend - createFriend"))
}

// DeleteUserFriend is the resolver for the deleteUserFriend field.
func (r *mutationResolver) DeleteUserFriend(ctx context.Context, userID string, mutualUserID string) (*model.Friend, error) {
	panic(fmt.Errorf("not implemented: DeleteUserFriend - deleteUserFriend"))
}

// GetUserFriends is the resolver for the getUserFriends field.
func (r *queryResolver) GetUserFriends(ctx context.Context, userID string) ([]*model.Friend, error) {
	panic(fmt.Errorf("not implemented: GetUserFriends - getUserFriends"))
}

// GetAllFriendsData is the resolver for the getAllFriendsData field.
func (r *queryResolver) GetAllFriendsData(ctx context.Context) ([]*model.Friend, error) {
	panic(fmt.Errorf("not implemented: GetAllFriendsData - getAllFriendsData"))
}