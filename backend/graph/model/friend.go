package model

type Friend struct {
	User       string `json:"user"`
	MutualUser string `json:"mutualUser"`

	// UserModel       User `gorm:"foreignKey:User"`
	// MutualUserModel User `gorm:"foreignKey:MutualUser"`
}
