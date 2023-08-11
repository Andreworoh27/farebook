package service

import (
	"context"

	"github.com/Andreworoh27/farebook/graph/model"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"gorm.io/gorm"
)

func UserLogin(ctx context.Context, email string, password string) (interface{}, error) {
	user, err := GetUserByEmail(ctx, email)

	if err == nil {
		if err == gorm.ErrRecordNotFound {
			return nil, &gqlerror.Error{
				Message: "user ga ketemu",
			}
		}
		return nil, err
	}

	if !model.CheckPasswordHash(password, user.Password) {
		return nil, nil
	}

	token, err := JwtGenerate(ctx, user.ID)
	if err != nil {
		return nil, err
	}

	return map[string]interface{}{
		"token": token,
	}, nil
}
