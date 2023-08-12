package service

import (
	"context"
	"log"

	"github.com/Andreworoh27/farebook/graph/model"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"gorm.io/gorm"
)

func UserLogin(ctx context.Context, email string, password string) (interface{}, error) {
	log.Println("UserLogin function called with email:", email)

	user, err := GetUserByEmail(ctx, email)

	if err == nil {
		log.Println("found user with email : ", user)
	} else {
		log.Println("error to get user with email : ", err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil, &gqlerror.Error{
			Message: "user ga ketemu",
		}
	} else if err != nil {
		return nil, err
	}

	if !model.CheckPasswordHash(password, user.Password) {
		log.Println("incorrect password")
		return nil, nil
	}

	log.Println("password correct")

	token, err := JwtGenerate(ctx, user.ID)
	if err != nil {
		log.Println("error generating token : ", err)
		return nil, err
	}
	log.Println("successfully generating token: ", token)
	return map[string]interface{}{
		"token": token,
	}, nil
}
