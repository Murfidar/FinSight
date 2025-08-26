# Use debian base image
FROM debian:bookworm

ARG DEBIAN_FRONTEND=noninteractive

# Install basic tools and CA certificates
RUN apt-get update && \
    apt-get install -y \
    git \
    ca-certificates \
    curl \
    wget \
    gnupg \
    unzip \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Golang
RUN curl -fsSL https://go.dev/dl/go1.21.3.linux-amd64.tar.gz | tar -C /usr/local -xzf - && \
    echo 'export PATH=$PATH:/usr/local/go/bin' >> /etc/profile && \
    echo 'export PATH=$PATH:/usr/local/go/bin' >> /root/.bashrc

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash && \
    echo 'export BUN_INSTALL="/root/.bun"' >> /root/.bashrc && \
    echo 'export PATH="$BUN_INSTALL/bin:$PATH"' >> /root/.bashrc
