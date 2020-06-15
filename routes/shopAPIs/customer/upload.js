const express = require("express");
const { Product } = require("../../../models/Product");
const router = express.Router();
const multer = require("multer");
const { Storage } = require("@google-cloud/storage");
// Create new storage instance with Firebase project credentials
const storage = new Storage({
  projectId: "thriftgallery-ab5c9",
  keyFilename: {
    type: "service_account",

    project_id: "thriftgallery-ab5c9",

    private_key_id: "356757f113c84ce11d27519ab5910b9c68196e8c",

    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCMQkQFUyeLCYkk\nZQuvgab2AIP+oH8EaIY7K7/22vfXwKsgaBUBIwrYk2V4GnVq81Vr8rHsgcQLzwh3\nGzb2uiKz9jW9YBBsT54qRxR/LzloqYVCSQrTBmTF073f09Ftz0E5yJLpgrSsYIcB\nSvGtIB7vvTGlx9d8AO5LpPZqs6PYXQOh+Gg0/XkDUnig5SfYaklZpQgIKMXE6OTb\nsbubK+hCXjaPWa/I6gxdSUdtQu6zCveUOxhPLV+leGTIGMnt5APshCa7QmusGQTm\nZjUY+M89pgQY3CzBz+fnnBol400oDn5WQAWa4xMwGVnfrBoWO/6FgMj5cyeAVxbC\ngk6ycUlBAgMBAAECggEABmtcAKBjLW5ky/kh9UjqUtUINYWz+ogsKJYihZJVCJdl\nXajV2UT40JvCZ6JSYHA9pyCm+wufZOj3Wrgwpk8zmmf44q98YPCt7QJu0jlfl8Y2\ndqewKqNexl0gEhf4PF3hftsKukxEp6UNWMZM1F8le1R96rgASUkjnuuwaYbKR3M9\nCBM7KCTzlnbDZObHF4OxHFjeHuSu9uDe3peJl+py2vCOmNri101ehrczjAX88j1d\n37hOQ1FgvEC6WEC/4S/3/9VUBwHL1tfeXjkYt6BgKI6qcVyKX9SbwmkktbioqyTh\nOQbuz6h0tkFOZuBGaDyD/EXIKcOT5hrADcsjGgpX9wKBgQC/0K1e1PtNIrcDQVBY\n3ULyJ3e4/0JVtRA1MRnm6i6zdVEikU27S5/qRU/HAkqAoshWa3TXsWMWRoP6xIFM\nxFW/RkKmVJ8viAYYR9raLuhYT2kfGAOUUElIrv5OFZVUmqrymyOr0fs/ln+/qznc\ngHYp8pHuPwL8Q7fgC8yJjhOPAwKBgQC7MSifK65iCaElbmrGgbj5vLKqwti1fKLP\njAEBgLixE5ksSAB1hNMsXuvzni0Mnq27I+TvskL2qHEvFUsXbvTMHOdYAL9pqXRU\nm4R9YC1qbtQ3O7zAhm//RzgYYD5nhVyvzFZxi9v5bwKRA7KccqiqTWUGCcpz5Qro\nqN4QJbyBawKBgQCowfS2WVWbYK55W65P8KLkn5qylUmMVFelJMTwJxrdYpr2ebZU\n0U0pdL+ijD51/EGb3sCWwAc4YuPc7aQAoT/7n9olso+25srN8/H1QY3DnGIVLDCB\n/TzsiKFOm6idHdLGzX1Nvtl48XUFcaTffdn4P+TqImADB6UvpdHXN7u3dwKBgGBv\nw/C0jUM+mMFy8BlSTVyDpTwp44EkM7Be/Umr6fp4EUpp0aq5gh1yzXYVgDnnKbOm\nm1QNb0gpoR3Th3sME5twLJL+1530ydSoxgndWahibnwCD4zT9bD7HOAZ/SxR3V1I\nFSSsG+iWEyloUUUeINyTwL7qnl00m3kfPj/tYP7/AoGBAKV2xvau+HIa7H8p6f0s\ntUaOUbEihbqgYc0r3+QsBSIMEo37GQ5utWkcTA3V6xClLDJJrRqC6a3hGMMyFJv0\n8xqRJCpDpAP23TGOxt1OVAaa6zQsa6gMaEmA+sokTZguzHBu0Oo4qiXL6zAlruFx\nXcfyziQF71jV1GJyQLuk0Uif\n-----END PRIVATE KEY-----\n",

    client_email:
      "firebase-adminsdk-eyafj@thriftgallery-ab5c9.iam.gserviceaccount.com",
    client_id: "102123951629880282425",

    auth_uri: "https://accounts.google.com/o/oauth2/auth",

    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",

    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eyafj%40thriftgallery-ab5c9.iam.gserviceaccount.com"
  }
});

// Create a bucket associated to Firebase storage bucket
const bucket = storage.bucket("gs://thriftgallery-ab5c9.appspot.com");

// Initiating a memory storage engine to store files as Buffer objects
const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // limiting files size to 5 MB
  }
});

router.get("/download");

router.post(
  "upload",
  uploader.single("image"),
  async (req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).send("Error, could not upload file");
        return;
      }

      // Create new blob in the bucket referencing the file
      const blob = bucket.file(req.file.originalname);

      // Create writable stream and specifying file mimetype
      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
      });

      blobWriter.on("error", err => next(err));

      blobWriter.on("finish", () => {
        // Assembling public URL for accessing the file via HTTP
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURI(blob.name)}?alt=media`;

        // Return the file name and its public URL
        res
          .status(200)
          .send({ fileName: req.file.originalname, fileLocation: publicUrl });
      });

      // When there is no more data to be consumed from the stream
      blobWriter.end(req.file.buffer);
      next();
    } catch (error) {
      res.status(400).send(`Error, could not upload file: ${error}`);
      return;
    }
  },
  (req, res) => {
    console.log(req);
    return res.send("received");
  }
);

module.exports = router;
