// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type NewUser struct {
	FirstName    string  `json:"firstName"`
	SurName      string  `json:"surName"`
	Email        *string `json:"email,omitempty"`
	MobileNumber *string `json:"mobileNumber,omitempty"`
	Dob          string  `json:"dob"`
	Gender       string  `json:"gender"`
	Password     string  `json:"password"`
}
