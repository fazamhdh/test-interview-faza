import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

export default function BasicTable() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInfoClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPost(data);
        setOpen(true);
      })
      .catch((error) => console.error("Error fetching post detail:", error));
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: "20px", overflowX: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>User ID</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <TableRow key={post.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row">{post.userId}</TableCell>
              <TableCell align="right">{post.id}</TableCell>
              <TableCell align="right">{post.title}</TableCell>
              <TableCell align="right">
                <Tooltip title="Detail">
                  <IconButton onClick={() => handleInfoClick(post.id)}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post Detail</DialogTitle>
        <DialogContent>
          {selectedPost ? (
            <div>
              <p><strong>ID:</strong> {selectedPost.id}</p>
              <p><strong>User ID:</strong> {selectedPost.userId}</p>
              <p><strong>Title:</strong> {selectedPost.title}</p>
              <p><strong>Body:</strong> {selectedPost.body}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
