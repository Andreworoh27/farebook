package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"
	"log"

	"github.com/Andreworoh27/farebook/graph/model"
	"github.com/Andreworoh27/farebook/service"
	"github.com/google/uuid"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, inputUser model.NewUser) (*model.User, error) {
	password, err := model.HashPassword(inputUser.Password)

	if err != nil {
		return nil, err
	}

	log.Println("hashed pw  : ", password)

	user := &model.User{
		UserId:       uuid.NewString(),
		FirstName:    inputUser.FirstName,
		SurName:      inputUser.SurName,
		Email:        inputUser.Email,
		MobileNumber: inputUser.MobileNumber,
		Dob:          inputUser.Dob,
		Gender:       inputUser.Gender,
		Password:     password,
	}
	return user, r.DB.Save(&user).Error
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, id string, inputUser model.NewUser) (*model.User, error) {
	panic(fmt.Errorf("not implemented: UpdateUser - updateUser"))
}

// DeleteUser is the resolver for the deleteUser field.
func (r *mutationResolver) DeleteUser(ctx context.Context, id string) (*model.User, error) {
	panic(fmt.Errorf("not implemented: DeleteUser - deleteUser"))
}

// Login is the resolver for the login field.
func (r *mutationResolver) Login(ctx context.Context, email string, password string) (interface{}, error) {
	return service.UserLogin(ctx, email, password)
}

// GetUser is the resolver for the getUser field.
func (r *queryResolver) GetUser(ctx context.Context, id string) (*model.User, error) {
	var user *model.User
	return user, r.DB.First(&user, "id = ?", id).Error
}

// GetAllUsers is the resolver for the getAllUsers field.
func (r *queryResolver) GetAllUsers(ctx context.Context) ([]*model.User, error) {
	var users []*model.User
	return users, r.DB.Find(&users).Error
}

// ProfilePicture is the resolver for the profilePicture field.
func (r *userResolver) ProfilePicture(ctx context.Context, obj *model.User) (*string, error) {
	panic(fmt.Errorf("not implemented: ProfilePicture - profilePicture"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// User returns UserResolver implementation.
func (r *Resolver) User() UserResolver { return &userResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type userResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *userResolver) ID(ctx context.Context, obj *model.User) (string, error) {
	panic(fmt.Errorf("not implemented: ID - id"))
}
