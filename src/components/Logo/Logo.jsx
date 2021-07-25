import React from 'react'

const Logo = (props) => {
<<<<<<< HEAD
  const {width, height} = props
  return (
        <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 400 412.821"
      style={{cursor: 'pointer'}}
    >
      <g fillRule="evenodd" stroke="none">
        <path
          fill="#acd4cc"
          d="M192.6 38.565c-.22.085-2.56.368-5.2.628-5.891.58-10.735 1.393-16.6 2.784-2.825.67-10.959 3.301-11.38 3.681-.209.188-.639.342-.956.342-.317 0-1.316.347-2.22.771l-5.844 2.737c-25.284 11.838-43.208 35.568-49.77 65.892-.536 2.478-1.064 6.558-1.579 12.2-.224 2.45.858 17.315 1.602 22 1.671 10.536 7.274 22.24 16.556 34.582 6.59 8.764 10.098 18.335 8.817 24.059-1.62 7.237-9.56 12.961-19.099 13.768-7.284.616-9.486.156-19.938-4.165-26.346-10.892-50.652 2.227-55.419 29.912-1.845 10.717-.367 15.044 5.137 15.044 2.731 0 5.066-1.608 10.693-7.364 16.51-16.889 23.616-18.335 35.483-7.219 8.284 7.76 15.82 10.431 26.692 9.461 4.983-.444 6.825-.099 6.825 1.279 0 1.856-2.176 2.823-12.337 5.479-18.693 4.886-31.685 12.271-37.816 21.493-4.724 7.106-6.547 21.197-3.538 27.348 4.354 8.901 12.167 7.414 19.128-3.64 10.818-17.182 20.628-22.065 39.995-19.908 10.449 1.164 20.134.758 25.186-1.055 5.755-2.065 17.374-11.855 23.905-20.142 5.319-6.749 8.517-9.36 10.773-8.794 5.835 1.465 8.546 18.162 4.751 29.262-2.336 6.832-2.072 6.236-5.953 13.4-1.802 3.327-4.558 7.546-6.923 10.6-6.179 7.979-6.953 12.933-2.898 18.562 4.282 5.943 10.838 6.699 19.727 2.275 4.972-2.476 6.865-3.869 14.715-10.837 5.008-4.444 12.425-14.515 17.37-23.585 1.475-2.706 2.223-4.197 2.435-4.86.133-.415.604-1.745 1.047-2.955 1.411-3.855 1.798-8.324 1.239-14.296-.955-10.201.477-11.396 5.6-4.669 6.446 8.464 17.002 15.813 24.679 17.182 4.207.75 13.558.723 20.563-.059 19.236-2.148 28.894 2.499 39.616 19.062 9.233 14.264 19.388 13.553 21.274-1.489 2.124-16.93-8.687-31.096-29.572-38.751-5.86-2.148-7.959-2.825-12.166-3.927-7.223-1.891-8.209-2.176-10.464-3.028-5.801-2.192-3.707-4.518 3.537-3.929 11.257.916 18.515-1.703 27.202-9.816 11.544-10.781 18.141-9.445 34.623 7.013 7.76 7.749 10.967 9.328 14.534 7.153 5.291-3.227 2.895-20.419-4.444-31.892-4.005-6.261-12.629-12.554-20.588-15.023-7.003-2.173-21.678-.692-28.863 2.913-.804.404-2.154.99-3 1.303-.845.313-2.527.953-3.737 1.422-8.917 3.454-21.797.905-27.62-5.467-7.411-8.109-5.785-16.737 6.375-33.835 12.595-17.711 15.567-26.754 16.322-49.667.515-15.639-5.396-36.113-14.21-49.215-10.746-15.975-29.33-31.673-41.667-35.197-.55-.157-1.181-.43-1.403-.606-2.115-1.676-16.048-5.511-24.597-6.77-1.43-.21-3.95-.582-5.6-.827-2.883-.427-20.177-.937-21-.62m-24.776 78.674c.149.242-.629 1.367-1.73 2.5-5.535 5.698-5.433 13.225.248 18.333 5.758 5.177 15.754 3.197 18.54-3.672 1.137-2.801 1.446 2.655.365 6.434-2.031 7.103-6.73 10.081-15.847 10.044-7.237-.03-13.911-1.731-16.535-4.214-5.18-4.903-3.374-17.774 3.412-24.319 3.712-3.58 10.606-6.628 11.547-5.106m64.868-.114c.343.218-.15.918-1.619 2.3-8.017 7.547-4.001 20.553 6.687 21.656 4.09.422 9.744-2.351 11.006-5.4.555-1.338 1.853-1.929 2.208-1.004 1.144 2.981-.387 9.948-2.642 12.019-4.874 4.477-21.204 5.646-27.076 1.939-8.803-5.557-7.962-22.633 1.433-29.096 3.039-2.091 8.455-3.398 10.003-2.414m-59.618 6.545c1.711 1.607.834 4.386-1.564 4.954-1.265.299-3.51-1.581-3.51-2.939 0-2.463 3.232-3.746 5.074-2.015m64.747-.046c.963 1.063.82 3.068-.304 4.264-2.416 2.572-6.088-1.237-3.888-4.034 1.045-1.329 3.096-1.441 4.192-.23m-15.795 45.99c3.493 1.869-5.718 14.765-13.331 18.663-5.902 3.023-13.538 1.863-20.981-3.187-7.078-4.802-12.261-11.241-10.733-13.332.53-.725 8.059-.255 10.442.651 3.784 1.439 17.054 1.282 22.577-.267 1.21-.339 3.1-.866 4.2-1.17 1.1-.305 2.81-.814 3.8-1.131 2.22-.713 3.033-.758 4.026-.227"
        ></path>
        <path
          fill="none"
          d="M0 206.4v206.4h400V0H0v206.4M213.6 39.185c1.65.245 4.17.617 5.6.827 8.549 1.259 22.482 5.094 24.597 6.77.222.176.853.449 1.403.606 12.337 3.524 30.921 19.222 41.667 35.197 8.814 13.102 14.725 33.576 14.21 49.215-.755 22.913-3.727 31.956-16.322 49.667-12.16 17.098-13.786 25.726-6.375 33.835 5.823 6.372 18.703 8.921 27.62 5.467 1.21-.469 2.892-1.109 3.737-1.422a35.607 35.607 0 003-1.303c19.271-9.67 42.781-1.995 52.219 17.047 5.126 10.342 5.995 24.321 1.676 26.955-3.567 2.175-6.774.596-14.534-7.153-16.482-16.458-23.079-17.794-34.623-7.013-8.687 8.113-15.945 10.732-27.202 9.816-7.244-.589-9.338 1.737-3.537 3.929 2.255.852 3.241 1.137 10.464 3.028 29.683 7.771 44.248 22.664 41.738 42.678-1.886 15.042-12.041 15.753-21.274 1.489-10.722-16.563-20.38-21.21-39.616-19.062-7.005.782-16.356.809-20.563.059-7.677-1.369-18.233-8.718-24.679-17.182-5.123-6.727-6.555-5.532-5.6 4.669.559 5.972.172 10.441-1.239 14.296-.443 1.21-.914 2.54-1.047 2.955-.49 1.529-4.593 8.887-7.274 13.045-3.079 4.776-9.627 12.823-12.531 15.4-7.85 6.968-9.743 8.361-14.715 10.837-8.889 4.424-15.445 3.668-19.727-2.275-4.055-5.629-3.281-10.583 2.898-18.562 2.365-3.054 5.121-7.273 6.923-10.6 3.303-6.096 3.803-7.129 4.651-9.6l1.302-3.8c3.795-11.1 1.084-27.797-4.751-29.262-2.256-.566-5.454 2.045-10.773 8.794-6.531 8.287-18.15 18.077-23.905 20.142-5.052 1.813-14.737 2.219-25.186 1.055-19.367-2.157-29.177 2.726-39.995 19.908-12.523 19.886-26.781 4.685-18.034-19.227 2.116-5.783 9.887-13.357 18.644-18.17 4.014-2.207 14.014-5.817 21.616-7.804 10.161-2.656 12.337-3.623 12.337-5.479 0-1.378-1.842-1.723-6.825-1.279-10.872.97-18.408-1.701-26.692-9.461-11.867-11.116-18.973-9.67-35.483 7.219-5.627 5.756-7.962 7.364-10.693 7.364-5.504 0-6.982-4.327-5.137-15.044 4.767-27.685 29.073-40.804 55.419-29.912 10.452 4.321 12.654 4.781 19.938 4.165 9.539-.807 17.479-6.531 19.099-13.768 1.281-5.724-2.227-15.295-8.817-24.059-9.282-12.342-14.885-24.046-16.556-34.582-.744-4.685-1.826-19.55-1.602-22 1.135-12.438 3.652-22.873 7.96-33 7.872-18.504 25.311-36.628 43.389-45.092l5.844-2.737c.904-.424 1.903-.771 2.22-.771.317 0 .747-.154.956-.342.421-.38 8.555-3.011 11.38-3.681 5.865-1.391 10.709-2.204 16.6-2.784 2.64-.26 4.98-.543 5.2-.628.823-.317 18.117.193 21 .62m-49.8 78.494c-8.59 3.027-13.791 10.805-13.797 20.637-.005 7.414 2.331 9.863 11.197 11.74 13.126 2.777 21.539-.449 24.047-9.222 1.081-3.779.772-9.235-.365-6.434-2.786 6.869-12.782 8.849-18.54 3.672-5.681-5.108-5.783-12.635-.248-18.333 2.887-2.973 2.157-3.628-2.294-2.06m62.964-.12c-7.441 2.38-11.364 8.544-11.364 17.854 0 12.703 8.448 17.957 23.8 14.801 9.088-1.868 12-4.729 12-11.793 0-4.525-1.155-5.826-2.434-2.74-1.262 3.049-6.916 5.822-11.006 5.4-10.688-1.103-14.704-14.109-6.687-21.656 1.469-1.382 1.962-2.082 1.619-2.3-.823-.523-3.566-.322-5.928.434m-57.935 6.295c-1.136 1.444-1.041 2.395.381 3.818 1.898 1.898 4.79.663 4.79-2.047 0-2.568-3.58-3.794-5.171-1.771m64.8 0c-.946 1.202-1.009 1.712-.385 3.083 1.295 2.842 4.982 1.977 5.226-1.225.209-2.741-3.136-4.025-4.841-1.858M218 169.841c-.99.317-2.7.826-3.8 1.131-1.1.304-2.99.831-4.2 1.17-5.523 1.549-18.793 1.706-22.577.267-2.383-.906-9.912-1.376-10.442-.651-2.183 2.986 8.172 13.12 17.054 16.69 10.372 4.168 20.958-1.043 27.326-13.45 2.603-5.074 1.527-6.726-3.361-5.157"
        ></path>
      </g>
    </svg>
       </>
=======
  const { width, height } = props
  return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                version="1.1"
                viewBox="0 0 400 412.821"
                style={{ cursor: 'pointer' }}
            >
                <g fillRule="evenodd" stroke="none">
                    <path
                        fill="#acd4cc"
                        d="M192.6 38.565c-.22.085-2.56.368-5.2.628-5.891.58-10.735 1.393-16.6 2.784-2.825.67-10.959 3.301-11.38 3.681-.209.188-.639.342-.956.342-.317 0-1.316.347-2.22.771l-5.844 2.737c-25.284 11.838-43.208 35.568-49.77 65.892-.536 2.478-1.064 6.558-1.579 12.2-.224 2.45.858 17.315 1.602 22 1.671 10.536 7.274 22.24 16.556 34.582 6.59 8.764 10.098 18.335 8.817 24.059-1.62 7.237-9.56 12.961-19.099 13.768-7.284.616-9.486.156-19.938-4.165-26.346-10.892-50.652 2.227-55.419 29.912-1.845 10.717-.367 15.044 5.137 15.044 2.731 0 5.066-1.608 10.693-7.364 16.51-16.889 23.616-18.335 35.483-7.219 8.284 7.76 15.82 10.431 26.692 9.461 4.983-.444 6.825-.099 6.825 1.279 0 1.856-2.176 2.823-12.337 5.479-18.693 4.886-31.685 12.271-37.816 21.493-4.724 7.106-6.547 21.197-3.538 27.348 4.354 8.901 12.167 7.414 19.128-3.64 10.818-17.182 20.628-22.065 39.995-19.908 10.449 1.164 20.134.758 25.186-1.055 5.755-2.065 17.374-11.855 23.905-20.142 5.319-6.749 8.517-9.36 10.773-8.794 5.835 1.465 8.546 18.162 4.751 29.262-2.336 6.832-2.072 6.236-5.953 13.4-1.802 3.327-4.558 7.546-6.923 10.6-6.179 7.979-6.953 12.933-2.898 18.562 4.282 5.943 10.838 6.699 19.727 2.275 4.972-2.476 6.865-3.869 14.715-10.837 5.008-4.444 12.425-14.515 17.37-23.585 1.475-2.706 2.223-4.197 2.435-4.86.133-.415.604-1.745 1.047-2.955 1.411-3.855 1.798-8.324 1.239-14.296-.955-10.201.477-11.396 5.6-4.669 6.446 8.464 17.002 15.813 24.679 17.182 4.207.75 13.558.723 20.563-.059 19.236-2.148 28.894 2.499 39.616 19.062 9.233 14.264 19.388 13.553 21.274-1.489 2.124-16.93-8.687-31.096-29.572-38.751-5.86-2.148-7.959-2.825-12.166-3.927-7.223-1.891-8.209-2.176-10.464-3.028-5.801-2.192-3.707-4.518 3.537-3.929 11.257.916 18.515-1.703 27.202-9.816 11.544-10.781 18.141-9.445 34.623 7.013 7.76 7.749 10.967 9.328 14.534 7.153 5.291-3.227 2.895-20.419-4.444-31.892-4.005-6.261-12.629-12.554-20.588-15.023-7.003-2.173-21.678-.692-28.863 2.913-.804.404-2.154.99-3 1.303-.845.313-2.527.953-3.737 1.422-8.917 3.454-21.797.905-27.62-5.467-7.411-8.109-5.785-16.737 6.375-33.835 12.595-17.711 15.567-26.754 16.322-49.667.515-15.639-5.396-36.113-14.21-49.215-10.746-15.975-29.33-31.673-41.667-35.197-.55-.157-1.181-.43-1.403-.606-2.115-1.676-16.048-5.511-24.597-6.77-1.43-.21-3.95-.582-5.6-.827-2.883-.427-20.177-.937-21-.62m-24.776 78.674c.149.242-.629 1.367-1.73 2.5-5.535 5.698-5.433 13.225.248 18.333 5.758 5.177 15.754 3.197 18.54-3.672 1.137-2.801 1.446 2.655.365 6.434-2.031 7.103-6.73 10.081-15.847 10.044-7.237-.03-13.911-1.731-16.535-4.214-5.18-4.903-3.374-17.774 3.412-24.319 3.712-3.58 10.606-6.628 11.547-5.106m64.868-.114c.343.218-.15.918-1.619 2.3-8.017 7.547-4.001 20.553 6.687 21.656 4.09.422 9.744-2.351 11.006-5.4.555-1.338 1.853-1.929 2.208-1.004 1.144 2.981-.387 9.948-2.642 12.019-4.874 4.477-21.204 5.646-27.076 1.939-8.803-5.557-7.962-22.633 1.433-29.096 3.039-2.091 8.455-3.398 10.003-2.414m-59.618 6.545c1.711 1.607.834 4.386-1.564 4.954-1.265.299-3.51-1.581-3.51-2.939 0-2.463 3.232-3.746 5.074-2.015m64.747-.046c.963 1.063.82 3.068-.304 4.264-2.416 2.572-6.088-1.237-3.888-4.034 1.045-1.329 3.096-1.441 4.192-.23m-15.795 45.99c3.493 1.869-5.718 14.765-13.331 18.663-5.902 3.023-13.538 1.863-20.981-3.187-7.078-4.802-12.261-11.241-10.733-13.332.53-.725 8.059-.255 10.442.651 3.784 1.439 17.054 1.282 22.577-.267 1.21-.339 3.1-.866 4.2-1.17 1.1-.305 2.81-.814 3.8-1.131 2.22-.713 3.033-.758 4.026-.227"
                    ></path>
                    <path
                        fill="none"
                        d="M0 206.4v206.4h400V0H0v206.4M213.6 39.185c1.65.245 4.17.617 5.6.827 8.549 1.259 22.482 5.094 24.597 6.77.222.176.853.449 1.403.606 12.337 3.524 30.921 19.222 41.667 35.197 8.814 13.102 14.725 33.576 14.21 49.215-.755 22.913-3.727 31.956-16.322 49.667-12.16 17.098-13.786 25.726-6.375 33.835 5.823 6.372 18.703 8.921 27.62 5.467 1.21-.469 2.892-1.109 3.737-1.422a35.607 35.607 0 003-1.303c19.271-9.67 42.781-1.995 52.219 17.047 5.126 10.342 5.995 24.321 1.676 26.955-3.567 2.175-6.774.596-14.534-7.153-16.482-16.458-23.079-17.794-34.623-7.013-8.687 8.113-15.945 10.732-27.202 9.816-7.244-.589-9.338 1.737-3.537 3.929 2.255.852 3.241 1.137 10.464 3.028 29.683 7.771 44.248 22.664 41.738 42.678-1.886 15.042-12.041 15.753-21.274 1.489-10.722-16.563-20.38-21.21-39.616-19.062-7.005.782-16.356.809-20.563.059-7.677-1.369-18.233-8.718-24.679-17.182-5.123-6.727-6.555-5.532-5.6 4.669.559 5.972.172 10.441-1.239 14.296-.443 1.21-.914 2.54-1.047 2.955-.49 1.529-4.593 8.887-7.274 13.045-3.079 4.776-9.627 12.823-12.531 15.4-7.85 6.968-9.743 8.361-14.715 10.837-8.889 4.424-15.445 3.668-19.727-2.275-4.055-5.629-3.281-10.583 2.898-18.562 2.365-3.054 5.121-7.273 6.923-10.6 3.303-6.096 3.803-7.129 4.651-9.6l1.302-3.8c3.795-11.1 1.084-27.797-4.751-29.262-2.256-.566-5.454 2.045-10.773 8.794-6.531 8.287-18.15 18.077-23.905 20.142-5.052 1.813-14.737 2.219-25.186 1.055-19.367-2.157-29.177 2.726-39.995 19.908-12.523 19.886-26.781 4.685-18.034-19.227 2.116-5.783 9.887-13.357 18.644-18.17 4.014-2.207 14.014-5.817 21.616-7.804 10.161-2.656 12.337-3.623 12.337-5.479 0-1.378-1.842-1.723-6.825-1.279-10.872.97-18.408-1.701-26.692-9.461-11.867-11.116-18.973-9.67-35.483 7.219-5.627 5.756-7.962 7.364-10.693 7.364-5.504 0-6.982-4.327-5.137-15.044 4.767-27.685 29.073-40.804 55.419-29.912 10.452 4.321 12.654 4.781 19.938 4.165 9.539-.807 17.479-6.531 19.099-13.768 1.281-5.724-2.227-15.295-8.817-24.059-9.282-12.342-14.885-24.046-16.556-34.582-.744-4.685-1.826-19.55-1.602-22 1.135-12.438 3.652-22.873 7.96-33 7.872-18.504 25.311-36.628 43.389-45.092l5.844-2.737c.904-.424 1.903-.771 2.22-.771.317 0 .747-.154.956-.342.421-.38 8.555-3.011 11.38-3.681 5.865-1.391 10.709-2.204 16.6-2.784 2.64-.26 4.98-.543 5.2-.628.823-.317 18.117.193 21 .62m-49.8 78.494c-8.59 3.027-13.791 10.805-13.797 20.637-.005 7.414 2.331 9.863 11.197 11.74 13.126 2.777 21.539-.449 24.047-9.222 1.081-3.779.772-9.235-.365-6.434-2.786 6.869-12.782 8.849-18.54 3.672-5.681-5.108-5.783-12.635-.248-18.333 2.887-2.973 2.157-3.628-2.294-2.06m62.964-.12c-7.441 2.38-11.364 8.544-11.364 17.854 0 12.703 8.448 17.957 23.8 14.801 9.088-1.868 12-4.729 12-11.793 0-4.525-1.155-5.826-2.434-2.74-1.262 3.049-6.916 5.822-11.006 5.4-10.688-1.103-14.704-14.109-6.687-21.656 1.469-1.382 1.962-2.082 1.619-2.3-.823-.523-3.566-.322-5.928.434m-57.935 6.295c-1.136 1.444-1.041 2.395.381 3.818 1.898 1.898 4.79.663 4.79-2.047 0-2.568-3.58-3.794-5.171-1.771m64.8 0c-.946 1.202-1.009 1.712-.385 3.083 1.295 2.842 4.982 1.977 5.226-1.225.209-2.741-3.136-4.025-4.841-1.858M218 169.841c-.99.317-2.7.826-3.8 1.131-1.1.304-2.99.831-4.2 1.17-5.523 1.549-18.793 1.706-22.577.267-2.383-.906-9.912-1.376-10.442-.651-2.183 2.986 8.172 13.12 17.054 16.69 10.372 4.168 20.958-1.043 27.326-13.45 2.603-5.074 1.527-6.726-3.361-5.157"
                    ></path>
                </g>
            </svg>
        </>
>>>>>>> fca1b4eaca999bd31a8a4cd5ba6ae9d5aa754e30
  )
}

export default Logo