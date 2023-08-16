package model

type Comment struct {
	CommentID        string  `json:"commentId" gorm:"primaryKey"`
	PostID           string  `json:"postID"`
	CommentUser      *string `json:"commentUser"`
	Text             *string `json:"text,omitempty"`
	Photo            *string `json:"photo,omitempty"`
	Vidio            *string `json:"vidio,omitempty"`
	CommentDate      string  `json:"commentDate"`
	NumberOfComments int     `json:"numberOfComments"`
	NumberOfShares   int     `json:"numberOfShares"`
	NumberOfLikes    int     `json:"numberOfLikes"`

	// PostModel        Post `gorm:"foreignKey:PostID"`
	// CommentUserModel User `gorm:"foreignKey:UserID"`
}
