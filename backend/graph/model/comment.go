package model

type Comment struct {
	CommentID        string  `json:"commentId" gorm:"primaryKey"`
	Post             string  `json:"post"`
	CommentUser      *User   `json:"commentUser" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Text             *string `json:"text,omitempty"`
	Photo            *string `json:"photo,omitempty"`
	Vidio            *string `json:"vidio,omitempty"`
	CommentDate      string  `json:"commentDate"`
	NumberOfComments int     `json:"numberOfComments"`
	NumberOfShares   int     `json:"numberOfShares"`
	NumberOfLikes    int     `json:"numberOfLikes"`
}
