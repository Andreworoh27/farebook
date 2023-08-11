package model

import "golang.org/x/crypto/bcrypt"

type User struct {
	ID           string  `json:"id"`
	FirstName    string  `json:"firstName"`
	SurName      string  `json:"surName"`
	Email        *string `json:"email,omitempty" gorm:"unique"`
	MobileNumber *string `json:"mobileNumber,omitempty" gorm:"unique"`
	Dob          string  `json:"dob"`
	Gender       string  `json:"gender"`
	Password     string  `json:"password"`
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
