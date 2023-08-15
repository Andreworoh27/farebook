package model

type PostTaggedUser struct {
	Post       *Post `json:"post" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	TaggedUser *User `json:"taggedUser" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
