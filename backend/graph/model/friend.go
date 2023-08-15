package model

type Friend struct {
	User       string `json:"user" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	MutualUser string `json:"mutualUser" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
