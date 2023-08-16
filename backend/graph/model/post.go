package model

type Post struct {
	PostID           string  `json:"postId" gorm:"primaryKey"`
	UserID           string  `json:"userId"`
	Vidio            *string `json:"vidio,omitempty"`
	Photo            *string `json:"photo,omitempty"`
	Text             *string `json:"text,omitempty"`
	PostDate         string  `json:"postDate"`
	VisibilityType   string  `json:"visibilityType"`
	NumberOfComments int     `json:"numberOfComments"`
	NumberOfShares   int     `json:"numberOfShares"`
	NumberOfLikes    int     `json:"numberOfLikes"`

	// UserModel User      `gorm:"foreignKey:UserID"`
	// Comments  []Comment `gorm:"foreignKey:PostID"`
}
