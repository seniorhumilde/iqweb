import { useEffect, useState } from 'react';
import { siteContent } from '../data/siteContent';

const STORAGE_KEY = 'iquantica_blog_posts_v1';

const OPTIMIZED_PHOTOS = new Set([
  'hero-refinery',
  'engineering-team',
  'project-junin',
  'project-cabrutica',
  'project-santome',
]);

function normalizeImagePath(src) {
  if (typeof src !== 'string' || !src) return src;
  let normalized = src.replace(/^\/images\//, './images/');
  for (const name of OPTIMIZED_PHOTOS) {
    normalized = normalized.replace(`images/${name}.png`, `images/${name}.jpg`);
  }
  return normalized;
}

/**
 * Hook de persistencia local (Modo Editor Demo) para el Blog / Novedades.
 * Permite crear, editar, destacar, eliminar y restablecer publicaciones en vivo.
 */
export function useBlogPosts() {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => ({
            ...item,
            image: normalizeImagePath(item.image),
          }));
        }
      }
    } catch {
      // Ignorar errores de acceso a localStorage
    }
    return siteContent.initialBlogPosts;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {
      // Ignorar errores de cuota o modo privado
    }
  }, [posts]);

  const addPost = (newPost) => {
    const postWithId = {
      ...newPost,
      id: `post-${Date.now()}`,
    };
    setPosts((prev) => {
      const base = postWithId.featured
        ? prev.map((item) => ({ ...item, featured: false }))
        : prev;
      return [postWithId, ...base];
    });
  };

  const updatePost = (id, updatedFields) => {
    setPosts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, ...updatedFields };
        }
        if (updatedFields.featured) {
          return { ...item, featured: false };
        }
        return item;
      }),
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((item) => item.id !== id));
  };

  const setFeaturedPost = (id) => {
    setPosts((prev) =>
      prev.map((item) => ({
        ...item,
        featured: item.id === id,
      })),
    );
  };

  const resetPosts = () => {
    setPosts(siteContent.initialBlogPosts);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignorar
    }
  };

  return {
    posts,
    addPost,
    updatePost,
    deletePost,
    setFeaturedPost,
    resetPosts,
  };
}
