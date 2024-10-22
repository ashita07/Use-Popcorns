import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const key = "59943de1";

  useEffect(
    function () {
      //  closeFunc?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (error.name !== "AbortError") setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [error.name, query]
  );
  return { movies, error, loading };
}
