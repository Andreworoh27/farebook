package service

import (
	"context"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type JwtCustom struct {
	ID string `json:"id"`
	jwt.StandardClaims
}

var jwtSecret = []byte("andrew_farebook_secret")

func JwtGenerate(ctx context.Context, userID string) (string, error) {
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, &JwtCustom{
		ID: userID,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
	})

	token, err := t.SignedString(jwtSecret)
	if err != nil {
		return "", err
	}

	return token, nil
}
