package service

import (
	"context"

	"github.com/Andreworoh27/farebook/database"
	"github.com/Andreworoh27/farebook/graph/model"
)

func GetUserByEmail(ctx context.Context, email string) (*model.User, error) {
	db := database.GetInstance()
	var userModel model.User
	if user := db.Model(userModel).Where("email= ?", email).Take(&userModel).Error; user != nil {
		return nil, user
	}
	return &userModel, nil
}
