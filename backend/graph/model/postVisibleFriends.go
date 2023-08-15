package model

type PostVisibleFriends struct {
	Post          *Post `json:"post" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	VisibleUserID *User `json:"visibleUserId" gorm:"primaryKey" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
