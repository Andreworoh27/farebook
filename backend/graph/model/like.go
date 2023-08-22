package model

type Like struct {
	LikeID string `json:"likeId" gorm:"primaryKey"`
	PostID string `json:"postId"`
	UserID string `json:"userId"`
}
