package model

type Post struct {
	PostID           string                `json:"postId" gorm:"primaryKey"`
	UserID           string                `json:"userId" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Vidio            *string               `json:"vidio,omitempty"`
	Photo            *string               `json:"photo,omitempty"`
	Text             *string               `json:"text,omitempty"`
	TagUsers         []*User               `json:"tagUsers gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;",omitempty"`
	PostDate         string                `json:"postDate"`
	VisibilityType   string                `json:"visibilityType"`
	VisibleFriendsID []*PostVisibleFriends `json:"visibleFriendsId,omitempty" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	NumberOfComments int                   `json:"numberOfComments"`
	NumberOfShares   int                   `json:"numberOfShares"`
	NumberOfLikes    int                   `json:"numberOfLikes"`
	Comment          []*Comment            `json:"comment,omitempty" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
