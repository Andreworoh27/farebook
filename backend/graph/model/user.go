package model

import "golang.org/x/crypto/bcrypt"

type User struct {
	UserId       string  `json:"id" gorm:"primaryKey"`
	FirstName    string  `json:"firstName"`
	SurName      string  `json:"surName"`
	Email        *string `json:"email,omitempty" gorm:"unique"`
	MobileNumber *string `json:"mobileNumber,omitempty" gorm:"unique"`
	Dob          string  `json:"dob"`
	Gender       string  `json:"gender"`
	Password     string  `json:"password"`

	// Friends  []Friend  `gorm:"foreignKey:User"`
	// Posts    []Post    `gorm:"foreignKey:UserID"`
	// Comments []Comment `gorm:"foreignKey:CommentUser"`
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
