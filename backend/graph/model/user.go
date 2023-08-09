package model

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
